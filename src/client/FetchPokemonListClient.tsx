import { Observable } from 'rxjs';

// import { Rxs } from '../Domain/Helper/Rsx';

// import { IPokemonList } from '../frontend/common/Model/FetchPokemonList';
import { IPokemonList } from '../frontend/common/Model/FetchPokemonList';
import { BaseClient, DEFAULT_JSON_API_HEADERS } from './BaseClient';

export class PokemonClient extends BaseClient {
  constructor(baseUrl: string, headers: any = {}) {
    super(baseUrl, { ...DEFAULT_JSON_API_HEADERS, ...headers });
  }

  public fetchPokemonList$(): Observable<IPokemonList> {
    return this.fetch$<IPokemonList>('/pokemon');
  }
}
