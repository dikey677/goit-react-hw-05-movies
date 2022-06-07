import FindForm from '../FindForm'
import MovieByKeyWord from '../Sevices/FetchAPIMovieKeyWord'
import { useState } from "react"

export default function MoviesPage() {
    const [query, setQuery] = useState('');
    const [dataQuery, setDataQuery] = useState(null);

    const onInputChange = evt => {
        setQuery(evt.target.value)
    }
    console.log(`queryState: ${query}`)

    const onSubmitForm = evt => {
        evt.preventDefault()

        MovieByKeyWord.FetchAPIMovieByKeyWord(query)
            .then(data => { 
                setDataQuery(data)
            })
            .catch(err => { 
                console.log(err)
            })
    }

    console.log(dataQuery)

    return (
        <FindForm onClick={onSubmitForm} onChange={onInputChange}/>
    )
}