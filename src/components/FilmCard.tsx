import React from 'react';
import { Film } from '../utils/api';

interface FilmCardProps {
  film: Film;
  onClick?: () => void;
}

export const FilmCard: React.FC<FilmCardProps> = ({ film, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 dark:shadow-gray-900"
    >
      {/* Poster Image */}
      <img
        src={film.poster_url || film.thumb_url}
        alt={film.name}
        className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-75"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-bold text-sm mb-1 line-clamp-2">
          {film.name}
        </h3>
        <p className="text-gray-300 text-xs mb-2">{film.origin_name}</p>

        {/* Status Badge */}
        <div className="flex items-center justify-between">
          <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 rounded">
            {film.status}
          </span>
          <span className="text-yellow-400 text-xs">{film.year}</span>
        </div>
      </div>

      {/* Type Badge */}
      <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
        {film.type === 'series' ? 'Phim bộ' : 'Phim lẻ'}
      </div>
    </div>
  );
};
