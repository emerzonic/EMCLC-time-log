import React from 'react';
import { Child, UpdateActionPayload, Action } from './types';

interface TimeLogRowProps {
  row: Child;
  setPayload: (action: UpdateActionPayload) => void;
}

export function TimeLogRow({ row, setPayload: setAction }: TimeLogRowProps) {
  const signInText = row.signInTime ? row.signInTime : Action.SIGN_IN;
  const signOutText = row.signOutTime ? row.signOutTime : Action.SIGN_OUT;

  const signInButtonClass = (signInText === Action.SIGN_IN) ? "btn btn-primary btn-sm" : "btn btn-success btn-sm disabled";
  const signOutButtonClass = (signInText === Action.SIGN_IN && signOutText === Action.SIGN_OUT) ? "btn btn-primary btn-sm disabled" : "btn btn-primary btn-sm";
  const resetButtonClass = (signInText === Action.SIGN_IN && signOutText === Action.SIGN_OUT) ? "btn btn-outline-warning btn-sm disabled" : "btn btn-outline-warning btn-sm";

  return (
    <tr>
      <td className="text-left">{row.firstName}</td>
      <td className="text-left">{row.lastName}</td>
      <td><button onClick={() => setAction({ id: row.id, action: Action.SIGN_IN })} data-toggle="modal" data-target={signInText === Action.SIGN_IN && "#SignInModal"} type="button" className={signInButtonClass}>{signInText}</button></td>
      <td className="text-left">{row.signInParent}</td>
      <td><button onClick={() => setAction({ id: row.id, action: Action.SIGN_OUT })} data-toggle="modal" data-target={signInText !== Action.SIGN_IN && "#SignInModal"} type="button" className={signOutButtonClass}>{signOutText}</button></td>
      <td className="text-left">{row.signOutParent}</td>
      <td><button onClick={() => setAction({ id: row.id, action: Action.RESET })} data-toggle="modal" data-target={signInText !== Action.SIGN_IN && "#SignInModal"} type="button" className={`${resetButtonClass}`}>Reset</button></td>
    </tr>
  );
}
