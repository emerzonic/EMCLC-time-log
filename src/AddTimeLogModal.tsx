import React, { useState } from 'react';
import { getItem, setItem } from './appStorageManager';
import { getTodayDate } from './dateUtil';
import { StorageKeys, Student } from './types';

interface Error{
  hasError: boolean;
  message: string;
}
interface TimeSheetModalProps{
  setSignal: (e:any)=> void;
}
export function AddTimeLogModal(props: TimeSheetModalProps) {
  const [date] = useState<string>(() => getTodayDate());
  const defaulError = { hasError: false, message: '' };
  const [error, setError] = useState<Error>(defaulError);
  const [info, setInfo] = useState<string>('Clicking Create button will create new time sheet for today');

  const handleSave = () => {
    const timeLogs = localStorage.getItem(StorageKeys.TIME_LOGS);
    const parsedTimeLogs = timeLogs ? JSON.parse(timeLogs) : [];

    if (parsedTimeLogs.find((log: any) => log.date === date)) {
      setError({hasError: true, message: 'Time sheet already exist for today!.'});
      return;
    }

    const studentList = getItem<Student[]>(StorageKeys.STUDENT_LIST) ??  [];

    if (!studentList.length) {
      setError({hasError: true, message: 'At least one child is requred to create new time sheet.'});
      return;
    }

    const newTimelog = { id: parsedTimeLogs.length + 1, date, studentList: studentList };
    const updatedTimeLogs = [...parsedTimeLogs, newTimelog];
    setItem(StorageKeys.TIME_LOGS, updatedTimeLogs);
    setInfo('A new time sheet has been created for today.');
    props.setSignal(Date.now())
  };

  const clearError = () => {
    setError(defaulError);
  };

  const alert = (
    <div className="font-weight-bold text-danger modal-title fade-in">
      {error.message}
    </div>
  );


  const initialInfo = (
    <div className="font-weight-bold modal-title">
      {info}
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
          <div className="modal-body text-center h6">
            {error.hasError ? alert : initialInfo}
            <h3 className="mt-3">{date}</h3>
          </div>
          <div className="modal-footer">
            <button onClick={clearError} type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button onClick={handleSave} type="button" className={error.hasError ? "btn btn-primary disabled" : "btn btn-primary"}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}
