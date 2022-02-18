import { useMemo } from 'react';
import getHeroesByPublisher from '../../helpers/getHeroesByPublisher';
import HeroCard from './HeroCard';

const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="container animate__animated animate__fadeIn">
      <div className="row row-cols-1 row-cols-md-2 g-2">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
};

export default HeroList;
