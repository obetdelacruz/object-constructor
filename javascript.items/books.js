//Write a constructor for making "Book" objects.
//Your book objects should have the book's title, author, the number of pages, isRead
const library = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = false;
  this.getInfo = function () {
    return `${title} by ${author}, ${pages}, ${
      this.isRead ? "already read" : "not read yet"
    }`;
  };
}

const book1 = new Book("The Hobbit", "J.R.R Tolkien", 295);
library.push(book1);
book1.isRead = true;

const book2 = new Book("Tree", "William Wordsworth", 1);
library.push(book2);

console.log(library.forEach((book) => console.log(book.getInfo())));
