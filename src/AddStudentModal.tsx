import React, { useState } from 'react';
import { StorageKeys, Student } from './types';

export function AddStudentModal(props: any) {
  const defaultStudent = { id: null, firstName: '', lastName: '', parentOrGuardians: [] };
  const [student, setStudent] = useState<Student>(defaultStudent);
  const [parentOne, setParentOne] = useState<string>('');
  const [parentTwo, setParentTwo] = useState<string>('');
  const [parentThree, setParentThree] = useState<string>('');
  const [count, setParentCount] = useState<number>(1);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);


  const onNameChange = (keyValuePar: any) => {
    setStudent({ ...student, ...keyValuePar });
  };

  const updateForm = () => {
    if (count <= 2) {
      setParentCount(count + 1);
    }
  };

  const resetForm = () => {
    setStudent(defaultStudent)
    setParentOne('');
    setParentTwo('');
    setParentThree('');
    setParentCount(1);
    setShowConfirmation(false);
  };

  const handleSubmit = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    const list = localStorage.getItem(StorageKeys.STUDENT_LIST);
    const retrievedList = list ? JSON.parse(list) : [];
    const parents = [parentOne, parentTwo, parentThree].filter(p => p);
    const newStudent = { ...student, id: retrievedList.length + 1, parentOrGuardians: parents };
    const updatedList = [...retrievedList, newStudent];
    localStorage.setItem(StorageKeys.STUDENT_LIST, JSON.stringify(updatedList));
    resetForm();
  };

  const confirmation = (
    <div className="card w-100 text-left">
      <div className="card-body">
        <h5 className="card-title font-weight-bold">Review Information</h5>
        <p className="card-text">First Name: {student.firstName}</p>
        <p className="card-text">Last Name: {student.lastName}</p>
        <div className="hr" />
        <h5 className="card-text font-weight-bold">Parents/Guardians</h5>
        <div className="hr" />
        {parentOne && <p className="card-text">{parentOne}</p>}
        {parentTwo && <p className="card-text">{parentTwo}</p>}
        {parentThree && <p className="card-text">{parentThree}</p>}
      </div>
    </div>
  )

  return (
    <div className="modal fade" id="addStudentModal" role="dialog" aria-labelledby="addStudentModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addStudentModalLabel">Enter Student Information</h5>
            <button onClick={resetForm} type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {showConfirmation ? confirmation : <div className="modal-body text-left">
            <form>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" onChange={(e) => onNameChange({ firstName: e.target.value })} value={student.firstName} className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" onChange={(e) => onNameChange({ lastName: e.target.value })} value={student.lastName} className="form-control" placeholder="Enter Last Name" />
              </div>
              <div className="form-group">
                <label>Parent/Guardian 1</label>
                <input type="text" onChange={(e) => setParentOne(e.target.value)} value={parentOne} className="form-control" placeholder="Enter Parent/Guadian" />
              </div>
              <div className={count > 1 ? 'form-group' : "form-group d-none"}>
                <label>Parent/Guardian 2</label>
                <input type="text" onChange={(e) => setParentTwo(e.target.value)} value={parentTwo} className="form-control" placeholder="Enter Parent/Guadian 2" />
              </div>
              <div className={count > 2 ? 'form-group' : "form-group d-none"}>
                <label>Parent/Guardian 3</label>
                <input type="text" onChange={(e) => setParentThree(e.target.value)} value={parentThree} className="form-control" placeholder="Enter Parent/Guadian 3" />
              </div>
            </form>
            <button onClick={updateForm} type="button" className={count === 3 ? "btn btn-primary btn-sm d-none" : "btn btn-primary btn-sm"}>Add Another Parent/Guardian</button>
          </div>}
          <div className="modal-footer">
            <button onClick={resetForm} type="button" className="btn btn-secondary" data-dismiss="modal">Edit</button>
            <button onClick={resetForm} type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button onClick={showConfirmation ? handleConfirm : handleSubmit} type="button" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
