import { PokemonClient } from '../../../client/FetchPokemonListClient';

import { BASE_URLS } from '../config';

export const pokemonClient = new PokemonClient(BASE_URLS.pokemon);
