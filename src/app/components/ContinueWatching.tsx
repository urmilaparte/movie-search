import MovieCard from './MoiveCard';


  const watching = [
    {
      title: "RRR",
      poster: "/Image/rrr.jpeg",
      overview: "Two heroes rise against British tyranny."
    },
    {
      title: "Avengers",
      poster: "/Image/avenger.jpg",
      overview: "Earth’s mightiest heroes fight to save the world."
    },
    {
      title: "Shangchi",
      poster: "/Image/shangchi.jpg",
      overview: "A martial artist confronts his family legacy."
    },
    {
      title: "Sming",
      poster: "/Image/sming.jpeg",
      overview: "A jungle legend awakens for revenge."
    },
    {
      title: "The Good",
      poster: "/Image/dinosaur.jpeg",
      overview: "A dinosaur forms an unlikely friendship."
    },
  ];
  


export default function ContinueWatching() {
  return (
    <div className="row gy-4 gx-3">
      {watching.map((movie, idx) => (
        <div key={idx} className="col-6 col-sm-4 col-md-3 col-lg-2">
          <MovieCard {...movie} />
        </div>
      ))}
    </div>
  );
}
