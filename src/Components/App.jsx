import Navigation from './Navigation'
import HomePage from './Views/HomePage'
import MovieDetailsPage from './Views/MovieDetailsPage'
import MoviesPage from './Views/MoviesPage'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <Navigation />
        
      </header>

      <div className="content">
          <Routes>
            <Route path="/home" element={<HomePage />} exact />
            <Route path="/home/:movieId/*" element={<MovieDetailsPage />} exact />
            <Route path="/movies" element={<MoviesPage />} />
          </Routes>
      </div>
    </div>
  );
}
