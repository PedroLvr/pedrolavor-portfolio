document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM content loaded!!");

    ////////////////////////////////////////////////////////////
    /////////////////////// NAVBAR /////////////////////////////
    ////////////////////////////////////////////////////////////

    /*
     * TOGGLE NAVBAR ON SCROLL
     * Change navbar style when window scroll
    */
    window.addEventListener('scroll', function(e){
        var $navbar = document.getElementById('pl-navbar');
        var $heroHeader = document.getElementById('hero-header');
        if($heroHeader.getBoundingClientRect().bottom - $navbar.offsetHeight <= 0) {
            $navbar.classList.add('is-out-header');
        } else {
            $navbar.classList.remove('is-out-header');
        }
    })

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
}, false);


const smoothScroll = (h) => {
    let i = h || 0;
    if (i < 200) {
        setTimeout(() => {
            window.scrollTo(0, i);
            smoothScroll(i + 10);
        }, 10);
    }
}



function scrollIt(destination, duration = 200, easing = 'linear', callback) {

    const easings = {
        linear(t) {
            return t;
        },
        easeInQuad(t) {
            return t * t;
        },
        easeOutQuad(t) {
            return t * (2 - t);
        },
        easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        },
        easeInCubic(t) {
            return t * t * t;
        },
        easeOutCubic(t) {
            return (--t) * t * t + 1;
        },
        easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        },
        easeInQuart(t) {
            return t * t * t * t;
        },
        easeOutQuart(t) {
            return 1 - (--t) * t * t * t;
        },
        easeInOutQuart(t) {
            return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
        },
        easeInQuint(t) {
            return t * t * t * t * t;
        },
        easeOutQuint(t) {
            return 1 + (--t) * t * t * t * t;
        },
        easeInOutQuint(t) {
            return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
        }
    };

    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
    const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

    if ('requestAnimationFrame' in window === false) {
        window.scroll(0, destinationOffsetToScroll);
        if (callback) {
            callback();
        }
        return;
    }

    function scroll() {
        const now = 'now' in window.performance ? performance.now() : new Date().getTime();
        const time = Math.min(1, ((now - startTime) / duration));
        const timeFunction = easings[easing](time);
        window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

        if (window.pageYOffset === destinationOffsetToScroll) {
            if (callback) {
                callback();
            }
            return;
        }

        requestAnimationFrame(scroll);
    }

    scroll();
}