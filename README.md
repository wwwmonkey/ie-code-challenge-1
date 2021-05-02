# ie-code-challenge-1

## Requirements and build

Install Node, checkout Repo and run the following commands from project directory:

- npm i
- npm run test

The 2 relevant files are:

- robot.js
- robot.test.js

## Design/Architecture notes

I've tried to keep this code as K.I.S.S and D.R.Y as possible. Some functions I could have refactored further, for eg. LEFT and RIGHT could call one function. But in these instances I erred in favour of readability.

It should only require Jest and Babel (was required for imports to work in Jest) to run. Using React or Web Components would be overkill when there is no UI, but I also did experiment with a UI (see below).

In a larger application, I would probably refactor some of these exports to return a Promise where required. Currently these functions are called in a Jest test suite which serves to validate the functionality and hence for ease of testing generally return a Boolean.

## UI notes

Prior to writing the code in this repo I experimented with a UI that utilised a [retro styled Terminal for input](https://5dvr7.csb.app/). Early on I ran into a few issues where Jest wouldn't work on Codesandbox.io for Static builds which lead me to abort.

The only functional command is HELP which displays the placeholders for input. With more time the functions in this Repo could be utilised for controlling the robot which would also output it's movement in a retro style. A bunch of the code is scraped together from other projects, so perhaps consider it only as an example of a [FED codebase I enjoy working with](https://codesandbox.io/s/ie-code-test-5dvr7?file=/index.html).
