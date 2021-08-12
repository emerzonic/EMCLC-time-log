import { useState } from 'react';
import { AddStudentModal } from './AddStudentModal';
import { AddTimeLogModal } from './AddTimeLogModal';
import './App.css';
import { CurrentTimeSheet } from './CurrentTimeSheet';
import { ManageStudents } from './ManageStudents';
import { NavBar } from './NavBar';
import { View } from './types';


function App() {
  const [view, setView] = useState<View>(View.TIME_SHEET);
  const [singnal, setSignal] = useState<any>();

  const isTimeSheetView = view === View.TIME_SHEET;
  const getButtonIcon =()=> {
    return view === View.MANAGE_STUDENTS ? <i className="fa fa-calendar" aria-hidden="true"></i> : <i className="fa fa-pencil-square-o" aria-hidden="true"></i> ;
  }

  const getButtonText =() => {
    return view === View.MANAGE_STUDENTS ? 'Back To Time Sheet' : 'Manage Students';
  }
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary btn-lg mx-2 w-33" data-toggle="modal" data-target="#addStudentModal">{<i className="fa fa-plus" aria-hidden="true"></i>} Add Student</button>
          <button onClick={setSignal} type="button" className="btn btn-primary btn-lg mx-2 w-33" data-toggle="modal" data-target="#addNewTimeLogModal">{<i className="fa fa-plus-circle" aria-hidden="true"></i>} Create New Time Sheet</button>
          <button onClick={() => setView(isTimeSheetView ? View.MANAGE_STUDENTS : View.TIME_SHEET)} type="button" className="btn btn-primary btn-lg mx-2 w-33">{getButtonIcon()} {getButtonText()}</button>
        </div>
      </header>
      <div className="container border mt-3 px-4">
        {isTimeSheetView && <CurrentTimeSheet signal={singnal} />}
        {!isTimeSheetView && <ManageStudents />}
      </div>
      <AddStudentModal setView={setView} />
      <AddTimeLogModal setSignal={setSignal} setView={setView} singnal={singnal} />
    </div>
  );
}

export default App;
