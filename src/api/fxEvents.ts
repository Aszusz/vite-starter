import {
  createPayloadEvent,
  EventTypes,
  makeEventCreators,
  makeEventTypes
} from "@utils/redux-events";

export const fxEvents = {
  ['APP_STARTED_DETAILS']: createPayloadEvent<Date>(),
  ['GOT_TIME']: createPayloadEvent<Date>(),
  ['LARGE_INCREMENT_WAIT_COMPLETED']: createPayloadEvent<number>(),
  ['LARGE_DECREMENT_WAIT_COMPLETED']: createPayloadEvent<number>(),
}

export const fxEventCreators = makeEventCreators(fxEvents)
export const fxEventTypes = makeEventTypes(fxEvents)

export type FxEvents = EventTypes<typeof fxEventCreators>
