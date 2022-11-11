import {
  eventDefinition,
  EventTypes,
  makeEventCreators,
  makeEventTypes,
} from '@/utils/redux-events'

export const uiEvents = {
  ['APP_STARTED']: eventDefinition(),
  ['PLUS_ONE_BUTTON_CLICKED']: eventDefinition(),
  ['PLUS_RND_BUTTON_CLICKED']: eventDefinition(),
  ['MINUS_RND_BUTTON_CLICKED']: eventDefinition(),
  ['MINUS_ONE_BUTTON_CLICKED']: eventDefinition(),
}

export const uiEventCreators = makeEventCreators(uiEvents)
export const uiEventTypes = makeEventTypes(uiEvents)

export type UiEvents = EventTypes<typeof uiEventCreators>
