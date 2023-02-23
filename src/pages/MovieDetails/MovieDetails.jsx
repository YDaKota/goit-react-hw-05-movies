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
    const backLink = location.state?.from ?? '/';
    

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
            <Link to={backLink} className={styles.Button}>Go back</Link>
            {error && <div>Something get wrong</div>}
            {movie && (
                <div>
                    <MovieCard movie={movie} />
                    <div>
                        <h2>Additional information</h2>
                        <NavLink to={'cast'} state={location.state} className={styles.Link}>Cast</NavLink>
                        <NavLink to={'reviews'} state={location.state} className={styles.Link}>Reviews</NavLink>
                    </div>
                    <Suspense fallback={null}>
                        <Outlet />
                    </Suspense>
                </div>
                
            )}
        </div>
    );
};

export default MovieDetails;
