import PropTypes from 'prop-types';

export const MovieCard = ({ movie }) => {
    const { title, poster_path, release_date } = movie;
    console.log(movie);
    

    return (
        <div className="movie-card">
            <div className="movie-card-image">
                <img src={poster_path} alt={title} />
            </div>
            <div className="movie-card-info">
                <div className="movie-card-title">{title}</div>
                <div className="movie-card-year">{release_date}</div>
            </div>
        </div>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
}

