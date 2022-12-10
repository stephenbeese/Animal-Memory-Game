# Animal Memory Game
 
Animal Memory Game is a fully responsive JavaScript game where a user will attempt to match all 12 randomly assorted cards in the quickest time. This game is targeted at children to help improve brain functions, such as attention, concentration, and focus. However, this game can be enjoyed by people of any age. The users' best times are displayed at the bottom as an incentive to keep playing and improve on their best times.
 
This site hopes to demonstrate how JavaScript works in a real-world context.
  
![Responsive Design](/assets/images/readme/responsive.png)
 
## Features
 
### Existing Features
 
- Heading
   - Featured at the top of the page, the heading Animal Memory game is large and easily read by the user. Upon viewing the page, the user will be able to see what the game is and infer the type of game they will be playing.
<br>
 
   ![Heading](/assets/images/readme/header.png)
 
- How to play
 
   - Featured near the top of the page, this section explains to the user what they have to do when they have started the game.
   <br>
 
   ![How to play](/assets/images/readme/rules.png)
 
- Start Button
   - Below the how-to-play section, there is a button labelled start. The button should be intuitive to a user as it is central and just above the grid. This button reveals a message to the user to start matching and allows them to click the images below.
<br>
 
   ![Start Button](/assets/images/readme/start-button.png)

- Display Messages
   - The user will have a message displayed based on their input. For example, once a user has clicked start they will be shown the message 'Start Matching!'.
 
   - The user will also have a display message that will inform them whether or not they've made a match.

   - Once a user has completed a game, they will be shown a congratulations message along with their completed time.
<br>
 
   ![Start Matching](/assets/images/readme/message-one.png) ![Not a Match](/assets/images/readme/message-two.png)
   ![Match](/assets/images/readme/message-three.png) ![Congratulations](/assets/images/readme/message-four.png)
 
- Score and Timer
   - Once a user has opted to click start game, The timer will start counting up in seconds and stop when the user has matched all the cards correctly.
  
   - When a user makes a match their score will increase by 20, if the two cards clicked are not a match then the score will stay the same. Once a player has matched all the cards their score will be 120, which in turn will stop the timer.
<br>
 
   ![Score](/assets/images/readme/score.png) ![Timer](/assets/images/readme/timer.png)
 
- Card Colour Change
   - If a user matches two cards correctly, the matched cards will continue to show their image and have their backgrounds changed to green to indicate a match.
  
   - If a user picks two different cards then the card's backgrounds will temporarily turn red before reverting to their original blue colour.
 
   - This helps younger children who may not know how to read to understand if they made a match.

   ![Green](/assets/images/readme/green.png) ![Red](/assets/images/readme/red.png)
 
- Best Times
   - This section allows the user to view their top 3 completion times. This adds a competitive aspect to the game where a user can try to beat their or a friend's best time.
<br>
 
   ![Best Times](/assets/images/readme/best-times.png)
 
 
### Features Left to Implement
- Shake animation
   - When I learn to do so, I would like to implement a shake animation when a user picks a non-match. I feel this would add an extra feeling of interactivity when playing this game.
 
 
## Testing
 
- I tested this game using Chrome, Firefox and Safari browsers.
 
- I confirmed that the game runs as expected.
 
- I confirmed that all text, instructions and buttons are easy to read and understand.
 
- I confirmed that the colour and fonts chosen are easy to read and accessible by running it through lighthouse in dev tools.
 
   ![Lighthouse](/assets/images/readme/lighthouse.png)
 
- I confirmed that this site is responsive, looks good and functions on all standard screen sizes using the dev tools device toolbar.
 
### Unfixed Bugs
 
- No unfixed bugs.
 
### Validator Testing
 
- HTML
    - There were no errors when passing through the official [W3C HTML validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fstephenbeese.github.io%2FAnimal-Memory-Game%2F).
 
- CSS
   - There were no errors when passing through the official [W3C CSS validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fstephenbeese.github.io%2FAnimal-Memory-Game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en).
 
- JavaScript
   - There were no errors when passing through the official [JSHint validator](https://jshint.com/).
       - There are 13 functions in this file.
       - Function with the largest signature takes 2 arguments, while the median is 0.
       - Largest function has 20 statements in it, while the median is 6.
       - The most complex function has a cyclomatic complexity value of 4 while the median is 2.
 
## Deployment
 
- The site was deployed to GitHub Pages. The steps to deploy the project are as follows:
   - In the GitHub Repository, navigate to the Settings tab.
   - Navigate to Pages in the sidebar on the left.
   - In the source section drop-down menu, select deploy from branch.
   - Once ‘deploy from branch’ has been selected, select the main branch below and click save.
   - The page will automatically refresh and show that the site has been deployed with a live link at the top of the page.
 
The live link can be found here: https://stephenbeese.github.io/Animal-Memory-Game/
 
## Credits
 
### Content
- The fonts used for this site were taken from Google Fonts
- The method on how to sort numbers in ascending order and randomly sort an array was taken from this [video](https://www.youtube.com/watch?v=xFhNgm73yJs&t)
 
### Media
- The images were been taken from the open source site [freepik.com](https://www.freepik.com/free-vector/hand-drawn-farm-animal-collection_4595247.htm#query=cartoon%20animals&position=41&from_view=search&track=sph)

