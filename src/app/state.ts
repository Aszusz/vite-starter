import * as Counter from '@/model/counter'
import * as Stopwatch from '@/model/stopwatch'

export type State = {
  counter: Counter.Counter
  stopwatch: Stopwatch.Stopwatch
}

export const initialState = {
  counter: Counter.init(),
  stopwatch: Stopwatch.stopped(),
}
