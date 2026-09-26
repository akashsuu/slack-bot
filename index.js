console.log("index.js started");
require("dotenv").config();

const { App } = require("@slack/bolt");
const axios = require("axios");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});
//ping
app.command("/akashsuu-ping", async ({ ack, respond }) => {
  const start = Date.now();

  await ack();

  const latency = Date.now() - start;

  await respond({
    text: `Pong!\nLatency: ${latency}ms`
  });
});

//help
app.command("/akashsuu-help", async ({ ack, respond }) => {
  await ack();

  await respond({
    text:
      `*Available Commands*\n\n` +
      `\`/akashsuu-ping\` - Check bot latency\n` +
      `\`/akashsuu-status\` - Check bot status\n` +
      `\`/akashsuu-about\` - About the bot\n` +
      `\`/akashsuu-help\` - Show this help message\n` +
      `\`/akashsuu-owner\` - Display owner name\n` +
      `\`/akashsuu-joke\` - Tell a joke\n` +
      `\`/akashsuu-cat\` - Send a cute cat image\n` +
      `\`/akashsuu-dog\` - Send a cute dog image`
  });
});

//status
app.command("/akashsuu-status", async ({ ack, respond }) => {
  await ack();

  await respond({
    text: "Bot is online and running!"
  });
});

//about
app.command("/akashsuu-about", async ({ ack, respond }) => {
  await ack();

  await respond({
    text:
      `*Bot Name*\n\n` +
      `A Slack bot built with Node.js and Slack Bolt.\n` +
      `Currently running in Socket Mode.\n` +
      `Made by akashsuu.`
  });
});

//owner
app.command("/akashsuu-owner", async ({ ack, respond }) => {
  await ack();

  await respond({
    text: "akashsuu"
  });
});

// cute cat
app.command("/akashsuu-cat", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/search"
    );

    const catImage = response.data[0].url;

    await respond({
      blocks: [
        {
          type: "image",
          image_url: catImage,
          alt_text: "cute cat"
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*cute cat!*"
          }
        }
      ]
    });

  } catch (error) {
    console.error("Cat API error:", error);

    await respond({
      text: "Couldn't get a cat image right now."
    });
  }
});
//cute dog
app.command("/akashsuu-dog", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get(
      "https://dog.ceo/api/breeds/image/random"
    );

    const dogImage = response.data.message;

    await respond({
      blocks: [
        {
          type: "image",
          image_url: dogImage,
          alt_text: "Random dog"
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "*Random dog!*"
          }
        }
      ]
    });

  } catch (error) {
    console.error("Dog API error:", error);

    await respond({
      text: "Couldn't get a dog image right now."
    });
  }
});
//give joke
app.command("/akashsuu-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );

    const joke = response.data;

    await respond({
      text: `*${joke.setup}*\n\n${joke.punchline}`
    });

  } catch (error) {
    console.error("Joke API error:", error);

    await respond({
      text: "Couldn't get a joke right now."
    });
  }
});
//start bot
(async () => {
  console.log("Starting bot...");

  await app.start();

  console.log("bot is running!");
})();
