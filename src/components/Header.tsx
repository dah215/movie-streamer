import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';

interface HeaderProps {
  onSearch?: (keyword: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const { theme, toggleTheme } = useTheme();
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim() && onSearch) {
      onSearch(searchInput);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🎬</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              MovieStream
            </h1>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-yellow-400 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            title={`Chuyển sang chế độ ${theme === 'light' ? 'tối' : 'sáng'}`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Tìm kiếm phim..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors duration-300"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
          >
            Tìm
          </button>
        </form>
      </div>
    </header>
  );
};
