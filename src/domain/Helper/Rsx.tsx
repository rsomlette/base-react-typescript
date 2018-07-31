import {
  bindNodeCallback,
  concat,
  defer,
  EMPTY,
  from,
  // Observable,
  of,
  pipe,
  range,
  throwError,
} from 'rxjs';

import { catchError, delay, filter, flatMap, map, tap } from 'rxjs/operators';

// export interface IObservable<+T> : Observable<T>;

export const Rxs = Object.freeze({
  bindNodeCallback$: bindNodeCallback,
  catchError$: catchError,
  delay$: delay,
  filter$: filter,
  flatMap$: flatMap,
  map$: map,
  tap$: tap,

  empty$: EMPTY,
  of$: of,
  throw$: throwError,

  concat$: concat,
  defer$: defer,
  from$: from,
  pipe$: pipe,
  range$: range,
});
