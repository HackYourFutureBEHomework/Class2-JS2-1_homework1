'use strict';

const bookTitles = [
  "complete_reference_html5_and_css1",
  "css_the_missing_manual2",
  "effective_javascript3",
  "eloquent_javascript4",
  "html5_the_missing_manual5",
  "js_and_jquery_interactive_front_end_web_development6",
  "learning_react_native7",
  "learning_web_design8",
  "professional_javascript_for_web_developers9",
  "javascript_the_good_parts10"
];


let listedTitles = [];



let allBooksInformation = {
  complete_reference_html5_and_css1: {
    title: "complete_reference_html5_and_css1",
    year: "2000",
    author: "John",
    language: "English"
  },
  css_the_missing_manual2: {
    title: "css_the_missing_manual2",
    year: "2001",
    author: "Bobby",
    language: "English"
  },
  effective_javascript3: {
    title: "effective_javascript3",
    year: "2002",
    author: "Bill",
    language: "English"
  },
  eloquent_javascript4: {
    title: "eloquent_javascript4",
    year: "2003",
    author: "Arthur",
    language: "English"
  },
  html5_the_missing_manual5: {
    title: "html5_the_missing_manual5",
    year: "2004",
    author: "Ken",
    language: "Hebrew"
  },
  js_and_jquery_interactive_front_end_web_development6: {
    title: "js_and_jquery_interactive_front_end_web_development6",
    year: "2005",
    author: "Lisa",
    language: "English"
  },
  learning_react_native7: {
    title: "learning_react_native7",
    year: "2006",
    author: "Kate",
    language: "Ukrainian"
  },
  learning_web_design8: {
    title: "learning_web_design8",
    year: "2007",
    author: "Elsa",
    language: "English"
  },
  professional_javascript_for_web_developers9: {
    title: "professional_javascript_for_web_developers9",
    year: "2008",
    author: "Mike",
    language: "French"
  },
  javascript_the_good_parts10: {
    title: "javascript_the_good_parts10",
    year: "2009",
    author: "Kelly",
    language: "Russian"
  }


}

function createList() {
  for (let i = 0; i < bookTitles.length; i++) {
    listedTitles.push("<li>" + "<h2>" + Object.entries(allBooksInformation)[i][0] + "</h2>" + "<h3>" + "<i>" + Object.values(allBooksInformation)[i].title + "</i>" + "</h3>" + "<h3>" + Object.values(allBooksInformation)[i].author + "</h3>" + "<h3>" + Object.values(allBooksInformation)[i].year + "</h3>" + "<h3>" + Object.values(allBooksInformation)[i].language + "</h3>" + "</li>");
  }
  listedTitles.unshift("<ul>")
  listedTitles.push("</ul>")
  return document.body.innerHTML = listedTitles;
  //return listedTitles;
}
//document.getElementById.booksList = listedTitles;
createList()
//console.log(createList());
//document.getElementById('').innerHTML = result;
// // +++++++++++++++Object constructor
// function Books(bookTitles, authorName, originalLanguage, editionYear) {
//   this.book = bookTitles;
//   this.bookDetails = {
//     author: authorName,
//     language: originalLanguage,
//     year: editionYear
//   }
// }

// const book1 = []
// for (let i = 0; i < bookTitles.length; i++) {
//   book1.push(new Books(bookTitles[i], authorName[i], originalLanguage[i], editionYear[i]));
// }
// console.log(book1)
// // ++++++++++++++++++=end of Object constructor


