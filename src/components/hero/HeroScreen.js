import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import getHeroById from '../../helpers/getHeroById';
import { heroImages } from '../../helpers/heroImages';

const HeroScreen = () => {
  const navigate = useNavigate();

  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  const handleReturn = () => {
    // Si colocamos un -1 podemos indicarle que regrese una página en la navegación.
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/" />;
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  // const imgPath = `/assets/img/${id}.jpg`;

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      <div className="col-4">
        <img
          className="img-thumbnail"
          // src={imgPath} -> Importación estática
          src={heroImages(`./${id}.jpg`)}
          alt={superhero}
        />
      </div>

      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b> {first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
