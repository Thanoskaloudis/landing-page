const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

document.addEventListener("click", function (e) {
  // If it isn't an anchor element, don't do anything
  if (e.target.tagName !== "A") return;

  // If it is an anchor element, call scrollAnchors function
  if (e.target.href && e.target.href.indexOf("#") != -1 ) {
    scrollAnchors(e, e.target);
  }
});

function scrollAnchors(e, respond) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

  e.preventDefault();
  let targetID = respond.getAttribute("href")
  let targetAnchor = document.querySelector(targetID);
  let originalTop;

  //if targetID is header,scoll to top, otherwise scroll to section selected
  if (targetID === '#header'){
    window.scrollTo(0, 0);
  }else{
    originalTop = distanceToTop(targetAnchor);
    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
  }
}

const links = document.querySelectorAll('.scroll');
const sections = document.querySelectorAll('section');

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);
