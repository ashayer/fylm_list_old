declare global {
  interface Genre {
    id: number;
    name: string;
  }

  interface MoviePopular {
    adult: boolean;
    backdrop_path: string;
    genres: Genre[];
    id: number;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    title: string;
    vote_average: number;
    vote_count: number;
  }
}

export {};
