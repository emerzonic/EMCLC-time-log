import React, { useState } from 'react';
import { TimeSheetRecord, StorageKeys, TimeSheet, Student } from './types';
import { getItem } from './appStorageManager';
import { CsvDownload } from './CsvDownload';

enum ReportView {
  ALL_TIME_SHEETS = 'allTimeSheets',
  STUDENT_TIME_SHEET = 'studentTimeSheet',
}

interface Report {
  studentReports: StudentDetail[];
  timeSheets: TimeSheet[];
  students: Student[];
}

interface TimeSheetReportRecord extends TimeSheetRecord {
  date: string;
}

interface StudentDetail {
  student: Student;
  timeSheets: TimeSheetReportRecord[];
}

export function TimeSheetsReports(props: any) {
  const [reportView, setReportView] = useState<ReportView>(ReportView.ALL_TIME_SHEETS);
  const [report] = useState<Report>(() => {
    const students = getItem<Student[]>(StorageKeys.STUDENT_LIST) ?? [];
    const timeSheets = getItem<TimeSheet[]>(StorageKeys.TIME_SHEETS) ?? [];

    let reports: StudentDetail[] = [];

    for (const student of students) {
      const studentTimeSheetRecords = timeSheets.reduce((result, timeSheet) => {
        const record = timeSheet.timeSheetRecords.find(tsr => tsr.id === student.id);
        return [...result, { ...record, date: timeSheet.date } as TimeSheetReportRecord];
      }, [] as TimeSheetReportRecord[]);

      reports = [...reports, { student, timeSheets: studentTimeSheetRecords }];
    }

    return {
      studentReports: reports,
      students,
      timeSheets,
    };
  });

  const print = () => window.print();
  const toggleView = () => setReportView(reportView === ReportView.ALL_TIME_SHEETS ? ReportView.STUDENT_TIME_SHEET : ReportView.ALL_TIME_SHEETS);

  return (
    <div>
      <button onClick={toggleView} className="btn btn-md btn-secondary d-block d-print-none width-15 mb-2 w-25 fade-in" type="button">
        {reportView === ReportView.ALL_TIME_SHEETS ? 'View Students Report' : 'View Time Sheets Report'}
      </button>
      {reportView === ReportView.STUDENT_TIME_SHEET ?
        <StudentReport studentReports={report.studentReports} print={print} /> :
        <TimeSheetReport timeSheets={report.timeSheets} print={print} />}
    </div>
  )
}

interface TimeSheetReportCardProps {
  records: TimeSheetRecord[]
}

