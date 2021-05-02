// Quick function to verify Jest and ES6 are working
export const quickTest = () => true;

// Robot data and copy
let robot = {};
export const robotPlacedFalse = `Robot has not been placed!`;
const cardinals = ["NORTH", "EAST", "SOUTH", "WEST"];
const gridSize = 4;

// Robot placement helpers
export const isRobotSet = () => (robot && robot.x ? true : false);
export const basicSanitisation = (x, y, f) => Number.isInteger(x) && Number.isInteger(y) && cardinals.includes(f);
export const isValidPlacement = (ordinate) => ordinate <= gridSize && ordinate >= 0;
// Proxy for selecting cardinal array overflow
export const rotate = new Proxy(cardinals, {
  get(target, prop) {
    if (!isNaN(prop)) {
      prop = parseInt(prop, 10);
      // left on NORTH
      if (prop < 0) {
        prop += target.length;
      }
      // right on WEST
      if (prop == gridSize) {
        prop = 0;
      }
    }
    return target[prop];
  },
});

// Robot commands

// Place robot on grid, also called by move()
export const place = (x, y, f) => {
  // Using try in case some garbage is passed in
  try {
    // Simple validation
    if (basicSanitisation(x, y, f) && isValidPlacement(x) && isValidPlacement(y)) {
      // Update robot object in a basic, readable manner
      robot.x = x;
      robot.y = y;
      robot.f = f;
      // Robot placed successfully
      return true;
    } else {
      return false;
    }
  } catch (error) {
    // Something went wrong?
    console.log(error);
    return false;
  }
};

// Move one step forward, if within grid
export const move = () => {
  if (isRobotSet()) {
    let newRobot = { ...robot };

    // I suspect there may be a more elegant mathematical solution involving cardinality
    // but for now, this works and is readable
    switch (robot.f) {
      case "NORTH":
        newRobot.x++;
        break;
      case "EAST":
        newRobot.y++;
        break;
      case "SOUTH":
        newRobot.x--;
        break;
      case "WEST":
        newRobot.y--;
        break;
      default:
        // Robot placement error?
        return false;
    }

    // Re-place the robot with updated position
    return place(newRobot.x, newRobot.y, newRobot.f);
  } else {
    return false;
  }
};

// Turn 90 degrees anti-clockwise
export const left = () => {
  if (isRobotSet()) {
    robot.f = rotate[cardinals.indexOf(robot.f) - 1];
    return true;
  } else {
    return false;
  }
};

// Turn 90 degrees clockwise
export const right = () => {
  if (isRobotSet()) {
    robot.f = rotate[cardinals.indexOf(robot.f) + 1];
    return true;
  } else {
    return false;
  }
};

// Report robots current position
export const report = () => {
  return !robot.x ? robotPlacedFalse : `Output: ${robot.x},${robot.y},${robot.f}`;
};

// Reset robot, used in Jest teardown
export const resetRobot = () => {
  robot = {};
  return true;
};

export default robot;
