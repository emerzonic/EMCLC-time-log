import React, { useEffect, useState } from 'react';
import { getItem, setItem } from './appStorageManager';
import { DetailModal } from './DetailModel';
import { DetailAction, DetailActionPayload, StorageKeys, Student } from './types';

interface ManageStudentsProps {
  signal?: any
  setSignal: (e: any) => void;
}
export function ManageStudents(props: ManageStudentsProps) {
  const [students, setStudents] = useState<Student[]>([])

  useEffect(() => {
    const studentList = getItem<Student[]>(StorageKeys.STUDENT_LIST) ?? [];
    setStudents(studentList);
  }, [props.signal]);

  const setAction = (e: any, payload: DetailActionPayload) => {
    setItem(StorageKeys.DETAIL_ACTION, payload);
    props.setSignal(e);
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
          {students.length ? students.map((s, i) =>
            <tr key={s.id} >
              <td>{i + 1}</td>
              <td>{s.firstName}</td>
              <td>{s.lastName}</td>
              <td>{s.parents.parentOne}</td>
              <td>{s.parents.parentTwo}</td>
              <td>{s.parents.parentThree}</td>
              <td className="text-center">
                <button onClick={(e: any) => setAction(e, { id: s.id as number, action: DetailAction.EDIT })} data-toggle="modal" data-target="#addStudentModal" type="button" className="btn btn-outline-warning btn-sm mr-2 font-weight-bold">{<i className="fa fa-id-card"></i>}Edit</button>
                <button onClick={(e: any) => setAction(e, { id: s.id as number, action: DetailAction.VIEW })} data-toggle="modal" data-target=".detail-modal" type="button" className="btn btn-outline-primary btn-sm mr-2 font-weight-bold">{<i className="fa fa-id-card"></i>}Time Sheets</button>
              </td>
            </tr>) :
            (<tr>
              <td className="py-2" colSpan={7}>No student exist. Student information will displace here when added.</td>
            </tr>)}
        </tbody>
      </table>
      <DetailModal signal={props.signal} setSignal={props.setSignal} />
    </>
  );
}
