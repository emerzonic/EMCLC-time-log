import React, { useState } from 'react';

export function AddTimeLogModal(props: any) {
  const [date] = useState<string>(() => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as Intl.DateTimeFormatOptions;
    return new Intl.DateTimeFormat('en-US', options).format(new Date());
  });

  const handleSave = () => {
    const timeLogs = localStorage.getItem('timeLogs');
    const parsedTimeLogs = timeLogs ? JSON.parse(timeLogs) : [];

    if (parsedTimeLogs.find((log: any) => log.date === date)) {
      console.log("log for today already exist");
      return;
    }

    const studentList = localStorage.getItem('studentList');
    const parsedStudentList = studentList ? JSON.parse(studentList) : [];
    const newTimelog = { id: parsedTimeLogs.length + 1, date, studentList: parsedStudentList };
    const updatedTimeLogs = [...parsedTimeLogs, newTimelog];
    localStorage.setItem('timeLogs', JSON.stringify(updatedTimeLogs));
  };

  return (
    <div className="modal fade" id="addNewTimeLogModal" role="dialog" aria-labelledby="addNewTimeLogLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body text-center h1">
            <h5 className="modal-title text-center h6" id="addNewTimeLogLabel">Clicking Create button will create new time Logs for today</h5>
            <h3>{date}</h3>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button onClick={handleSave} type="button" className="btn btn-primary">Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}
