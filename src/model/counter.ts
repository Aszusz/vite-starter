export type Counter = {
  count: number
}

export function init() {
  return { count: 0 }
}

export function increment(amount: number, counter: Counter): Counter {
  return { count: counter.count + amount }
}

export function decrement(amount: number, counter: Counter): Counter {
  return { count: counter.count - amount }
}
