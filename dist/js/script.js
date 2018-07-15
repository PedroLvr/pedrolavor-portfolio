document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM content loaded!!");

    ////////////////////////////////////////////////////////////
    /////////////////////// NAVBAR /////////////////////////////
    ////////////////////////////////////////////////////////////

    /*
     * TOGGLE NAVBAR ON SCROLL
     * Change navbar style when window scroll
    */
    setTimeout(function () { }, 1000);
    var $navbar = document.getElementById('pl-navbar');
    function checkNavbar() {
        var $navbar = document.getElementById('pl-navbar');
    }

    /*
     * SMOOTH SCROLL
     * Smoothly scroll to a section
    */
    $navbar.addEventListener('click', function (e) {
        if (e.target.classList.contains('anchor-scroll')) {
            e.preventDefault();
            e.stopPropagation();

            var anchor = e.target.getAttribute('href');
            var $section = document.getElementById(anchor);
        }
    });


    /*
     * COLLAPSED MENU
     * Toggle menu when click on burger menu
    */
    const $navBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navBurgers.length > 0) {
        $navBurgers.forEach(function(el) {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
}, false);