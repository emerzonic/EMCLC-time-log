import React, { useEffect, useState } from 'react';
import { getItem, setItem } from './appStorageManager';
import { DetailModal } from './DetailModel';
import { DetailAction, DetailActionPayload, StorageKeys, Student } from './types';

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
                <button onClick={(e: any) => setAction(e, { id: s.id as number, action: DetailAction.VIEW })} data-toggle="modal" data-target=".detail-modal" type="button" className="btn btn-outline-primary btn-sm mr-2">{<i className="fa fa-id-card"></i>}View</button>
              </td>
            </tr>)}
        </tbody>
      </table>
      <DetailModal signal={signal} setSignal={setSignal} />
    </>
  );
}
