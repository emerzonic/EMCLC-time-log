
export function getTodayDate() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as Intl.DateTimeFormatOptions;
  return generate(options);
};

export function getCurrentTime() {
  const options =  { timeStyle: 'short' } as Intl.DateTimeFormatOptions;
  return generate(options);
};

function generate(options: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat('en-US', options).format(new Date());
}

