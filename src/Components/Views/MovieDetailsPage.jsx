import { useState, useEffect, lazy, Suspense } from "react"
import MoviePageByID from '../Sevices/FetchAPIById'
import { useNavigate, useParams, Link, Routes, Route, Outlet } from 'react-router-dom'

// import Cast from "./Cast";
// import Reviews from "./Reviews";

const Cast = lazy(() => import('./Cast'))
const Reviews = lazy(() => import('./Reviews'))
const Loader = lazy(()=>import('../Loader'))

export default function MoviePage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();
    // const match = useLocation();
    console.log(movieId)

    const goBack = () => navigate(-1)

    useEffect(() => {
        MoviePageByID.fetchAPIById(movieId)
            .then(data => {
                setMovie(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [movieId])

    console.log(movie)

    return (
        <>
            {movie &&
                <div className="movie">
                    <div className="movie-page">
                        <button type="button" className="movie-page__button" onClick={goBack}>Go back</button>

                        <img className="movie-page__img" src={movie.poster_path && `https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>
                        <ul className="movie-page__list">
                            <li className="movie-page__item">
                                <h1 className="movie-page__title">{movie.original_title} ({movie.release_date})</h1>
                                <p className="movie-page__content">User score: {Math.floor(movie.vote_average * 10)}%</p>
                            </li>
                            <li className="movie-page__item">
                                <h2 className="movie-page__title">Overview</h2>
                                <p className="movie-page__content">{movie.overview}</p>
                            </li>
                            <li className="movie-page__item">
                                <h3 className="movie-page__title">Genres</h3>
                                <ul className="movie-page__genres-list"> {movie.genres.map(gen =>
                                    <li key={gen.id} className="movie-page__genres-item">
                                        {gen.name}
                                </li>)}
                                </ul>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="additional">
                        <p className="additional-info">Additional information</p>
                        
                        <ul className="additional-list">
                            <li><Link to="cast" className="cast-link">Cast</Link></li>
                            <li><Link to="reviews" className="reviews-link">Reviews</Link></li>
                        </ul>
                        
                        <Suspense fallback={<Loader/>}></Suspense>
                        <Routes>
                            <Route path="cast" element={<Cast id={movieId}/>} />
                            <Route path="reviews" element={<Reviews id={movieId}/>} />
                        </Routes>

                        <Outlet/>
                    </div>
                </div>
            }
        </>
    )
}