import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

test("renders two input fields and a button", () => {
  render(<GameForm />);
  const Input1 = screen.getByLabelText("Name of game");
  const Input2 = screen.getByLabelText("Player names, separated by comma");
  const button = screen.getByRole("button", { name: "Create game" });
  expect(Input1).toBeInTheDocument();
  expect(Input2).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);
  const Form = screen.getByRole("form", { name: "Create a new game" });

  expect(Form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const handleCreateGame = vi.fn();
  const user = userEvent.setup();

  render(<GameForm onCreateGame={handleCreateGame} />);

  const gameNameInput = screen.getByLabelText("Name of game");
  const playerNameInput = screen.getByLabelText(
    "Player names, separated by comma",
  );
  const button = screen.getByRole("button", { name: "Create game" });

  await user.type(gameNameInput, "First game of the day");
  await user.type(playerNameInput, "Bernd, Thomas, Erika");
  await user.click(button);

  expect(handleCreateGame).toHaveBeenCalledWith({
    playerNames: ["Bernd", "Thomas", "Erika"],
    nameOfGame: "First game of the day",
  });
});

test("does not submit form if one input field is left empty", async () => {
  const handleCreateGame = vi.fn();
  const user = userEvent.setup();

  render(<GameForm onCreateGame={handleCreateGame} />);

  const gameNameInput = screen.getByLabelText("Name of game");
  const playerNameInput = screen.getByLabelText(
    "Player names, separated by comma",
  );
  const button = screen.getByRole("button", { name: "Create game" });

  await user.type(playerNameInput, "Bernd, Thomas, Erika");
  await user.click(button);

  expect(handleCreateGame).not.toHaveBeenCalled();

  await user.type(gameNameInput, "First game of the day");
  await user.clear(playerNameInput);
  await user.click(button);

  expect(handleCreateGame).not.toHaveBeenCalled();
});
