import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Home } from "./Home";

describe("Home", () => {
  test("renders content", () => {
    render(<Home />);
    expect(
      screen.getByText("Where Metal Meets Craftsmanship"),
    ).toBeInTheDocument();
  });
});
