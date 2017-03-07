

function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}



//Banner

var banner = document.querySelector(".bannerAnnouncement");
var closeBannerButton = document.querySelector(".closeBanner");
var headlineDiv = document.querySelector(".headline");
var headlineDiv3 = document.querySelector(".headline h3");
//var middleSubHeroDiv = document.querySelector(".middleSubHero");

closeBannerButton.addEventListener("click", function() {
  console.log("hey");
    addClass(banner, "hide");
    addClass(closeBannerButton, "hide");
    removeClass(banner, "bannerAnnouncement");
    removeClass(closeBannerButton, "closeBanner");
    addClass(headlineDiv, "noBannerAnnouncement");
    addClass(headlineDiv3, "noBannerAnnouncement");
   // addClass(middleSubHeroDiv, "noBannerAnnouncement");
})




