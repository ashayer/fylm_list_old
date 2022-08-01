declare global {
  interface Genre {
    id: number;
    name: string;
  }

  interface MoviePopular {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    overview: string;
    original_title: string;
    original_language: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
}

export {};
