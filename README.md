# 30.-Dutch-Auction-and-English-Auction-Web-Application-Game <img src="https://cdn-icons-png.flaticon.com/512/5736/5736605.png" width="50" height="50">

(rmb to add the full microeconomics presentation slides here!!!!!)

This is a [Kahoot](https://kahoot.it/)-style inspired web application live mini-game for a presentation on the topic of Auctions for a microeconomics module I took during my university. It simulates a live auction game that I did with my classmates during the presentation to demonstrate how the generic Dutch Auctions and English Auctions works. The rules of the games slightly deviates from how the actual generic Dutch Auctions and English Auctions rules due to the constraints of needing to do it as a presentation activity, but it conveys the idea of how they work.

Here is the link of the deployed Dutch Auction and English Auction Web Application game on [Render](https://render.com/): https://three0-dutch-auction-and-english-auction.onrender.com/ (Click the link to try out the game!)

Here is a demonstration of how this game works:  
(add video here)

This video are done by me, using [OBS Studio software](https://obsproject.com/) for screen recording and VideoPad Video Editor (by NCH Software) for video editing.

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

### Rules of the Dutch Auction and English Auction Game
<p align="center"> 
  Rules of the Dutch Auction game <br>
  <img src="https://github.com/WindJammer6/30.-Dutch-Auction-and-English-Auction-Web-Application-Game/blob/main/Image%20of%20the%20Rules%20of%20the%20Dutch%20Auction%20Game.png"  width="675" height="350"> <br>
  Rules of the English Auction game <br>
  <img src="https://github.com/WindJammer6/30.-Dutch-Auction-and-English-Auction-Web-Application-Game/blob/main/Image%20of%20the%20Rules%20of%20the%20English%20Auction%20Game.png"  width="675" height="350">  
</p>

<br>

**Additional source(s):**  
+ https://chatgpt.com/ (ChatGPT)

<br>

Programming Languages used:  
![My Skills](https://go-skill-icons.vercel.app/api/icons?i=html) ![My Skills](https://go-skill-icons.vercel.app/api/icons?i=css) ![My Skills](https://go-skill-icons.vercel.app/api/icons?i=javascript)

Frameworks used:  
![My Skills](https://go-skill-icons.vercel.app/api/icons?i=nodejs) ![My Skills](https://go-skill-icons.vercel.app/api/icons?i=express) ![My Skills](https://go-skill-icons.vercel.app/api/icons?i=socketio)

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
**1. 'Version1' folder**  
These files are not required in the creation of this Dutch Auction and English Auction Web Application Game. They are files belonging to the first version of this Dutch Auction and English Auction Web Application Game.

All other files in this Github repository are required in the creation of this Dutch Auction and English Auction Web Application Game and belongs to the second version of this Dutch Auction and English Auction Web Application Game.

<br>

**2. 'public' folder**  
The 'public' folder serves as the designated directory for static assets—files that clients can request directly without server-side processing. These assets typically include images, CSS stylesheets, JavaScript files, fonts, and HTML documents.

*i. 'hostdutchauction.html' file*    
The HTML and JavaScript frontend code for the 'Host a Dutch Auction' page (for hosting a Dutch Auction game).

<br>

*ii. 'hostenglishauction.html' file*  
The HTML and JavaScript frontend code for the 'Host an English Auction' page (for hosting a English Auction game).

<br>

*iii. 'index.html' file*  
The HTML and JavaScript frontend code for the Main Menu page.

<br>

*iv. 'playerdutchauction.html' file*  
The HTML and JavaScript frontend code for the 'Join a Dutch Auction' page (for a player/bidder to join a Dutch Auction game).

<br>

*v. 'playerenglishauction.html' file*  
The HTML and JavaScript frontend code for the 'Join a English Auction' page (for a player/bidder to join a English Auction game).

<br>

*vi. 'style.css' file*  
The CSS styling frontend code for all the 'hostdutchauction.html' file and 'hostenglishauction.html' file.

<br>

*3. 'Image of the Rules of the Dutch Auction Game.png' and ''Image of the Rules of the English Auction Game.png' files  
Images used in the README.md of this Github repository.

<br>

*4. 'package-lock.json' file*  
This file is automatically generated by npm during operations that modify the node_modules directory or package.json, this file records the exact versions of installed dependencies and their entire dependency tree. Its primary purpose is to ensure consistent and reproducible builds across different environments by locking dependencies to specific versions. This consistency is crucial for collaborative projects, as it prevents discrepancies that might arise from differing package versions. It's advisable to commit 'package-lock.json' to version control to maintain uniformity across development, testing, and production environments. ​

<br>

*5. 'package.json' file*  
This file is automatically generated by npm, and serves as the core descriptor of your project, containing metadata such as the project name, version, description, author, and license. More importantly, it specifies the project's dependencies and their acceptable version ranges using semantic versioning. This flexibility allows npm to install the latest compatible versions within the defined ranges, facilitating updates while aiming to prevent breaking changes. Developers typically create or modify 'package.json' manually or via the 'npm init' command. 

<br>

*6. 'server.js' file*  
The server.js file typically serves as the main entry point, responsible for initializing and configuring the server. Its primary functions include:​
- Importing Required Modules: It begins by importing necessary Node.js modules, such as http for creating the server or third-party modules like express for simplified server creation and routing.
- Creating the Server: The file sets up the server to handle incoming HTTP requests.
- Defining Routes and Middleware: In more complex applications, especially those using frameworks like Express, 'server.js' sets up middleware functions and defines routes to handle different endpoints.
- Starting the Server: Finally, 'server.js' instructs the server to listen on a specified port and hostname, making it accessible to clients.

<br>

## 3. Deployment Process of this Dutch Auction and English Auction Web Application Game <a name = "deploymentprocess"></a> ![My Skills](https://go-skill-icons.vercel.app/api/icons?i=render)
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
