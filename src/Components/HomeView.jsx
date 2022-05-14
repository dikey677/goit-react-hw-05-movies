import { useState, useEffect } from "react"
import HomePageAPI from './Sevices/FetchAPI'
import {Link} from 'react-router-dom'

export default function HomeView() { 
    const [hits, setHits] = useState(null);
    
    useEffect(() => {
        HomePageAPI.fetchAPI()
        .then(data => {
            setHits(data.results)
        })
        .catch(error => {
            console.log(error)
        })

        
        
    }, [])

    if (hits !== null) {
        console.log(hits)
    }

    return (
        <ul className="home-list">
            {hits !== null && hits.map(hit =>
                <li key={hit.id} className="home-list__item">
                    <Link to={`/home/${hit.id}`}>
                        {hit.title}
                    </Link>
                </li>)}
        </ul>
    )
}