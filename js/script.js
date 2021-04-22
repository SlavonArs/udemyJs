"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const film1 = prompt("Один из последних просмотренных фильмов?", "");
const rate1 = +prompt("'На сколько оцените его?", "");
const film2 = prompt("Один из последних просмотренных фильмов?", "");
const rate2 = +prompt("'На сколько оцените его?", "");

personalMovieDB.movies[film1] = rate1;
personalMovieDB.movies[film2] = rate2;

console.log(personalMovieDB);
