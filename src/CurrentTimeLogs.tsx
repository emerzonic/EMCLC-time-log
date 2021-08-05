import React, { useState } from 'react';
import { CurrentTimeLogsProps, TimeLog, UpdateActionPayload } from './types';
import { getTodayDate } from "./getTodayDate";
import { DigitalClock } from "./DigitalClock";
import { SignInModal } from "./SignInModalProps";
import { TimeLogRow } from "./TimeLogRowProps";

export function CurrentTimeLogs(props: CurrentTimeLogsProps) {
  const [timeLog, setTimeLog] = useState<TimeLog>(() => {
    const timeLogs = localStorage.getItem('timeLogs');
    const parsedTimeLogs = timeLogs ? JSON.parse(timeLogs) : [];
    const todayTimeLog = parsedTimeLogs.find((log: TimeLog) => log.date === getTodayDate());
    return todayTimeLog;
  });

  const [payload, setPayload] = useState<UpdateActionPayload | null>(null);

  return (
    <>
      <h1>{timeLog?.date || getTodayDate()}</h1>
      <DigitalClock />
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
          {timeLog ?
            timeLog.studentList?.map((student, i) => <TimeLogRow key={i} setPayload={setPayload} row={student} />) :
            <tr className="text-left">
              <td colSpan={7}>No time log has been created for today.</td>
            </tr>}
        </tbody>
      </table>
      <SignInModal payload={payload} setTimeLog={setTimeLog} />
    </>
  );
}
