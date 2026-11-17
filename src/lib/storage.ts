import * as React from 'react'

/**
 * State persisted to localStorage. Reads after mount (never during SSR render)
 * so the server HTML and first client render match.
 */
export function useLocalState<T>(key: string, initial: T) {
  const [value, setValue] = React.useState<T>(initial)
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(key)
      if (raw !== null) setValue(JSON.parse(raw) as T)
    } catch {
      /* ignore corrupt storage */
    }
    setReady(true)
  }, [key])

  React.useEffect(() => {
    if (ready) localStorage.setItem(key, JSON.stringify(value))
  }, [key, value, ready])

  return [value, setValue, ready] as const
}
