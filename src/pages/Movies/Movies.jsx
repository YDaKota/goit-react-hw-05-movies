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
        <div>
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
                <ul className={styles.MovieItems}>
                {movies.map(movie => {
                    let posterPath = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;
                    
                    return (
                    <Link
                        key={movie.id}
                        to={`${movie.id}`}
                        state={{ from: location }}
                        className={styles.Link}
                    >
                        <img src={posterPath} width='400px' alt={movie.title} />
                        <h3 className={styles.MovieTitle}>{movie.title}</h3>
                    </Link>
                    );
                })}
                </ul>

                
            )}
        </div>
    );
}