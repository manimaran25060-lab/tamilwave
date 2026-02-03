fetch("data/movies-2026.json")
  .then(res => res.json())
  .then(movies => {
    const list = document.getElementById("movie-list");
    const ul = document.createElement("ul");

    movies.forEach(movie => {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="${movie.telegram}" target="_blank">
          ${movie.name} (${movie.year})
        </a>
      `;
      ul.appendChild(li);
    });

    list.appendChild(ul);
  })
  .catch(err => {
    document.getElementById("movie-list").innerHTML =
      "<p>Movies loading failed.</p>";
  });
