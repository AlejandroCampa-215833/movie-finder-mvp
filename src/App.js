import React, { useState, useMemo } from 'react';
import './styles/App.css';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import MovieCard from './components/MovieCard';
import { 
  moviesDatabase, 
  getUniqueGenres, 
  getUniqueDirectors, 
  getUniqueActors, 
  getUniqueYears 
} from './data/movies';

function App() {
  // Estados para búsqueda y filtros
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedDirector, setSelectedDirector] = useState('');
  const [selectedActor, setSelectedActor] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [hasAwards, setHasAwards] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Obtener valores únicos para los filtros
  const genres = getUniqueGenres();
  const directors = getUniqueDirectors();
  const actors = getUniqueActors();
  const years = getUniqueYears();

  // Filtrado de películas con useMemo para optimización
  const filteredMovies = useMemo(() => {
    return moviesDatabase.filter(movie => {
      // Búsqueda por texto
      const matchesSearch = searchQuery === '' || 
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.director.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.actors.some(actor => actor.toLowerCase().includes(searchQuery.toLowerCase()));

      // Filtro por género
      const matchesGenre = selectedGenre === '' || movie.genre.includes(selectedGenre);

      // Filtro por director
      const matchesDirector = selectedDirector === '' || movie.director === selectedDirector;

      // Filtro por actor
      const matchesActor = selectedActor === '' || movie.actors.includes(selectedActor);

      // Filtro por año
      const matchesYear = selectedYear === '' || movie.year === parseInt(selectedYear);

      // Filtro por premios
      const matchesAwards = !hasAwards || movie.awards.length > 0;

      return matchesSearch && matchesGenre && matchesDirector && matchesActor && matchesYear && matchesAwards;
    });
  }, [searchQuery, selectedGenre, selectedDirector, selectedActor, selectedYear, hasAwards]);

  // Función para limpiar todos los filtros
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedGenre('');
    setSelectedDirector('');
    setSelectedActor('');
    setSelectedYear('');
    setHasAwards(false);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>🎬 MovieFinder</h1>
        <p className="subtitle">Encuentra tu película perfecta</p>
        
        <SearchBar 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <Filters
          genres={genres}
          directors={directors}
          actors={actors}
          years={years}
          selectedGenre={selectedGenre}
          selectedDirector={selectedDirector}
          selectedActor={selectedActor}
          selectedYear={selectedYear}
          hasAwards={hasAwards}
          onGenreChange={setSelectedGenre}
          onDirectorChange={setSelectedDirector}
          onActorChange={setSelectedActor}
          onYearChange={setSelectedYear}
          onAwardsChange={setHasAwards}
          onClearFilters={clearFilters}
          showFilters={showFilters}
          onToggleFilters={() => setShowFilters(!showFilters)}
        />
      </header>

      <main className="app-main">
        <div className="results-header">
          <h2>{filteredMovies.length} {filteredMovies.length === 1 ? 'resultado' : 'resultados'}</h2>
        </div>

        {filteredMovies.length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon">🎥</div>
            <h3>No se encontraron resultados</h3>
            <p>Intenta ajustar tus filtros o búsqueda</p>
          </div>
        ) : (
          <div className="movies-grid">
            {filteredMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;