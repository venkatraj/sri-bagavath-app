class Event {
  constructor(id, name, host, mode, venue = null) {
    this.id = id;
    this.name = name;
    this.host = host;
    this.mode = mode;
    this.venue = venue;
  }
}

export default Event;
