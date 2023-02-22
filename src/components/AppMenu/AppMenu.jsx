import { NavLink } from 'react-router-dom';
import styles from './AppMenu.module.css';

export const AppMenu = () => {
    return (
      <nav className={styles.header}>
        <NavLink to="/" className={styles.link}>Home</NavLink>
        <NavLink to="/movies" className={styles.link}>Movies</NavLink>
      </nav>
    );
  };