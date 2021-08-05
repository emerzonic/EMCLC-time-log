import React, { useState } from 'react';
import { CurrentTimeLogsProps, TimeLog, UpdateActionPayload } from './types';
import { getTodayDate } from "./dateUtil";
import { DigitalClock } from "./DigitalClock";
import { SignInModal } from "./SignInModal";
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
      <TimeLogsHistory/>
      <SignInModal payload={payload} setTimeLog={setTimeLog} />
      
    </>
  );
}

function TimeLogsHistory(props:any){
  const [timeLogs,] = useState<TimeLog[]>(() => {
    const timeLogs = localStorage.getItem('timeLogs');
    const parsedTimeLogs : TimeLog[]= timeLogs ? JSON.parse(timeLogs) : [];
    return parsedTimeLogs;
  });
  return (
    <div>
    <p>
  <button className="btn btn-primary text-left" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Time Log History
  </button>
</p>
<div className="collapse" id="collapseExample">
  <div className="card card-body">
  {timeLogs.filter(log => log.date !== getTodayDate()).map(log => (
    <div>
    <h4>{log.date}</h4>
  <table className="table table-light">
  <thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col">Child</th>
      <th scope="col">Sign In</th>
      <th scope="col">Sign In By</th>
      <th scope="col">Sign Out</th>
      <th scope="col">Sign Out By</th>
    </tr>
  </thead>
  <tbody>
   { log.studentList.map((s,i )=>
   <tr>
      <th scope="row">{i + 1}</th>
      <td>{s.firstName} {s.lastName}</td>
      <td>{s.signInTime}</td>
      <td>{s.signInParent}</td>
      <td>{s.signOutTime}</td>
      <td>{s.signOutParent}</td>
    </tr>)}
  </tbody>
</table>
</div>
))}
  </div>
</div>
</div>
  )
}
