
'use client';
import React from 'react';
import styles from '../styles/banner.module.css';
import { FaPlay } from 'react-icons/fa'; 

export default function Banner() {
  return (
    <div className={`${styles.banner} position-relative overflow-hidden`}>
      
      <iframe
        className="position-absolute top-0 start-0 w-100 h-100"
        src="https://www.youtube.com/embed/cuT0MSs06jg?autoplay=1&mute=1&loop=1&playlist=cuT0MSs06jg&controls=0&showinfo=0&modestbranding=1"
        title="YouTube video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{ zIndex: 0, objectFit: 'cover' }}
      ></iframe>

      <div className={`${styles.overlay} position-relative z-1 text-white`}>
        <div className="container py-4 py-md-5 px-3 px-md-0">
          
          <h1 className="fw-bold fs-1 fs-md-display-4 text-uppercase">
            THE AVENGERS.
          </h1>

          <p className="text-wrap text-break fs-6 fs-md-5 fs-lg-4 col-12 col-md-8">
            Earth's mightiest heroes must come together to stop the powerful Thanos, who seeks to collect all six Infinity Stones and bring balance to the universe by wiping out half of all life. The Avengers must unite, face personal sacrifices, and fight the greatest battle ever seen.
          </p>

          <div className="d-flex flex-wrap gap-3 mt-3">
            <button className="btn btn-light px-4 py-2" style={{ borderRadius: '999px' }}>
              Watch Now
            </button>
            <button className="btn btn-outline-light px-4 py-2" style={{ borderRadius: '999px' }}>
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
