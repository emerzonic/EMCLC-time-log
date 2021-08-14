import React from 'react';
import { CSVLink } from "react-csv";

interface DownloadProps {
  data?: any;
  title?: string;
}
export function CsvDownload(props: DownloadProps) {
  return (
    <CSVLink data={props.data} filename={`${props.title}`}>
      <button className="btn  btn-sm btn-dark d-print-none"><i className="fa fa-download" aria-hidden="true"></i> Download Report</button>
    </CSVLink>);
}
