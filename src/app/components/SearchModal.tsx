

'use client';
import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import MovieCard from './MoiveCard';

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Year: string;
}

export default function SearchModal({
  show,
  query,
  onClose,
}: {
  show: boolean;
  query: string;
  onClose: () => void;
}) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) return;

      setLoading(true);
      setError('');
      setMovies([]);

      const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
      const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.Response === 'True') {
          setMovies(data.Search);
        } else {
          setError(data.Error || 'No results found.');
        }
      } catch {
        setError('Failed to fetch movies.');
      } finally {
        setLoading(false);
      }
    };

    if (show) {
      fetchMovies();
    }
  }, [query, show]);

  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      scrollable
      dialogClassName="custom-modal-dialog"
      contentClassName="custom-modal-content"
      backdropClassName="custom-backdrop"
    >
      <Modal.Header closeButton className="bg-black text-white border-0">
        <Modal.Title className="fw-bold fs-4">
          🎬 Your Movie....: “{query}”
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-white">
        {loading && (
          <div className="text-center py-4">
            <div className="spinner-border text-light" role="status" />
            <p className="mt-2">Fetching awesome movies...</p>
          </div>
        )}

        {error && <p className="text-danger text-center fs-5">{error}</p>}

        {!loading && !error && movies.length === 0 && (
          <div className="text-center py-5">
            <img src="/no-results.svg" alt="No results" height={150} />
            <p className="mt-3 fs-5 text-muted">
              No movies found for &quot;{query}&quot;
            </p>
          </div>
        )}

        <div className="d-flex flex-wrap gap-4 justify-content-center">
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4"
            >
              <MovieCard
                title={movie.Title}
                poster={
                  movie.Poster !== 'N/A' ? movie.Poster : '/fallback.jpg'
                }
                overview=""
              />
            </div>
          ))}
        </div>
      </Modal.Body>

      <Modal.Footer className="bg-black border-0 d-flex justify-content-center">
        <button
          className="btn btn-outline-light rounded-pill px-4"
          onClick={onClose}
        >
          Close
        </button>
      </Modal.Footer>

      <style jsx global>{`
        .custom-modal-dialog {
          width: 95vw !important;
          max-width: 95vw !important;
          margin: auto;
        }

        @media (min-width: 1400px) {
          .custom-modal-dialog {
            width: 95vw !important;
            max-width: 98vw !important;
          }
        }

        .custom-modal-content {
          background-color: #111 !important;
          border-radius: 18px;
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
          padding: 1rem;
        }

        .custom-backdrop {
          backdrop-filter: blur(6px);
          background-color: rgba(0, 0, 0, 0.75);
        }
      `}</style>
    </Modal>
  );
}
