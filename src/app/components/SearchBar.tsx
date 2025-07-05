
'use client';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) onSearch(query.trim());
  };

  return (
    <div className="row  align-items-center g-2" style={{ width: '100%' }}>
      <div className="col-auto position-relative" style={{ minWidth: '250px' }}>
        <input
          type="text"
          className="form-control bg-dark text-white border-secondary ps-5"
          style={{ borderRadius: '999px' }}
          placeholder="Search movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <FaSearch
          className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary"
          style={{ pointerEvents: 'none' }}
        />
      </div>

      <div className="col-auto">
        <button
          className="btn btn-outline-light bg-dark px-4"
          style={{ borderRadius: '999px' }}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}
