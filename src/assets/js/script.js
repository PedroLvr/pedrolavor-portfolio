document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM content loaded!!");

    ////////////////////////////////////////////////////////////
    /////////////////////// NAVBAR /////////////////////////////
    ////////////////////////////////////////////////////////////

    /*
     * TOGGLE NAVBAR ON SCROLL
     * Change navbar style when window scroll
    */
    (function(){
        function checkNavbar() {
            var $navbar = document.getElementById('pl-navbar');
            var $heroHeader = document.getElementById('hero-header');
            if($heroHeader.getBoundingClientRect().bottom - $navbar.offsetHeight <= 0) {
                $navbar.classList.add('visible');
            } else {
                $navbar.classList.remove('visible');
            }
        }
        checkNavbar();
        window.addEventListener('scroll', checkNavbar);
    })();

    /*
     * SMOOTH SCROLL
     * Smoothly scroll to a section
    */
    var smoothScroll = new SmoothScroll('.anchor-scroll', {
        speed: 800,
        header: '#pl-navbar'
    });
    document.addEventListener('scrollStart', function () {
        document.querySelector('.navbar-burger').click();
    }, false);


    /*
     * COLLAPSED MENU
     * Toggle menu when click on burger menu
    */
    const $navBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navBurgers.length > 0) {
        $navBurgers.forEach(function (el) {
            el.addEventListener('click', () => {
                const $navbar = el.closest('.navbar');
                const $menu = document.getElementById(el.dataset.target);
                $navbar.classList.toggle('visible-active');
                $menu.classList.toggle('is-active');
                el.classList.toggle('is-active');
            });
        });
    }



    ////////////////////////////////////////////////////////////
    ///////////////////// TECNOLOGIAS //////////////////////////
    ////////////////////////////////////////////////////////////

    /*
     * DESTACAR TECNOLOGIAS EM SEQUENCIA
    */
    (function(){
        var tecnologias = document.querySelectorAll('.level-item');
        var countTecnologias = tecnologias.length;
        var i = 0;
        (function coloreItem(){
            var item = tecnologias[i];
            item.classList.add('colored');
            setTimeout(function(){
                item.classList.remove('colored');
            }, 400);
            setTimeout(function(){
                i = ((i + 1) === countTecnologias) ? 0 : (i + 1);
                coloreItem();
            }, 200);
        })();
    })();

}, false);