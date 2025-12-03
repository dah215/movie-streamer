import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import HomePage from './pages/HomePage';
import { FilmDetail } from './pages/FilmDetail';

function App() {
  const { theme } = useTheme();

  return (
    <Router>
      <div className={theme === 'dark' ? 'dark' : ''}>
        <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/film/:slug" element={<FilmDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
