import { IFetchClientResponse } from '../Common/Clients/Helper/FetchUserClient';

export enum FetchUserTypes {
  FETCH = 'fetch',
  FETCH_SUCCESS = 'success',
  FETCH_FAILURE = 'failure',
}

export const FetchUserActions = {
  fetch: () => ({ type: FetchUserTypes.FETCH }),
  fetchFailure: (error: Error) => ({ error, type: FetchUserTypes.FETCH_FAILURE }),
  fetchSuccess: (payload: IFetchClientResponse) => ({
    payload,
    type: FetchUserTypes.FETCH_SUCCESS,
  }),
};

const initialState = {
  error: Error,
  isLoading: false,
  payload: null,
};

export const fetchUserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FetchUserTypes.FETCH:
      return { isLoading: true, error: null };
    case FetchUserTypes.FETCH_SUCCESS:
      return { isLoading: false, payload: action.payload, error: null };
    case FetchUserTypes.FETCH_FAILURE:
      return { isLoading: false, error: action.error };
    default:
      return {};
  }
};
