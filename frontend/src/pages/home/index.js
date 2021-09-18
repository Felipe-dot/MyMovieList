import React from "react";
import Logo from '../../assets/Logo.png';
import Movie from "../../pages/home/movie";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=aa612ddfc69ded8ae6ce3eeed7dbcdc2&page=1";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=aa612ddfc69ded8ae6ce3eeed7dbcdc2&query=";

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
        <h1>Hello, { localStorage.getItem("@aplicacao:user") }</h1>
        <Link to='/' >
          Log out
        </Link>
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