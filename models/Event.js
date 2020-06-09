class Event {
  constructor(id, name, host, venue, isOffline = true) {
    this.id = id;
    this.name = name;
    this.host = host;
    this.venue = venue;
    this.isOffline = isOffline;
  }
}

export default Event;
