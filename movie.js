class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;  
}
}

function getPG(movieArray) {
    const pgMovies = [];
    for (const movie of movieArray) {
      if (movie.rating === "PG") {
        pgMovies.push(movie);
      }
    }
    return pgMovies;
  }

  const movies = [
    new Movie("The Lion King", "Roger Allers", "PG"),
    new Movie("Inception", "Christopher Nolan", "PG-13"),
    new Movie("Toy Story", "John Lasseter", "G"),
    new Movie("Finding Nemo", "Andrew Stanton", "G"),
    new Movie("Frozen", "Chris Buck", "PG"),
  ];
  const pgMovies = getPG(movies);

const flim1=new Movie("avengers","marvel studios","IMDB-9");
const flim2=new Movie("avengers","marvel studios");
const flim3=new Movie("Casino Royale","Eon Productions","PG­13");
console.log(flim1);
console.log(flim2);
console.log(flim3);
console.log(pgMovies);
    
