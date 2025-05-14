import { act, renderHook } from '@testing-library/react';
import { useAuthContext } from './useAuthContext';

// isLogged: boolean
// toggle: () => void
// logIn: () => void
// logOut: () => void

describe('useAuthContext', () => {
  it('should return default state', () => {
    const { result } = renderHook(() => useAuthContext());

    const defaultState = result.current;
    const isLoggedIn = defaultState.isLoggedIn;

    expect(isLoggedIn).toEqual(false);
  });

  it('should toggle values', () => {
    const { result } = renderHook(() => useAuthContext());

    const defaultState = result.current;
    let isLoggedIn = defaultState.isLoggedIn;

    expect(isLoggedIn).toEqual(false);

    act(() => {
      result.current.toggle();
    });

    isLoggedIn = result.current.isLoggedIn;

    expect(isLoggedIn).toEqual(true);
  });

  it('should log in', () => {
    const { result } = renderHook(() => useAuthContext());

    const defaultState = result.current;
    let isLoggedIn = defaultState.isLoggedIn;

    expect(isLoggedIn).toEqual(false);

    act(() => {
      result.current.logIn();
    });

    isLoggedIn = result.current.isLoggedIn;

    expect(isLoggedIn).toEqual(true);
  });

  it('should log out', () => {
    const { result } = renderHook(() => useAuthContext());

    const defaultState = result.current;
    let isLoggedIn = defaultState.isLoggedIn;

    expect(isLoggedIn).toEqual(false);

    act(() => {
      result.current.logIn();
      result.current.logOut();
    });

    isLoggedIn = result.current.isLoggedIn;

    expect(isLoggedIn).toEqual(false);
  });
});
