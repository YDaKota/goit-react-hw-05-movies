import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../services/api';

export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getMovieReviews(Number(movieId))
          .then(({ results }) => setReviews(results))
          .catch(err => console.log(err));
    }, [movieId]);

    return (
        <>
            <h1>Reviews</h1>
            <ul>
                {reviews.map(review => (
                    <div key={review.id}>
                        <p>
                            <b>Author:</b> {review.author}
                        </p>
                        <p>
                            <b>Content:</b> {review.content}
                        </p>
                        <hr />
                    </div>
                ))}
            </ul>
        </>
    );
}
