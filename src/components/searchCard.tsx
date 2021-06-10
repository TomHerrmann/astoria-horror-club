import React, { ReactElement } from 'react';

interface Props {
  title: string;
  year: string;
  poster: string;
}

const MovieSearchCard = ({ title, year, poster }: Props): ReactElement => {
  return (
    <article>
      {title}
      {year}
      {poster}
    </article>
  );
};

export default MovieSearchCard;
