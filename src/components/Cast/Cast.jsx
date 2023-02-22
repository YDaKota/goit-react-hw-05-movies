import { getMovieCredits } from '../../services/api.jsx';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css';


export const Cast = () => {
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();
    const [actors, setActors] = useState();

    useEffect(() => {
        setLoading(true);
        getMovieCredits(Number(movieId))
          .then(res => {
                setActors(res.cast);
                setLoading(false);
            })
          .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, [movieId]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (!actors) {
        return <div>No actors found</div>;
    }

    // const { cast } = actors;

    return (
        <>
            {loading? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <h1>Cast</h1>
                    <ul className={styles.Cast}>
                        {actors.map(actor => (
                            <li key={actor.id} className={styles.CastItem}>
                                <p>{actor.name}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
}