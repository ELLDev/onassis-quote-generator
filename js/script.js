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
  },
  {
    quote: "Every win is an injustice to someone.",
    source: "Aristotle Onassis",
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

let lastThreeQuotes = [0, 0, 0, 0, 0, 0];
const getRandomQuote = () => {
  let randomQuoteIndex = 0;

  while (lastThreeQuotes.includes(randomQuoteIndex)) {
    randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  }

  lastThreeQuotes.pop();
  lastThreeQuotes.unshift(randomQuoteIndex);
  return quotes[randomQuoteIndex];
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
  html += `
</p>`;

  document.getElementById("quote-box").innerHTML = html;
};

let intervalID = setInterval(printQuote, 10000);

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
