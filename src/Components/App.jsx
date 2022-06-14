import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// import Navigation from './Navigation'
// import HomePage from './Views/HomePage'
// import MovieDetailsPage from './Views/MovieDetailsPage'
// import MoviesPage from './Views/MoviesPage'

const Navigation = lazy(() => import('./Navigation'))
const HomePage = lazy(() => import('./Views/HomePage'))
const MovieDetailsPage = lazy(() => import('./Views/MovieDetailsPage'))
const MoviesPage = lazy(() => import('./Views/MoviesPage'))
const Loader = lazy(() => import('./Loader'))


export default function App() {
  return (
   
    <div className="app">
      <Suspense fallback={ <Loader/> }>
        <header className="header">
          <Navigation />
        </header>
      </Suspense>

      <div className="content">
         <Suspense fallback={ <Loader/> }>
            <Routes>
              <Route path="/home" element={<HomePage />} exact />
              <Route path="/home/:movieId/*" element={<MovieDetailsPage />} exact />
              <Route path="/movies" element={<MoviesPage />} exact />
              <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} exact />
            </Routes>
          </Suspense>
        </div>
      
    </div>
    
  );
}
