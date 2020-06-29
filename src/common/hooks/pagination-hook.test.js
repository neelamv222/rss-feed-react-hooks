import { renderHook, act } from '@testing-library/react-hooks'
import usePagination from './pagination-hook';

describe('Pagniation hook test cases', () => {
  let result;
  beforeEach(() => {
    result  = renderHook(() => usePagination([1,2,3,4,5,6,7,8,9,10], 5)).result;
  });

  test('should increment current page', () => {
    act(() => {
      result.current.next();
    });
    expect(result.current.currentPage).toBe(2);
  });

  test('should decrement current page', () => {
    act(() => {
      result.current.previous();
    });
    expect(result.current.currentPage).toBe(1);
  });

  test('should return the clicked page', () => {
    act(() => {
      result.current.goTo(2);
    });
    expect(result.current.currentPage).toBe(2);
  });

  test('should return maxPage count', () => {
    expect(result.current.maxPage).toBe(2);
  });
});
