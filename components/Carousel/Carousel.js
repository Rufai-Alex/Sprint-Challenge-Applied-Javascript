/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function createsCarousel() {
  const carousel = document.createElement("div");
  const leftButton = document.createElement("div");
  const imgMountains = document.createElement("img");
  const imgComputer = document.createElement("img");
  const imgTree = document.createElement("img");
  const imgTurn = document.createElement("img");
  const rightButton = document.createElement("div");

  carousel.append(leftButton);
  carousel.append(imgMountains);
  carousel.append(imgComputer);
  carousel.append(imgTree);
  carousel.append(imgTurn);
  carousel.append(rightButton);

  carousel.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  rightButton.textContent = "\u25BC";
  leftButton.textContent = "\u25B2";
  imgMountains.src = "./assets/carousel/mountains.jpeg";
  imgComputer.src = "./assets/carousel/computer.jpeg";
  imgTree.src = "./assets/carousel/trees.jpeg";
  imgTurn.src = "./assets/carousel/turntable.jpeg";

  return carousel;
}
console.log(createsCarousel());

const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.append(createsCarousel());
