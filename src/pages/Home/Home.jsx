import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from '../../services/api.jsx';
import style from './Home.module.css';


export const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    async function moviesTrending() {
      try {
        const { results } = await getTrending();
        if (results < 1) {
          alert("We can't find it, try again");
        }
        setTrending(results);
      } catch (error) {
        alert('Something wrong, try again please');
      }  
    }
    moviesTrending();
  }, []);

  return (
    <div>
          <h1>Trending movies</h1>
          {trending && (
            <ul>
              {trending.map(movie => (
                <li key={movie.id} className={style.listItem}>
                  <Link to={`/movies/${movie.id}`} className={style.Link}>{movie.title}</Link>
                </li>
              ))}
            </ul>
          )}
    </div>
  );
};
