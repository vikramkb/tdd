import {assert} from 'chai';
import sinon from 'sinon';
import {getMovie, putMovie} from '../../../routes/logic/movies';
import MoviesDb from '../../../src/db/movies-db';

describe('Movies', () => {
  let sandbox = null;
  beforeEach("Movies", () => {
    sandbox = sinon.sandbox.create();
  });

  afterEach("Movies", () => {
    sandbox.restore();
  });

  it('add movies', () => {
    const moviesDb = new MoviesDb();
    sandbox.mock(MoviesDb).expects("getInstance").returns(moviesDb);
    const movie = {
      "key": "M1",
      "name": "movie name 1",
      "description": "move name 1 is added"
    };
    let req = {
      body: movie
    };
    let result = '';
    let res = {
      send: (code) => {
        result = code;
      }
    };
    let addMock = sandbox.mock(moviesDb).expects("add").withExactArgs(movie);
    putMovie(req, res);
    assert.equal(201, result);
    addMock.verify();
  });
});
