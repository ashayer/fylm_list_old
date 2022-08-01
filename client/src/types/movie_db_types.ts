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

  interface MovieDetails {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: any;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: number;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    vote_average: number;
    vote_count: number;
  }

  interface ProductionCompany {
    id: number;
    name: string;
  }

  interface ProductionCountry {
    iso_3166_1: number;
    name: string;
  }

  interface SpokenLanguage {
    iso_639_1: number;
    name: string;
  }
}

export {};
