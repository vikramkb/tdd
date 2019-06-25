var express = require('express');
var router = express.Router();
import {getMovie, putMovie, deleteMovie} from './logic/movies';

router.get('/:id', function (req,res,next) {
  getMovie(req, res, next);
});

router.put('/', function (req, res, next) {
  putMovie(req, res, next);
});


router.delete('/:id', function (req, res, next) {
  deleteMovie(req, res, next);
});


module.exports = router;
