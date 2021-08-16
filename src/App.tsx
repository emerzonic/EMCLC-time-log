import React, { useState } from 'react';
import { AddStudentModal } from './AddStudentModal';
import { AddTimeLogModal } from './AddTimeSheetModal';
import { getItem, setItem } from './appStorageManager';
import { CurrentTimeSheet } from './CurrentTimeSheet';
import { ManageStudents } from './ManageStudents';
import { NavBar } from './NavBar';
import { StorageKeys, View } from './types';
import { TimeSheetsReports } from './TimeSheetsReports';
import './App.css';
import { getTodayDate } from './dateUtil';
import { DigitalClock } from './DigitalClock';

function App() {
  const [view, setView] = useState<View>(() => {
    const currentView = getItem<View>(StorageKeys.VIEW);
    if (currentView) {
      return currentView
    }
    return View.TIME_SHEET
  });

  const [singnal, setSignal] = useState<any>();

  const isTimeSheetView = view === View.TIME_SHEET;
  const isManageStudentsView = view === View.MANAGE_STUDENTS;
  const isReportView = view === View.REPORTS;

  const updateView = (view: View) => {
    setItem(StorageKeys.VIEW, view);
    setView(view);
  }

  return (
    <div className="App">
      <NavBar />
      <header className="App-header d-print-none">
      <div className="py-5">
          <h1 className="pt-4 d-print-none">{getTodayDate()}</h1>
          <DigitalClock />
        </div>
        <div className="btn-group pb-4" role="group" aria-label="Basic example">
          <button onClick={() => updateView(View.TIME_SHEET)} type="button" className="btn btn-primary btn-lg mx-2">{<i className="fa fa-calendar" aria-hidden="true"></i>} Time Sheet</button>
          <button onClick={() => updateView(View.MANAGE_STUDENTS)} type="button" className="btn btn-primary btn-lg mx-2">{<i className="fa fa-pencil-square-o" aria-hidden="true"></i>} Manage Students</button>
          <button onClick={() => updateView(View.REPORTS)} type="button" className="btn btn-primary btn-lg mx-2">{<i className="fa fa-calendar" aria-hidden="true"></i>} Report</button>
        </div>
      </header>
      <div className="container-fluid my-5 px-4">
        {isTimeSheetView && <CurrentTimeSheet signal={singnal} setSignal={setSignal} />}
        {isManageStudentsView && <ManageStudents setSignal={setSignal} signal={singnal} />}
        {isReportView && <TimeSheetsReports/>}
      </div>
      <AddStudentModal setView={updateView} signal={singnal} setSignal={setSignal} />
      <AddTimeLogModal setSignal={setSignal} setView={updateView} singnal={singnal} />
    </div>
  );
}

export default App;
