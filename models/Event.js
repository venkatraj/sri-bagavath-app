class Event {
  constructor(id, title, description, host, venue, price, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.host = host;
    this.venue = venue;
    this.price = price;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

export default Event;
