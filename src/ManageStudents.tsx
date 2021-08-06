import React, { useEffect, useState } from 'react';
import { getItem } from './appStorageManager';
import { StorageKeys, Student } from './types';

export function ManageStudents(props: any) {
const [students, setStudents] = useState([] as Student[])

  useEffect(() => {
    if (!students.length) {
      const studentList = getItem<Student[]>(StorageKeys.STUDENT_LIST) ?? [];
      setStudents(studentList);
    }
    
  }, [students]);
  
  return (
    <table className="table table-hover table-sm table-light text-left">
      <thead>
        <tr className="bg-dark text-light">
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
       {students.map((s,i) => 
        <tr key={s.id} >
           <td>{i+1}</td>
          <td>{s.firstName}</td>
          <td>{s.lastName}</td>
          <td><button type="button" className="btn btn-warning btn-sm">Edit</button></td>
          <td><button type="button" className="btn btn-danger btn-sm">Delete</button></td>
        </tr>)}
      </tbody>
    </table>
  );
}
