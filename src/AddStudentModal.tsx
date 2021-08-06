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
  const [error, setError] = useState<boolean>(false);

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
    setError(false);
  };

  const handleSubmit = () => {
    if (!student.firstName || !student.lastName || !parentOne) {
      setError(true);
      return;
    };
    setShowConfirmation(true);
  };

  const handleEdit = () => {
    setShowConfirmation(false);
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
        <h6 className="card-title border-bottom">Student</h6>
        <p className="card-text">First Name: {student.firstName}</p>
        <p className="card-text">Last Name: {student.lastName}</p>
        <div className="hr" />
        <h6 className="card-text border-bottom">Parents/Guardians</h6>
        <div className="hr" />
        {parentOne && <p className="card-text">1. {parentOne}</p>}
        {parentTwo && <p className="card-text">2. {parentTwo}</p>}
        {parentThree && <p className="card-text">3. {parentThree}</p>}
      </div>
    </div>
  );

  const inValid = (
    <div className="text-danger fade-in">Required.</div>
  );

  const add = 'Add Student';
  const confirm = 'Review Student Detail';

  return (
    <div className="modal fade" id="addStudentModal" role="dialog" aria-labelledby="addStudentModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addStudentModalLabel">{showConfirmation ? confirm: add}</h5>
            <button onClick={resetForm} type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {showConfirmation ? confirmation : <div className="modal-body text-left">
            <form>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" onChange={(e) => onNameChange({ firstName: e.target.value.trim() })} value={student.firstName} className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                {error && !student.firstName ? inValid: ''}
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" onChange={(e) => onNameChange({ lastName: e.target.value.trim() })} value={student.lastName} className="form-control" placeholder="Enter Last Name" />
                {error && !student.lastName ? inValid: ''}
              </div>
              <div className="form-group">
                <label>Parent/Guardian 1</label>
                <input type="text" onChange={(e) => setParentOne(e.target.value.trim())} value={parentOne} className="form-control" placeholder="Enter Parent/Guadian" />
                {error && !parentOne ? inValid: ''}
              </div>
              <div className={count > 1 ? 'form-group' : "form-group d-none"}>
                <label>Parent/Guardian 2</label>
                <input type="text" onChange={(e) => setParentTwo(e.target.value.trim())} value={parentTwo} className="form-control" placeholder="Enter Parent/Guadian 2" />
              </div>
              <div className={count > 2 ? 'form-group' : "form-group d-none"}>
                <label>Parent/Guardian 3</label>
                <input type="text" onChange={(e) => setParentThree(e.target.value.trim())} value={parentThree} className="form-control" placeholder="Enter Parent/Guadian 3" />
              </div>
            </form>
            <button onClick={updateForm} type="button" className={count === 3 ? "btn btn-primary btn-sm d-none" : "btn btn-primary btn-sm"}>Add Another Parent/Guardian</button>
          </div>}
          <div className="modal-footer">
           {showConfirmation && <button onClick={handleEdit} type="button" className="btn btn-secondary">Edit</button>}
            <button onClick={resetForm} type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button onClick={showConfirmation ? handleConfirm : handleSubmit} type="button" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
