import React from "react";

import type { MoviesCardProps } from "../../interfaces";

const MoviesCard: React.FC<MoviesCardProps> = ({
  movieImage,
  description,
  date,
}) => {
  return (
    <>
      <div className="card flex flex-col gap-2 bg-none rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
        <img
          src={movieImage}
          alt={description}
          className="w-full h-80 object-cover"
        />
        <div className="p-3 text-center">
          <h3 className="font-semibold text-white">{description}</h3>
          <p className="text-sm text-white">{date}</p>
        </div>
      </div>
    </>
  );
};

export default MoviesCard;
