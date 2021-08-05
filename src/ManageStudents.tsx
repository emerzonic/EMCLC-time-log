import React from 'react';

export function ManageStudents(props: any) {
  return (
    <table className="table table-hover table-sm table-light">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Time In</th>
          <th scope="col">Time Out</th>
          <th scope="col">Parent/Guardian</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td><button type="button" className="btn btn-primary btn-sm">Sign In</button></td>
          <td><button type="button" className="btn btn-primary btn-sm disabled">Sign Out</button></td>
          <td>David Otto</td>
          <td><button type="button" className="btn btn-primary btn-sm disabled">Cancel</button></td>

        </tr>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>6:00 AM</td>
          <td><button type="button" className="btn btn-primary btn-sm">Sign Out</button></td>
          <td>David Otto</td>
          <td><button type="button" className="btn btn-primary btn-sm disabled">Cancel</button></td>
        </tr>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>6:00 AM</td>
          <td>4:00 PM</td>
          <td>David Otto</td>
          <td><button type="button" className="btn btn-primary btn-sm disabled">Cancel</button></td>
        </tr>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>6:00 AM</td>
          <td>4:00 PM</td>
          <td>David Otto</td>
          <td><button type="button" className="btn btn-primary btn-sm disabled">Cancel</button></td>
        </tr>

      </tbody>
    </table>
  );
}
