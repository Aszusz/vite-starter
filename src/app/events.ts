import { fxEventCreators, FxEvents, fxEventTypes } from '@/api/fx-events'
import { uiEventCreators, UiEvents, uiEventTypes } from '@/view/ui-events'

export const eventCreators = { ...uiEventCreators, ...fxEventCreators }
export const eventTypes = { ...uiEventTypes, ...fxEventTypes }

export type Events = UiEvents | FxEvents
