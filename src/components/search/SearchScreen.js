import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { getHeroesByName } from '../../helpers/getHeroesByName';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../hero/HeroCard';

const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Con QueryString podemos obtener los datos extraidos del url, es decir, los query que necesitemos.
  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h2>Búsquedas</h2>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un héroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button
              className="btn btn-outline-primary mt-2 btn-block"
              type="submit"
            >
              Buscar...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {q === '' ? (
            <div className="alert alert-info">Buscar un héroe</div>
          ) : (
            heroesFiltered.length === 0 && (
              <div className="alert alert-danger">
                No hay resultados de: {q}
              </div>
            )
          )}

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
