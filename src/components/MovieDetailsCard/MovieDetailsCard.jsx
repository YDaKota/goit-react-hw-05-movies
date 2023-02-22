import PropTypes from 'prop-types';
import styles from './MovieDetailsCard.module.css';

export const MovieCard = ({ movie }) => {
    const { title, poster_path, release_date, overview } = movie;

    let releaseDate = new Date(release_date).getFullYear();   

    return (
        <div className={styles.movieCard}>
            <img src={`https://image.tmdb.org/t/p/w400/${poster_path}`} width='300px' alt={title} />
            <div className={styles.movieCardInfo}>
                <div>
                    <h3 className={styles.movieCardTitle}>Title:</h3>{title}
                </div>
                <div>
                    <h3 className={styles.movieCardTitle}>Overview:</h3>{overview}
                </div>
                <div>
                    <h3 className={styles.movieCardTitle}>Release date:</h3>{releaseDate}
                </div>
            </div>
        </div>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
}

