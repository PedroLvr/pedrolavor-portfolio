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

    })()
    window.addEventListener('scroll', function(e){
        var $navbar = document.getElementById('pl-navbar');
        var $heroHeader = document.getElementById('hero-header');
        if($heroHeader.getBoundingClientRect().bottom - $navbar.offsetHeight <= 0) {
            $navbar.classList.add('is-out-header');
        } else {
            $navbar.classList.remove('is-out-header');
        }
    });

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
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }



    ////////////////////////////////////////////////////////////
    ///////////////////// TECNOLOGIAS //////////////////////////
    ////////////////////////////////////////////////////////////

    /*
     * DESTACAR TECNOLOGIAS EM SEQUENCIA
    */
    // (function(){
    //     var tecnologias = document.querySelectorAll('.level-item');
    //     var countTecnologias = tecnologias.length;
    //     var i = 0;
    //     (function coloreItem(){
    //         var item = tecnologias[i];
    //         var titulo = item.querySelector('.heading');
    //         item.classList.add('colored');
    //         titulo.style.color = titulo.dataset.color;
    //         setTimeout(function(){
    //             item.classList.remove('colored');
    //             titulo.style.color = '';
    //         }, 1700);
    //         setTimeout(function(){
    //             i = ((i + 1) === countTecnologias) ? 0 : (i + 1);
    //             coloreItem();
    //         }, 1600);
    //     })();
    // })();

}, false);