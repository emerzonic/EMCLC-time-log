import React, { useState } from 'react';
import { getTodayDate } from './dateUtil';
import { StorageKeys } from './types';

export function AddTimeLogModal(props: any) {
  const [date] = useState<string>(() => getTodayDate());
  const [error, setError] = useState<boolean>(false);

  const handleSave = () => {
    const timeLogs = localStorage.getItem(StorageKeys.TIME_LOGS);
    const parsedTimeLogs = timeLogs ? JSON.parse(timeLogs) : [];

    if (parsedTimeLogs.find((log: any) => log.date === date)) {
      setError(true);
      return;
    }

    const studentList = localStorage.getItem(StorageKeys.STUDENT_LIST);
    const parsedStudentList = studentList ? JSON.parse(studentList) : [];
    const newTimelog = { id: parsedTimeLogs.length + 1, date, studentList: parsedStudentList };
    const updatedTimeLogs = [...parsedTimeLogs, newTimelog];
    localStorage.setItem(StorageKeys.TIME_LOGS, JSON.stringify(updatedTimeLogs));
  };

  const clearError = () => {
    setError(false);
  };

  const alert = (
    <div className="font-weight-bold text-danger modal-title fade-in">
      Time sheet already exist for today!.
    </div>
  );


  const initialInfo = (
    <div className="font-weight-bold modal-title">
      Clicking Create button will create new time sheet for today
    </div>
  );

  return (
    <div className="modal fade" id="addNewTimeLogModal" role="dialog" aria-labelledby="addNewTimeLogLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button onClick={clearError} type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body text-center">
            {error ? alert : initialInfo}
            <h3>{date}</h3>
          </div>
          <div className="modal-footer">
            <button onClick={clearError} type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button onClick={handleSave} type="button" className={error ? "btn btn-primary disabled" : "btn btn-primary"}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}
