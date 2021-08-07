import React, { useEffect, useState } from 'react';
import { getItem, setItem } from './appStorageManager';
import { Child, DetailAction, DetailActionPayload, StorageKeys, Student, TimeLog } from './types';

export function ManageStudents(props: any) {
  const [students, setStudents] = useState<Student[]>([])
  const [signal, setSignal] = useState<any>(null)

  useEffect(() => {
    const studentList = getItem<Student[]>(StorageKeys.STUDENT_LIST) ?? [];
    setStudents(studentList);
  }, [signal]);

  const setAction = (e: any, payload: DetailActionPayload) => {
    setItem(StorageKeys.DETAIL_ACTION, payload);
    setSignal(e);
  }


  return (
    <>
      <h2 className="text-left">Manage Students</h2>
      <table className="table table-hover table-sm table-light text-left fade-in">
        <thead>
          <tr className="bg-dark text-light">
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Parent 1</th>
            <th scope="col">Parent 2</th>
            <th scope="col">Parent 3</th>
            <th className="text-center" scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) =>
            <tr key={s.id} >
              <td>{i + 1}</td>
              <td>{s.firstName}</td>
              <td>{s.lastName}</td>
              <td>{s.parentOrGuardians[0]}</td>
              <td>{s.parentOrGuardians[1]}</td>
              <td>{s.parentOrGuardians[2]}</td>
              <td className="text-center">
                <button onClick={(e: any) => setAction(e, { id: s.id as number, action: DetailAction.VIEW })} data-toggle="modal" data-target=".detail-modal" type="button" className="btn btn-outline-primary btn-sm mr-2">View</button>
              </td>
            </tr>)}
        </tbody>
      </table>
      <DetailModal signal={signal} setSignal={setSignal} />
    </>
  );
}


interface DetailProps {
  signal: any;
  setSignal: (e: any) => void
}

interface ReportTimeSheet extends Child {
  date: string;
}

interface StudentDetail {
  student: Student;
  timeSheets: ReportTimeSheet[];
}
function DetailModal(props: DetailProps) {
  const [studentDetail, setStudentDetail] = useState<StudentDetail>();

  useEffect(() => {
    const studentList = getItem<Student[]>(StorageKeys.STUDENT_LIST) ?? [];
    const payload = getItem<DetailActionPayload>(StorageKeys.DETAIL_ACTION);
    const timeSheets = getItem<TimeLog[]>(StorageKeys.TIME_LOGS) ?? [];
    const studentTimeSheets = timeSheets.reduce((result: ReportTimeSheet[], current: TimeLog) => {
      const timeSheet = current.studentList.find(s => s.id === payload?.id);
      if (timeSheet) {
        return [...result, { ...timeSheet, date: current.date }];
      }
      return result;
    }, [] as ReportTimeSheet[]);
    const foundStudent = studentList.find((student: Student) => student.id === payload?.id) as Student;
    const newStudentDetial: StudentDetail = { student: foundStudent, timeSheets: studentTimeSheets };
    setStudentDetail(newStudentDetial);
  }, [props.signal]);

  const deleteStudent = (e: any) => {
    const studentList = getItem<Student[]>(StorageKeys.STUDENT_LIST) ?? [];
    const timeSheets = getItem<TimeLog[]>(StorageKeys.TIME_LOGS) ?? [];
    const payload = getItem<DetailActionPayload>(StorageKeys.DETAIL_ACTION);
    const updateList = studentList.filter(s => s.id !== payload?.id);
    timeSheets.forEach(t => t.studentList = t.studentList.filter(s => s.id !== payload));
    setItem(StorageKeys.STUDENT_LIST, updateList);
    setItem(StorageKeys.TIME_LOGS, timeSheets);
    props.setSignal(e);
  }

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
                      <th scope="col">Total Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentDetail?.timeSheets?.length ? studentDetail.timeSheets.map((timeSheet: ReportTimeSheet, i: number) => (
                      <tr>
                        <td>{i + 1}.</td>
                        <td>{timeSheet.date || 'N/A'}</td>
                        <td>{timeSheet.signInTime || 'N/A'}</td>
                        <td>{timeSheet.signInParent || 'N/A'}</td>
                        <td>{timeSheet.signOutTime || 'N/A'}</td>
                        <td>{timeSheet.signOutParent || 'N/A'}</td>
                        <td className="text-center">{(timeSheet.signOutHour && timeSheet.signInHour) ? timeSheet.signOutHour - timeSheet.signInHour : 0}</td>
                      </tr>
                    )) : null}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={deleteStudent} type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
              <button type="button" className="btn btn-warning" data-dismiss="modal">Edit</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
