import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Pantry and Workspace", () => {
  render(<App />);
  const pantry = screen.getByTitle("Pantry");
  expect(pantry).toBeInTheDocument();
  const workspace = screen.getByTitle("Workspace");
  expect(workspace).toBeInTheDocument();
});
