import React from 'react';
import SeriePopular from './SeriePopular/SeriePopular';
import SerieOnTheAir from './SerieAiringToday/SerieAiringToday';
import SerieTopRated from './SerieTopRated/SerieTopRated';

const SerieHome = () => {
  return (
    <div>
        <SeriePopular/>
        <SerieOnTheAir/>
        <SerieTopRated/>
    </div>
  )
}

export default SerieHome