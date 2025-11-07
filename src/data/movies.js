export const moviesDatabase = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: ["Drama"],
    director: "Frank Darabont",
    actors: ["Tim Robbins", "Morgan Freeman"],
    awards: ["Oscar Nomination - Best Picture", "Oscar Nomination - Best Actor"],
    poster: "https://www.themoviedb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    genre: ["Crime", "Drama"],
    director: "Francis Ford Coppola",
    actors: ["Marlon Brando", "Al Pacino"],
    awards: ["Oscar Winner - Best Picture", "Oscar Winner - Best Actor"],
    poster: "https://www.themoviedb.org/t/p/original/d6LbJZO8ruvXgOjjGRgjtdYpJS4.jpg"
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
    actors: ["Christian Bale", "Heath Ledger"],
    awards: ["Oscar Winner - Best Supporting Actor", "Golden Globe Winner"],
    poster: "https://eskipaper.com/images/the-dark-knight-wallpaper-5.jpg"
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    genre: ["Crime", "Drama"],
    director: "Quentin Tarantino",
    actors: ["John Travolta", "Samuel L. Jackson"],
    awards: ["Oscar Winner - Best Original Screenplay", "Golden Globe Winner"],
    poster: "https://www.themoviedb.org/t/p/original/jlVOS4D6ledQGxGdL0EIte3TXfL.jpg"
  },
  {
    id: 5,
    title: "Forrest Gump",
    year: 1994,
    genre: ["Drama", "Romance"],
    director: "Robert Zemeckis",
    actors: ["Tom Hanks", "Robin Wright"],
    awards: ["Oscar Winner - Best Picture", "Oscar Winner - Best Actor"],
    poster: "https://ntvb.tmsimg.com/assets/p15829_v_h8_aw.jpg?w=1280&h=720"
  },
  {
    id: 6,
    title: "Inception",
    year: 2010,
    genre: ["Action", "Sci-Fi", "Thriller"],
    director: "Christopher Nolan",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
    awards: ["Oscar Winner - Best Cinematography", "BAFTA Winner"],
    poster: "https://th.bing.com/th/id/R.69344c61a4a6d287887154402b6ec44c?rik=NSh%2fkMDTJYJN9Q&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f14300000%2fInception-inception-2010-14355479-1680-1050.jpg&ehk=d15hpS8Rply6BEkzuLI%2fbahZQFk5IL8MKCn8JQSGv5I%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 7,
    title: "The Matrix",
    year: 1999,
    genre: ["Action", "Sci-Fi"],
    director: "Lana Wachowski",
    actors: ["Keanu Reeves", "Laurence Fishburne"],
    awards: ["Oscar Winner - Best Visual Effects", "BAFTA Winner"],
    poster: "https://facts.net/wp-content/uploads/2023/06/47-facts-about-the-movie-the-matrix-1687246419.jpg"
  },
  {
    id: 8,
    title: "Goodfellas",
    year: 1990,
    genre: ["Crime", "Drama"],
    director: "Martin Scorsese",
    actors: ["Robert De Niro", "Ray Liotta"],
    awards: ["Oscar Winner - Best Supporting Actor", "BAFTA Winner"],
    poster: "https://indiehoy.com/wp-content/uploads/2020/10/goodfellas.jpg"
  },
  {
    id: 9,
    title: "The Silence of the Lambs",
    year: 1991,
    genre: ["Crime", "Drama", "Thriller"],
    director: "Jonathan Demme",
    actors: ["Jodie Foster", "Anthony Hopkins"],
    awards: ["Oscar Winner - Best Picture", "Oscar Winner - Best Director"],
    poster: "https://th.bing.com/th/id/R.8b015cbdc1a68e18e9f9e3b250cfb3e0?rik=y%2bgZqriOjNIOrA&riu=http%3a%2f%2fs18675.pcdn.co%2fwp-content%2fuploads%2f2016%2f01%2fsilence-of-the-lambs.jpg&ehk=Qct8WIiUgeCmnEI8e6X8SPKy8TURb1JpHbUJQS2Ao98%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 10,
    title: "Interstellar",
    year: 2014,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    director: "Christopher Nolan",
    actors: ["Matthew McConaughey", "Anne Hathaway"],
    awards: ["Oscar Winner - Best Visual Effects", "Golden Globe Nomination"],
    poster: "https://www.themoviedb.org/t/p/original/djS3XxneEFjCM6VlCiuuN8QavE6.jpg"
  },
  {
    id: 11,
    title: "Parasite",
    year: 2019,
    genre: ["Drama", "Thriller"],
    director: "Bong Joon Ho",
    actors: ["Song Kang-ho", "Lee Sun-kyun"],
    awards: ["Oscar Winner - Best Picture", "Oscar Winner - Best Director"],
    poster: "https://www.themoviedb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
  },
  {
    id: 12,
    title: "The Avengers",
    year: 2012,
    genre: ["Action", "Adventure", "Sci-Fi"],
    director: "Joss Whedon",
    actors: ["Robert Downey Jr.", "Chris Evans"],
    awards: ["Oscar Nomination - Best Visual Effects"],
    poster: "https://i0.wp.com/moviefail.com/wp-content/uploads/2012/05/avengers-4.jpeg?fit=1920%2C1080&ssl=1"
  }
];

// Función para obtener valores únicos para los filtros
export const getUniqueGenres = () => {
  const genres = moviesDatabase.flatMap(movie => movie.genre);
  return [...new Set(genres)].sort();
};

export const getUniqueDirectors = () => {
  const directors = moviesDatabase.map(movie => movie.director);
  return [...new Set(directors)].sort();
};

export const getUniqueActors = () => {
  const actors = moviesDatabase.flatMap(movie => movie.actors);
  return [...new Set(actors)].sort();
};

export const getUniqueYears = () => {
  const years = moviesDatabase.map(movie => movie.year);
  return [...new Set(years)].sort((a, b) => b - a);
};