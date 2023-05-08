const quote = document.getElementById("quotes");
const btn = document.getElementById("button");


const getQuote = () => {
  fetch("https://api.kanye.rest/")
    .then(res => res.json())
    .then(data => {
      quote.innerHTML = `${data.quote}`;
    })
    .catch(error => {
      
      quote.innerHTML = "Sorry, something went wrong. Please try again later.";
      console.error(error);
    });
};


btn.addEventListener("click", getQuote);
