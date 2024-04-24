# Warden, the Discord bot.
This is the JavaScript code written for the "Warden" bot on my Discord server called "Game Devs Italy" 
The bot was created to answer some general questions from users and use some basic commands with the prefix !

This template is therefore usable by anyone who wants to emulate the behavior of the bot I created.
With each function I add in my bot I will update the code here so that it can always be Open Source and up to date.

You can then use this code to create your bot and start immediately with simple commands.

Discord server: https://discord.gg/tNwXFEXJ2R

## How to use it?

**REQUIREMENTS**
- Node.js
- PowerShell or Command Prompt (preferably running in admin mode)
- Code Editor/IDE that supports JavaScript

**STEP-BY-STEP GUIDE**

1. Copy the files to your Discord bot project folder
2. Open the **PowerShell** or the **Command Prompt** in your project folder and type "node -v" to check your **node.js version**
3. Install the modules for **discord.js** by typing the commands "npm install discord.js" or "npm i discord.js"
4. In your **Discord Developer Portal** control panel for your bot, check that "Presence IntentServer" and "Members Intent" are activated before launching your bot. This is essential since the last update of discord.js with the Intentions.
5. Click on **Start.bat** to launch the bot

## Contents

- index.js is the main code file, written in JavaScript, that allows the bot to run and execute its functions
- package-lock.json is a file used in Node.js projects to manage package dependencies.
- package.json contains metadata about the project and information about package dependencies used in the application.
- Start.bat/Stop.bat both contains a set of commands for Windows to speed up the process of starting the bot or stopping it
