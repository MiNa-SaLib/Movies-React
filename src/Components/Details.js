import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../CSS/Details.css";
export const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://66d60128f5859a7042681c14.mockapi.io/api/movies/${id}`
      );
      setMovie(response.data);
    };

    fetchMovies();
  }, []);
  console.log(movie);

  return (
    <div className="page">
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6">
            <img src={movie.avatar} alt={movie.title} className="img-fluid" />
          </div>
          <div className="col-md-6 d-flex align-items-start justify-content-center flex-column">
            <h2>{movie.name}</h2>
            <p>
              <strong>Type:</strong> {movie.type}
            </p>
            <p>
              <strong>Rating:</strong> {movie.rate}/10
            </p>
            <p>
              <strong>Duration:</strong> {movie.duration} min
            </p>
            <p>
              <strong>Release Date:</strong> {movie.publishedAt}
            </p>
            <div className="d-flex align-items-center justify-content-center">
              <button type="button" className="btn btn-outline-warning p-2 m-2">
                مشاهدة
              </button>
              <button type="button" className="btn btn-outline-info p-2 m-2">
                تحميل
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
