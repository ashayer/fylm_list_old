import { NoSubstitutionTemplateLiteral } from "typescript";

declare global {
  interface MovieGenre {
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
    genres: MovieGenre[];
    homepage: string;
    id: number;
    imdb_id: string;
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
    iso_3166_1: string;
    name: string;
  }

  interface SpokenLanguage {
    iso_639_1: string;
    name: string;
  }

  interface CastDetails {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
  }
}

export {};
