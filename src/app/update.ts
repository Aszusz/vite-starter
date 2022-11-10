import { initialState, State } from '@/app/state'
import * as Counter from '@/model/counter'
import * as Stopwatch from '@/model/stopwatch'
import { Events, eventTypes } from './events'

function update(state: State = initialState, event: Events): State {
  switch (event.type) {
    case eventTypes['APP_STARTED_DETAILS']: {
      return { ...state, stopwatch: Stopwatch.started(event.payload) }
    }

    case eventTypes['_GOT_TIME']: {
      const prev = state.stopwatch
      const next = Stopwatch.update(event.payload, prev)
      return { ...state, stopwatch: next }
    }

    case eventTypes['LARGE_DECREMENT_WAIT_COMPLETED']: {
      const prev = state.counter
      const next = Counter.decrement(event.payload, prev)
      return { ...state, counter: next }
    }

    case eventTypes['SMALL_INCREMENT_BUTTON_CLICKED']: {
      const prev = state.counter
      const next = Counter.increment(1, prev)
      return { ...state, counter: next }
    }

    case eventTypes['SMALL_DECREMENT_BUTTON_CLICKED']: {
      const prev = state.counter
      const next = Counter.decrement(1, prev)
      return { ...state, counter: next }
    }

    case eventTypes['LARGE_INCREMENT_WAIT_COMPLETED']: {
      const prev = state.counter
      const next = Counter.increment(event.payload, prev)
      return { ...state, counter: next }
    }

    default:
      return state
  }
}

export default update
