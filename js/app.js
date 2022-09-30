const requestURL = "/js/peliculas.json";

async function fetchMoviesJSON() {
	const response = await fetch(requestURL);
	const movies = await response.json();
	return movies;
}

fetchMoviesJSON().then((movies) => {
	for (let index = 0; index < movies.peliculas.length; index++) {
		const moviesSection = document.getElementById("moviesSection");
		let id = movies.peliculas[index].id;
		let img = movies.peliculas[index].caratula;
		let title = movies.peliculas[index].nombre;
		let director = movies.peliculas[index].director;
		let gender = movies.peliculas[index].clasificacion;
		moviesSection.innerHTML += `
		<div class="card" style="width: 18rem;">
		    <img src="${img}" class="card-img-top" alt="${title}"></img>
		   	 	<div class="card-body">
		     		<h5 class="card-title">${id}. ${title}</h5>
		     		<p class="card-text">${director} - ${gender}</p>
			 		<div class="buttons">
		     			<a href="#" class="btn btn-primary"><img class="bi bi-pencil-square" src="../resources/pencil-square.svg"/></a> <a href="#" class="btn btn-primary"><img class="bi bi-pencil-square" src="../resources/trash.svg"/></a>
					</div>
				</div>
		</div>`;
	}
});
