// import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
// import { IPokemonList } from '../../../common/Model/FetchPokemonList';
// import { FetchUserActions } from '../../../common/Redux/FetchUser';
import {
  fetchPokemonListActions,
  // FetchPokemonListTypes,
} from '../../../common/Store/FetchPokemonList/FetchPokemonActions';
import { IRootState } from '../../../common/Store/RootReducer';
import { Home } from './Home';

const mapStateToProps = (store: IRootState) => {
  return {
    error: store.pokemonList.error,
    isLoading: store.pokemonList.isLoading,
    pokemonList: store.pokemonList.payload,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) =>
  bindActionCreators(
    {
      fetch: fetchPokemonListActions.fetch,
      // fetch: () => {
      //   dispatch(FetchPokemonListTypes.FETCH);
      // },
    },
    dispatch,
  );

// interface IProps {
//   error: Error | null;
//   isLoading: boolean;
//   pokemonList: IPokemonList | null;
//   fetch: () => void;
// }

// const Home = ({ error, isLoading, pokemonList, fetch }: IProps) => {
//   fetch();
//   return <div>{pokemonList}</div>;
// };

export default connect(
  mapStateToProps,
  // {
  //   fetch: fetchPokemonListActions.fetch,
  // },
  mapDispatchToProps as any,
)(Home);
