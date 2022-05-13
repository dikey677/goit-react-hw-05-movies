import Navigation from '../Components/Navigation'
import FindForm from './FindForm'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <Navigation />
        <FindForm />
      </header>
    </div>
  );
}

// API Key: d3e123696f03f62391f72f8962a7794e

// fetch('https://api.themoviedb.org/3/movie/550?api_key=d3e123696f03f62391f72f8962a7794e')

