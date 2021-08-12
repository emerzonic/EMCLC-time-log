import React, { useEffect, useState } from 'react';
import { TimeSheetRecord, StorageKeys, TimeSheet } from './types';
import { getTodayDate } from "./dateUtil";
import { DigitalClock } from "./DigitalClock";
import { SignInModal } from "./SignInModal";
import { TimeSheetsHistory } from './TimeSheetsHistory';
import { SortSetting, TimeSheetTable } from './TimeSheetTable';
import { getItem } from './appStorageManager';
import { SortValues } from './utilities';

export interface CurrentTimeSheetProps {
  signal: any
}
export function CurrentTimeSheet(props: CurrentTimeSheetProps) {
  const [timeSheet, setTimeSheet] = useState<TimeSheet | undefined>(update());
  const [signal, setSignal] = useState(null);
  function update() {
    const timeSheets = getItem<TimeSheet[]>(StorageKeys.TIME_SHEETS) ?? [];
    const todayTimeSheet = timeSheets.find((timeSheet: TimeSheet) => timeSheet.date === getTodayDate());
    return todayTimeSheet;
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
  }, [props.signal])

  return (
    <div className="fade-in">
      <h1 className="pt-4">{timeSheet?.date || getTodayDate()}</h1>
      <DigitalClock />
      <TimeSheetTable timeSheet={timeSheet as TimeSheet} setSignal={setSignal} sort={sort} />
      <TimeSheetsHistory />
      <SignInModal setTimeSheet={setTimeSheet} signal={signal} />
    </div>
  );
}


