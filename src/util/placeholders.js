const placeholders = [
  "tallest building in the world",
  "turtle pics",
  "best actions films",
  "who founded youtube",
  "elon musk net worth",
  "how to create a website",
  "best anti-virus softwares",
  "best reliable first cars",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
  placeholders,
  getRandomInt,
};
