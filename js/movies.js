fetch("data/movies-2026.json")
  .then(response => response.json())
  .then(movies => {
    const container = document.getElementById("movie-list");

    if (!movies.length) {
      container.innerHTML = "<p>No movies added yet.</p>";
      return;
    }

    let ul = document.createElement("ul");

    movies.forEach(movie => {
      let li = document.createElement("li");
      let a = document.createElement("a");

      a.href = movie.telegram;
      a.target = "_blank";
      a.textContent = movie.name;

      li.appendChild(a);
      ul.appendChild(li);
    });

    container.appendChild(ul);
  })
  .catch(error => {
    console.error("Error loading movies:", error);
  });
