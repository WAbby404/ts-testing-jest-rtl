import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });

  it("renders a name", () => {
    render(<Greet name="Abby" />);
    const textElement = screen.getByText("Hello Abby");
    expect(textElement).toBeInTheDocument();
  });

  it("renders an Abbyname", () => {
    render(<Greet name="Abbyname" />);
    const textElement = screen.getByText("Hello Abbyname");
    expect(textElement).toBeInTheDocument();
  });
});
