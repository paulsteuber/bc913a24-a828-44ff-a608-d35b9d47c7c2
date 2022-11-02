export function germanDay(stringDate) {
  const date = new Date(stringDate);
  return date.toLocaleDateString("de-DE");
}

export function truncateStr(str, len) {
  str = str.length < len ? str : str.substring(0, len) + "...";
  return str;
}

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

export function sortEventsByDate(events) {
  return events.sort(function (a, b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
}
export function filterEvents(eventArr, filterArr) {
  filterArr.forEach((filterElem) => {
    eventArr = eventArr.filter((event) => event._id !== filterElem._id);
  });
  return eventArr;
}
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
