import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Pruebas en useCounter", () => {
  test("debe retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;
    expect(counter).toBe(10);
    expect(decrement).toStrictEqual(expect.any(Function)); //se espera que sea una función
    expect(increment).toStrictEqual(expect.any(Function));
    expect(reset).toStrictEqual(expect.any(Function));
  });

  test("debe retornar el counter con el valor de 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test("debe incremetar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    /*
     * Para hacer pruebas de cambios de estado, se necesita el método 'act'
     */
    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(103);
  });

  test("debe decrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement();
      decrement(2);
    });

    expect(result.current.counter).toBe(97);
  });

  test("debe reiniciar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement, increment, reset } = result.current;

    act(() => {
      decrement();
      increment(2);
      reset();
    });

    expect(result.current.counter).toBe(100);
  });
});
