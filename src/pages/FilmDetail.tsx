import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmDetail, Film, Episode } from '../utils/api';
import { VideoPlayer } from '../components/VideoPlayer';
import { Header } from '../components/Header';

export const FilmDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [film, setFilm] = useState<Film | null>(null);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFilmDetail();
  }, [slug]);

  const loadFilmDetail = async () => {
    if (!slug) return;
    setLoading(true);
    try {
      const data = await getFilmDetail(slug);
      setFilm(data);
      if (data?.episodes && data.episodes.length > 0) {
        setSelectedEpisode(data.episodes[0]);
      }
    } catch (error) {
      console.error('Error loading film detail:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Header />
        <div className="flex justify-center items-center py-12">
          <div className="spinner w-12 h-12 border-4 border-gray-300 dark:border-gray-700 border-t-red-600 rounded-full"></div>
        </div>
      </div>
    );
  }

  if (!film) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <Header />
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">Không tìm thấy phim</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative mb-8 rounded-lg overflow-hidden">
          <img
            src={film.poster_url || film.thumb_url}
            alt={film.name}
            className="w-full h-96 object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>

          <div className="absolute inset-0 flex items-end p-8">
            <div className="flex gap-6">
              <img
                src={film.poster_url || film.thumb_url}
                alt={film.name}
                className="w-40 h-56 object-cover rounded-lg shadow-lg"
              />
              <div className="flex-1 text-white">
                <h1 className="text-4xl font-bold mb-2">{film.name}</h1>
                <p className="text-gray-300 mb-4">{film.origin_name}</p>
                <div className="flex gap-4 mb-4">
                  <span className="bg-red-600 px-3 py-1 rounded">{film.status}</span>
                  <span className="bg-blue-600 px-3 py-1 rounded">{film.year}</span>
                  <span className="bg-green-600 px-3 py-1 rounded">
                    {film.type === 'series' ? 'Phim bộ' : 'Phim lẻ'}
                  </span>
                </div>
                <p className="text-gray-300 line-clamp-3">{film.content}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Player */}
        {selectedEpisode && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {selectedEpisode.name}
            </h2>
            <VideoPlayer
              src={selectedEpisode.link_m3u8 || selectedEpisode.link_embed}
              poster={film.poster_url}
              title={`${film.name} - ${selectedEpisode.name}`}
            />
          </div>
        )}

        {/* Episodes List */}
        {film.episodes && film.episodes.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Danh sách tập phim
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {film.episodes.map((episode) => (
                <button
                  key={episode._id}
                  onClick={() => setSelectedEpisode(episode)}
                  className={`p-3 rounded-lg font-semibold transition-colors ${
                    selectedEpisode?._id === episode._id
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {episode.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Film Info */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Thông tin phim
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <p className="font-semibold">Tên gốc:</p>
                <p>{film.origin_name}</p>
              </div>
              <div>
                <p className="font-semibold">Năm phát hành:</p>
                <p>{film.year}</p>
              </div>
              <div>
                <p className="font-semibold">Trạng thái:</p>
                <p>{film.status}</p>
              </div>
              <div>
                <p className="font-semibold">Loại:</p>
                <p>{film.type === 'series' ? 'Phim bộ' : 'Phim lẻ'}</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {film.genres && film.genres.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  Thể loại
                </h4>
                <div className="flex flex-wrap gap-2">
                  {film.genres.map((genre) => (
                    <span
                      key={genre}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-1 rounded-full text-sm"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {film.countries && film.countries.length > 0 && (
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  Quốc gia
                </h4>
                <div className="flex flex-wrap gap-2">
                  {film.countries.map((country) => (
                    <span
                      key={country}
                      className="bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        {film.content && (
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Nội dung
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {film.content}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};
