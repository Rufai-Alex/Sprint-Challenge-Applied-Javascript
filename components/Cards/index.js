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


function cardcomponent() {
    const divcard = document.createElement('div');
    const divhead = document.createElement('div');
    const divauthor = document.createElement('div');
    const divimg = document.createElement('div')
    const imgtag = document.createElement('img');
    const spanauthor = document.createElement('span')

    divcard.append(divhead);
    divcard.append(divauthor);
    divcauthor.append(divimg);
    divauthor.append(imatag);

    divcard.classList.add('card');
    divhead.classList.add('headline');
    divauthor.classList.add('author');
    divimg.classList.add('img-container');




    return divcard;

}