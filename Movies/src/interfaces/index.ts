export interface ButtonProps {
  title: string;
  variant: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  isActive?: boolean;
}
export interface MoviesCardProps {
  id?: number;
  title?: string;
  movieImage?: string;
  description?: string;
  date?: string;
}
export interface MovieData {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
}
