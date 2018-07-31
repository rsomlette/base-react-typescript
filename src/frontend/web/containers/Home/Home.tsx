import * as React from 'react';

// import styled from 'styled-components';
import { IPokemonList } from '../../../common/Model/FetchPokemonList';

interface IProps {
  error: Error | null;
  isLoading: boolean;
  pokemonList: IPokemonList | null;
  fetch: () => void;
}

export class Home extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }
  // public componentDidMount() {
  //   this.props.fetch();
  // }

  public render() {
    return <div>Hello</div>;
  }
}

// const emptyFunction = () => {
//   // tslint:disable-next-line no-console
// };
