# Project-1-Hangman
Hangman game

I used a standard input to gather the hangman word and ".split" it into letters and assign it to boxes for the game.

The alphabet is layed out on the screen with with event listeners that activate when the letter is clicked.  It runs a "for" loop that reviews the letter through the hangman word.  I started a hangman bodyCount counter before the loop and subtracted from the counter if a letter was found.  If not the counter stayed +1 per guess.  At each increment of the bodyCount counter I added a CSS object representing the body to the screen.  When the counter reaches 8 I remove the for loop from the even listener and complete it as the user loses to reveal the word.

Casey had some good tips for getting my formating lined up, getting the counter to only iterate down once if there were two of teh same letter.

Psuedocode
Bronze
Create a game of hangman where a user can enter a word for another player to guess on the webpage
The entered word must be broken into a string and stored as a string array of consecutive letters and use a for loop to check for a match.
Need a solution to populate boxes or dashes for the word and make the number of boxes or dashes equal the .length of the string array.to populate the hangman, use a counter to increment with an if/else statement if the letter guessed is not in the word.  Each number is associated with an addition to the hangman
questions:
Should the letter entry by typed in or clicked?  Could use divs for the letters and use click event to pull innerText to push to the other boxes

Silver:
Get computer to input random words, stored in an array.  
Have auto reset when game is over.
Have congratulations when player wins

Gold
Get Get computer to input random words, from a random word site.
have options to add hands and feet based on length of word
Improve background scenery.


explain technology used
screenshots of it working
different levels of your goals and what you accomplished