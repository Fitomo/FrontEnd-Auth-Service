export function isoDateFormatter(isoDate) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const jsDate = new Date(isoDate);
  const year = jsDate.getFullYear();
  const month = months[jsDate.getMonth()];
  const date = jsDate.getDate();
  return `${month} ${date}, ${year}`;
}
