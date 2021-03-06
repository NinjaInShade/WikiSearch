const placeholders = [
  "tallest building in the world",
  "turtle",
  "action film",
  "youtuber",
  "elon musk",
  "html",
  "anti-virus softwares",
  "fastest cars",
  "steam",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
  placeholders,
  getRandomInt,
};
