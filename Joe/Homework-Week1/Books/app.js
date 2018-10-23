'use strict';
{
  const booksInfo = {
    sapiens: {title:'Sapiens', language: 'English', author: 'Yuval Noah Harari,',},
    principles: {title:'Principles', language: 'English', author: 'Ray Dalio',},
    quiet: {title:'Quiet', language: 'English', author: 'Susan Cain',},
    the_war_of_art: { title:'The War of Art', language: 'English', author: 'Steven Pressfield',},
    the_little_prince: { title:'The Little Prince', language: 'English', author: 'Antoine de Saint-Exupéry',},
    mafalda: { title:'Mafalda', language: 'Spanish', author: 'Quino',},
    outliers: {title:'Outliers', language: 'English', author: 'Malcolm Gladwell',},
    the_hobit: { title:'The Hobit',language: 'English', author: 'J. R. R. Tolkien',},
    the_lord_of_the_flies: { title:'The Lord of the Flies', language: 'English', author: 'William Golding',},
    babar: {title:'Babar', language: 'French', author: 'Jean de Brunhoff',},
  };

  const bookCovers  = {
    sapiens: './img/book1.jpg',
    principles: './img/book2.jpg',
    quiet: './img/book3.jpg',
    the_war_of_art: './img/book4.jpg',
    the_little_prince: './img/book5.jpg',
    mafalda: './img/book6.jpg', 
    outliers: './img/book7.jpg',
    the_hobit: './img/book8.jpg',
    the_lord_of_the_flies: './img/book9.png',
    babar: './img/book10.jpg',
  };
 
  /*Working based in Giselle's code. Ive gone line by line through her code to understand how she did it. 
 I still need to grasp some ideas but I understand most of it. This homework is not finished yet*/
 
 function createBookElement(book, bookId) {
    let bookHtml = "<li id=" + bookId + "class='book'>" 
    + "<h2 class='bookTitle'>" + book.title + "</h2>\n"
    + "<img src=''><br><br>"
    + "<span class='bookAuthor'><b>Author:</b> " + book.author + " (" + book.language + ")</span>\n"
    + "</li>\n"
    return bookHtml;
};

  function makeList(booksInfo) {
    let bookListHtml = "<h1>Books List</h1>";
    bookListHtml += "<ul class='books'>";
    for (let bookId in booksInfo) {
        bookListHtml += createBookElement(booksInfo[bookId], bookId);
    }
    bookListHtml += "</ul>";

    return bookListHtml;
};

function addBookCovers() {
  Object.keys(bookCovers).forEach(bookId => {
    const bookElem = document.getElementById(bookId);
    const bookImgElems = bookElem.getElementsByTagName('img');

    for (let ix = 0; ix < bookImgElems.length; ix++) {
      const bookImgElem = bookImgElems.item(ix);
      bookImgElem.src = bookCovers[bookId];
    }
  });
}

let htmlContent = makeList(booksInfo);
document.writeln(htmlContent);
addBookCovers();
};