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

import { catchError, delay, flatMap } from 'rxjs/operators';

// export interface IObservable<+T> : Observable<T>;

export const Rxs = Object.freeze({
  bindNodeCallback$: bindNodeCallback,
  catchError$: catchError,
  delay$: delay,
  flatMap$: flatMap,

  empty$: EMPTY,
  of$: of,
  throw$: throwError,

  concat$: concat,
  defer$: defer,
  from$: from,
  pipe$: pipe,
  range$: range,
});
