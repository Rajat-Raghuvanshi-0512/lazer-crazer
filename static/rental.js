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