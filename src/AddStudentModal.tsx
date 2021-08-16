import { useEffect, useState } from 'react';
import { getItem, removeItem, setItem } from './appStorageManager';
import { getTodayDate } from './dateUtil';
import { DetailAction, DetailActionPayload, Parents, StorageKeys, Student, TimeSheet, TimeSheetRecord } from './types';

interface AddStudentModalProps {
  signal?: any;
  setView: (e: any) => void;
  setSignal: (e: any) => void;
}
export function AddStudentModal(props: AddStudentModalProps) {
  //seed();
  const defaultStudent = {
    id: null,
    firstName: '',
    lastName: '',
    parents: {
      parentOne: '',
    }
  };

  const [student, setStudent] = useState<Student>(defaultStudent);
  const [parentOne, setParentOne] = useState<string>('');
  const [parentTwo, setParentTwo] = useState<string>('');
  const [parentThree, setParentThree] = useState<string>('');
  const [count, setParentCount] = useState<number>(1);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const payload = getItem<DetailActionPayload>(StorageKeys.DETAIL_ACTION);
    if (payload?.action === DetailAction.EDIT || payload?.action === DetailAction.VIEW) {
      const list = getItem<Student[]>(StorageKeys.STUDENT_LIST) ?? [];
      const editStudent = list.find(student => student.id === payload.id);
      if (editStudent) {
        setStudent(editStudent);
        setParentOne(editStudent.parents.parentOne || '');
        setParentTwo(editStudent.parents.parentTwo || '');
        setParentThree(editStudent.parents.parentThree || '');
        setParentCount(Object.values(editStudent.parents).filter(v => v).length);

        if (payload?.action === DetailAction.VIEW) {
          setShowConfirmation(true);
        }
      }
    }
  }, [props.signal])

  const onNameChange = (keyValuePair: any) => {
    setStudent({ ...student, ...keyValuePair });
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

  const confirmInfo = () => {
    if (!student.firstName.trim() || !student.lastName.trim() || !parentOne.trim()) {
      setError(true);
      return;
    };
    setShowConfirmation(true);
  };

  const handleEdit = () => {
    setShowConfirmation(false);
  };

  const addNewStudentInfo = (list: Student[], parents: Parents) => {
    const newStudent = { ...student, id: Date.now(), parents };
    const updatedList = [...list, newStudent];
    setItem(StorageKeys.STUDENT_LIST, updatedList);

    const timeSheets = getItem<TimeSheet[]>(StorageKeys.TIME_SHEETS) ?? [];

    if (timeSheets.length) {
      timeSheets.forEach((timeSheet) => {
        if (timeSheet.date === getTodayDate()) {
          timeSheet.timeSheetRecords.push({
            id: newStudent.id,
            firstName: newStudent.firstName,
            lastName: newStudent.lastName
          } as TimeSheetRecord);
        }
      });

      setItem(StorageKeys.TIME_SHEETS, timeSheets);
    }
  }

  const editStudentInfo = (list: Student[], parents: Parents) => {
    const updatedList = list.map((each) => {
      if (each.id === student.id) {
        return { ...student, parents };
      }
      return each;
    });

    setItem(StorageKeys.STUDENT_LIST, updatedList);
    const timeSheets = getItem<TimeSheet[]>(StorageKeys.TIME_SHEETS) ?? [];

    for (const timeSheet of timeSheets) {
      timeSheet.timeSheetRecords.forEach((record) => {
        if (record.id === student.id) {
          record.firstName = student.firstName;
          record.lastName = student.lastName;
        }
      });
    }

    setItem(StorageKeys.TIME_SHEETS, timeSheets);
    removeItem(StorageKeys.DETAIL_ACTION);
  }

  const removeStudentInfo = (list: any, parents:any) => console.log("delete");

  const submitInfo = (e: any) => {
    const list = getItem<Student[]>(StorageKeys.STUDENT_LIST) ?? [];
    const parents: Parents = { parentOne, parentTwo, parentThree };
    const payload = getItem<DetailActionPayload>(StorageKeys.DETAIL_ACTION);

    if (payload?.action === DetailAction.EDIT) {
      editStudentInfo(list, parents);
    } else if(payload?.action === DetailAction.DELETE){
      removeStudentInfo(list, parents);
    }else {
      addNewStudentInfo(list, parents);
    }

    props.setSignal(e);
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

  const add = 'Add Student Information';
  const confirm = 'Review Student Detail';

  return (
    <div className="modal fade" id="addStudentModal" role="dialog" aria-labelledby="addStudentModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addStudentModalLabel">{showConfirmation ? confirm : add}</h5>
            <button onClick={resetForm} type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {showConfirmation ? confirmation : <div className="modal-body text-left">
            <form>
              <div className="form-group">
                <label className="text-font-bold" >First Name</label>
                <input type="text" onChange={(e) => onNameChange({ firstName: e.target.value })} value={student.firstName} className="form-control" aria-describedby="emailHelp" placeholder="Enter first name." />
                {error && !student.firstName ? inValid : ''}
              </div>
              <div className="form-group">
                <label className="text-font-bold" >Last Name</label>
                <input type="text" onChange={(e) => onNameChange({ lastName: e.target.value })} value={student.lastName} className="form-control" placeholder="Enter last name." />
                {error && !student.lastName ? inValid : ''}
              </div>
              <div className="form-group">
                <label className="text-font-bold" >Parent/Guardian 1</label>
                <input type="text" onChange={(e) => setParentOne(e.target.value)} value={parentOne} className="form-control" placeholder="Enter first parent or guadian full name." />
                {error && !parentOne ? inValid : ''}
              </div>
              <div className={count > 1 ? 'form-group' : "form-group d-none"}>
                <label className="text-font-bold" >Parent/Guardian 2</label>
                <input type="text" onChange={(e) => setParentTwo(e.target.value)} value={parentTwo} className="form-control" placeholder="Enter second parent or guadian full name." />
              </div>
              <div className={count > 2 ? 'form-group' : "form-group d-none"}>
                <label className="text-font-bold" >Parent/Guardian 3</label>
                <input type="text" onChange={(e) => setParentThree(e.target.value)} value={parentThree} className="form-control" placeholder="Enter third parent or guadian full name." />
              </div>
            </form>
            <button onClick={updateForm} type="button" className={count === 3 ? "btn btn-primary btn-sm d-none" : "btn btn-primary btn-sm"}>{<i className="fa fa-plus" aria-hidden="true"></i>} Add another parent or guardian</button>
          </div>}
          <div className="modal-footer">
            {showConfirmation && <button onClick={handleEdit} type="button" className="btn btn-warning">Edit</button>}
            <button onClick={resetForm} type="button" className="btn btn-secondary" data-dismiss="modal">{<i className="fa fa-times" aria-hidden="true"></i>} Cancel</button>
            <button onClick={showConfirmation ? submitInfo : confirmInfo} data-dismiss={showConfirmation ? "modal" : ""} type="button" className="btn btn-primary"> {<i className="fa fa-save" aria-hidden="true"></i>} Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}


// function seed() {
//   const names = [
//     'Nerissa Sward',
//     'Chelsea Galaviz',
//     'Rema Prochaska',
//     'Dustin Spurrier',
//     'Rosalva Merideth',
//     'Daniella Pleiman',
//     'Marlys Melvin',
//     'Sherice Orner',
//     'Odelia Madere',
//     'Keisha Mckinsey',
//     'Gary Vereen',
//     'Terrilyn Joynes',
//     'Solomon Flanders',
//     'Dedra Beech',
//     'Ken Demont',
//     'Loan Felder',
//     'Elba Isherwood',
//     'Fidelia Felan',
//     'Malik Kirshner',
//     'Ashleigh Veit',
//   ];
//   var s: Student[] = [];
//   names.forEach((name, i) => {
//     var [f, l] = name.split(" ");
//     s.push({
//       id: i + 1,
//       firstName: f,
//       lastName: l,
//       parents: {
//         parentOne: names[Math.floor(Math.random() * names.length)],
//         parentTwo: names[Math.floor(Math.random() * names.length)],
//         parentThree: names[Math.floor(Math.random() * names.length)],
//       }
//     });
//   });

//   if (!getItem(StorageKeys.STUDENT_LIST)) {
//     setItem(StorageKeys.STUDENT_LIST, s);
//   }
// }