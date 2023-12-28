import { useState } from 'react'

type SetValue<T> = (value: T) => void

export const useLocalStorage = <T>(key: string, initialValue: T): [T, SetValue<T>] => {
  const storedValue = localStorage.getItem(key)
  const initial = storedValue ? JSON.parse(storedValue) : initialValue
  const [value, setValue] = useState<T>(initial)

  const setStoredValue: SetValue<T> = (newValue) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return [value, setStoredValue]
}

export default useLocalStorage
