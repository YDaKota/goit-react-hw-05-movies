import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../services/api';
import styles from './Reviews.module.css';


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
            <ul className={styles.Reviews}>
                {reviews.map(review => (
                    <li key={review.id} className={styles.ReviewsItem}>
                        <p className={styles.Description}>
                            <b>Author:</b> {review.author}
                        </p>
                        <p className={styles.Description}>
                            <b>Content:</b> {review.content}
                        </p>
                        <hr />
                    </li>
                ))}
            </ul>
        </>
    );
}
