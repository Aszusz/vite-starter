type Stopped = {
  type: 'STOPPED'
}

type Started = {
  type: 'STARTED'
  startTime: Date
  currentTime: Date
}

export type Stopwatch = Stopped | Started

export function stopped(): Stopped {
  return { type: 'STOPPED' }
}

export function started(time: Date): Started {
  return { type: 'STARTED', startTime: time, currentTime: time }
}

export function update(time: Date, stopwatch: Stopwatch): Stopwatch {
  switch (stopwatch.type) {
    case 'STOPPED':
      return stopwatch
    case 'STARTED':
      return { ...stopwatch, currentTime: time }
  }
}

export function elapsedSeconds(stopwatch: Stopwatch): number {
  switch (stopwatch.type) {
    case 'STOPPED':
      return 0
    case 'STARTED':
      return Math.floor(
        (stopwatch.currentTime.getTime() - stopwatch.startTime.getTime()) / 1000
      )
  }
}
