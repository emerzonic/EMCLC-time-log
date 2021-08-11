import React, { useEffect, useState } from 'react';
import { getItem, setItem } from './appStorageManager';
import { getTodayDate } from './dateUtil';
import { StorageKeys, Student, TimeLog, View } from './types';

interface Warning {
  hasWarning: boolean;
  message: string;
}
interface TimeSheetModalProps {
  setSignal: (e: any) => void;
  singnal: any;
  setView: (view: View) => void;
}
export function AddTimeLogModal(props: TimeSheetModalProps) {
  const [date] = useState<string>(() => getTodayDate());
  const defaulWarning = { hasWarning: false, message: '' };
  const [warning, setWarning] = useState<Warning>(defaulWarning);
  const defaultInfo = 'Clicking Create button will create new time sheet for today';
  const [info, setInfo] = useState<string>(defaultInfo);
  const [timeSheets, setTimeSheets] = useState<TimeLog[]>([]);
  const [students, setStudents] = useState<Student[]>([]);

  const handleSave = () => {
    const newTimelog = { id: timeSheets.length + 1, date, studentList: students };
    const updatedTimeLogs = [...timeSheets, newTimelog];
    setItem(StorageKeys.TIME_LOGS, updatedTimeLogs);
    setInfo('A new time sheet has been created for today.');
    props.setView(View.TIME_SHEET);
    props.setSignal(Date.now())
  };

  const clearError = () => {
    setWarning(defaulWarning);
  };

  const errorAlert = (
    <div className="font-weight-bold text-info modal-title fade-in">
      {warning.message}
    </div>
  );


  const successAlert = (
    <div className="font-weight-bold modal-title">
      {info}
    </div>
  );

  useEffect(() => {
    const timeLogs = getItem<TimeLog[]>(StorageKeys.TIME_LOGS) ?? [];

    if (timeLogs.find((log: any) => log.date === date)) {
      setWarning({ hasWarning: true, message: 'Time sheet already exist for today!.' });
      return;
    }

    const studentList = getItem<Student[]>(StorageKeys.STUDENT_LIST) ?? [];

    if (!studentList.length) {
      setWarning({ hasWarning: true, message: 'At least one child is requred to create new time sheet.' });
      return;
    }

    setTimeSheets(timeLogs);
    setStudents(studentList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.singnal])

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
            {warning.hasWarning ? errorAlert : successAlert}
            <h3 className="mt-3">{date}</h3>
          </div>
          <div className="modal-footer">
            <button onClick={clearError} type="button" className="btn btn-secondary" data-dismiss="modal">{<i className="fa fa-times" aria-hidden="true"></i>} {warning.hasWarning ? 'Close' : 'Cancel'}</button>
            <button onClick={handleSave} type="button" data-dismiss="modal" className={warning.hasWarning || info !== defaultInfo ? "btn btn-primary disabled" : "btn btn-primary"}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}
