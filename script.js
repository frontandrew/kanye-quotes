const newQuoteButton = document.querySelector('.header__btn');
newQuoteButton.addEventListener('click', updateQuote);

function updateQuote () {
  const quoteElement = document.querySelector('.quote');

  fetch ('https://api.kanye.rest')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data.quote);
      quoteElement.textContent = data.quote
  })
}

setInterval(updateQuote, 15000)