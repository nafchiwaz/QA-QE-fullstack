import { add, subtract } from "./math";

test("adds two numbers correctly", () => {
  expect(add(2, 3)).toBe(5);
});

test("subtracts two numbers correctly", () => {
  expect(subtract(5, 3)).toBe(2);
});
