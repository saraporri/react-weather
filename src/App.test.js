import { render, screen } from "@testing-library/react";
import City from "./City";

test("renders learn react link", () => {
  render(<City />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