function TimeSheetReportCard(props: TimeSheetReportCardProps) {
  return (
    <div className="card card-body pt-0">
      <table className="table table-light table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Sign In</th>
            <th scope="col">Sign In By</th>
            <th scope="col">Sign Out</th>
            <th scope="col">Sign Out By</th>
          </tr>
        </thead>
        <tbody>
          {props.records.map((record, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}.</th>
              <td>{record.firstName} {record.lastName}</td>
              <td>{record.signInTime}</td>
              <td>{record.signInParent}</td>
              <td>{record.signOutTime}</td>
              <td>{record.signOutParent}</td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}

interface TimeSheetReportProps {
  timeSheets: TimeSheet[]
  print: () => void
}


function TimeSheetReport(props: TimeSheetReportProps) {

  const generateDownloadData = (timeSheets: TimeSheetRecord[] = []) => {
    return timeSheets.map((record, i) => ({
      '#': i + 1,
      'Name': `${record.firstName} ${record.lastName}`,
      'Time In': record.signInTime ?? '-',
      'Sign In By': record.signInParent ?? '-',
      'Time Out': record.signOutTime ?? '-',
      'Sign Out By': record.signOutParent ?? '-',
    }));
  };

  return (
    <div className="fade-in">
    <div className="d-flex justify-content-between">
      <h3 className="text-left h3">Time Sheet Reports</h3>
      <button onClick={props.print} className="btn btn-sm btn-success d-block d-print-none" type="button">
        <i className="fa fa-print" aria-hidden="true"></i> Print All Time Sheets
      </button>
      </div>
      {props.timeSheets.length ? props.timeSheets.map((timeSheet, index) => (
        <div className="text-left d-print-none" key={index} >
          <p className="mb-2 mt-3">
            <button className="btn  btn-sm btn-primary text-left mr-2 width-15" type="button" data-toggle="collapse" data-target={`#${timeSheet.id}`} aria-expanded="false" aria-controls={`#${timeSheet.id}`}>
              <i className="fa fa-calendar-o" aria-hidden="true"></i> {timeSheet.date}
            </button>
            <CsvDownload data={generateDownloadData(timeSheet.timeSheetRecords)} title={`Time Sheet ${timeSheet.date}`} />
          </p>
          <div className="collapse" id={`${timeSheet.id}`}>
            <TimeSheetReportCard records={timeSheet.timeSheetRecords} />
          </div>
        </div>)) : <p className='text-left'>Not time sheet report is available.</p>
      }
      {props.timeSheets.length > 0 && props.timeSheets.map((timeSheet, index) => (
        <div className="text-left d-print-block d-none mt-3" key={index}>
          <h5 className="d-none d-print-block">{timeSheet.date}</h5>
          <TimeSheetReportCard records={timeSheet.timeSheetRecords} />
        </div>
      ))}
    </div>
  );
}

interface StudentReportProps {
  studentReports: StudentDetail[]
  print: () => void
}

function StudentReport(props: StudentReportProps) {
  const [detail, setDetail] = useState<StudentDetail>(() => props.studentReports[0]);

  const handleChange = (id: number) => {
    const nextDetail = props.studentReports.find(r => r.student.id === id);
    setDetail(nextDetail as StudentDetail);
  }

  const listClass = 'list-group-item pointer';
  const ActiveListClass = 'list-group-item pointer active';

  return (
    <>
      <div className="d-flex justify-content-end fade-in d-print-none">
        <div className="w-25">
          <h3 className="text-left h3 border-bottom">Students</h3>
          <ul className="list-group text-left">
            {props.studentReports.map(({ student }, i) => (
              <li onClick={() => handleChange(student.id as number)} key={student.id} className={`${student.id === detail.student.id ? ActiveListClass : listClass}`}>{student.firstName} {student.lastName}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <div className="card w-100">
            <div className="card-body text-left">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">{detail.student.firstName} {detail.student.lastName}</h5>
                <button onClick={props.print} className="btn btn-sm btn-success text-left d-block d-print-none mb-2" type="button">
                  <i className="fa fa-print" aria-hidden="true"></i> Print
                </button>
              </div>
              <table className="table table-hover table-sm table-light text-left">
                <thead>
                  <tr className="bg-dark text-light">
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time In</th>
                    <th scope="col">Sign In By</th>
                    <th scope="col">Time Out</th>
                    <th scope="col">Sign Out By</th>
                  </tr>
                </thead>
                <tbody>
                  {detail.timeSheets.map((timeSheet: TimeSheetReportRecord, i: number) => (
                    <tr key={i}>
                      <td>{i + 1}.</td>
                      <td>{timeSheet.date || '-'}</td>
                      <td>{timeSheet.signInTime || '-'}</td>
                      <td>{timeSheet.signInParent || '-'}</td>
                      <td>{timeSheet.signOutTime || '-'}</td>
                      <td>{timeSheet.signOutParent || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="card d-none d-print-block">
        <div className="card-body text-left">
          <h5 className="card-title">{detail.student.firstName} {detail.student.lastName}</h5>
          <table className="table table-sm text-left">
            <thead>
              <tr className="bg-dark text-light">
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Time In</th>
                <th scope="col">Sign In By</th>
                <th scope="col">Time Out</th>
                <th scope="col">Sign Out By</th>
              </tr>
            </thead>
            <tbody>
              {detail.timeSheets.map((timeSheet: TimeSheetReportRecord, i: number) => (
                <tr key={i}>
                  <td>{i + 1}.</td>
                  <td>{timeSheet.date || '-'}</td>
                  <td>{timeSheet.signInTime || '-'}</td>
                  <td>{timeSheet.signInParent || '-'}</td>
                  <td>{timeSheet.signOutTime || '-'}</td>
                  <td>{timeSheet.signOutParent || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
