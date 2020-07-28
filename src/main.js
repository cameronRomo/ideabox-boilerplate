/////////////// query selectors ///////////////

var buttonMenu = document.querySelector('.menu-open');
var menuOpen = document.querySelector('.open-menu');
var menuClose = document.querySelector('.menu-close');
var shadow = document.querySelector('.ideas');
var buttonSave = document.querySelector('.button-save');
var inputTitle = document.querySelector('.input-title');
var inputBody = document.querySelector('.input-body');
var sectionIdeaCards = document.querySelector('.idea-cards');
var input = document.querySelectorAll("input")

var ideas = [];

/////////////// event listeners ///////////////

buttonMenu.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', displayBack);
buttonSave.addEventListener('click', createCard);
inputTitle.addEventListener('keydown', disableSaveButton);
inputBody.addEventListener('keydown', disableSaveButton);

//possible anonymous function for createCard

/////////////// iteration 0 ///////////////

function toggleMenu() {
  displayOff();
  menuClose.classList.remove('hidden');
  menuOpen.classList.remove('hidden');
  shadow.classList.add('shadow');
};

function displayBack() {
  displayOff();
  buttonMenu.classList.remove('hidden');
  shadow.classList.remove('shadow');
};

function displayOff() {
  buttonMenu.classList.add('hidden');
  menuClose.classList.add('hidden');
  menuOpen.classList.add('hidden');
};

/////////////// iteration 2 ///////////////

function createCard() {
  var title = inputTitle.value;
  var body = inputBody.value;
  if (!(title === '' || body === '')) { // this might be superflous
    var userCard = new Idea(title, body);
    ideas.push(userCard);
    displayCard(title, body);
  }
};

function displayCard(title, body) {
  clearTemplates();
  var additionalCard;
  for (var i = 0; i < ideas.length; i++) {
    additionalCard =
    `<article class="card">
      <section class="card-banner-top">
        <img class="banner-star" src="assets/star.svg" alt="card-star-icon">
        <img class="banner-x" src="assets/delete.svg" alt="card-delete-icon">
      </section>
      <section class="card-content">
        <h2 class="card-title">${ideas[i].title}</h2>
        <h2 class="card-body">${ideas[i].body}</h2>
      </section>
      <section class="card-footer">
        <img src="assets/comment.svg" alt="icon-comment">
        <h3 class="comment-text">Comment</h3>
      </section>
    </article>`;
    sectionIdeaCards.innerHTML += additionalCard;
  }
  clearInputs()
  disableSaveButton(event)
};

function clearTemplates() {
  sectionIdeaCards.innerHTML = '';
};

function clearInputs() {
  inputBody.value = '';
  inputTitle.value = '';
}

function disableSaveButton(event) {
  for (var i = 0; i < input.length - 1; i++) {
    if (input[i].value !== ''
  && input[i].value !== '') {
    buttonSave.disabled = false;
  } else {
    buttonSave.disabled = true;
    }
  }
}


// ***BUG*** apply margin on the entire on parent container? Margins Don't match when new card is created
// ***BUG*** Card margin needs to wrap text below and not increase width of card.
// clearTemplates();
// potentially research the difference in wrapping the input fields in a form class
// potentially research the differenct in a submit button vs a regular button
