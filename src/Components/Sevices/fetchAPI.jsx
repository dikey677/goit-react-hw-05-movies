export default function fetchAPI() { 
    fetch('https://api.themoviedb.org/3/movie/550?api_key=d3e123696f03f62391f72f8962a7794e')
        .then(response => { 
            if (response.ok) { 
                response.json()
                console.log(response)
            }

            throw new Error('Not found')
        })
}