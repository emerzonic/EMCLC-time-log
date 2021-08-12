import React, { useEffect, useState } from 'react';
import { TimeSheetRecord, StorageKeys, TimeSheet } from './types';
import { getTodayDate } from "./dateUtil";
import { DigitalClock } from "./DigitalClock";
import { SignInModal } from "./SignInModal";
import { TimeLogsHistory } from './TimeLogsHistory';
import { SortSetting, TimeSheetTable } from './TimeSheetTable';
import { getItem } from './appStorageManager';
import { SortValues } from './utilities';

export interface CurrentTimeSheetProps {
  signal: any
}
export function CurrentTimeSheet(props: CurrentTimeSheetProps) {
  const [timeLog, setTimeLog] = useState<TimeSheet | undefined>(update());
  const [signal, setSignal] = useState(null);
  function update() {
    const timeLogs = getItem<TimeSheet[]>(StorageKeys.TIME_SHEETS) ?? [];
    const todayTimeLog = timeLogs.find((log: TimeSheet) => log.date === getTodayDate());
    return todayTimeLog;
  }

  const sort = (sortSetting: SortSetting) => {
    const timeSheet = update();
    if (timeSheet) {
      timeSheet.timeSheetRecords = SortValues<TimeSheetRecord>(timeSheet?.timeSheetRecords, sortSetting);
    }
    setTimeLog(timeSheet);
  }


  useEffect(() => {
    const timeSheets = update();
    setTimeLog(timeSheets);
  }, [props.signal])

  return (
    <div className="fade-in">
      <h1 className="pt-4">{timeLog?.date || getTodayDate()}</h1>
      <DigitalClock />
      <TimeSheetTable timeLog={timeLog as TimeSheet} setSignal={setSignal} sort={sort} />
      <TimeLogsHistory />
      <SignInModal setTimeLog={setTimeLog} signal={signal} />
    </div>
  );
}


