/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Listings from "../pages/listings";
import { estates } from "@/assets/sampleTestData";

describe("Listings Page", () => {
  it("should render properly on screen", async () => {
    render(<Listings estatesData={estates} />);
    const images = await waitFor(() => screen.getAllByAltText("estate_img"));
    images.forEach((image) => {
      expect(image).toBeInTheDocument();
    });
  });
});
