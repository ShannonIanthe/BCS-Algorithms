// write a function called moviesDB which we use to create a movie database.
// this function should take 3 arguments an array(the actual db), a genre, 
// and an object (the movie), it should check if the genre exists and if it 
// doesn't it should add it on.
// it should also check if the movie exists and add it on if it doesn't.
// see the example of the data structure you MUST follow.
// if the movie is already present it should not add it again and it should 
// instead return the following message:
// 'the movie the < YOUR_MOVIE_GOES_HERE > is already in the database!'
// try to use .findIndex() to check fir the nested items like genre or movie

function moviesDB(arr, genre, movieObj){

	var genreIndex = arr.findIndex(item => item.genre === genre)
	if(genreIndex < 0){
		arr.push({genre:genre, movies:[] })
		genreIndex = arr.length -1
	}
	var movieIndex = arr[genreIndex].movies.findIndex( movieItem => item.movieItem === movieObj.title)
	if (movieIndex < 0){
		arr[genreIndex].movie.push(movieObj)
		return movieObj;
	}
	else {
		return `The movie ${movieObj.title} is already in the database!`
	}
}


module.exports ={
	moviesDB
}