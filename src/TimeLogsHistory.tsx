import React, { useState } from 'react';
import { Child, StorageKeys, TimeLog } from './types';
import { getItem } from './appStorageManager';
import { CsvDownload } from './CsvDownload';

export function TimeLogsHistory(props: any) {
  const [timeLogs,] = useState<TimeLog[]>(() => {
    const timeLogs = getItem<TimeLog[]>(StorageKeys.TIME_LOGS) ?? [];;
    return timeLogs;
  });

  const generateDownloadData =(timeSheets: Child[])=> {
    return timeSheets.map((s, i ) => ({
        '#': i + 1,
        'Name': `${s.firstName} ${s.lastName}`, 
        'Time In': s.signInTime ?? '-',
        'Sign In By': s.signInParent ?? '-',
        'Time Out': s.signOutTime ?? '-',
        'Sign Out By': s.signOutParent ?? '-',
        'Total Hours': (s.signOutHour ?? 0) - (s.signInHour ?? 0),
      }));
  };

  return (
    <>
    <hr/>
    <h1 className="text-left h3 border-bottom">Time Sheet Reports</h1>
    {timeLogs.length ? timeLogs.map((log, index) => ( 
    <div className="text-left" key={index}>
      <p className="mb-2 mt-3">
        <button className="btn  btn-sm btn-primary text-left mr-2 w-25" type="button" data-toggle="collapse" data-target={`#${log.id}`} aria-expanded="false" aria-controls={`#${log.id}`}>
        <i className="fa fa-calendar-o" aria-hidden="true"></i> {log.date}
        </button>
        <CsvDownload data={generateDownloadData(log.studentList)} title={`Time Sheet ${log.date}`}/>
      </p>
      <div className="collapse" id={`${log.id}`}>
        <div className="card card-body pt-0">
            <div>
              <table className="table table-light table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
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
        </div>
      </div>
    </div>)): 'Not time sheet report is available.'}
    </>
  );
}
