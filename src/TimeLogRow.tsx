import { Child, UpdateActionPayload, Action } from './types';

interface TimeLogRowProps {
  row: Child;
  number: number,
  setPayload: (e: any, action: UpdateActionPayload) => void;
}

export function TimeLogRow({ row, number, setPayload: setAction }: TimeLogRowProps) {
  const signInButtonClass = row.signInTime ? "btn btn-success btn-sm disabled" : "btn btn-primary btn-sm";
  let signOutButtonClass = row.signInTime ? "btn btn-primary btn-sm mx-2" : "btn btn-primary btn-sm disabled mx-2";
  const resetButtonClass = row.signInTime ? "btn btn-warning btn-sm" : "btn btn-warning btn-sm disabled";

  return (
    <tr>
      <td>{number}.</td>
      <td>{row.firstName}</td>
      <td>{row.lastName}</td>
      <td>{row.signInTime}</td>
      <td>{row.signInParent}</td>
      <td>{row.signOutTime}</td>
      <td>{row.signOutParent}</td>
      <td className="text-center">
        <button onClick={(e: any) => setAction(e, { id: row.id, action: Action.SIGN_IN })} data-toggle="modal" data-target={!row.signInTime && "#SignInModal"} type="button" className={signInButtonClass}>{<i className="fa fa-sign-in"></i>} {Action.SIGN_IN}</button>
        <button onClick={(e: any) => setAction(e, { id: row.id, action: Action.SIGN_OUT })} data-toggle="modal" data-target={row.signInTime && "#SignInModal"} type="button" className={signOutButtonClass}>{<i className="fa fa-sign-out"></i>} {Action.SIGN_OUT}</button>
        <button onClick={(e: any) => setAction(e, { id: row.id, action: Action.CANCEL })} data-toggle="modal" data-target={row.signInTime && "#SignInModal"} type="button" className={resetButtonClass}>{<i className="fa fa-repeat"></i>} {Action.CANCEL}</button></td>
    </tr>
  );
}
