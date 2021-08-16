export interface TimeSheet {
  id: number,
  date: string,
  timeSheetRecords: TimeSheetRecord[]
}

export interface TimeSheetRecord {
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
  REPORTS = 'reports',
}

export interface UpdateActionPayload {
  id?: number,
  action?: Action
}

export interface Parents {
  parentOne: string;
  parentTwo?: string | null;
  parentThree?: string | null;
}

export interface Student {
  id: number | null;
  firstName: string;
  lastName: string;
  parents: Parents;
}

export interface LooksLikeObject {
  [key: string]: any;
}

export enum StorageKeys {
  ACTION_PAYLOAD = '__$actionPayload',
  TIME_SHEETS = '__$timelogs',
  STUDENT_LIST = '__$studentList',
  DETAIL_ACTION = '__$detailActionPayload',
  VIEW = '__$time_sheet_view',
}