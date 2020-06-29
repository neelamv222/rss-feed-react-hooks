import { renderHook, act } from '@testing-library/react-hooks'
import useModal from './modal-hook';

describe('Modal hook test cases: ', () => {
  let result;
  beforeEach(() => {
    result  = renderHook(() => useModal()).result;
  });

  test('should return default value of modalVisibility', () => {
    expect(result.current.modalVisibility).toBe(false);
  });

  test('should set modalVisibility to true', () => {
    act(() => {
      result.current.showModal();
    });
    expect(result.current.modalVisibility).toBe(true);
  });

  test('should set modalVisibility to false', () => {
    act(() => {
      result.current.hideModal();
    });
    expect(result.current.modalVisibility).toBe(false);
  });
});
