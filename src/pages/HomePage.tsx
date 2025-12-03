import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { FilmCard } from '../components/FilmCard';
import { getNewFilms, searchFilms, Film } from '../utils/api';
import { useTheme } from '../hooks/useTheme';

const HomePage = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchMode, setSearchMode] = useState(false);

  useEffect(() => {
    loadFilms();
  }, [currentPage]);

  useEffect(() => {
    // Áp dụng theme vào document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const loadFilms = async () => {
    setLoading(true);
    try {
      const data = await getNewFilms(currentPage);
      setFilms(data);
      setSearchMode(false);
    } catch (error) {
      console.error('Error loading films:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (keyword: string) => {
    setLoading(true);
    try {
      const data = await searchFilms(keyword);
      setFilms(data);
      setSearchMode(true);
      setCurrentPage(1);
    } catch (error) {
      console.error('Error searching films:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilmClick = (film: Film) => {
    // Lưu thông tin phim vào localStorage để hiển thị trang chi tiết
    localStorage.setItem('selectedFilm', JSON.stringify(film));
    navigate(`/film/${film.slug}`);
  };

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <Header onSearch={handleSearch} />

        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* Title */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {searchMode ? 'Kết quả tìm kiếm' : 'Phim Mới Cập Nhật'}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {searchMode
                ? `Tìm thấy ${films.length} kết quả`
                : 'Những bộ phim mới nhất được cập nhật'}
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="spinner w-12 h-12 border-4 border-gray-300 dark:border-gray-700 border-t-red-600 rounded-full"></div>
            </div>
          )}

          {/* Films Grid */}
          {!loading && films.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
              {films.map((film) => (
                <div key={film._id} onClick={() => handleFilmClick(film)}>
                  <FilmCard film={film} />
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && films.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Không tìm thấy phim nào
              </p>
            </div>
          )}

          {/* Pagination */}
          {!loading && !searchMode && films.length > 0 && (
            <div className="flex justify-center gap-2 mt-8">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg disabled:opacity-50 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Trước
              </button>
              <span className="px-4 py-2 text-gray-900 dark:text-white">
                Trang {currentPage}
              </span>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Tiếp
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default HomePage;
