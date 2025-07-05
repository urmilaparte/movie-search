"use client";
import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryFilter from "./components/CategoryFilter";
import ContinueWatching from "./components/ContinueWatching";
import MovieList from "./components/MovieList";
import SearchModal from "./components/SearchModal";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSearch = (q: string) => {
    setQuery(q);
    setShowModal(true);
  };

  return (
    <div className="bg-dark text-white min-vh-100">
      <Header />
      <Banner />

      <main className="container py-4">
        <div className="mb-3 ">
          <SearchBar onSearch={handleSearch} />
        </div>

        <CategoryFilter />

        <MovieList />
        <h3 className="text-white mt-5 mb-3">Continue Watching</h3>
        <ContinueWatching />
      </main>

      <Footer />

      <SearchModal
        show={showModal}
        query={query}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}
