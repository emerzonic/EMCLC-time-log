export interface TimeLog {
  id: number,
  date: string,
  studentList: Child[]
}

export interface Child {
  id: number;
  firstName: string;
  lastName: string;
  signInTime?: string | null;
  signOutTime?: string | null;
  signInParent?: string | null;
  signOutParent?: string | null;
}


export interface CurrentTimeLogsProps {

}

export enum Action {
  SIGN_IN = 'Sign In',
  SIGN_OUT = 'Sign Out',
  RESET = 'Reset'
}


export interface UpdateActionPayload {
  id?: number,
  action?: Action
}

export interface Student {
  id: number | null;
  firstName: string;
  lastName: string;
  parentOrGuardians: string[];
}

export interface LooksLikeObject {
  [key: string]: any;
}

export enum StorageKeys {
  ACTION_PAYLOAD = '__$actionPayload',
  TIME_LOGS = '__$timelogs',
  STUDENT_LIST = '__$studentList',
}