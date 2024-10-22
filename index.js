// Your code here
const endpoint = 'http://localhost:3000/films'; 

async function fetchMovieData() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const movieData = await response.json();
        
        const { title, runtime, showtime, tickets_sold, capacity, poster } = movieData;

        const availableTickets = capacity - tickets_sold;

        // Now, display the details
        document.getElementById('movie-title').innerText = title;
        document.getElementById('movie-runtime').innerText = runtime;
        document.getElementById('movie-showtime').innerText = showtime;
        document.getElementById('available-tickets').innerText = availableTickets;
        document.getElementById('movie-poster').src = poster;

    } catch (error) {
        console.error('Error fetching movie data:', error);
    }
}

// Call the function when the page loads
window.onload = fetchMovieData;
