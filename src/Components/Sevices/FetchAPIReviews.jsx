const API_KEY = 'd3e123696f03f62391f72f8962a7794e';

function fetchAPIReviews(movieId) { 
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
        .then(response => {
            return response.json()
            
        })
        .catch(err => { 
            console.log(err)
        })
}

const ReviewsById = {
    fetchAPIReviews
}

export default ReviewsById