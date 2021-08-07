import React from 'react';
import { Child, StorageKeys, TimeLog, UpdateActionPayload } from './types';
import { TimeLogRow } from "./TimeLogRow";
import { setItem } from './appStorageManager';

export interface TimeSheetTableProps {
  timeLog: TimeLog;
  setSignal: (e: any) => void;
}

export function TimeSheetTable(props: TimeSheetTableProps) {
  const setPayload = (e: any, payload: UpdateActionPayload) => {
    setItem(StorageKeys.ACTION_PAYLOAD, payload);
    props.setSignal(e);
  }

  return (
    <table className="table table-hover table-sm table-light text-left">
      <thead>
        <tr className="bg-dark text-light">
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Time In</th>
          <th scope="col">Sign In By</th>
          <th scope="col">Time Out</th>
          <th scope="col">Sign Out By</th>
          <th className="text-center" scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {props.timeLog ? props.timeLog.studentList?.map((student: Child, i: number) => (
          <TimeLogRow key={i} number={i + 1} setPayload={setPayload} row={student} />)) :
          <tr className="text-left">
            <td colSpan={7}>No time log has been created for today.</td>
          </tr>}
      </tbody>
    </table>
  );
}
