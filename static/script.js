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
(function () {

    var doc = document.documentElement;
    var w = window;

    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;

    var header = document.getElementById('mobile-navbar');

    var checkScroll = function () {

        /*
        ** Find the direction of scroll
        ** 0 - initial, 1 - up, 2 - down
        */

        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) {
            //scrolled up
            direction = 2;
        }
        else if (curScroll < prevScroll) {
            //scrolled down
            direction = 1;
        }

        if (direction !== prevDirection) {
            toggleHeader(direction, curScroll);
        }

        prevScroll = curScroll;
    };

    var toggleHeader = function (direction, curScroll) {
        if (direction === 2 && curScroll > 52) {

            //replace 52 with the height of your header in px

            header.classList.add('hide');
            prevDirection = direction;
        }
        else if (direction === 1) {
            header.classList.remove('hide');
            prevDirection = direction;
        }
    };

    window.addEventListener('touchmove', checkScroll);

})();

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
