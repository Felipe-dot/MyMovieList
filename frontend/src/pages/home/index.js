import React from "react";
import Logo from '../../assets/Logo.png'
import Movie from "../../pages/home/movie";
import { useEffect, useState } from "react";

const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function Home() {
  const[movies, setMovies] = useState([]);
  const[searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(APIURL);
  }, []);

  const getMovies = (API) => {
    fetch(API).then(res => res.json()).then(data => {
      console.log(data);
      setMovies(data.results);
    });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      getMovies(SEARCHAPI + searchTerm);

      setSearchTerm("");
    } else {
      getMovies(APIURL);
    }
      
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
      <img src={Logo} alt="logo"/>
        <form onSubmit={handleOnSubmit}>
          <input 
            className="search" 
            type = "text" 
            placeholder="search..." 
            value={searchTerm} 
            onChange={handleOnChange}/>
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </>
  )
}

export default Home;