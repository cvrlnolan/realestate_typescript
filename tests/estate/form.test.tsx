/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import AddEstate from "../../pages/estate/add";
import faker from "faker";

describe("Add Estate Page", () => {
  it("should render correctly", async () => {
    render(<AddEstate />);
    screen.debug();
  });

  /* Testing different form inputs .. You can test more of them as desired
   * Just follow the same procedure you see below
   */

  it("title should be at least 8 characters long", async () => {
    render(<AddEstate />);
    let titleInput = await waitFor(() => screen.getByLabelText("Title"));
    // expect(titleInput).toBeInTheDocument();
    fireEvent.input(titleInput, {
      target: {
        value: faker.random.alpha({ count: 7 }),
      },
    });
    // expect(titleInput.value).toBe("Test");
    let alert = await waitFor(() => screen.getByTestId("titleError"));
    expect(alert).toBeInTheDocument();
    expect(alert.textContent).toBe("Title is too short");
  });

  it("price should be at least $100", async () => {
    render(<AddEstate />);
    let priceInput = await waitFor(() => screen.getByLabelText("Price"));
    expect(priceInput).toBeInTheDocument();
    fireEvent.input(priceInput, {
      target: {
        value: faker.datatype.number(99),
      },
    });
    // expect(parseInt(priceInput.value)).toBe(50);
    let alert = await waitFor(() => screen.getByTestId("priceError"));
    expect(alert).toBeInTheDocument();
    expect(alert.textContent).toBe("Price too short or invalid");
  });
});
