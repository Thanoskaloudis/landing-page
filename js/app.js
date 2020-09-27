
document.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  

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
