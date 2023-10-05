'use strict';
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);
let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	ganres: [],
	privat: false
};
let oneOfLastFilms_1 = prompt('Один из последних просмотреных фильмов?', ''),
	rateIt_1 = +prompt('На сколько оцените его?', ''),
	oneOfLastFilms_2 = prompt('Один из последних просмотреных фильмов?', ''),
	rateIt_2 = +prompt('На сколько оцените его?', '');
personalMovieDB.movies[oneOfLastFilms_1] = rateIt_1;
personalMovieDB.movies[oneOfLastFilms_2] = rateIt_2;
console.log(personalMovieDB);




