import CastById from "../Sevices/FetchAPICast";
import { useState, useEffect } from "react"

export default function Cast({id}) { 
    const [casts, setCasts] = useState(null)

    useEffect(() => {
        CastById.fetchAPICast(id)
            .then(data => {
                setCasts(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [id])
    
    console.log(casts)

    return (
        <div className="cast">
            

            {casts && (
                <ul className="cast__list">
                    {casts.cast.map(cast =>
                        <li key={cast.cast_id} className="cast__item">
                            <p className="cast__item-name">{cast.name}</p>
                            <p className="cast__item-character">{cast.character}</p>
                            <img className="cast__item-image" src={cast.profile_path && `https://image.tmdb.org/t/p/w300/${cast.profile_path}`} alt={cast.original_name} width="200"/>
                        </li>)}
                </ul>)
            }
        </div>
    )
}