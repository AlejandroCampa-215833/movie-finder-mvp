import React from 'react';

const Filters = ({ 
  genres, 
  directors, 
  actors, 
  years,
  selectedGenre,
  selectedDirector,
  selectedActor,
  selectedYear,
  hasAwards,
  onGenreChange,
  onDirectorChange,
  onActorChange,
  onYearChange,
  onAwardsChange,
  onClearFilters,
  showFilters,
  onToggleFilters
}) => {
  const activeFiltersCount = [
    selectedGenre, 
    selectedDirector, 
    selectedActor, 
    selectedYear, 
    hasAwards
  ].filter(Boolean).length;

  return (
    <div className="filters-section">
      <button className="toggle-filters-btn" onClick={onToggleFilters}>
        {showFilters ? '▲' : '▼'} Filtros {activeFiltersCount > 0 && `(${activeFiltersCount})`}
      </button>
      
      {showFilters && (
        <div className="filters-panel">
          <div className="filters-grid">
            <div className="filter-group">
              <label>Género:</label>
              <select value={selectedGenre} onChange={(e) => onGenreChange(e.target.value)}>
                <option value="">Todos los géneros</option>
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Director:</label>
              <select value={selectedDirector} onChange={(e) => onDirectorChange(e.target.value)}>
                <option value="">Todos los directores</option>
                {directors.map(director => (
                  <option key={director} value={director}>{director}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Actor:</label>
              <select value={selectedActor} onChange={(e) => onActorChange(e.target.value)}>
                <option value="">Todos los actores</option>
                {actors.map(actor => (
                  <option key={actor} value={actor}>{actor}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Año:</label>
              <select value={selectedYear} onChange={(e) => onYearChange(e.target.value)}>
                <option value="">Todos los años</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <div className="filter-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={hasAwards}
                  onChange={(e) => onAwardsChange(e.target.checked)}
                />
                Solo con premios
              </label>
            </div>

            <div className="filter-group">
              <button className="clear-filters-btn" onClick={onClearFilters}>
                Limpiar filtros
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;