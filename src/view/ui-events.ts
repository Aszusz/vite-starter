import {
  eventDefinition,
  payloadEventDefinition,
  EventTypes,
  makeEventCreators,
  makeEventTypes,
} from '@/utils/redux-events'

export const uiEvents = {
  ['APP_STARTED']: eventDefinition(),
  ['SMALL_INCREMENT_BUTTON_CLICKED']: eventDefinition(),
  ['LARGE_INCREMENT_BUTTON_CLICKED']: payloadEventDefinition<number>(),
  ['LARGE_DECREMENT_BUTTON_CLICKED']: payloadEventDefinition<number>(),
  ['SMALL_DECREMENT_BUTTON_CLICKED']: eventDefinition(),
}

export const uiEventCreators = makeEventCreators(uiEvents)
export const uiEventTypes = makeEventTypes(uiEvents)

export type UiEvents = EventTypes<typeof uiEventCreators>
