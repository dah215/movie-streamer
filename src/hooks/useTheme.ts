import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Lấy theme từ localStorage hoặc mặc định là 'dark'
    const saved = localStorage.getItem('theme') as Theme | null;
    return saved || 'dark';
  });

  useEffect(() => {
    // Lưu theme vào localStorage
    localStorage.setItem('theme', theme);

    // Cập nhật class trên document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};
