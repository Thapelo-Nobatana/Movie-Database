import type { MovieData } from "../interfaces/index";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export async function fetchMovies(query: string): Promise<MovieData[]> {
  if (!query.trim()) return [];
  const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw Error("Faild to fetch movies");
    const data = await res.json();

    console.log(data);
    if (data.Response === "False")
      throw new Error(data.Error || "No movies found");
    return data.Search as MovieData[];
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
}
