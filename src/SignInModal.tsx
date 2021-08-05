import React, { useEffect, useState } from 'react';
import { UpdateActionPayload, TimeLog, Student, Action } from './types';
import { getCurrentTime, getTodayDate } from "./dateUtil";

interface SignInModalProps {
  payload: UpdateActionPayload | null;
  setTimeLog: (timeLog: TimeLog) => void;
}
export function SignInModal(props: SignInModalProps) {
  const [parents, setParents] = useState<string[]>();
  const [checks, setChecks] = useState<boolean[]>();
  const [confirmButtonText, setConfirmButtonText] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    //setDisabled(disabled && false);
    setConfirmButtonText(`Confirm ${props.payload?.action}`);
    const studentList = localStorage.getItem('studentList');
    const parsedStudents: Student[] = studentList ? JSON.parse(studentList) : [];
    const foundStudent = parsedStudents.find((student: Student) => student.id === props.payload?.id);
    setChecks(foundStudent?.parentOrGuardians.map((_, i) => i === 0));
    setParents(foundStudent?.parentOrGuardians);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.payload]);
  

  const handleOnChange = (index: number) => {
    const updatedChecks = checks?.map((_, i) => i === index ? true : false);
    setChecks(updatedChecks);
  };

  const handleSave = (e: any) => {
    const timeLogs = localStorage.getItem('timeLogs');
    const parsedTimeLogs = timeLogs ? JSON.parse(timeLogs) : [];
    const updatedTimeLogs: TimeLog[] = parsedTimeLogs.map((log: TimeLog) => {
      if (log.date !== getTodayDate()) {
        return log;
      }

      log.studentList = log.studentList.map(student => {
        if (props.payload?.action === Action.SIGN_IN && student.id === props.payload?.id) {
          student.signInTime = getCurrentTime();
          student.signInParent = parents?.[checks?.indexOf(true) as number];
        }

        if (props.payload?.action === Action.SIGN_OUT && student.id === props.payload?.id) {
          student.signOutTime = getCurrentTime();
          student.signOutParent = parents?.[checks?.indexOf(true) as number];
        }

        if (props.payload?.action === Action.RESET && student.id === props.payload?.id) {
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

   //setDisabled(true);
    localStorage.setItem('timeLogs', JSON.stringify(updatedTimeLogs));
    props.setTimeLog(updatedTimeLogs.find(log => log.date === getTodayDate()) as TimeLog);
  };

  console.log('rendered');
  const message = props.payload?.action === Action.RESET ? 'Please Confirm!' : 'Select your name from below and confirm sign in.';
  return (
    <div className="modal fade" id="SignInModal" role="dialog" aria-labelledby="SignInModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title" id="SignInModalLabel">{message}</h6>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body text-left">
            {props.payload?.action !== Action.RESET && parents?.map((parent, i) => (
              <div key={i} className="form-check">
                <input onChange={() => handleOnChange(i)} className="form-check-input" type="radio" name="exampleRadios" id={`${i}`} value={parent} checked={checks?.[i]} />
                <label className="form-check-label" htmlFor={`${i}`}>{parent}</label>
              </div>
            ))}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">{disabled ? 'Close' : 'Cancel'}</button>
            <button onClick={handleSave} type="button" className="btn btn-primary" disabled={disabled}>{confirmButtonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
