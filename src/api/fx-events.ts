import {
  payloadEventDefinition,
  EventTypes,
  makeEventCreators,
  makeEventTypes,
} from '@/utils/redux-events'

export const fxEvents = {
  ['APP_STARTED_DETAILS']: payloadEventDefinition<Date>(),
  ['_GOT_TIME']: payloadEventDefinition<Date>(),
  ['PLUS_RND_WAIT_DONE']: payloadEventDefinition<number>(),
  ['MINUS_RND_WAIT_DONE']: payloadEventDefinition<number>(),
}

export const fxEventCreators = makeEventCreators(fxEvents)
export const fxEventTypes = makeEventTypes(fxEvents)

export type FxEvents = EventTypes<typeof fxEventCreators>
