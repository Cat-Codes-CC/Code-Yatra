// Using Local Storage To Get Movie Card And Movie Info If They Exist

window.addEventListener("load", function () {
  const storedData = localStorage.getItem("movie-data");

  if (storedData) {
    const movieData = JSON.parse(storedData);

    document.getElementsByClassName("add-movie")[0].style.display = "none";
    card_creation(movieData);
  }
});

async function getMovieInfo() {
  // Remove old movie card and error message if they exist
  if (document.querySelector(".movie-card")) {
    document.querySelector(".movie-card").remove();
  }

  if (document.querySelector(".error")) {
    document.querySelector(".error").remove();
  }

  if (document.querySelector(".movie-info")) {
    document.querySelector(".movie-info").remove();
  }

  // Get The Movie Name From the User

  const input = document.getElementById("search-input").value;

  // If the Input is Empty

  if (!input) {
    const error = document.createElement("p");
    error.className = "error";
    error.innerText = "Please enter a movie title!";
    document.body.appendChild(error);
    return;
  }

  // Try Or Catch Block For Fetching Data From API

  try {
    const apiKey = "YOUR_API_KEY"; // Replace with your actual API key

    const raw_response = await fetch(
      "https://www.omdbapi.com/?apikey=" + apiKey + "&t=" + input,
    );

    // Convertion of Raw Response TO Json To Access The Data

    const response = await raw_response.json();

    // If The Movie Name is Invalid Or Not Valid ON the API Server Then Show The Following Error Message

    if (response.Response === "False") {
      const error = document.createElement("p");
      error.className = "error";
      error.innerText = "Movie Not Found!";

      document.body.appendChild(error);
      return;
    }
    document.getElementsByClassName("add-movie")[0].style.display = "none";
    card_creation(response);
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
}

function card_creation(response) {
  // Creation of The Movie Card

  const card = document.createElement("div");

  card.className = "movie-card";

  // Card-Picture of the movie

  const pic = document.createElement("img");

  pic.src = response.Poster;
  pic.alt = response.Title;

  // Watched Button

  const watchedButton = document.createElement("button");
  watchedButton.className = "watched-button";
  watchedButton.innerText = "Watched ✔";

  // Remove Button
  const removeButton = document.createElement("button");
  removeButton.className = "remove-button";
  removeButton.innerText = "Remove ❌";

  // Positioning of the disclaimer to the bottom of the page

  const caution = document.querySelector(".disclaimer p");

  caution.style.position = "relative";
  caution.style.top = "300px";

  // Above The disclaimer there is a line which is used to separate the movie card and the disclaimer so here we are positioning that line to the bottom of the page

  const line = document.querySelector("hr");
  line.style.position = "relative";
  line.style.top = "300px";

  // Info About The Movie

  const info = document.createElement("div");
  info.className = "movie-info";

  // Title Of the movie

  const title = document.createElement("p");
  title.className = "movie-title";
  title.innerText = response.Title;

  info.appendChild(title);

  // Year Of the movie

  const year = document.createElement("p");
  year.className = "movie-year";
  year.innerText = "Year: " + response.Year;
  info.appendChild(year);

  // Genre Of the movie

  const genre = document.createElement("p");
  genre.className = "movie-genre";
  genre.innerText = "Genre: " + response.Genre;
  info.appendChild(genre);

  // Plot Of the movie

  const plot = document.createElement("p");
  plot.className = "movie-plot";
  plot.innerText = "Plot: " + response.Plot;
  info.appendChild(plot);

  // IMDB Rating Of the movie
  const rating = document.createElement("p");
  rating.className = "movie-rating";
  rating.innerText = "IMDB Rating: " + response.imdbRating;
  info.appendChild(rating);

  // Appending The Results To The Body

  card.appendChild(watchedButton);
  card.appendChild(removeButton);
  card.appendChild(pic);
  document.body.appendChild(card);
  document.body.appendChild(info);

  // Watched Button Functionality

  watchedButton.addEventListener("click", function () {
    localStorage.removeItem("movie-data");
    card.remove();
    info.remove();
    watchedButton.remove();
    removeButton.remove();
    document.getElementsByClassName("add-movie")[0].style.display = "block";
    caution.style.position = "static";
    line.style.position = "static";
    return;
  });

  removeButton.addEventListener("click", function () {
    localStorage.removeItem("movie-data");
    card.remove();
    info.remove();
    watchedButton.remove();
    removeButton.remove();
    document.getElementsByClassName("add-movie")[0].style.display = "block";
    caution.style.position = "static";
    line.style.position = "static";
    return;
  });

  localStorage.setItem("movie-data", JSON.stringify(response));
}
