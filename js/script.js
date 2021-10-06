let lastThreeQuotes = [0, 0, 0, 0, 0, 0];
let progressBar = document.getElementById("progress-bar");
let progressBarWidth = 100;

const quotes = [
  {
    quote:
      "Don’t sleep too much. If you sleep three hours less each night for a year, you will have an extra month and a half to succeed in.",
    source: "Aristotle Onassis",
  },
  {
    quote: "Every win is an injustice to someone.",
    source: "Aristotle Onassis",
  },
  {
    quote: "The more you own, the more you know you don’t own.",
    source: "Aristotle Onassis",
    tags: "#Philosophy #Wealth #Inspirational",
  },
  {
    quote:
      "The secret of business is to know something that nobody else knows.",
    source: "Aristotle Onassis",
  },
  {
    quote:
      "It is in our darkest moments where we have to focus to see the light.",
    source: "Aristotle Onassis",
  },
  {
    quote:
      "We must free ourselves of the hope that the sea will ever rest. We must learn to sail in high winds.",
    source: "Aristotle Onassis",
  },
  {
    quote:
      "I hate the opera. No matter how hard I concentrate it still sounds like a bunch of Italian chefs screaming risotto recipes at each other.",
    source: "Aristotle Onassis",
  },
  {
    quote:
      "My favorite country is the one that grants maximum immunity from taxes, trade restrictions, and unreasonable regulations.",
    source: "Aristotle Onassis",
    citation: "T&C Magazine February Edition",
    year: 1964,
  },
];

const getRandomQuote = () => {
  let randomQuoteIndex = 0;

  while (lastThreeQuotes.includes(randomQuoteIndex)) {
    randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  }

  lastThreeQuotes.pop();
  lastThreeQuotes.unshift(randomQuoteIndex);
  return quotes[randomQuoteIndex];
};

const pickRandomBackgroundColor = () => {
  let r = 0;
  let g = 0;
  let b = 0;
  let lowerOffset = 0;
  let upperOffset = 0;

  r = Math.floor(Math.random() * 64) + 12;
  g = Math.floor(Math.random() * 64) + 12;

  lowerOffset = 99 - r - g;
  upperOffset = 162 - r - g;

  if (lowerOffset < 12) lowerOffset = 12;
  if (upperOffset > 75) upperOffset = 75;

  b = Math.round(Math.random() * (upperOffset - lowerOffset)) + lowerOffset;

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
};

const printQuote = () => {
  const randomQuote = getRandomQuote();
  let html = `<p class="quote"> ${randomQuote.quote} </p>
<p class="source"> ${randomQuote.source}
  `;

  if ("citation" in randomQuote) {
    html += `
  <span class="citation"> ${randomQuote.citation} </span>`;
  }
  if ("year" in randomQuote) {
    html += `    
  <span class="year"> ${randomQuote.year} </span>`;
  }
  if ("tags" in randomQuote) {
    html += `    
  <span class="tags"> ${randomQuote.tags} </span>`;
  }
  html += `
</p>`;

  pickRandomBackgroundColor();
  progressBarWidth = 100;
  clearInterval(intervalID);
  intervalID = setInterval(printQuote, 10000);
  document.getElementById("quote-box").innerHTML = html;
};

shrinkProgressBar = () => {
  if (progressBarWidth >= 0.2) {
    progressBarWidth -= 0.1;
    progressBar.style.width = progressBarWidth + "%";
  }
};

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);

let intervalID = setInterval(printQuote, 10000);
let barIntervalID = setInterval(shrinkProgressBar, 10);
