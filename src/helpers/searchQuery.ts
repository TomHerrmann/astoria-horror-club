import { MovieDetails } from '../interfaces';
import { updateQuery } from './updateQuery';

interface QueryResult {
  Search: MovieDetails[];
  totalResults: number;
  Response: boolean;
}

export const searchQuery = (query: string): MovieDetails[] => {
  const movieDetails: MovieDetails[] = [];

  const key =
    process.env.REACT_APP_API_KEY ||
    'd8ce5ef3bamsh8ae8d15cac50d60p135463jsnb026c0a4872e';
  const host =
    process.env.REACT_APP_API_HOST ||
    'movie-database-imdb-alternative.p.rapidapi.com';

  fetch(
    `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${updateQuery(
      query
    )}&page=1&r=json`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-key': key,
        'x-rapidapi-host': host,
      },
    }
  )
    .then((response: Response): Promise<QueryResult> => response.json())
    .then((result): void =>
      result.Search.forEach((elem) => movieDetails.push(elem))
    )
    .catch((err) => {
      throw new Error(err);
    });

  return movieDetails;
};
