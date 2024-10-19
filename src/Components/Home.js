import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Cards } from "./cards";
import "../CSS/Home.css";
export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://66d60128f5859a7042681c14.mockapi.io/api/movies`
      );
      setMovies(response.data);
    };

    fetchMovies();
  }, []);
  return (
    <div className="page">
      <div className="container my-5">
        <div className="row ">
          {movies.map((movie) => {
            return <Cards key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};
