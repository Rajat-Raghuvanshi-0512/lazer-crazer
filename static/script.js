// LOADER

$(window).on("load", function () {
    move();
    $("#loading").delay(1000).fadeOut(800)
    $("#logo-background").addClass('active')
    $("#arrow1").addClass('active')
    $("#arrow2").addClass('active')
    $("#arrow3").addClass('active')
});

// NAVBAR EVENTS
$('body').on({ 'touchmove': onScroll });
function onScroll() {
    var prevScrollpos = window.pageYOffset;
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
};

// Hamburger click events
const hamburger = document.querySelector("#hamburger-icon");
const items = document.querySelector("#nav-items");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    items.classList.toggle("active")
});


var i = 0;
function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("progress");
        var perc = document.getElementById("progress-perc");
        var width = 10;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                perc.innerHTML = width + "%";
            }
        }
    }
}
