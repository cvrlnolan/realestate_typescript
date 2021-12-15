/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import Home from "../pages/index";
import { estates } from "@/assets/sampleTestData";

describe("Index Page", () => {
  it("should render correctly", async () => {
    render(<Home />);
    const image = await waitFor(() => screen.getByAltText("intro"));
    expect(image).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
