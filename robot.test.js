import { jest } from "@jest/globals";
import { quickTest, robotFalse, resetRobot, place, move, left, right, report } from "./robot";

console.log("tests running");

test("Jest is configured and working with ES6", () => {
  expect(quickTest()).toBe(true);
});

describe("place", () => {
  test("place 0,0,NORTH is valid", () => {
    expect(place(0, 0, "NORTH")).toBe(true);
  });

  test("place 5,0,NORTH is invalid", () => {
    expect(place(5, 0, "NORTH")).toBe(false);
  });
});

describe("move", () => {
  test("move before place should be false", () => {
    expect(move()).toBe(false);
  });

  test("place 3,0,NORTH is valid", () => {
    expect(place(3, 0, "NORTH")).toBe(true);
  });

  test("move after place should be true", () => {
    expect(move()).toBe(true);
  });

  test("move outside of board should be false", () => {
    expect(move()).toBe(false);
  });
});

describe("left", () => {
  test("left before place should be false", () => {
    expect(left()).toBe(false);
  });

  test("place 4,0,NORTH is valid", () => {
    expect(place(4, 0, "NORTH")).toBe(true);
  });

  test("turn left", () => {
    expect(left()).toBe(true);
  });

  test("move outside of board should be false", () => {
    expect(move()).toBe(false);
  });

  test("turn left", () => {
    expect(left()).toBe(true);
  });

  test("move inside of board should be true", () => {
    expect(move()).toBe(true);
  });
});

describe("right", () => {
  test("right before place should be false", () => {
    expect(right()).toBe(false);
  });

  test("place 4,0,WEST is valid", () => {
    expect(place(4, 0, "WEST")).toBe(true);
  });

  test("turn right", () => {
    expect(right()).toBe(true);
  });

  test("move outside of board should be false", () => {
    expect(move()).toBe(false);
  });

  test("turn right", () => {
    expect(right()).toBe(true);
  });

  test("move inside of board should be true", () => {
    expect(move()).toBe(true);
  });
});

describe("report", () => {
  test("report before place should be false", () => {
    expect(report()).toBe(robotFalse);
  });

  test("place 4,0,WEST is valid", () => {
    expect(place(4, 0, "WEST")).toBe("Output: 4,0,WEST");
  });
});
