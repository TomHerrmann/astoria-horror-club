import { updateQuery } from './updateQuery';

export const searchQuery = async (query: string) => {
  const key =
    process.env.REACT_APP_API_KEY ||
    'd8ce5ef3bamsh8ae8d15cac50d60p135463jsnb026c0a4872e';
  const host =
    process.env.REACT_APP_API_HOST ||
    'movie-database-imdb-alternative.p.rapidapi.com';

  try {
    const resultPromise = await fetch(
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
    );

    const result = await resultPromise.json();
    console.log({ result });
  } catch (err) {
    throw new Error(err);
  }
};
