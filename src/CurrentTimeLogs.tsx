import React, { useState } from 'react';
import { CurrentTimeLogsProps, StorageKeys, TimeLog } from './types';
import { getTodayDate } from "./dateUtil";
import { DigitalClock } from "./DigitalClock";
import { SignInModal } from "./SignInModal";
import { TimeLogsHistory } from './TimeLogsHistory';
import { TimeSheetTable } from './TimeSheetTable';

export function CurrentTimeLogs(props: CurrentTimeLogsProps) {
  const [timeLog, setTimeLog] = useState<TimeLog>(() => {
    const timeLogs = localStorage.getItem(StorageKeys.TIME_LOGS);
    const parsedTimeLogs = timeLogs ? JSON.parse(timeLogs) : [];
    const todayTimeLog = parsedTimeLogs.find((log: TimeLog) => log.date === getTodayDate());
    return todayTimeLog;
  });

  const [signal, setSignal] = useState<number>(0);

  return (
    <>
      <h1>{timeLog?.date || getTodayDate()}</h1>
      <DigitalClock />
      <TimeSheetTable timeLog={timeLog} setSignal={setSignal} />
      <TimeLogsHistory />
      <SignInModal setTimeLog={setTimeLog} signal={signal} />
    </>
  );
}


