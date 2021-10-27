import React from 'react';
import { CSVLink } from "react-csv";
import { setItem } from './appStorageManager';
import { StorageKeys } from './types';

interface DownloadProps {
  data?: any;
  title?: string;
}
export function CsvDownload(props: DownloadProps) {
  const setReportGenerated = () => setItem(StorageKeys.REPORT_GENERATED, true);
  return (
    <CSVLink onClick={setReportGenerated} data={props.data} filename={`${props.title}.csv`}>
      <button className="btn  btn-sm btn-dark"><i className="fa fa-download" aria-hidden="true"></i> Download</button>
    </CSVLink>
  );
}
