document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5000/api/movies')
        .then(response => response.json())
        .then(data => {
            const moviesContainer = document.getElementById('movies');
            data.forEach(movie => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <div class="card-content">
                        <div class="card-title">${movie.title}</div>
                        <div class="card-details">
                            <div>Language: ${movie.language}</div>
                            <div>Year: ${movie.year}</div>
                            <div>Resolution: ${movie.resolution}</div>
                        </div>
                    </div>
                `;
                card.addEventListener('click', () => {
                    fetch('http://localhost:5000/api/movie?url=' + movie.url)
                        .then(response => response.json())
                        .then(data => {
                            window.location.href = "https://redecanais.foo" + data.url;
                        })
                        .catch(error => console.error('Error fetching movies:', error));
                });

                moviesContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching movies:', error));
});
