import React, { useEffect, useState } from 'react';
import { Child, StorageKeys, TimeLog } from './types';
import { getTodayDate } from "./dateUtil";
import { DigitalClock } from "./DigitalClock";
import { SignInModal } from "./SignInModal";
import { TimeLogsHistory } from './TimeLogsHistory';
import { SortSetting, TimeSheetTable } from './TimeSheetTable';
import { getItem } from './appStorageManager';
import { SortValues } from './utilities';

export interface CurrentTimeLogsProps {
  signal: any
}
export function CurrentTimeLogs(props: CurrentTimeLogsProps) {
  const [timeLog, setTimeLog] = useState<TimeLog | undefined>(update());
  const [signal, setSignal] = useState(null);
  function update() {
    const timeLogs = getItem<TimeLog[]>(StorageKeys.TIME_LOGS) ?? [];
    const todayTimeLog = timeLogs.find((log: TimeLog) => log.date === getTodayDate());
    return todayTimeLog;
  }

  const sort = (sortSetting: SortSetting) => {
    const timeSheet = update();
    if (timeSheet) {
      timeSheet.studentList = SortValues<Child>(timeSheet?.studentList, sortSetting);
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
      <TimeSheetTable timeLog={timeLog as TimeLog} setSignal={setSignal} sort={sort} />
      <TimeLogsHistory />
      <SignInModal setTimeLog={setTimeLog} signal={signal} />
    </div>
  );
}


