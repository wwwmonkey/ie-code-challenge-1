// Quick function to verify Jest and ES6 are working
export const quickTest = () => true;

// Robot data
let robot = {};

export const cardinals = ["NORTH", "EAST", "SOUTH", "WEST"];
export const robotFalse = `Robot has not been placed!`;

// Place robot on the grid
export const place = (x, y, f) => {
  try {
    // Simple validation
    if (Number.isInteger(x) && Number.isInteger(y) && cardinals.includes(f)) {
      // TODO: verify valid grid placement
      // could be .map but this is readable
      // might need changing if recurring place cmd is valid?
      robot.x = x;
      robot.y = y;
      robot.f = f;
    }

    // In addition the math logic required here, I have an idea here that NORTH/EAST can equal positive
    // and SOUTH/WEST is negative and test can be written around that

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// Reset robot
export const resetRobot = () => (robot = {});

// Move one step forward, if permitted
export const move = () => {
  return true;
};

// Turn 90 degrees anti-clockwise
export const left = () => {
  return true;
};

// Turn 90 degrees clockwise
export const right = () => {
  return true;
};

// Report robots current position
export const report = () => {
  console.log(robot);
  return !robot.x ? robotFalse : `Output: ${robot.x},${robot.y},${robot.f}`;
};

export default robot;
