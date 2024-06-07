import { useEffect, useState } from 'react'

type TUseDebounce = {
  value: string | number | undefined | null
  delay?: number
}

export const useDebounce = ({ value, delay = 500 }: TUseDebounce) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}
