import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export const NotFound = () => {
    return (
        <div className={styles.NotFound}>
            <h1>404</h1>
            <p className={styles.Text}>Sorry, this page is not found</p>
            <Link to="/">Go back to the homepage</Link>
        </div>
    );
};