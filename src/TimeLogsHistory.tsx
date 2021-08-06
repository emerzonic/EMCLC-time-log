import React, { useState } from 'react';
import { TimeLog } from './types';
import { getTodayDate } from "./dateUtil";

export function TimeLogsHistory(props: any) {
  const [timeLogs,] = useState<TimeLog[]>(() => {
    const timeLogs = localStorage.getItem('timeLogs');
    const parsedTimeLogs: TimeLog[] = timeLogs ? JSON.parse(timeLogs) : [];
    return parsedTimeLogs;
  });
  const previousLogs = timeLogs.filter(log => log.date !== getTodayDate());
  return (
    <div>
      <p>
        <button className="btn btn-primary text-left" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Time Log History
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          {previousLogs.length ? previousLogs.map(log => (
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
                  {log.studentList.map((s, i) => <tr>
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
          )) : 'No past time sheets are available for this week.'}
        </div>
      </div>
    </div>
  );
}
