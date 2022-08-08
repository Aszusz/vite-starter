import {
  createEvent,
  createPayloadEvent,
  EventTypes,
  makeEventCreators,
  makeEventTypes
} from "@/utils/redux-events";

export const uiEvents = {
  ['APP_STARTED']: createEvent(),
  ['SMALL_INCREMENT_BUTTON_CLICKED']: createEvent(),
  ['LARGE_INCREMENT_BUTTON_CLICKED']: createPayloadEvent<number>(),
  ['LARGE_DECREMENT_BUTTON_CLICKED']: createPayloadEvent<number>(),
  ['SMALL_DECREMENT_BUTTON_CLICKED']: createEvent(),
}

export const uiEventCreators = makeEventCreators(uiEvents)
export const uiEventTypes = makeEventTypes(uiEvents)

export type UiEvents = EventTypes<typeof uiEventCreators>
