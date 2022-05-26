import ReviewsById from "../Sevices/FetchAPIReviews";
import { useState, useEffect } from "react"

export default function Reviews({id}) { 
    const [reviews, setReviews] = useState(null)

    useEffect(() => {
        ReviewsById.fetchAPIReviews(id)
            .then(data => {
                setReviews(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [id])

    return (
        <div className="review">
            <ul className="review-list">
            {reviews && reviews.results.map(res => 
                    <li key={reviews.id} className="review-list__item">
                        <p className="review-list__name">Author name: {res.author}</p>
                        <span className="review-list__content">{res.content}</span>
                    </li>
                )
            }
             </ul>  
        </div>
    )
}