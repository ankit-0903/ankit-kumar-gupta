/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');

async function updateQuote() {
  try {
    const quotes = require('./src/data/quotes.json');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const { quote, author } = quotes[randomIndex];

    console.log(`\n✦ Tʜᴏᴜɢʜᴛ ᴏғ ᴛʜᴇ Dᴀʏ\n`);
    console.log(`"${quote}"\n  — ${author}\n`);

    // Optionally update a current-quote.json for build-time injection
    const currentQuote = { quote, author, updatedAt: new Date().toISOString() };
    fs.writeFileSync('./src/data/current-quote.json', JSON.stringify(currentQuote, null, 2));

    console.log('Quote updated successfully!');
  } catch (error) {
    console.error('Error updating quote:', error);
  }
}

updateQuote();
