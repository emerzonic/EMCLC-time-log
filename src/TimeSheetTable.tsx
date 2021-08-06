import React from 'react';
import { Child, StorageKeys, TimeLog, UpdateActionPayload } from './types';
import { TimeLogRow } from "./TimeLogRow";

export interface TimeSheetTableProps {
  timeLog: TimeLog;
  setSignal: (e: any) => void;
}

export function TimeSheetTable(props: TimeSheetTableProps) {
  const setPayload = (e: any, payload: UpdateActionPayload) => {
    localStorage.setItem(StorageKeys.ACTION_PAYLOAD, JSON.stringify(payload));
    props.setSignal(e);
  }

  return (
    <table className="table table-hover table-sm table-light">
      <thead>
        <tr className="bg-dark text-light">
          <th className="text-left" scope="col">First Name</th>
          <th className="text-left" scope="col">Last Name</th>
          <th scope="col">Time In</th>
          <th className="text-left" scope="col">Sign In By</th>
          <th scope="col">Time Out</th>
          <th className="text-left" scope="col">Sign Out By</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {props.timeLog ? props.timeLog.studentList?.map((student: Child, i: number) => (
          <TimeLogRow key={i} setPayload={setPayload} row={student} />)) :
          <tr className="text-left">
            <td colSpan={7}>No time log has been created for today.</td>
          </tr>}
      </tbody>
    </table>
  );
}
