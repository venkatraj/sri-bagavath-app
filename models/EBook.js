class EBook {
  constructor(id, title, url, description = '') {
    (this.id = id), (this.title = title);
    this.url = url;
    this.description = description;
  }
}

export default EBook;