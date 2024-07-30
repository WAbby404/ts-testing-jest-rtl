import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  it.only("renders a name", () => {
    render(<Greet name="Abby" />);
    const textElement = screen.getByText("Hello Abby");
    expect(textElement).toBeInTheDocument();
  });

  it.skip("renders an Abbyname", () => {
    render(<Greet name="Abbyname" />);
    const textElement = screen.getByText("Hello Abbyname");
    expect(textElement).toBeInTheDocument();
  });

  test("renders wrongly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello!/i);
    expect(textElement).toBeInTheDocument();
  });
});
