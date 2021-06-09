export const updateQuery = (query: string): string => {
  return query.split(' ').join('%20').toLowerCase();
};
