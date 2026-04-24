async function random_generateQuote() {
  const quotebox = document.querySelector(".quote-container");
  const quote = document.getElementById("quote");
  const author = document.getElementById("quote-author");
  quote.innerHTML = "Loading...";

  try {
    const raw_response = await fetch("https://api.quotable.io/random");

    const response = await raw_response.json();


    quote.innerHTML = response.content;
    quote.style.fontSize = "20px";
    quote.style.display = "flex";
    quote.style.justifyContent = "center";
    quote.style.alignItems = "center";
    author.innerHTML = "-" + response.author;
    author.style.fontSize = "20px";
    author.style.display = "flex";
    author.style.justifyContent = "center";
    author.style.alignItems = "center";
  } catch (error) {
    quote.innerHTML = "Failed to load quote. Try again.";
    console.error(error);
  }
}

async function getCategoryQuote(quote_type) {
  const quotebox = document.querySelector(".quote-container");
  const quote = document.getElementById("quote");
  const author = document.getElementById("quote-author");
  quote.innerHTML = "Loading...";
  try {
    const raw_response = await fetch(
      `https://api.quotable.io/quotes?tags=${quote_type}`,
    );

    const response = await raw_response.json();


    const taged_quote = response.results[0];

    quote.innerHTML = taged_quote.content;

    quote.style.fontSize = "20px";

    quote.style.display = "flex";

    quote.style.justifyContent = "center";

    quote.style.alignItems = "center";

    author.innerHTML = "-" + taged_quote.author;

    author.style.fontSize = "20px";

    author.style.display = "flex";

    author.style.justifyContent = "center";

    author.style.alignItems = "center";
  } catch (error) {
    quote.innerHTML = 'Failed to load quote. Try again.';
  }
}
