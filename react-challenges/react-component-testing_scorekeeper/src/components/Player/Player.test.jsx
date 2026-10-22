import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(<Player />);
  const allBtnElements = screen.getAllByRole("button");
  expect(allBtnElements).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
  const user = userEvent.setup();
  const DecreasePlayerScoreMock = vi.fn();
  const IncreasePlayerScoreMock = vi.fn();
  render(
    <Player
      onDecreasePlayerScore={DecreasePlayerScoreMock}
      onIncreasePlayerScore={IncreasePlayerScoreMock}
    />,
  );
  const decBtn = screen.getByRole("button", { name: "Decrease Score" });

  expect(DecreasePlayerScoreMock).toHaveBeenCalledTimes(0);
  await user.click(decBtn);
  expect(DecreasePlayerScoreMock).toHaveBeenCalledTimes(1);

  const incBtn = screen.getByRole("button", { name: "Increase Score" });

  expect(IncreasePlayerScoreMock).toHaveBeenCalledTimes(0);
  await user.click(incBtn);
  expect(IncreasePlayerScoreMock).toHaveBeenCalledTimes(1);
});
