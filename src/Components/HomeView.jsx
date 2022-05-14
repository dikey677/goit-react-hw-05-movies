import { useState, useEffect } from "react"
import HomePageAPI from './Sevices/FetchAPI'
import {Link, useLocation} from 'react-router-dom'

export default function HomeView() {
    const [hits, setHits] = useState(null);
    const match = useLocation()
    // console.log(match)

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
                    <Link to={`${match.pathname}/${hit.id}`} className="home-list__title">
                        {hit.title}
                    </Link>
                </li>)}
        </ul>
    )
}