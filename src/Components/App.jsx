import Navigation from './Navigation'
import FindForm from './FindForm'
import HomePage from './Views/HomePage'
import MovieDetailsPage from './Views/MovieDetailsPage'
import MoviesPage from './Views/MoviesPage'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <Navigation />
        <FindForm />
        
      </header>

      <div className="content">
          <Routes>
            <Route path="/home" element={<HomePage />} exact />
            <Route path="/home/:movieId" element={<MovieDetailsPage />} exact />
            <Route path="/movies" element={<MoviesPage />} />
          </Routes>
      </div>
    </div>
  );
}

// API Key: d3e123696f03f62391f72f8962a7794e

// fetch('https://api.themoviedb.org/3/movie/550?api_key=d3e123696f03f62391f72f8962a7794e')

