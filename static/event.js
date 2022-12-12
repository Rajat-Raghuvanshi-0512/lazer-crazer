var partyContainer1 = document.getElementById('partyContainer1');
var partyContainer2 = document.getElementById('partyContainer2');
var partyContainer3 = document.getElementById('partyContainer3');

partyContainer1.addEventListener('mouseover', partyScroll1)
partyContainer2.addEventListener('mouseover', partyScroll2)
partyContainer3.addEventListener('mouseover', partyScroll3)

function partyScroll1() {
    partyContainer1.classList.add('active');
    partyContainer2.classList.remove('active');
    partyContainer3.classList.remove('active');
}
function partyScroll2() {
    partyContainer2.classList.add('active');
    partyContainer1.classList.remove('active');
    partyContainer3.classList.remove('active');
}
function partyScroll3() {
    partyContainer3.classList.add('active');
    partyContainer1.classList.remove('active');
    partyContainer2.classList.remove('active');
}


// STONES PARALLAX
const eventParallax1 = document.getElementById("move1");
const eventParallax2 = document.getElementById("move2");
const eventParallax3 = document.getElementById("move3");
const eventParallax4 = document.getElementById("move4");
const eventParallax5 = document.getElementById("move5");
const eventParallax6 = document.getElementById("move6");
const eventParallax7 = document.getElementById("move7");
const eventParallax8 = document.getElementById("move8");
const eventParallax9 = document.getElementById("move9");
const eventParallax10 = document.getElementById("move10");
const eventParallax11 = document.getElementById("move11");

window.addEventListener('scroll', function () {
    var value = window.scrollY;
    eventParallax1.style.top = value * 0.09 + 'px';
    eventParallax2.style.top = value * 0.09 + 'px';
    eventParallax3.style.top = value * 0.09 + 'px';
    eventParallax4.style.top = value * 0.09 + 'px';
    eventParallax5.style.top = value * 0.09 + 'px';
    eventParallax6.style.top = value * 0.09 + 'px';
    eventParallax7.style.top = value * 0.09 + 'px';
    eventParallax8.style.top = value * 0.09 + 'px';
    eventParallax9.style.top = value * 0.09 + 'px';
    eventParallax10.style.top = value * 0.09 + 'px';
    eventParallax11.style.top = value * 0.09 + 'px';
});