import React, { useState } from 'react';
import { TimeSheetRecord, StorageKeys, TimeSheet } from './types';
import { getItem } from './appStorageManager';
import { CsvDownload } from './CsvDownload';

export function TimeLogsHistory(props: any) {
  const [timeSheets,] = useState<TimeSheet[]>(() => {
    const timeSheets = getItem<TimeSheet[]>(StorageKeys.TIME_SHEETS) ?? [];;
    return timeSheets;
  });

  const generateDownloadData = (timeSheets: TimeSheetRecord[]) => {
    console.log(timeSheets)
    return timeSheets.map((record, i) => ({
      '#': i + 1,
      'Name': `${record.firstName} ${record.lastName}`,
      'Time In': record.signInTime ?? '-',
      'Sign In By': record.signInParent ?? '-',
      'Time Out': record.signOutTime ?? '-',
      'Sign Out By': record.signOutParent ?? '-',
    }));
  };
  console.log(timeSheets)
  return (
    <>
      <hr />
      <h1 className="text-left h3 border-bottom">Time Sheet Reports</h1>
      {timeSheets.length ? timeSheets.map((timeSheet, index) => (
        <div className="text-left" key={index}>
          <p className="mb-2 mt-3">
            <button className="btn  btn-sm btn-primary text-left mr-2 w-25" type="button" data-toggle="collapse" data-target={`#${timeSheet.id}`} aria-expanded="false" aria-controls={`#${timeSheet.id}`}>
              <i className="fa fa-calendar-o" aria-hidden="true"></i> {timeSheet.date}
            </button>
            <CsvDownload data={generateDownloadData(timeSheet.timeSheetRecords)} title={`Time Sheet ${timeSheet.date}`} />
          </p>
          <div className="collapse" id={`${timeSheet.id}`}>
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
                    </tr>
                  </thead>
                  <tbody>
                    {timeSheet.timeSheetRecords.map((record, i) => (
                      <tr key={i}>
                        <th scope="row">{i + 1}.</th>
                        <td>{record.firstName} {record.lastName}</td>
                        <td>{record.signInTime}</td>
                        <td>{record.signInParent}</td>
                        <td>{record.signOutTime}</td>
                        <td>{record.signOutParent}</td>
                      </tr>))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>)) : 'Not time sheet report is available.'}
    </>
  );
}
