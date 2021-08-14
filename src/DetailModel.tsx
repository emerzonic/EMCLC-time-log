import React, { useEffect, useState } from 'react';
import { getItem } from './appStorageManager';
import { TimeSheetRecord, DetailActionPayload, StorageKeys, Student, TimeSheet } from './types';

interface DetailProps {
  signal: any;
  setSignal: (e: any) => void;
}
interface TimeSheetReportRecord extends TimeSheetRecord {
  date: string;
}
interface StudentDetail {
  student: Student;
  timeSheets: TimeSheetReportRecord[];
}
export function DetailModal(props: DetailProps) {
  const [studentDetail, setStudentDetail] = useState<StudentDetail>();

  useEffect(() => {
    const studentList = getItem<Student[]>(StorageKeys.STUDENT_LIST) ?? [];
    const payload = getItem<DetailActionPayload>(StorageKeys.DETAIL_ACTION);
    const timeSheets = getItem<TimeSheet[]>(StorageKeys.TIME_SHEETS) ?? [];
    const studentTimeSheets = timeSheets.reduce((result: TimeSheetReportRecord[], current: TimeSheet) => {
      const timeSheet = current.timeSheetRecords.find(s => s.id === payload?.id);
      if (timeSheet) {
        return [...result, { ...timeSheet, date: current.date }];
      }
      return result;
    }, [] as TimeSheetReportRecord[]);

    const foundStudent = studentList.find((student: Student) => student.id === payload?.id) as Student;
    const newStudentDetial: StudentDetail = { student: foundStudent, timeSheets: studentTimeSheets };
    setStudentDetail(newStudentDetial);
  }, [props.signal]);

  return (
    <div className="modal fade detail-modal text-left" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="card w-100">
            <div className="card-body">
              <h3 className="card-title border-bottom">{studentDetail?.student?.firstName} {studentDetail?.student?.lastName}</h3>
              <div>
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
                    {studentDetail?.timeSheets?.length ? studentDetail.timeSheets.map((timeSheet: TimeSheetReportRecord, i: number) => (
                      <tr key={i}>
                        <td>{i + 1}.</td>
                        <td>{timeSheet.date || '-'}</td>
                        <td>{timeSheet.signInTime || '-'}</td>
                        <td>{timeSheet.signInParent || '-'}</td>
                        <td>{timeSheet.signOutTime || '-'}</td>
                        <td>{timeSheet.signOutParent || '-'}</td>
                      </tr>
                    )) : null}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success d-print-none" data-dismiss="modal">{<i className="fa fa-print" aria-hidden="true"></i>} Print</button>
              <button type="button" className="btn btn-secondary d-print-none" data-dismiss="modal">{<i className="fa fa-times" aria-hidden="true"></i>} Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
