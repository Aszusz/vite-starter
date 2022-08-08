/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

export function createEvent(shown = true) {
  return (type: string) => () => {
    return { type: type, shown: shown }
  }
}

export function createPayloadEvent<T>(shown = true) {
  return (type: string) => (payload: T) => {
    return { type: type, payload: payload, shown: shown }
  }
}

export type ActionInfoMap = {
  [key: string]: (type: string) => any
}

export function makeEventTypes<Map extends ActionInfoMap>(map: Map) {
  return Object.fromEntries(
    Object.entries(map).map((entry) => [entry[0], entry[1](entry[0])().type])
  ) as { [Key in keyof Map]: Key }
}

export function makeEventCreators<Map extends ActionInfoMap>(map: Map) {
  return Object.fromEntries(
    Object.entries(map).map((entry) => [entry[0], entry[1](entry[0])])
  ) as {
    [Key in keyof Map]: Map[Key] extends (
      type: string
    ) => (payload: infer P) => { type: string; payload: any }
      ? (payload: P) => { type: Key; payload: P }
      : () => { type: Key }
  }
}

export type EventTypes<Creators extends { [key: string]: (arg: any) => any }> =
  ReturnType<Creators[keyof Creators]>
