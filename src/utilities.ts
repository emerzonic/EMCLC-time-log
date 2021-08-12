import { ORDER, SortSetting } from "./TimeSheetTable";
import { TimeSheetRecord, LooksLikeObject, Student } from "./types";

export function SortValues<T>(values: LooksLikeObject[], sortSetting: SortSetting) {
  if (sortSetting.type === 'number') {
    return values.sort(sortNumbers(sortSetting)) as T[];
  }
  return values.sort(sortStrings(sortSetting)) as T[];
}

function sortNumbers(sortSetting: SortSetting): ((a: LooksLikeObject, b: LooksLikeObject) => number) | undefined {
  return (a: LooksLikeObject, b: LooksLikeObject) => {
    const aValue = a[sortSetting.field] ?? 0;
    const bValue = b[sortSetting.field] ?? 0;
    console.log(aValue, bValue);
    if (sortSetting.order === ORDER.ASC) {
      return aValue - bValue;
    }

    return bValue - aValue;
  };
}

function sortStrings(sortSetting: SortSetting): ((a: LooksLikeObject, b: LooksLikeObject) => number) | undefined {
  return (a: LooksLikeObject, b: LooksLikeObject) => {
    const aValue = a[sortSetting.field]?.toLowerCase();
    const bValue = b[sortSetting.field]?.toLowerCase();
    console.log(aValue, bValue);
    if (sortSetting.order === ORDER.ASC) {
      return sortAsending(aValue, bValue);
    }

    return sortDesending(aValue, bValue);
  };
}

function sortAsending(a: string, b: string) {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }

  return 0;
}

function sortDesending(a: string, b: string) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }

  return 0;
}

const sortByLastName = (students: Student[] | TimeSheetRecord[]) => {
  return students.sort((a: Student | TimeSheetRecord, b: Student | TimeSheetRecord,) => {
    const aFastName = a.lastName.toLowerCase();
    const bLastName = b.lastName.toLowerCase();

    if (aFastName < bLastName) {
      return -1;
    }
    if (aFastName > bLastName) {
      return 1;
    }

    return 0;
  })
}
