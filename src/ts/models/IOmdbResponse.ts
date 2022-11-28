import { IMovie } from "./movie";

export interface IOmdbResponse {
    totalResults: string;
    Search: IMovie[];
}