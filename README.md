## Summary

This project consists of two files: `script.js` and `index.html`.  `script.js` fetches movie data from a backend API (`http://localhost:5000/api/movies`), displays it as clickable cards, and redirects users to streaming URLs retrieved from a second API call (`http://localhost:5000/api/movie?url=<movie_url>`) prepended with "https://redecanais.foo".  `index.html` enhances this functionality by adding search and pagination features, allowing users to filter and browse movies efficiently. Both components rely on a backend API for data and employ the Fetch API for asynchronous requests. Error handling and DOM manipulation are implemented in both files.

## Tech Stack

HTML, CSS, JavaScript, Fetch API
