import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";

describe("App", () => {
  it("renders 'Sprinkles'", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("renders 'Chocolate'", async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole("button", { name: "Change" });
    await user.click(button);
    screen.debug();

    expect(screen.getByRole("heading").textContent).toMatch(/Chocolate/i);
  });
});
