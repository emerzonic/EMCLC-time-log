import React, { useEffect, useState } from 'react';
import { UpdateActionPayload, TimeSheet, Student, Action, StorageKeys } from './types';
import { getCurrentTime, getTodayDate } from "./dateUtil";
import { getItem, removeItem, setItem } from './appStorageManager';

interface SignInModalProps {
  setTimeSheet: (timeLog: TimeSheet) => void;
  signal: any;
}

interface Settings {
  parents: string[];
  checks: boolean[];
  confirmButtonText: string;
  payload: UpdateActionPayload;
  disabled: boolean;
}

export function SignInModal(props: SignInModalProps) {
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    const payload = getItem<UpdateActionPayload>(StorageKeys.ACTION_PAYLOAD);
    if (payload) {
      const confirmButtonText = `Confirm ${payload?.action}`;
      const studentList = getItem<Student[]>(StorageKeys.STUDENT_LIST) ?? [];
      const foundStudent = studentList.find((student: Student) => student.id === payload?.id);
      const parentNames = Object.values(foundStudent?.parents || {}).filter(v => v);
      const checks = parentNames.map((_, i) => i === 0);
      setSettings({ payload, checks, confirmButtonText, parents: parentNames, disabled: false } as Settings);
    }
  }, [props.signal]);

  const payload = settings?.payload;
  const parents = settings?.parents;
  const checks = settings?.checks;
  const disabled = settings?.disabled;
  const confirmButtonText = settings?.confirmButtonText;

  const handleOnChange = (index: number) => {
    const updatedChecks = settings?.checks?.map((_, i) => i === index ? true : false);
    setSettings({ ...settings, checks: updatedChecks } as Settings);
  };

  const resetSettings = () => {
    setSettings(null);
  };

  const handleSave = (e: any) => {
    const timeLogs = getItem<TimeSheet[]>(StorageKeys.TIME_SHEETS) ?? [];
    const updatedTimeLogs: TimeSheet[] = timeLogs.map((timeSheet: TimeSheet) => {
      if (timeSheet.date !== getTodayDate()) {
        return timeSheet;
      }

      timeSheet.timeSheetRecords = timeSheet.timeSheetRecords.map(record => {
        if (payload?.action === Action.SIGN_IN && record.id === payload?.id) {
          record.signInTime = getCurrentTime();
          record.signInHour = Date.now();
          record.signInParent = parents?.[checks?.indexOf(true) as number];
        }

        if (payload?.action === Action.SIGN_OUT && record.id === payload?.id) {
          record.signOutTime = getCurrentTime();
          record.signOutHour = Date.now();
          record.totalDayHours = record.signOutHour - record.signInHour;
          record.signOutParent = parents?.[checks?.indexOf(true) as number];
        }

        if (payload?.action === Action.CANCEL && record.id === payload?.id) {
          if (record.signOutTime && record.signInTime) {
            record.signOutTime = null;
            record.signOutParent = null;
            record.totalDayHours = 0;
            record.signOutHour = 0;
          } else if (record.signInTime && !record.signOutTime) {
            record.signInTime = null;
            record.signInParent = null;
            record.totalDayHours = 0;
            record.signInHour = 0;
          }
        }
        return record;
      });

      return timeSheet;
    });

    setItem(StorageKeys.TIME_SHEETS, updatedTimeLogs);
    removeItem(StorageKeys.ACTION_PAYLOAD);
    props.setTimeSheet(updatedTimeLogs.find(timeSheet => timeSheet.date === getTodayDate()) as TimeSheet);
    setSettings({ ...settings, disabled: true } as Settings);
  };

  const message = payload?.action === Action.CANCEL ? 'Please Confirm you want to cancel last action!' : `Select your name from below and confirm ${payload?.action}.`;

  const alert = (
    <div className="text-success modal-title fade-in">
      {`${payload?.action} succcessfully completed!`}
    </div>
  );

  const initialInfo = (
    <div className="modal-title">
      {message}
    </div>
  );

  return (
    <div className="modal fade" id="SignInModal" role="dialog" aria-labelledby="SignInModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <div className="font-weight-bold modal-title">
              {payload?.action}
            </div>
            <button onClick={resetSettings} type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body text-left">
            {disabled ? alert : initialInfo}
            {payload?.action !== Action.CANCEL && parents?.map((parent, i) => (
              <div key={i} className="form-check">
                <input onChange={() => handleOnChange(i)} className="form-check-input" type="radio" name="exampleRadios" id={`${i}`} value={parent} checked={checks?.[i]} />
                <label className="form-check-label" htmlFor={`${i}`}>{parent}</label>
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <button onClick={resetSettings} type="button" className="btn btn-secondary" data-dismiss="modal">{<i className="fa fa-times" aria-hidden="true"></i>} {disabled ? 'Close' : 'Cancel'}</button>
            <button onClick={handleSave} type="button" className="btn btn-primary" disabled={disabled}>{confirmButtonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
