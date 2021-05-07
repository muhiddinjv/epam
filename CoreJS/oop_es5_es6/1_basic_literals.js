const book1 = {
  title: 'book one',
  author: 'Muhiddin',
  year: 2021,
  bestseller: true,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year} Is it a bestseller? ${this.bestseller}!`
  }
}

const book2 = {
  title: 'book two',
  author: 'Dale',
  year: 2020,
  bestseller: false,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}. Is it a bestseller? ${this.bestseller}!`
  }
}
console.log(book1.getSummary());
console.log(book2.getSummary());
