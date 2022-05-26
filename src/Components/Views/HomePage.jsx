import { useState, useEffect } from "react"
import HomePageAPI from '../Sevices/FetchAPI'
import { Link, useLocation } from 'react-router-dom'


export default function HomePage() {
    const [hits, setHits] = useState(null);
    const match = useLocation()

    useEffect(() => {
        HomePageAPI.fetchAPI()
        .then(data => {
            setHits(data.results)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <div>
            <h1 className="home-title">Tranding today</h1>
            <ul className="home-list">
                {hits !== null && hits.map(hit =>
                    <li key={hit.id} className="home-list__item">
                        <Link to={`${match.pathname}/${hit.id}`} className="home-list__title">
                            {hit.title}
                        </Link>
                    </li>)}
            </ul>
        </div>
    )
}