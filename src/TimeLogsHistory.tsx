import React, { useState } from 'react';
import { StorageKeys, TimeLog } from './types';
import { getTodayDate } from "./dateUtil";
import { getItem } from './appStorageManager';

export function TimeLogsHistory(props: any) {
  const [timeLogs,] = useState<TimeLog[]>(() => {
    const timeLogs = getItem<TimeLog[]>(StorageKeys.TIME_LOGS) ?? [];;
    return timeLogs;
  });
  const previousLogs = timeLogs.filter(log => log.date === getTodayDate());
  return (
    <div className="text-left">
      <p>
        <button className="btn btn-primary text-left" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Time Sheet History
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          {previousLogs.length ? [...previousLogs, ...previousLogs, ...previousLogs].map((log, index) => (
            <div key={index}>
              <h4 className="p-3 border rounded">{log.date}</h4>
              <table className="table table-light table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Child</th>
                    <th scope="col">Sign In</th>
                    <th scope="col">Sign In By</th>
                    <th scope="col">Sign Out</th>
                    <th scope="col">Sign Out By</th>
                    <th className="text-center" scope="col">Total Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {log.studentList.map((s, i) => (
                    <tr key={i}>
                      <th scope="row">{i + 1}.</th>
                      <td>{s.firstName} {s.lastName}</td>
                      <td>{s.signInTime}</td>
                      <td>{s.signInParent}</td>
                      <td>{s.signOutTime}</td>
                      <td>{s.signOutParent}</td>
                      <td className="text-center">{s.totalDayHours}</td>
                    </tr>))}
                </tbody>
              </table>
            </div>
          )) : 'No past time sheets are available for this week.'}
        </div>
      </div>
    </div>
  );
}
