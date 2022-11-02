export function groupEventByDay(events) {
  // this gives an object with dates as keys
  let groupArray = {};
  events.forEach((event) => {
    const date = event.date.split("T")[0];
    if (groupArray[date]) {
      groupArray[date].events.push(event);
    } else {
      let newDay = {
        date: date,
        events: [event],
      };
      groupArray[date] = newDay;
    }
  });
  return groupArray;
}

export function germanDay(stringDate) {
  const date = new Date(stringDate);
  return date.toLocaleDateString("de-DE");
}

export function truncateStr(str, len) {
  str = str.length < len ? str : str.substring(0, len) + "...";
  return str;
}
