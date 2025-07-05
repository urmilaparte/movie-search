

'use client';
import MovieCard from './MoiveCard';

const trendingMovies = [
  {
    title: "Shangchi",
    poster: "/Image/shangchi.jpg",
    overview: "A warrior must face his past in a battle of destiny."
  },
  {
    title: "Aladdin",
    poster: "/Image/aladdin.jpeg",
    overview: "A street rat discovers a magical genie and a whole new world."
  },
  {
    title: "Raya",
    poster: "/Image/raya.jpeg",
    overview: "A lone warrior seeks to unite a divided land with a legendary dragon."
  },
  {
    title: "Uri",
    poster: "/Image/Uri.jpg",
    overview: "An elite Indian army unit strikes back after a deadly attack."
  },
  {
    title: "Tangled",
    poster: "/Image/tangled.jpeg",
    overview: "A princess with magical hair escapes her tower to find freedom."
  },
  {
    title: "Avengers",
    poster: "/Image/avenger.jpg",
    overview: "Earth's mightiest heroes assemble to save the world from Loki."
  },
  {
    title: "Doctor Strange",
    poster: "/Image/doctor.jpg",
    overview: "A surgeon turns sorcerer to protect the world from dark forces."
  },
  {
    title: "Black Panther",
    poster: "/Image/black.jpg",
    overview: "The king of Wakanda must defend his people and legacy."
  }
];


export default function MovieList() {
  return (
    <>
      <h3 className="text-white mb-3">Trending Movies</h3>
      <div className="row g-3">
        {trendingMovies.map((movie, idx) => (
          <div key={idx} className="col-6 col-sm-4 col-md-3 col-lg-2 ">
            <MovieCard {...movie} />
          </div>
        ))}
      </div>
    </>
  );
}
