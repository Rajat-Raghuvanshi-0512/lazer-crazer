$(window).on("load", function () {
    $("#arrow-container").addClass('finished')

    var x = 200; //y-axis pixel displacement
    var y = 2700; //delay in milliseconds

    setTimeout(function () {
        window.scroll(0, x);
        x = x + 5; //if you want to increase speed simply increase increment interval
    }, y);
});


// PRICING
function glow(x) {
        x.classList.add("active");
    };
function unglow(x) {
    x.classList.remove("active");
};

function bookA(x) {
    x.classList.add("active");
};
function book(x) {
    x.classList.remove("active");
};

// NAVBAR HIDE ON SCROLL

// var updated=0,st;
// let navbar = document.getElementById('mobile-navbar')
// $('body').on({
//     'touchmove': function(e) { 
//     st = $(this).scrollTop();
//     if(st > updated) {
//         console.log('down');
//         navbar.classList.remove('nav-up')
//         navbar.classList.add('nav-up')
//     }
//     else {
//         console.log('up');
//         navbar.classList.add('nav-down')
//         navbar.classList.remove('nav-down')
//     }
//     updated = st;
//     }
// });






// const body = document.body;
// const nav = document.querySelector("#mobile-navbar");
// const scrollUp = "nav-up";
// const scrollDown = "nav-down";
// let lastScroll = 0;


// window.addEventListener("scroll", () => {
//     const currentScroll = window.pageYOffset;
//     if (currentScroll <= 0) {
//         body.classList.remove(scrollUp);
//         return;
//     }

//     if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
//         // down
//         body.classList.remove(scrollUp);
//         body.classList.add(scrollDown);
//     } else if (
//         currentScroll < lastScroll &&
//         body.classList.contains(scrollDown)
//     ) {
//         // up
//         body.classList.remove(scrollDown);
//         body.classList.add(scrollUp);
//     }
//     lastScroll = currentScroll;
// });


// STONES PARALLAX
const parallaxObject1 = document.getElementById("move");
const parallaxObject2 = document.getElementById("move2");
const parallaxObject3 = document.getElementById("move3");
const parallaxObject4 = document.getElementById("move4");
const parallaxObject5 = document.getElementById("move5");
const parallaxObject6 = document.getElementById("move6");
const parallaxObject7 = document.getElementById("move7");
const parallaxObject8 = document.getElementById("move8");
const parallaxObject9 = document.getElementById("move9");
const parallaxObject10 = document.getElementById("move10");
const parallaxObject11 = document.getElementById("move11");
const parallaxObject12 = document.getElementById("move12");
const parallaxObject13 = document.getElementById("move13");
const parallaxObject14 = document.getElementById("move14");
const parallaxObject15 = document.getElementById("move15");
const galleryRow1 = document.getElementById("gallery-row1");
const galleryRow2 = document.getElementById("gallery-row2");

window.addEventListener('scroll', function () {
    var value = window.scrollY;
    parallaxObject1.style.top = value * 0.20 + 'px';
    parallaxObject2.style.top = value * 0.07 + 'px';
    parallaxObject3.style.top = value * 0.07 + 'px';
    parallaxObject4.style.top = value * 0.08 + 'px';
    parallaxObject5.style.top = value * 0.1 + 'px';
    parallaxObject6.style.top = value * 0.1 + 'px';
    parallaxObject7.style.top = value * 0.13 + 'px';
    parallaxObject8.style.top = value * 0.13 + 'px';
    parallaxObject9.style.top = value * 0.13 + 'px';
    parallaxObject10.style.top = value * 0.13 + 'px';
    parallaxObject11.style.top = value * 0.15 + 'px';
    parallaxObject12.style.top = value * 0.15 + 'px';
    parallaxObject13.style.top = value * 0.15 + 'px';
    parallaxObject13.style.top = value * 0.15 + 'px';
    parallaxObject14.style.top = value * 0.15 + 'px';
    parallaxObject15.style.top = value * 0.15 + 'px';

    galleryRow1.style.left = value * -0.5 + 'px';
    galleryRow2.style.left = value * 0.5 + 'px';
});

// CTAs
function incSize(x) {
    x.classList.add("active");
};
function decSize(x) {
    x.classList.remove("active");
};
function incSize2(x) {
    x.classList.add("activeM");
};
function decSize2(x) {
    x.classList.remove("activeM");
};

// TESTIMONIALS

$('#testimonials-box-content').slick({
    prevArrow: "<img src= '../static/img/prevArrow.png'class='slick-prev pull-left'></img>",
    nextArrow: "<img src= '../static/img/nextArrow.png' class='slick-next pull-right'></img>",
    settings: {
        arrows: true
    }
});
$('#testimonials-box-content2').slick({
    prevArrow: "<img src= '../static/img/prevArrow.png'class='slick-prev pull-left'></img>",
    nextArrow: "<img src= '../static/img/nextArrow.png' class='slick-next pull-right'></img>",
    mobileFirst: true,
    settings: {
        arrows: true
    }
});

const contactForm = document.querySelector("#contactForm");
let name = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let message = document.getElementById("message");
let submitButton = document.querySelector("#sendRequest");


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = {
        name: name.value,
        phone: phone.value,
        email: email.value,
        message: message.value,
    }
    let xhr = new XMLHttpRequest();
    function thankYou() {
        window.location.assign("/thank");
    };

    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(JSON.stringify(formData));
    xhr.onload = function () {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
            name.value = '';
            email.value = '';
            phone.value = '';
            message.value = '';
        } else {
            alert('Something went wrong!')
        }
        thankYou();
    }
});





