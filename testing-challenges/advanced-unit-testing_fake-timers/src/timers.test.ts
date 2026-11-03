import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { debounce, getGreeting, startCountdown } from "./timers";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe("getGreeting", () => {
  test("greets with 'Good morning' at 9:00", () => {
    vi.setSystemTime(new Date(2026, 0, 1, 9, 0));

    expect(getGreeting()).toBe("Good morning");
  });

  test.each([
    { hour: 11, minutes: 59, expected: "Good morning" },
    { hour: 12, minutes: 0, expected: "Good afternoon" },
    { hour: 17, minutes: 59, expected: "Good afternoon" },
    { hour: 18, minutes: 0, expected: "Good evening" },
  ])(
    "greeting $hour:$minutes o'Clock as '$expected'",
    ({ hour, minutes, expected }) => {
      vi.setSystemTime(new Date(2026, 1, 1, hour, minutes));
      expect(getGreeting()).toBe(expected);
    },
  );

  test("switches to 'Good evening' at exactly 18:00", () => {
    // TODO: check 17:59 and 18:00
  });
});

describe("debounce", () => {
  test("does not call the callback immediately", () => {
    const callback = vi.fn();
    const debounced = debounce(callback, 500);

    debounced();

    expect(callback).not.toHaveBeenCalled();
  });

  test("calls the callback once after the delay", () => {
    // TODO: use vi.advanceTimersByTime(500)
    const callback = vi.fn();
    const debounced = debounce(callback, 500);
    debounced();
    vi.advanceTimersByTime(500); //Zeit voran um test zu simulieren.
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("calls the callback only once for several quick calls", () => {
    // TODO: call debounced() three times in a row
    const callback = vi.fn();
    const debounced = debounce(callback, 500);
    debounced();
    debounced();
    debounced();
    vi.advanceTimersByTime(500);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("restarts the delay with every call", () => {
    // TODO: call, advance 400 ms, call again, advance 400 ms -> not called yet
    const callback = vi.fn();
    const debounced = debounce(callback, 500);
    debounced();
    vi.advanceTimersByTime(400);
    debounced();
    vi.advanceTimersByTime(400);

    expect(callback).not.toHaveBeenCalled();
  });
});

describe("startCountdown", () => {
  test("calls onTick every second with the remaining seconds", () => {
    // TODO: for a countdown of 3 seconds onTick receives 2, 1 and 0
    const onTick = vi.fn();
    startCountdown(3, onTick, vi.fn());
    vi.advanceTimersByTime(3000);
    expect(onTick.mock.calls).toEqual([[2], [1], [0]]);
  });

  test("does not call onDone before the countdown is over", () => {
    const onTick = vi.fn();
    const onDone = vi.fn();
    startCountdown(3, onTick, onDone);
    vi.advanceTimersByTime(2999);
    expect(onDone).not.toHaveBeenCalled();
  });

  test("calls onDone when the countdown reaches 0", () => {
    const onTick = vi.fn();
    const onDone = vi.fn();
    startCountdown(3, onTick, onDone);
    vi.advanceTimersByTime(3000);
    expect(onDone).toHaveBeenCalledTimes(1);
  });

  test("stops ticking after the returned cancel function was called", () => {
    const onTick = vi.fn();
    const onDone = vi.fn();
    const cancle = startCountdown(3, onTick, onDone);

    vi.advanceTimersByTime(1000);
    cancle();
    vi.advanceTimersByTime(5000);
    expect(onTick).toHaveBeenCalledTimes(1);
    expect(onDone).not.toHaveBeenCalled();
  });

  test("calls onDone right away for a countdown of 0 seconds", () => {
    // TODO: what happens in the current implementation? Is that what you expect?

    const onTick = vi.fn();
    const onDone = vi.fn();
    startCountdown(0, onTick, onDone);
    // expect(onDone).toHaveBeenCalledTimes(1);
    // vi.advanceTimersByTime(5000);
    // expect(onTick).not.toHaveBeenCalled();
    expect(onDone).not.toHaveBeenCalled();
    vi.advanceTimersByTime(5000);
    expect(onTick).toHaveBeenCalled();
  });
});
