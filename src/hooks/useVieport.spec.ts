import { renderHook } from '@testing-library/react';

import { useViewport } from './useViewport';

describe('useViewport', () => {
  it('should display initial values', () => {
    const { result } = renderHook(() => useViewport());

    // console.log({ result: result.current });
    expect(result.current).toStrictEqual({ x: 1024, y: 768 });
  });
});
