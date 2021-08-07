export interface TimeLog {
  id: number,
  date: string,
  studentList: Child[]
}

export interface Child {
  id: number;
  firstName: string;
  lastName: string;
  signInTime: string | null;
  signInHour: number;
  signOutTime: string | null;
  signOutHour: number;
  signInParent?: string | null;
  signOutParent?: string | null;
  totalDayHours: number;
}

export enum Action {
  SIGN_IN = 'Sign In',
  SIGN_OUT = 'Sign Out',
  CANCEL = 'Cancel'
}

export enum DetailAction {
  VIEW = 'view',
  EDIT = 'edit',
  DELETE = 'delete'
}

export interface DetailActionPayload {
  id?: number,
  action?: DetailAction
}

export enum View {
  TIME_SHEET = 'time sheet',
  MANAGE_STUDENTS = 'manage students',
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
  DETAIL_ACTION = '__$detailActionPayload',
}