const header = document.querySelector('header');
const nav = document.getElementById('nav');
const searchForm = document.getElementById('search-form');
const searchOpener = document.getElementById('search-opener');
const autoText = document.getElementById('auto-text');

function search() {
  console.log('Hello, World!');
};

function menu() {
  nav.classList.toggle('right-[-50vw]');
  nav.classList.toggle('right-2');
};

function openSearch() {
  searchForm.classList.toggle('flex');
  searchForm.classList.toggle('hidden');
};

window.addEventListener("scroll", function(){
  header.classList.toggle("bg-black", scrollY > 0);
});


text1 = ['W', 'We', 'Web', 'Web ', 'Web D', 'Web De', 'Web Dev', 'Web Deve', 'Web Devel', 'Web Develo', 'Web Develop', 'Web Develope', 'Web Developer'];
