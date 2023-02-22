import { useState, useEffect, Suspense } from 'react';
import { Link, NavLink, useLocation, useParams, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../../services/api';
import { MovieCard } from '../../components/MovieDetailsCard/MovieDetailsCard';
import styles from './MovieDetails.module.css';



const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();

    useEffect(() => {
        const getMovie = async () => {
            try {
                const result = await getMovieDetails(movieId);
                setMovie(result);
            } catch (error) {
                setError(error);
            }
        }
        getMovie();
    }, [movieId]);

    return (
        <div>
            <Link to="location.state?.from ?? '/'" className={styles.Button}>Go back</Link>
            {error && <div>Something get wrong</div>}
            {movie && (
                <div>
                    <MovieCard movie={movie} />
                    <div>
                        <h2>Additional information</h2>
                        <NavLink to={'cast'} state={location.state} className={styles.Link}>Cast</NavLink>
                        <NavLink to={'reviews'} state={location.state} className={styles.Link}>Reviews</NavLink>
                    </div>
                    {/* <h1>{movie.title}</h1>
                    <img src={movie.poster} alt={movie.title} />
                    <p>{movie.description}</p> */}
                    <Suspense fallback={null}>
                        <Outlet />
                    </Suspense>
                </div>
                
            )}
            {/* <h1>{movie.title}</h1>
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.description}</p>
            <p>{movie.release_date}</p>
            <p>{movie.vote_average}</p>
            <p>{movie.vote_count}</p> */}
        </div>
    );
};

export default MovieDetails;
