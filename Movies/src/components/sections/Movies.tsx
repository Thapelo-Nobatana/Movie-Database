import React, { useState } from "react";
import { fetchMovies } from "../../api/movie";
import type { MovieData } from "../../interfaces";
import MoviesCard from "../common/MoviesCard";

const Movies: React.FC = () => {
  const [query, setQuery] = useState("");
  const [Movies, setMovies] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      setError("Please enter a movie title");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const result = await fetchMovies(query);
      setMovies(result);
      console.log(Movies);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="container" style={{ marginBottom: "32px" }}>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img src="/image/Fire.png" className="w-5 h-5" alt="fire" />
              <div className="text-white text-2xl">Trending</div>
            </div>
            <hr className="hover:border-1 hover:border-white w-219" />
            <div className="text-white text-xl">See More</div>
          </div>
          {/* Search Movie  */}
          <form onSubmit={handleSearch} className="flex justify-center mb-6">
            <input
              type="text"
              placeholder="Search for a movie..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border border-gray-600 bg-gray-800 rounded-l-lg px-4 py-2 w-64 text-white"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
            >
              Search
            </button>
          </form>
          {/* Loading / Error */}
          {loading && <p className="text-center text-gray-400">Loading...</p>}
          {error && <p className="text-center text-red-400">{error}</p>}

          {/* movie cards */}
          {
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
              {Movies.map((movie) => (
                <MoviesCard
                  key={movie.imdbID}
                  movieImage={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/200x300?text=No+Image"
                  }
                  description={movie.Title}
                  date={movie.Year}
                />
              ))}
            </div>
          }
        </div>
      </section>
    </>
  );
};

export default Movies;
