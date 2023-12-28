import { act, renderHook } from '@testing-library/react'
import { useLocalStorage } from './useLocalStorage'

describe('useLocalStorage', () => {
  test('should render the initial local storage', () => {
    const { result } = renderHook(() => useLocalStorage('test', 'test'))
    expect(result.current[0]).toBe('test')
    expect(typeof result.current[1]).toBe('function')
  })

  test('should update the local storage', () => {
    const { result } = renderHook(() => useLocalStorage('test', 'test'))
    expect(result.current[0]).toBe('test')
    act(() => result.current[1]('another test'));
    expect(result.current[0]).toBe('another test')
  })
})
