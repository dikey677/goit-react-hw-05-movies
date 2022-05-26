const API_KEY = 'd3e123696f03f62391f72f8962a7794e';

function fetchAPICast(movieId) { 
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
        .then(response => {
            return response.json()
            
        })
        .catch(err => { 
            console.log(err)
        })
}

const CastById = {
    fetchAPICast
}

export default CastById