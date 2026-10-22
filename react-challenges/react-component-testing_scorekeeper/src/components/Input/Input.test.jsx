// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import Input from ".";

// test("renders a label and an input with the correct attributes", () => {
//   render(<Input />);

//   const input = screen.getByRole("textbox", { name: /name/i });

//   expect(input).toHaveAttribute("name", "name");
// });

// test("calls callback on every user input", async () => {
//   const user = userEvent.setup();
//   const onChangeMock = vi.fn();

//   render(<Input onChange={onChangeMock} />);
//   const inputEl = screen.getByLabelText("labelText");

//   await user.type(inputEl, "Laureen");

//   expect(onChangeMock).toHaveBeenCalledTimes("Laureen".length);
// });

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(<Input labelText="Name" name="name" placeholder="Enter your name" />);

  const input = screen.getByRole("textbox", { name: /name/i });

  expect(input).toHaveAttribute("name", "name");
  expect(input).toHaveAttribute("placeholder", "Enter your name");
});

test("calls callback on every user input", async () => {
  const user = userEvent.setup();
  const onChangeMock = vi.fn();
  const name = "Laureen";

  render(<Input labelText="Name" name="name" onChange={onChangeMock} />);

  await user.type(screen.getByLabelText("Name"), name);

  expect(onChangeMock).toHaveBeenCalledTimes(name.length);
});
