const API_KEY = 'd3e123696f03f62391f72f8962a7794e';

function FetchAPIMovieByKeyWord(movieName) { 
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`)
        .then(response => {
            return response.json()
            
        })
        .catch(err => { 
            console.log(err)
        })
}

const MovieByKeyWord = {
    FetchAPIMovieByKeyWord
}

export default MovieByKeyWord