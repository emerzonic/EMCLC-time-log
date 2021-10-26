import React, { useState } from 'react';
import { TimeSheetRecord, StorageKeys, TimeSheet, Student } from './types';
import { getItem } from './appStorageManager';
import { CsvDownload } from './CsvDownload';
import { sortDesending } from './utilities';
import { parseDate } from './dateUtil';

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
      <button onClick={toggleView} className="btn btn-md btn-secondary d-block d-print-none mb-2 fade-in" type="button">
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
  const formatValue = (num: number) => num.toString().length < 2 ? '0' + num : num;
  const d = new Date();
  const dateString = `${d.getFullYear()}-${formatValue(d.getMonth() + 1)}-${formatValue(d.getDate())}`;
  const [startDate, setStartDate] = useState<string>(dateString)
  const [endDate, setEndDate] = useState<string>(dateString);
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
  
  const filterTimeSheets = () => {
    const formattedStartDate = startDate.replace('-', '/');
    const formattedEndDate = endDate.replace('-', '/');

    return props.timeSheets.filter(t => {
      const parsedTimeSheetDate = parseDate(t.date);
      const parsedStartDate = parseDate(formattedStartDate);
      const parsedEndDate = parseDate(formattedEndDate);
      return (parsedTimeSheetDate >= parsedStartDate && parsedTimeSheetDate <= parsedEndDate);
    });
  }

  const filteredTimeSheets = filterTimeSheets();

  return (
    <div className="fade-in">
      <div className="d-flex justify-content-between">
        <h3 className="text-left h3">Time Sheet Reports</h3>
        {filteredTimeSheets.length > 0 && <button onClick={props.print} className="btn btn-sm btn-success d-block d-print-none" type="button">
          <i className="fa fa-print" aria-hidden="true"></i> Print All Time Sheets
        </button>}
      </div>
      <div className="text-left d-print-none">
        <label className="font-weight-bold" htmlFor="start">Start Date:</label>
        <input onChange={(e: any) => setStartDate(e.target.value)} className="mx-2" type="date" id="start" name="start-date" value={startDate} min="2021-01-01" max={endDate ? endDate : "2050-01-01"} />
        <label className="font-weight-bold" htmlFor="end">End Date:</label>
        <input onChange={(e: any) => setEndDate(e.target.value)} className="mx-2" type="date" id="end" name="end-date" value={endDate} min={startDate ? startDate : "2021-01-01"} max="2050-01-01" />
      </div>
      <div className="text-left d-print-block d-none">
        {filteredTimeSheets.length > 0 ? <p>Report Date Range: {filteredTimeSheets[0].date} to {filteredTimeSheets[filteredTimeSheets.length - 1].date}</p> : ''}
      </div>
      {filteredTimeSheets.length ? filteredTimeSheets.map((timeSheet, index) => (
        <div className="text-left d-print-none" key={index} >
          <p className="mb-2 mt-3">
            <button className="btn  btn-sm btn-outline-primary text-left mr-2 width-15" type="button" data-toggle="collapse" data-target={`#${timeSheet.id}`} aria-expanded="false" aria-controls={`#${timeSheet.id}`}>
              {timeSheet.date}  <i className="fa fa-caret-down" aria-hidden="true"></i>
            </button>
            <CsvDownload data={generateDownloadData(timeSheet.timeSheetRecords)} title={`Time Sheet ${timeSheet.date}`} />
          </p>
          <div className={index === 0 ? "collapse show" : "collapse"} id={`${timeSheet.id}`}>
            <TimeSheetReportCard records={timeSheet.timeSheetRecords} />
          </div>
        </div>)) : <p className='text-left'>Not time sheet report is available.</p>
      }
      {filteredTimeSheets.length > 0 && filteredTimeSheets.map((timeSheet, index) => (
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
  const sortedReports = props.studentReports.sort((a, b) => {
    const aValue = a.student.firstName.toLowerCase();
    const bValue = b.student.firstName.toLowerCase();
    return sortDesending(aValue, bValue);
  })
  const [detail, setDetail] = useState<StudentDetail>(sortedReports[0]);

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
          <ul className="list-group text-left scroll_content">
            {sortedReports.length ? sortedReports.map(({ student }, i) => (
              <li onClick={() => handleChange(student.id as number)} key={student.id} className={`${student.id === detail?.student.id ? ActiveListClass : listClass}`}>{student.firstName} {student.lastName}</li>
            )) : "No student exist."}
          </ul>
        </div>
        <div className="col">
          <div className="card w-100">
            <div className="card-body text-left">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">{detail?.student.firstName} {detail?.student.lastName}</h5>
                {props.studentReports.length > 0 && <button onClick={props.print} className="btn btn-sm btn-success text-left d-block d-print-none mb-2" type="button">
                  <i className="fa fa-print" aria-hidden="true"></i> Print
                </button>}
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
                  {detail?.timeSheets.map((timeSheet: TimeSheetReportRecord, i: number) => (
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
          <h5 className="card-title">{detail?.student.firstName} {detail?.student.lastName}</h5>
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
              {detail?.timeSheets.map((timeSheet: TimeSheetReportRecord, i: number) => (
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
