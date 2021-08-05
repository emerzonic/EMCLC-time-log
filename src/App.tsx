import React, { useEffect, useState } from 'react';
import { AddStudentModal } from './AddStudentModal';
import { AddTimeLogModal } from './AddTimeLogModal';
import './App.css';
import { CurrentTimeLogs } from './CurrentTimeLogs';
import { ManageStudents } from './ManageStudents';
import { NavBar } from './NavBar';

function App() {
  const [manageStudents, useManageStudents] = useState(false);
  const [setView, useSetView] = useState(true);

  useEffect(() => {

  }, [])


  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary btn-lg mx-2" data-toggle="modal" data-target="#addStudentModal">Add Student</button>
          <button type="button" className="btn btn-secondary btn-lg mx-2" data-toggle="modal" data-target="#addNewTimeLogModal">Create New Time Log</button>
          <button type="button" className="btn btn-secondary btn-lg mx-2">Manage Students</button>
        </div>
      </header>
      <div className="container-fluid border mt-3 px-0">
        {!manageStudents && <CurrentTimeLogs />}
        {manageStudents && <ManageStudents />}
      </div>
      <AddStudentModal />
      <AddTimeLogModal />
    </div>
  );
}

export default App;
