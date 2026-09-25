# Slack Bot

A simple Slack bot built with Node.js, Slack Bolt, and Socket Mode.

## Features

* Ping and latency check
* Bot status
* Bot information
* Owner information
* Random cat images
* Random dog images
* Random jokes
* Help command

## Commands

| Command   | Description                    |
| --------- | ------------------------------ |
| `/ping`   | Check bot latency              |
| `/help`   | Show available commands        |
| `/status` | Check bot status               |
| `/about`  | Show information about the bot |
| `/owner`  | Show bot owner                 |
| `/cat`    | Send a random cat image        |
| `/dog`    | Send a random dog image        |
| `/joke`   | Send a random joke             |

## Requirements

* Node.js
* A Slack workspace
* A Slack App
* Slack Bot Token
* Slack App-Level Token

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd slack-bot
```

Install the dependencies:

```bash
npm install
```

If required:

```bash
npm install @slack/bolt axios dotenv
```

## Environment Variables

Create a `.env` file:

```env
SLACK_BOT_TOKEN=xoxb-your-bot-token
SLACK_APP_TOKEN=xapp-your-app-token
```

Do not upload the `.env` file to GitHub.

Add this to `.gitignore`:

```gitignore
.env
node_modules/
```

## Running the Bot

Start the bot with:

```bash
node index.js
```

If everything is working, you should see:

```text
Starting bot...
bot is running!
```

Keep the terminal running while the bot is in use.

## Slack Setup

Create a Slack App and enable Socket Mode.

The App-Level Token needs the following scope:

```text
connections:write
```

Create the following Slash Commands in your Slack App:

```text
/ping
/help
/status
/about
/owner
/cat
/dog
/joke
```

Since the bot uses Socket Mode, a public Request URL is not required.

## APIs

The bot currently uses:

* The Cat API for random cat images
* Dog CEO API for random dog images
* Official Joke API for random jokes

## Author

Made by akashsuu.

## License

This project is for learning and personal use.
