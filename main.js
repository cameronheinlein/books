import '/Users/cameron/Desktop/MIT/Week 17/Working With React Components_starter/Web Components and React Components/Create Custom Element/books.js';

window.addEventListener('load', () => {
    createBookList();
});

async function createBookList(){
    const response = await fetch('/Users/cameron/Desktop/MIT/Week 17/Working With React Components_starter/Web Components and React Components/Web Components in React/books.json');
    const json = await response.json();
    const books = document.getElementById('books');

    json.books.forEach((book) => {
        const element = document.createElement('mit-book');
        element.book = book;
        books.appendChild(element);

    })
}