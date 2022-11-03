/**
 * @param {string} stringDate a string readable for js date class
 * @returns day month and year in german format as string
 */

export function germanDay(stringDate) {
  const date = new Date(stringDate);
  return date.toLocaleDateString("de-DE");
}
/**
 *
 * @param {string} stringDate a string readable for js date class
 * @returns time of day as string
 */
export function getTime(stringDate) {
  const date = new Date(stringDate);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return hours + ":" + minutes;
}
/**
 *
 * @param {string} str string which is to be shortened
 * @param {int} len number of allowed chars
 * @returns shortened string
 */
export function truncateStr(str, len) {
  str = str.length < len ? str : str.substring(0, len) + "...";
  return str;
}
/**
 *
 * @param {array} events contains multiple events as js object
 * @returns events grouped by day as key value array
 */
export function groupEventsByDay(events) {
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
/**
 *
 * @param {array} events contains multiple events as js object
 * @returns same array but sorted by date
 */
export function sortEventsByDate(events) {
  return events.sort(function (a, b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
}
/**
 *
 * @param {array} eventArr
 * @param {array} filterArr
 * @returns eventArr but without the events that are in the filterArr
 * */
export function filterEvents(eventArr, filterArr) {
  filterArr.forEach((filterElem) => {
    eventArr = eventArr.filter((event) => event._id !== filterElem._id);
  });
  return eventArr;
}
/**
 *
 * @param {string} query
 * @param {array} allEvents
 * @returns an array which contains all events whose title matches the search query
 */
export function filterByQuery(query, allEvents) {
  query = query.toLowerCase();

  let visibleEvents = JSON.parse(JSON.stringify(allEvents));
  if (query.length) {
    visibleEvents = [];
    allEvents.forEach((event) => {
      /** search query matches with event title */
      const eventTitle = event.title.toLowerCase();
      if (!eventTitle.includes(query)) {
        return;
      }
      visibleEvents.push(event);
    });
  }
  return visibleEvents;
}
