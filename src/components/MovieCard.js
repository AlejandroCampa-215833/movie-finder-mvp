import React from 'react';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-year">📅 {movie.year}</p>
        
        <div className="movie-genres">
          {movie.genre.map((g, index) => (
            <span key={index} className="genre-tag">{g}</span>
          ))}
        </div>
        
        <p className="movie-director">
          <strong>Director:</strong> {movie.director}
        </p>
        
        <p className="movie-actors">
          <strong>Actores:</strong> {movie.actors.join(', ')}
        </p>
        
        {movie.awards.length > 0 && (
          <p className="movie-awards">
            🏆 {movie.awards[0]}
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;