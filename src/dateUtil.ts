
export function getTodayDate() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } as Intl.DateTimeFormatOptions;
  return generate(options);
};

export function getCurrentTime() {
  const options = { timeStyle: 'short' } as Intl.DateTimeFormatOptions;
  return generate(options);
};

export function formatTime(date: Date | null) {
  if (!date) {
    return '';
  }

  const options = { timeStyle: 'short' } as Intl.DateTimeFormatOptions;
  return generate(options, date);
};

function generate(options: Intl.DateTimeFormatOptions, date?: Date) {
  return new Intl.DateTimeFormat('en-US', options).format(date ?? new Date());
}

