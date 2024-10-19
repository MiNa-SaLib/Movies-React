import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Cards.css";
export const Cards = (movie) => {
  return (
    <div className="col-md-4 col-lg-3 col-sm-6 p-3">
      <div className="card h-100">
        <img
          src={movie.movie.avatar}
          className="card-img-top"
          alt={movie.movie.title}
        />
        <div className="card-body">
          <h3 className="card-title">{movie.movie.name}</h3>
          <p className="card-text">
            <strong>Published at:</strong>
            {movie.movie.publishedAt}
          </p>
          <p>
            <strong>Type:</strong> {movie.movie.type}
          </p>
          <p>
            <strong>Rating:</strong> {movie.movie.rate}/10
          </p>
          <p>
            <strong>Duration:</strong> {movie.movie.duration} min
          </p>
          <Link to={`/Details/${movie.movie.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
