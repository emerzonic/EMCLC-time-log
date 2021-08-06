import React, { useEffect, useState } from 'react';
import { StorageKeys, TimeLog } from './types';
import { getTodayDate } from "./dateUtil";
import { DigitalClock } from "./DigitalClock";
import { SignInModal } from "./SignInModal";
import { TimeLogsHistory } from './TimeLogsHistory';
import { TimeSheetTable } from './TimeSheetTable';
import { getItem } from './appStorageManager';

export interface CurrentTimeLogsProps {
 signal:any
}
export function CurrentTimeLogs(props: CurrentTimeLogsProps) {
  const update =() =>{
    const timeLogs = getItem<TimeLog[]>(StorageKeys.TIME_LOGS) ?? [];
    const todayTimeLog = timeLogs.find((log: TimeLog) => log.date === getTodayDate());
    return todayTimeLog;
  }

  const [timeLog, setTimeLog] = useState<TimeLog | undefined>(update());
  const [signal, setSignal] = useState(null);

 

  useEffect(() => {
    setTimeLog(update())
  }, [props.signal])

  return (
    <>
      <h1 className="pt-4">{timeLog?.date || getTodayDate()}</h1>
      <DigitalClock />
      <TimeSheetTable timeLog={timeLog as TimeLog} setSignal={setSignal} />
      <TimeLogsHistory />
      <SignInModal setTimeLog={setTimeLog} signal={signal} />
    </>
  );
}


