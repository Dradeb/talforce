$(document).ready(function () {


    gsap.registerPlugin(ScrollTrigger);

    (function() {
        // Tutorial: https://medium.com/@patrickwestwood/how-to-make-multi-layered-parallax-illustration-with-css-javascript-2b56883c3f27
        window.addEventListener('scroll', function(event) {
          var depth, i, layer, layers, len, movement, topDistance, translate3d;
          topDistance = this.scrollY;
          layers = document.querySelectorAll("[data-type='parallax']");
          for (i = 0, len = layers.length; i < len; i++) {
            layer = layers[i];
            depth = layer.getAttribute('data-depth');
            movement = -(topDistance * depth);
            translate3d = 'translate3d(0, ' + movement + 'px, 0)';
            layer.style['-webkit-transform'] = translate3d;
            layer.style['-moz-transform'] = translate3d;
            layer.style['-ms-transform'] = translate3d;
            layer.style['-o-transform'] = translate3d;
            layer.style.transform = translate3d;
          }
        });
      
      }).call(this);
      


      let tl = gsap.timeline({
        scrollTrigger : {
          trigger: '.logo',
          start: "center bottom",
          end: "top top",
          scrub: 1,
        }
      });
      
      tl.from('.logo_img', 2.5, {
        y:  200,
        opacity: 0,
      })


      const button = document.querySelector('.subscribe a.button');

        button.addEventListener('mousemove', function(evt) {
        const movX = evt.clientX - this.getBoundingClientRect().x;
        gsap.to(".button__spotlight", {
            x: movX,
            scale: 30,
            duration: 0.3
        })
        })

        button.addEventListener('mouseleave', function(evt) {
        const movX = evt.clientX - this.getBoundingClientRect().x;
        gsap.to(".button__spotlight", {
            x: movX,
            scale: 0,
            duration: 0.3
        })
        })

        $('.faq-question').click(function() {
          const parent = $(this).parent();
          
          // Close other open items
          $('.faq-item').not(parent).removeClass('active');
          $('.faq-item').not(parent).find('.faq-answer').css('max-height', '0');
          
          // Toggle current item
          parent.toggleClass('active');
          
          // Animate answer height
          const answer = $(this).next('.faq-answer');
          if (parent.hasClass('active')) {
              answer.css('max-height', answer[0].scrollHeight + 'px');
          } else {
              answer.css('max-height', '0');
          }
      });

      $("#sub_next_dom").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#sub_here").offset().top -200
        }, 1000);
    });
      
});