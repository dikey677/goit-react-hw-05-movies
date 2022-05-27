import CastById from "../Sevices/FetchAPICast";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
                <div className="cast__list">
                    <Carousel emulateTouch={true} showArrows={false} autoPlay={true} interval={2800} autoFocus={true} infiniteLoop={true} showStatus={false} showThumbs={false} transitionTime={1000} width={300}>
                    {casts.cast.map(cast =>
                        <div key={cast.cast_id} className="cast__item">
                            <p className="cast__item-name">{cast.name}</p>
                            <p className="cast__item-character">{cast.character}</p>
                            <img className="cast__item-image" src={cast.profile_path && `https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt={cast.original_name}/>
                        </div>)}
                    </Carousel>
                </div>)
            }
        </div>
    )
}