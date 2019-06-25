import MoviesDb from '../../src/db/movies-db';

export function getMovie(req, res, next){
  const movie = MoviesDb.getInstance().get(req.params.id);
  res.send(200, movie);
}

export function putMovie(req, res, next){
  MoviesDb.getInstance().add(req.body);
  res.send(201);
}

export function deleteMovie(req, res, next){
  MoviesDb.getInstance().delete(req.params.id);
  res.send(200);
}