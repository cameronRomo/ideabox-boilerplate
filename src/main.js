var buttonMenu = document.querySelector('.menu-open');
var menuOpen = document.querySelector('.open-menu');
var menuClose = document.querySelector('.menu-close');
var shadow = document.querySelector('.ideas');
var buttonSave = document.querySelector('.button-save');
var inputTitle = document.querySelector('.input-title');
var inputBody = document.querySelector('.input-body');
var sectionIdeaCards = document.querySelector('.idea-cards');
var input = document.querySelectorAll("input")
var star = document.querySelector('.banner-star');
var card = document.querySelector('.card');

var ideas = [];

buttonMenu.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', displayBack);
buttonSave.addEventListener('click', createCard);
inputTitle.addEventListener('keydown', disableSaveButton);
inputBody.addEventListener('keydown', disableSaveButton);
sectionIdeaCards.addEventListener('click', function(event) {
  if (event.target.classList.contains('banner-star')) {
    favoriteStar();
  }
  if (event.target.classList.contains('banner-x')) {
    deleteCard(event);
  }
});

function favoriteStar() {
  var indexNumber = event.target.id.split('-')[1];
  for (var i = 0; i < ideas.length; i++) {
    if (i == indexNumber) {
      event.target.src="assets/star-active.svg";
      ideas[i].star = true;
      console.log(ideas);
    }
  }
};

function deleteCard(event) {
  var indexNumber = event.target.id.split('-')[1];
  for (var i = 0; i < ideas.length; i++) {
    if (i == indexNumber) {
      ideas.splice(indexNumber, 1);
      event.target.parentElement.parentElement.remove();
    }
  }
};

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

function createCard() {
  var title = inputTitle.value;
  var body = inputBody.value;
  if (!(title === '' || body === '')) {
    var userCard = new Idea(title, body);
    ideas.push(userCard);
    displayCard(title, body);
    console.log(ideas);
  }
};

function displayCard(title, body) {
  clearTemplates();
  var additionalCard;
  for (var i = 0; i < ideas.length; i++) {
    additionalCard =
    `<article class="card" id="card-${i}">
      <section class="card-banner-top">
        <img class="banner-star hidden" id="card-${i}" data-id="favorite-star" type="button" src="assets/star-active.svg" alt="card-star-icon">
        <img class="banner-star" id="card-${i}" data-id="empty-star" type="button" src="assets/star.svg" alt="card-star-icon">
        <img class="banner-x" id="card-${i}" data-id="x" src="assets/delete.svg" alt="card-delete-icon">
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
};

function disableSaveButton(event) {
  for (var i = 0; i < input.length - 1; i++) {
    if (input[i].value !== ''
  && input[i].value !== '') {
    buttonSave.disabled = false;
  } else {
    buttonSave.disabled = true;
    }
  }
};
