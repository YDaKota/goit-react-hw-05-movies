import { useState, useEffect } from 'react';
import { searchMovies } from '../../services/api';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import styles from './Movies.module.css';

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [input, setInput] = useState('');
    const location = useLocation();
    const inputParam = searchParams.get('filter') ?? '';
    
    useEffect(() => {
        if (!inputParam) {
            return;
        }
        async function searchOFMovies() {
            try {
                const { results } = await searchMovies(inputParam);
                if (results.length < 1) {
                    alert('No results found');
                    }
                    setMovies(results);
                } catch (error) {
                    console.log(error);
                }}
        searchOFMovies();
    }, [inputParam]);

    const onSubmit = e => {
        if (!input) {
          alert('Please enter a movie name');
        }
        e.preventDefault();
        setSearchParams(input !== '' ? { filter: input } : {});
        setInput('');
      };

      const onChangeInput = value => {
        setInput(value);
      };
    
      if (!movies) {
        return null;
      }


    return (
        <div className="container">
            <form onSubmit={onSubmit} className={styles.SearchBar}>
                <div className={styles.SearchForm}>
                    <input
                        type="text"
                        className={styles.SearchForm_input}
                        value={input}
                        onChange={e => onChangeInput(e.currentTarget.value.toLowerCase())}
                    />
                </div>
                <button type="submit" onClick={onSubmit} className={styles.SearchForm_button}>Search</button>
            </form>
            {movies && (
                <ul>
                {movies.map(movie => {
                    let posterPath;
                    if (movie.poster_path) {
                    posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
                    } else {
                    posterPath =
                        'https://i.pinimg.com/originals/a0/57/48/a05748c84d7093e382c560bbc57665ce.jpg';
                    }
                    return (
                    <Link
                        key={movie.id}
                        to={`${movie.id}`}
                        state={{ from: location }}
                    >
                        <img src={posterPath} width="400" alt={movie.title} />
                        <h3>{movie.title}</h3>
                    </Link>
                    );
                })}
                </ul>

                
            )}
        </div>
    );
}