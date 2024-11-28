const core = require('@actions/core');
const github = require('@actions/github');

const coolEmoji = ['😎', '⛄️', '❄️', '🥶', '🧊'];

try {
  console.log(`Running Cool action on ${github.repository}`);
  core.setOutput("time", coolEmoji[Math.floor(Math.random() * coolEmoji.length)]);
} catch (error) {
  core.setFailed(error.message);
}
