/*
Navigation Menu for Camera Page
*/

let menuIcon = document.querySelector('svg.menu');
let navigation = document.querySelector('nav');
let header = document.querySelector('header');

function toggleNav() {
  // console.log('toggle');
  navigation.classList.toggle('toggle');
  // navigation.className = "toggle";
  header.classList.toggle('toggle');
  // header.className = "toggle";
}

menuIcon.addEventListener('click', toggleNav);