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
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    const cards = document.querySelector(".cards-container");
    let cardValues = Object.values(response.data.articles);
    cardValues.forEach(element => {
      element.forEach(article => {
        cards.appendChild(createCard(article));
        console.log("Create2Card");
      });
    });
  })
  .catch(error => {});

function createCard(obj) {
  const card = document.createElement("div");
  const cardHeadline = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const cardImgContainer = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardAuthorsName = document.createElement("span");

  card.append(cardHeadline);
  card.append(cardAuthor);
  cardAuthor.append(cardImgContainer);
  cardImgContainer.append(cardImg);
  cardAuthor.append(cardAuthorsName);
  cardHeadline.classList.add("headline");

  card.classList.add("card");
  cardHeadline.textContent = obj.headline;
  cardAuthor.classList.add("author");
  cardImgContainer.classList.add("img-container");
  cardImg.src = obj.authorPhoto;
  cardAuthorsName.textContent = "By " + obj.authorName;
  return card;
}
