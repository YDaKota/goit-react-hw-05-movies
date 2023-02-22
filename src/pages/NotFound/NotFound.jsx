import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Sorry, this page is not found</p>
            <Link to="/">Go back to the homepage</Link>
        </div>
    );
};