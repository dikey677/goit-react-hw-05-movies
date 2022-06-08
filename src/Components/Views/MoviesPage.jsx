import FindForm from '../FindForm'
import MovieByKeyWord from '../Sevices/FetchAPIMovieKeyWord'
import { useState, useEffect } from "react"
import { Link, useSearchParams, useLocation } from 'react-router-dom'

export default function MoviesPage() {
    const [currentValue, setCurrentValue] = useState('');
    const [query, setQuery] = useState('');
    const [dataQuery, setDataQuery] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const match = useLocation();
    const searchQuery = searchParams.get('query');
    console.log('SEARCHQUERY', searchQuery)
     console.log('MATCH', match)

    useEffect(() => { 
       
        if (query !== "") {
         MovieByKeyWord.FetchAPIMovieByKeyWord(query)
            .then(data => { 
                setDataQuery(data.results)
            })
            .catch(err => { 
                console.log(err)
            })
            }
    }, [query])

    function onInputChange(currentValue) {
        setCurrentValue(currentValue)
       
    }
    
    function onSubmitForm (evt) {
        evt.preventDefault()
        setQuery(currentValue)
        setSearchParams({ query: currentValue })
    }

    console.log(dataQuery)

  
    return (
        <div>
            <FindForm onSubmit={onSubmitForm} value={query} onChange={onInputChange} />

            <div>
                <ul className="home-list">
                    {dataQuery && dataQuery.map(film => {
                        return (<li key={film.id} className="home-list__item">
                            <Link to={`${match.pathname}/${film.id}`} className="home-list__title">
                                {film.title}
                            </Link>
                    </li>)})}
                </ul>
            </div>
        </div>


    )
}