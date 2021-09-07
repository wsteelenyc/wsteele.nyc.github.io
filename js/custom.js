/*
  * @package Lawhouse
  * @subpackage Lawhouse HTML
  * 
  * Template Scripts
  * Created by Tripples
  
   1. Main Slideshow
   2. Video Popup
   3. Site search
   4. Owl Carousel
   5. Counter
   6. Skills
   7. Animation
   8. Contact map
   9. Back to top
  
*/


jQuery(function($) {
  "use strict";

   /* ----------------------------------------------------------- */
   /*  Main slideshow
   /* ----------------------------------------------------------- */

       $('#main-slide').carousel({
            pause: true,
            interval: 100000,
       });



 /* ----------------------------------------------------------- */
  /*  Video popup
  /* ----------------------------------------------------------- */
  $(document).ready(function(){

      $(".gallery-popup").colorbox({rel:'gallery-popup', transition:"fade"});
      $(".popup").colorbox({iframe:true, innerWidth:650, innerHeight:409});

  });

   
  /* ----------------------------------------------------------- */
  /*  Site search
  /* ----------------------------------------------------------- */

  $('.navbar-nav .fa-search').on('click', function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.site-search .container').toggleClass('open');
  })

  $('.site-search .close').on('click', function() {
    $('.site-search .container').removeClass('open');;
  })



  /* ----------------------------------------------------------- */
  /*  Owl Carousel
  /* ----------------------------------------------------------- */


      //Team

     $("#team-carousel").owlCarousel({

        loop:false,
        nav:false,
        dots:true,
        responsive:{
             0:{
                 items:1
             },
             600:{
                 items:3
             },
             1000:{
                 items:4
                 }
        }

     });


     //Testimonial
      $("#testimonial-carousel").owlCarousel({

         loop:false,
         nav:false,
         dots:true,
         responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
                  }
         }

      });

      //Clients

      $("#clients-carousel").owlCarousel({

         loop:false,
         nav:false,
         dots:true,
         margin:0,
         responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:6
                  }
         }

      });

       //Gallery slider

      $("#gallery-slider").owlCarousel({

         loop:false,
         animateOut: 'fadeOut',
         margin:20,
         nav:true,
         dots:false,
         navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
         responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
                  }
         }

      });





   /* ----------------------------------------------------------- */
    /*  Counter
    /* ----------------------------------------------------------- */

      $('.counter').counterUp({
       delay: 10,
       time: 1000
      });


   /* ----------------------------------------------------------- */
    /*  Skills
    /* ----------------------------------------------------------- */
   
   $(document).ready(function() {
      $('.progress .progress-bar').css("width",
          function() {
              return $(this).attr("aria-valuenow") + "%";
          }
        )
    });



   /* ----------------------------------------------------------- */
   /*  Animation
   /* ----------------------------------------------------------- */
        
      new WOW().init();


    /* ----------------------------------------------------------- */
   /*  Contact map
   /* ----------------------------------------------------------- */

      $("#map").gmap3({
        map:{
            options:{
               center:[-37.8152065,144.963937],
               zoom: 14,
               scrollwheel: false
            }
        },
        marker:{
          values:[
            {address:"Corner Swanston St & Flinders St, Melbourne VIC 3000, Australia", data:" Welcome To LawHouse ! ! ", 
             options:{icon: "http://themewinter.com/html/marker.png"}}
          ],
          options:{
            draggable: false
          },
          events:{
            mouseover: function(marker, event, context){
              var map = $(this).gmap3("get"),
                infowindow = $(this).gmap3({get:{name:"infowindow"}});
              if (infowindow){
                infowindow.open(map, marker);
                infowindow.setContent(context.data);
              } else {
                $(this).gmap3({
                  infowindow:{
                    anchor:marker, 
                    options:{content: context.data}
                  }
                });
              }
            },
            mouseout: function(){
              var infowindow = $(this).gmap3({get:{name:"infowindow"}});
              if (infowindow){
                infowindow.close();
              }
            }
          }
        }
      });


   /* ----------------------------------------------------------- */
   /*  Back to top
   /* ----------------------------------------------------------- */

       $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
      // scroll body to 0px on click
      $('#back-to-top').click(function () {
          $('#back-to-top').tooltip('hide');
          $('body,html').animate({
              scrollTop: 0
          }, 800);
          return false;
      });
      
      $('#back-to-top').tooltip('hide');

});