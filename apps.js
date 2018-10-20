let books = {
        title1: { title: 'chamber secrets', language: 'English', author: 'harry potter'},
        title2: { title: 'the golden bowl', language: 'english', author: 'henry james'},
        title3: { title: 'a passage to India', language: 'english', author: 'em forste'},
// //      title4: { title: ' breathing_lessons_', language: 'English', author: 'anne tyler'}
}

//let text = "<ul>";
for (let x in books){
        //x = "title: " + books.title1.title + " language: " + books.title1.language + " author: " + books.title1.author;
        let string2 = books[x];
        //console.log(x);
        //console.log(string2);
        text1 = document.getElementById("demo1").innerHTML +=  "<li>" + string2.title + " language: " + string2.language + " author: " + string2.author;
        //console.log(text1);
    
}