// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

/*
authorName: "FIDO WALKSALOT"
authorPhoto: "./assets/fido.jpg
headline: "Bootstrap 5: Get a Sneak Peak at all the New Features"
*/
cardsContainer = document.querySelector(".cards-container");
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    // console.log(response.data.articles.bootstrap) == array of article objects
    response.data.articles.bootstrap.forEach(item => {
      newCard = Card(item);
      cardsContainer.appendChild(newCard);
    });
    response.data.articles.javascript.forEach(item => {
      newCard = Card(item);
      cardsContainer.appendChild(newCard);
    });
    response.data.articles.technology.forEach(item => {
      newCard = Card(item);
      cardsContainer.appendChild(newCard);
    });
    response.data.articles.jquery.forEach(item => {
      newCard = Card(item);
      cardsContainer.appendChild(newCard);
    });
    response.data.articles.node.forEach(item => {
      newCard = Card(item);
      cardsContainer.appendChild(newCard);
    });
  });

function Card(obj) {
  // create elements
  card = document.createElement("div");
  headline = document.createElement("div");
  author = document.createElement("div");
  imgContainer = document.createElement("div");
  img = document.createElement("img");
  span = document.createElement("span");

  //add classes
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");
  imgContainer.appendChild(img);

  //build structure
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(span);

  // build content from object
  headline.textContent = obj.headline;
  span.textContent = `By ${obj.authorName}`;
  img.src = obj.authorPhoto;
  return card;
}
