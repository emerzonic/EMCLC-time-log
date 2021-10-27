import React from 'react';
import Modal from 'react-modal';

interface ReportReminderComponentProps {
  isOpen: boolean;
  setIsModalOpen: (flag: boolean) => void;
  handleAction: () => void;
}
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backGroundColor: 'red',
  },
};
Modal.setAppElement('#root');

export function ReportReminderComponent(props: ReportReminderComponentProps) {

  return (

    <Modal
      isOpen={props.isOpen}
      onRequestClose={() => props.setIsModalOpen(false)}
      style={customStyles}
    >

      <div className="modal-header">
        <h5 className="modal-title h1">Your Report Generation Reminder</h5>
      </div>
      <div className="modal-body">
        <h4 className="bg-warning p-4">This is a reminder to generate student timesheet reports before they are deleted by the system.</h4>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={() => props.setIsModalOpen(false)}>{<i className="fa-solid fa-x"></i>} Close</button>
        <button type="button" className="btn btn-primary" onClick={() => props.handleAction()}>{<i className="fa-solid fa-x"></i>}Go To Reports</button>
      </div>
    </Modal>);
}
