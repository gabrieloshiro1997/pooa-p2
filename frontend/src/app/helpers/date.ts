function minutesWithLeadingZeros(date: Date) {
  return (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
}

function secondsWithLeadingZeros(date: Date) {
  return (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
}

export function parseDate(date: Date): string {
  return `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} - ${date.getHours()}:${minutesWithLeadingZeros(date)}:${secondsWithLeadingZeros(date)}`;
}
