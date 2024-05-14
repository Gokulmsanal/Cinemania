import React, { useEffect, useState } from 'react'
import '../App.css';
import MovieCard from '../MovieCard';
// import SearchIcon from './search.svg'
// 79c2be59
const API_URL = 'http://www.omdbapi.com?apikey=79c2be59'

// const movie1 = {
//     "Title": "Guardians of the Galaxy Vol. 2",
//     "Year": "2017",
//     "imdbID": "tt3896198",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
// }

const Apps = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Guardians of the Galaxy Vol. 2');
    }, [])



  return (
    <div className='app'>
        <h1>MovieLand</h1>

        <div className='search'>
            <input placeholder='Search for movies' 
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}>
            </input>
            <img 
            src='https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg'
            alt="search"
            onClick={()=> searchMovies(searchTerm) }
            />
        </div>

        {movies?.length > 0
            ? (
                <div className='container'>
                    {movies.map((movie)=>(
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className='empty'>
                    <h2>No movies found</h2>
                </div>
        )}
    </div>
  )
}

export default Apps