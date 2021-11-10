import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AddEstate from "../../pages/estate/add";

describe("Add Estate Page", () => {
  it("should render correctly", async () => {
    render(<AddEstate />);
    screen.debug();
  });
});
