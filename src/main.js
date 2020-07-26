/////////////// query selectors ///////////////

var buttonMenu = document.querySelector('.menu-open');
var menuOpen = document.querySelector('.open-menu');
var menuClose = document.querySelector('.menu-close');
var shadow = document.querySelector('.ideas');
var buttonSave = document.querySelector('.button-save');
var inputTitle = document.querySelector('.input-title');
var inputBody = document.querySelector('.input-body');
var sectionIdeaCards = document.querySelector('.idea-cards');

var ideas = [];

/////////////// event listeners ///////////////

buttonMenu.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', displayBack);
buttonSave.addEventListener('click', createCard);
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

function createCard(title, idea) {
  var title = inputTitle.value;
  var body = inputBody.value;
  if (!(title === '' || body === '')) {
    var userCard = new Idea(title, body);
    ideas.push(userCard);
    sectionIdeaCards.insertAdjacentHTML('beforeend',
      '<article class="card">
        <section class="card-banner-top">
          <img class="banner-star" src="assets/star.svg" alt="card-star-icon">
          <img class="banner-x" src="assets/delete.svg" alt="card-delete-icon">
        </section>
        <section class="card-content">
          <h2 class="card-title">Idea title</h2>
          <h2 class="card-body">Idea body</h2>
        </section>
        <section class="card-footer">
          <img src="assets/comment.svg" alt="icon-comment">
          <h3 class="comment-text">Comment</h3>
        </section>
      </article>');
  }
};

//problem: unsure of how to manipulate the DOM using the data model
//problem: setting the HTML text as an argument for insertAdjacentHTML
//create empty array --> var.innerHTML += newHTML
//how do we use the userCard variable while working with innerHTML?
