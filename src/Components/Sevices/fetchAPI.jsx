const API_KEY = 'd3e123696f03f62391f72f8962a7794e';

function fetchAPI() { 
    return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
        .then(response => {
            return response.json()
            
        })
        .catch(err => { 
            console.log(err)
        })
}

const HomePageAPI = {
    fetchAPI
}

export default HomePageAPI
 
