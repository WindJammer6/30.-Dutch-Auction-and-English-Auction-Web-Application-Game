# 30.-Dutch-Auction-and-English-Auction-Web-Application-Game
This is a [Kahoot](https://kahoot.it/)-style inspired web application live mini-game for a presentation on the topic of Auctions for a microeconomics module I took during my university. It simulates a live auction game that I did with my classmates during the presentation to demonstrate how the generic Dutch Auctions and English Auctions works. 

Here is the link of the deployed Dutch Auction and English Auction Web Application game on [Render](https://render.com/): https://three0-dutch-auction-and-english-auction.onrender.com/ (Click the link to try out the game!)

Here is a demonstration of how this game works:  
(add video here)

These videos are done by me, using [OBS Studio software](https://obsproject.com/) for screen recording and VideoPad Video Editor (by NCH Software) for video editing.

Disclaimer: This is just a semi-functioning prototype that I quickly made with the help of [ChatGPT](https://chatgpt.com/) in 2 days. Hence, expect that it is not the most robust code, and is only designed for demonstration purposes. The video demonstrates how its supposed to work. If you don't use it according to how it is meant to as shwon in the video likely you might run into some bugs!

<br>

### Features
For this prototype web application, as I was pressed for time, and that it was not graded to build an entire web application for some presentation demonstration (I did it out of interest), it is more focused on implementing the features to demonstrate the concepts of the generic Dutch Auctions and English Auctions in a fun way (it does not have the best code quality nor UI/UX☹️). Here is a list of features in the Dutch Auction and English Auction Web Application game:  
- Main menu page
- Host a Dutch Auction page (for hosting a Dutch Auction game)
  - The Dutch Auction page shows who are the players/bidders who has joined your game
- Host an English Auction page (for hosting an English Auction game)
  - The English Auction page shows who are the players/bidders who has joined your game
- Join a Dutch Auction page (for a player/bidder to join a Dutch Auction game)
- Join a Dutch Auction page (for a player/bidder to join an English Auction game)

It supports multiple game hostings, each of which can be created by creating a game code for that hosting. It also supports multiple players/bidders in a game hosting, which they can join by entering the game code of the game they want to join. Just like how [Kahoot](https://kahoot.it/) works!

<br>

### Rules of the Dutch Auction and English Auction game

(Add pic of the rules of the game here and the full microeconomics presentation slides here)

<br>

## Table of Contents
Here is a directory of this 'REAME.md' file:
1. [How to run locally?](#howtorunlocally)
1. [Code Description](#codedescription)
2. [Deployment Process of this Dutch Auction and English Auction Web Application Game](#deploymentprocess)
3. [Potential Improvements to this Dutch Auction and English Auction Web Application Game](#potentialimprovements)

<br>

## 1. How to run locally? <a name = "howtorunlocally"></a>
1. Git clone this Github repository/project to your local device

2. Install dependencies
```txt
npm init -y
npm install express socket.io
```

3. To run the project
```txt
node server.js
```

<br>

## 2. Code Description <a name = "codedescription"></a>
This 2D Unity game is built on the [Unity](https://unity.com/) game development framework, so obviusly the building process is mainly done in the [Unity](https://unity.com/) editor/software, with the C# script components scripting done on the [VS code](https://code.visualstudio.com/) IDE. 

<br>

## 3. Deployment Process of this Dutch Auction and English Auction Web Application Game <a name = "deploymentprocess"></a> <img src="https://tutorials.yax.com/assets/images/articles/render-logo.png" width="50" height="50"> 
(This description is copy pasted from [ChatGPT](https://chatgpt.com/) and it helped me deploy this Dutch Auction and English Auction Web Application Game)
```txt
1. Push your code to GitHub if you haven’t already:
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/30.-Dutch-Auction-and-English-Auction-Web-Application-Game.git
git push -u origin main

2. Go to https://render.com
- Sign up and click “New Web Service”
- Connect your GitHub repo
- Choose:
  - Build Command: npm install
  - Start Command: node server.js
  - Node Version: leave blank or 18

3. Render will give you a live URL, e.g.:
https://30.-Dutch-Auction-and-English-Auction-Web-Application-Game.onrender.com
```

Honestly, the deployment process on [Render](https://render.com/) is very straightforward and the [Render](https://render.com/) platform provides very clear instructions and a logging terminal for your deployed apps to help in the deployment of your app. Once deployed, I got a direct '[Render](https://render.com/)' link to this Dutch Auction and English Auction Web Application Game, which I can then share with others to try out this Dutch Auction and English Auction Web Application Game.

- Here is the link of this deployed Dutch Auction and English Auction Web Application Game on [Render](https://render.com/) - https://three0-dutch-auction-and-english-auction.onrender.com

*Source(s):*  
+ https://render.com/ (Render)
+ https://chatgpt.com/ (ChatGPT)

<br>

## 4. Potential Improvements to this Dutch Auction and English Auction Web Application Game <a name = "potentialimprovements"></a>
*Loose features:*  
+ In the 'Join a Dutch Auction page (for joining a Dutch Auction game)' and 'Join a Dutch Auction page (for joining an English Auction game)', if the user accidentally clicks the 'Join' button more than once, multiple inputs of the same user with the same name will join the same game
+ A player/bidder can join halfway into an auction game, which should not be the case. (Can potentially implement a feature that blocks new players/bidders from joining once an auction game has started)
+ There is no feature that tells a player/bidder wanting to join an auction game whether or not the auction game room exists, nor does it tell you or stop you from joining an auction game that has already started

*New features:*
+ Maybe add a settings page to:
  +  modify the starting price for the auctions
  +  for the Dutch Auction, modify how fast the price decreases
  +  for the English Auction, modify how much the price increases per raise
+  Add other types of auction games such as First-price Sealed-bid Auctions and Second-price Sealed-bid Auctions

*UI/UX:*
+ In general, the UI/UX is just pretty bad generally due to time constraints
