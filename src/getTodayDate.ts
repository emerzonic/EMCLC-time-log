
export function getTodayDate() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as Intl.DateTimeFormatOptions;
  return new Intl.DateTimeFormat('en-US', options).format(new Date());
}
;
