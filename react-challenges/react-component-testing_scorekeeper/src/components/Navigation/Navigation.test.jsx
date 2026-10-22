import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navigation from ".";

test("renders with two buttons 'Play' and 'History'", () => {
  render(<Navigation />);
  const playBtn = screen.getByRole("button", {
    name: /play/i,
  });
  const historyBtn = screen.getByRole("button", {
    name: /history/i,
  });
  expect(playBtn).toBeInTheDocument();
  expect(historyBtn).toBeInTheDocument();
});

test("calls onChangeView with 'play' when Play is clicked", async () => {
  const onChangeView = vi.fn();
  const user = userEvent.setup();
  render(<Navigation onChangeView={onChangeView} />);

  await user.click(screen.getByRole("button", { name: /play/i }));

  expect(onChangeView).toHaveBeenCalledWith("play");
});

test("calls onChangeView with 'history' when History is clicked", async () => {
  const onChangeView = vi.fn();
  const user = userEvent.setup();
  render(<Navigation onChangeView={onChangeView} />);

  await user.click(screen.getByRole("button", { name: /history/i }));

  expect(onChangeView).toHaveBeenCalledWith("history");
});
