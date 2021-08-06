import React, { useEffect, useState } from 'react';
import { UpdateActionPayload, TimeLog, Student, Action, StorageKeys } from './types';
import { getCurrentTime, getTodayDate } from "./dateUtil";
import { getItem, removeItem, setItem } from './appStorageManager';

interface SignInModalProps {
  setTimeLog: (timeLog: TimeLog) => void;
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
      const checks = foundStudent?.parentOrGuardians.map((_, i) => i === 0);
      const parents = foundStudent?.parentOrGuardians;
      setSettings({ payload, checks, confirmButtonText, parents, disabled: false } as Settings);
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
    const timeLogs = getItem<TimeLog[]>(StorageKeys.TIME_LOGS) ?? [];
    const updatedTimeLogs: TimeLog[] = timeLogs.map((log: TimeLog) => {
      if (log.date !== getTodayDate()) {
        return log;
      }

      log.studentList = log.studentList.map(student => {
        if (payload?.action === Action.SIGN_IN && student.id === payload?.id) {
          student.signInTime = new Date();
          student.signInParent = parents?.[checks?.indexOf(true) as number];
        }

        if (payload?.action === Action.SIGN_OUT && student.id === payload?.id) {
          student.signOutTime = new Date();
          student.totalTime = (student.signInTime as any - student.signOutTime as Date) as Date;;
          student.signOutParent = parents?.[checks?.indexOf(true) as number];
        }

        if (payload?.action === Action.RESET && student.id === payload?.id) {
          if (student.signOutTime && student.signInTime) {
            student.signOutTime = null;
            student.signOutParent = null;
          } else if (student.signInTime && !student.signOutTime) {
            student.signInTime = null;
            student.signInParent = null;
          }
        }
        return student;
      });

      return log;
    });


    setItem(StorageKeys.TIME_LOGS, updatedTimeLogs);
    removeItem(StorageKeys.ACTION_PAYLOAD);
    props.setTimeLog(updatedTimeLogs.find(log => log.date === getTodayDate()) as TimeLog);
    setSettings({ ...settings, disabled: true } as Settings);
  };

  const message = payload?.action === Action.RESET ? 'Please Confirm!' : `Select your name from below and confirm ${payload?.action}.`;

  const alert = (
    <div className="font-weight-bold text-success modal-title fade-in">
      {`${payload?.action} has been succcessfully completed!`}
    </div>
  );

  const initialInfo = (
    <div className="font-weight-bold modal-title">
      {message}
    </div>
  );

  return (
    <div className="modal fade" id="SignInModal" role="dialog" aria-labelledby="SignInModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            {disabled ? alert : initialInfo}
            <button onClick={resetSettings} type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body text-left">
            {payload?.action !== Action.RESET && parents?.map((parent, i) => (
              <div key={i} className="form-check">
                <input onChange={() => handleOnChange(i)} className="form-check-input" type="radio" name="exampleRadios" id={`${i}`} value={parent} checked={checks?.[i]} />
                <label className="form-check-label" htmlFor={`${i}`}>{parent}</label>
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <button onClick={resetSettings} type="button" className="btn btn-secondary" data-dismiss="modal">{disabled ? 'Close' : 'Cancel'}</button>
            <button onClick={handleSave} type="button" className="btn btn-primary" disabled={disabled}>{confirmButtonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
