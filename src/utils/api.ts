const API_BASE_URL = 'https://phim.nguonc.com/api';

export interface Film {
  _id: string;
  name: string;
  slug: string;
  origin_name: string;
  poster_url: string;
  thumb_url: string;
  year: number;
  content: string;
  type: string;
  status: string;
  episodes: Episode[];
  genres: string[];
  countries: string[];
  casts: string[];
  directors: string[];
  updated_time: string;
}

export interface Episode {
  _id: string;
  name: string;
  slug: string;
  filename: string;
  link_embed: string;
  link_m3u8: string;
  server_data: Array<{
    name: string;
    link_embed: string;
    link_m3u8: string;
  }>;
}

export interface ApiResponse<T> {
  status: boolean;
  msg: string;
  data: T;
}

// Lấy danh sách phim mới cập nhật
export const getNewFilms = async (page: number = 1): Promise<Film[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/films/phim-moi-cap-nhat?page=${page}`
    );
    const data: ApiResponse<{ items: Film[] }> = await response.json();
    return data.data?.items || [];
  } catch (error) {
    console.error('Error fetching new films:', error);
    return [];
  }
};

// Lấy danh sách phim theo danh mục
export const getFilmsByCategory = async (
  slug: string,
  page: number = 1
): Promise<Film[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/films/danh-sach/${slug}?page=${page}`
    );
    const data: ApiResponse<{ items: Film[] }> = await response.json();
    return data.data?.items || [];
  } catch (error) {
    console.error('Error fetching films by category:', error);
    return [];
  }
};

// Lấy thông tin chi tiết phim
export const getFilmDetail = async (slug: string): Promise<Film | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/film/${slug}`);
    const data: ApiResponse<{ item: Film }> = await response.json();
    return data.data?.item || null;
  } catch (error) {
    console.error('Error fetching film detail:', error);
    return null;
  }
};

// Lấy phim theo thể loại
export const getFilmsByGenre = async (
  slug: string,
  page: number = 1
): Promise<Film[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/films/the-loai/${slug}?page=${page}`
    );
    const data: ApiResponse<{ items: Film[] }> = await response.json();
    return data.data?.items || [];
  } catch (error) {
    console.error('Error fetching films by genre:', error);
    return [];
  }
};

// Lấy phim theo quốc gia
export const getFilmsByCountry = async (
  slug: string,
  page: number = 1
): Promise<Film[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/films/quoc-gia/${slug}?page=${page}`
    );
    const data: ApiResponse<{ items: Film[] }> = await response.json();
    return data.data?.items || [];
  } catch (error) {
    console.error('Error fetching films by country:', error);
    return [];
  }
};

// Lấy phim theo năm phát hành
export const getFilmsByYear = async (
  year: string,
  page: number = 1
): Promise<Film[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/films/nam-phat-hanh/${year}?page=${page}`
    );
    const data: ApiResponse<{ items: Film[] }> = await response.json();
    return data.data?.items || [];
  } catch (error) {
    console.error('Error fetching films by year:', error);
    return [];
  }
};

// Tìm kiếm phim
export const searchFilms = async (keyword: string): Promise<Film[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/films/search?keyword=${encodeURIComponent(keyword)}`
    );
    const data: ApiResponse<{ items: Film[] }> = await response.json();
    return data.data?.items || [];
  } catch (error) {
    console.error('Error searching films:', error);
    return [];
  }
};
