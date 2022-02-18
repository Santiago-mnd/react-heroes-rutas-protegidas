import { heroes } from '../data/heroes';

export const getHeroesByName = (name = '') => {
  // Si la búsqueda está vacía podemos devolver un array vacio.
  if (name === '') return [];

  name = name.toLowerCase();
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
