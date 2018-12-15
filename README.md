# unit-4-game

Cristal Collector

This is a game primarily built with Javascript and jQuery. Random numbers are generated and assigned to each of the four crystal images on the bottom of the page.

A final random number is assigned as the "goal" number that the user is trying to match. By clicking on the crystals, the user adds to their score. The user is unaware of the value of each crystal until they've clicked on them, and it's up to the user to calculate how much each crystal will add.

jQuery
This game is a great demonstrator of the usefulness of jQuery to manipulate the DOM structure. Clicking on each crystal updates the user's score and displays the value in a div. If the user's score goes above or equals the target value, the game is over, and a message is displayed for a short time, and then the number of wins or losses is updated and the game resets.

Functions
One thing I did not use extensively in previous projects but decided to get more practice with are functions. Instead of rewriting large blocks of code, I put the two major conditional. It makes the code much cleaner and easier to expand the project in the future, if desired.