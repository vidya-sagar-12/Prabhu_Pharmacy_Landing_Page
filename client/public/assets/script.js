
    // --------Script for Toggle Menu----------
    var navLinks = document.getElementById("navLinks");

    function showMenu() {
        navLinks.style.right = "0";
    }

    function hideMenu() {
        navLinks.style.right = "-200px";
    }


// -------------Script for Loader-----------------

    var loader = document.getElementById("preloader");
    window.addEventListener("load", function(){
        loader.style.display = "none";
    })

// ----------Script for Scroll Reveal------------

    ScrollReveal({ 
        // reset: true,
        distance: '60px',
        duration: 2500,
        delay: 400 
    });

    ScrollReveal().reveal('.text-box ',{delay: 100, origin: 'bottom'});
    ScrollReveal().reveal('.text-box h1',{delay: 500, origin: 'left'});
    ScrollReveal().reveal('.course h1 ',{delay: 100, origin: 'bottom'});
    ScrollReveal().reveal('.course-col  ',{delay: 200, origin: 'bottom'});
    ScrollReveal().reveal('.campus h1 ',{delay: 100, origin: 'bottom'});
    ScrollReveal().reveal('.campus-col ',{delay: 200, origin: 'bottom'});
    ScrollReveal().reveal('.facility h1 ',{delay: 100, origin: 'bottom'});
    ScrollReveal().reveal('.facility-col ',{delay: 200, origin: 'bottom'});
    ScrollReveal().reveal('.testimonials h1 ',{delay: 100, origin: 'bottom'});
    ScrollReveal().reveal('.testimonial-col ',{delay: 200, origin: 'bottom'});
    ScrollReveal().reveal('.cta h1',{delay: 100, origin: 'bottom'});
    ScrollReveal().reveal('.footer h4 ',{delay: 100, origin: 'bottom'});
    ScrollReveal().reveal('.footer p ',{delay: 100, origin: 'bottom'});
    ScrollReveal().reveal('.icons i',{delay: 100, origin: 'bottom', interval: 100});
    ScrollReveal().reveal('.dev i',{delay: 100, origin: 'bottom', interval: 100});
    ScrollReveal().reveal('.star i',{delay: 50, origin: 'bottom', interval: 100});
    ScrollReveal().reveal('.nav-bar ',{delay: 200, origin: 'top'});
    ScrollReveal().reveal('.inputBox_container',{delay: 700, origin: 'top'});
    // ScrollReveal().reveal('.list li',{delay: 100, origin: 'top', interval: 30});
    // ScrollReveal().reveal('.dropdown li',{delay: 100, origin: 'top'});
    
    
    


