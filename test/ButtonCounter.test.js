// Montar y desmontar siempre se debe usar

import ButtonCounter from "../src/components/ButtonCounter";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, test, expect } from "vitest";

beforeEach(() => render(<ButtonCounter />));
afterEach(() => cleanup());

describe("Button Counter", () => {
  test("debe renderizarse", () => {
    expect(screen.getByText("0")).toBeDefined(); //Se encontro y se renderizo
  });
  test("Incrementa en 1 al dar click", () => {
    const button = screen.getByText("0");

    expect(button.innerHTML).toBe("0");
    fireEvent.click(button);
    expect(button.innerHTML).toBe("1");
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(button.innerHTML).toBe("5");
  });
});
