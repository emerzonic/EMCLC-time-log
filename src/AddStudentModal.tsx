import React, { useState } from 'react';
import { Student } from './types';

export function AddStudentModal(props: any) {
  const [student, setStudent] = useState<Student>({ id: null, firstName: '', lastName: '', parentOrGuardians: [] });
  const [parentOne, setParentOne] = useState<string>('');
  const [parentTwo, setParentTwo] = useState<string>('');
  const [parentThree, setParentThree] = useState<string>('');


  const onNameChange = (keyValuePar: any) => {
    setStudent({ ...student, ...keyValuePar });
  };

  const handleSave = () => {
    const list = localStorage.getItem('studentList');
    const retrievedList = list ? JSON.parse(list) : [];
    const parents = [parentOne, parentTwo, parentThree].filter(p => p);
    const newStudent = { ...student, id: retrievedList.length + 1, parentOrGuardians: parents };
    const updatedList = [...retrievedList, newStudent];
    localStorage.setItem('studentList', JSON.stringify(updatedList));
  };

  return (
    <div className="modal fade" id="addStudentModal" role="dialog" aria-labelledby="addStudentModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addStudentModalLabel">Enter Student Information</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body text-left">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">First Name</label>
                <input type="text" onChange={(e) => onNameChange({ firstName: e.target.value })} value={student.firstName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Last Name</label>
                <input type="text" onChange={(e) => onNameChange({ lastName: e.target.value })} value={student.lastName} className="form-control" id="exampleInputPassword1" placeholder="Enter Last Name" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Parent/Guardian 1</label>
                <input type="text" onChange={(e) => setParentOne(e.target.value)} value={parentOne} className="form-control" id="exampleInputPassword1" placeholder="Enter Parent/Guadian 1" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Parent/Guardian 2</label>
                <input type="text" onChange={(e) => setParentTwo(e.target.value)} value={parentTwo} className="form-control" id="exampleInputPassword1" placeholder="Enter Parent/Guadian 2" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Parent/Guardian 3</label>
                <input type="text" onChange={(e) => setParentThree(e.target.value)} value={parentThree} className="form-control" id="exampleInputPassword1" placeholder="Enter Parent/Guadian 3" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button onClick={handleSave} type="button" className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
