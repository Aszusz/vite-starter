import { FxEvents, fxEventTypes } from "@api/fxEvents";
import * as Counter from "@model/counter";
import * as Stopwatch from "@model/stopwatch";
import { UiEvents, uiEventTypes } from "@view/uiEvents";

import { initialState, State } from "./state";

function reducer(
  state: State = initialState,
  action: UiEvents | FxEvents
): State {
  switch (action.type) {
    case fxEventTypes['APP_STARTED_DETAILS']: {
      return { ...state, stopwatch: Stopwatch.started(action.payload) }
    }

    case fxEventTypes['GOT_TIME']: {
      const prev = state.stopwatch
      const next = Stopwatch.update(action.payload, prev)
      return { ...state, stopwatch: next }
    }

    case fxEventTypes['LARGE_DECREMENT_WAIT_COMPLETED']: {
      const prev = state.counter
      const next = Counter.decrement(action.payload, prev)
      return { ...state, counter: next }
    }

    case uiEventTypes['SMALL_INCREMENT_BUTTON_CLICKED']: {
      const prev = state.counter
      const next = Counter.increment(1, prev)
      return { ...state, counter: next }
    }

    case uiEventTypes['SMALL_DECREMENT_BUTTON_CLICKED']: {
      const prev = state.counter
      const next = Counter.decrement(1, prev)
      return { ...state, counter: next }
    }

    case fxEventTypes['LARGE_INCREMENT_WAIT_COMPLETED']: {
      const prev = state.counter
      const next = Counter.increment(action.payload, prev)
      return { ...state, counter: next }
    }

    default:
      return state
  }
}

export default reducer
