import React, { useState } from 'react';
import { AddStudentModal } from './AddStudentModal';
import { AddTimeLogModal } from './AddTimeLogModal';
import './App.css';
import { CurrentTimeLogs } from './CurrentTimeLogs';
import { ManageStudents } from './ManageStudents';
import { NavBar } from './NavBar';

function App() {
  const [manageStudents, setManagementStugents] = useState(false);
  const [singnal, setSignal] = useState(null);

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary btn-lg mx-2" data-toggle="modal" data-target="#addStudentModal">Add Student</button>
          <button type="button" className="btn btn-primary btn-lg mx-2" data-toggle="modal" data-target="#addNewTimeLogModal">Create New Time Sheet</button>
          <button onClick={()=> setManagementStugents(!manageStudents)} type="button" className="btn btn-primary btn-lg mx-2">{manageStudents ? 'Back To Time Sheet': 'Manage Students'}</button>
        </div>
      </header>
      <div className="container border mt-3 px-4">
        {!manageStudents && <CurrentTimeLogs signal={singnal}/>}
        {manageStudents && <ManageStudents />}
      </div>
      <AddStudentModal />
      <AddTimeLogModal setSignal={setSignal}/>
    </div>
  );
}

export default App;
