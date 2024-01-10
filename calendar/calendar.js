function createEvent(title, month, day) {
  var event = {
    title: title,
    month: month
  };

  if(day > 0 && day < 32) {
    event.day = day;
  } else {
    return `Error: ${day} is not a valid day`
  };

  return event;
};

function createCalendar(name, events) {
  var calendar = {
    owner: name,
    events: events
  };

  return calendar;
}

module.exports = {
  createEvent,
  createCalendar
};