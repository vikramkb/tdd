let movies = {};

export default class MoviesDb {
  add(movie){
    movies[movie.key] = movie;
  }
  get(movieKey){
    return movies[movieKey];
  }
  delete(movieKey){
    delete movies[movieKey];
  }
  static getInstance() {
    return MoviesDb.instance;
  }
}

MoviesDb.instance = new MoviesDb();