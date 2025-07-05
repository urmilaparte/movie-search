
import React from 'react';
import styles from '../styles/MovieList.module.css';

interface MovieCardProps {
  title: string;
  poster: string;
  overview?: string;
}

export default function MovieCard({ title, poster, overview }: MovieCardProps) {
  return (
    <div className={`card bg-dark text-white position-relative overflow-hidden ${styles.movieCard}`}>
      <img src={poster} className="card-img" alt={title} />

      <div className={styles.overlay}>
        <div className="p-2">
          <h6 className="mb-1">{title}</h6>
          {overview && <p className="small mb-0">{overview}</p>}
        </div>
      </div>
    </div>
  );
}
