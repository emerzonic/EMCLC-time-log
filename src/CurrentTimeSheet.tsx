import React, { useEffect, useState } from 'react';
import { TimeSheetRecord, StorageKeys, TimeSheet, Student } from './types';
import { getTodayDate, parseDate } from "./dateUtil";
import { SignInModal } from "./SignInModal";
import { SortSetting, TimeSheetTable } from './TimeSheetTable';
import { getItem, setItem } from './appStorageManager';
import { SortValues } from './utilities';

export interface CurrentTimeSheetProps {
  signal: any,
  setSignal: (e: any) => void
}

export function CurrentTimeSheet(props: CurrentTimeSheetProps) {
  const [todayDate] = useState(getTodayDate());
  const [timeSheet, setTimeSheet] = useState<TimeSheet | undefined>(update());
  const [signal, setSignal] = useState(null);
  function update() {
    const timeSheets = getItem<TimeSheet[]>(StorageKeys.TIME_SHEETS) ?? [];
    const todayTimeSheet = timeSheets.find((timeSheet: TimeSheet) => timeSheet.date === getTodayDate());

    if (todayTimeSheet) {
      return todayTimeSheet;
    }

    let studentList = getItem<Student[]>(StorageKeys.STUDENT_LIST) ?? [];

    if (studentList.length) {
      const records: TimeSheetRecord[] = studentList
        .filter(s => s.isActive)
        .map(({ id, firstName, lastName }) => ({ id, firstName, lastName }) as TimeSheetRecord);

      if (records.length) {
        const newTimeSheet: TimeSheet = {
          id: Date.now(),
          date: todayDate,
          timeSheetRecords: records
        };

        const latestTimeSheets = timeSheets.filter(t => {
          const timeSheetDate = parseDate(t.date);
          const diff = Math.round((timeSheetDate - parseDate(todayDate)) / (1000 * 60 * 60 * 24));
          return diff < 99;
        });

        const updatedTimeSheets = [...latestTimeSheets, newTimeSheet];
        setItem(StorageKeys.TIME_SHEETS, updatedTimeSheets);
        return newTimeSheet;
      }
    }
  }

  const sort = (sortSetting: SortSetting) => {
    const timeSheet = update();
    if (timeSheet) {
      timeSheet.timeSheetRecords = SortValues<TimeSheetRecord>(timeSheet?.timeSheetRecords, sortSetting);
    }
    setTimeSheet(timeSheet);
  }

  useEffect(() => {
    const timeSheet = update();
    setTimeSheet(timeSheet);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.signal])

  return (
    <div className="fade-in">
      <div className="d-flex justify-content-between">
        <h2 className="text-left d-print-none">Time Sheet</h2>
        <button onClick={props.setSignal} type="button" className="btn btn-primary btn-md mb-2" data-toggle="modal" data-target="#addNewTimeLogModal">{<i className="fa fa-plus-circle" aria-hidden="true"></i>} Create New Time Sheet</button>
      </div>
      <TimeSheetTable timeSheet={timeSheet as TimeSheet} setSignal={setSignal} sort={sort} />
      <SignInModal setTimeSheet={setTimeSheet} signal={signal} />
    </div>
  );
}


