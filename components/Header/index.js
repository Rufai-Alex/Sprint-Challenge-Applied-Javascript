// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    const headerDiv = document.createElement('div');
    const spanDate = document.createElement('span');
    const headerH1 = document.createElement('h1');
    const spanTem = document.createElement('span');

    headerDiv.append(spanDate);
    headerDiv.append(headerH1);
    headerDiv.append(spanTem);

    headerDiv.classList.add('header');
    spanDate.classList.add('date');
    spanTem.classList.add('temp');

    spanDate.textContent = 'SMARCH 28, 2019';
    headerH1.textContent = 'Lambda Times';
    spanTem.textContent = '98°';

    return headerDiv;
}

const headerContainer = document.querySelector('.header-container');

headerContainer.append(Header());