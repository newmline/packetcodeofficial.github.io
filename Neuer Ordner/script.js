$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 0){
        $('.scroll-top').show();
      }else{
        $('.scroll-top').hide();
      }
  
      // scroll spy
  
      $('section').each(function(){
  
        let height = $(this).height();
        let offset = $(this).offset().top - 200;
        let top = $(window).scrollTop();
        let id = $(this).attr('id');
  
        if(top > offset && top < offset + height){
          $('.navbar ul li a').removeClass('active');
          $('.navbar').find(`[href="#${id}"]`).addClass('active');
        }
  
      });
  
    });
  
    // smooth scrolling
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500,
        'linear'
      );
  
    });
  
  });

  var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});


  
    $('.portfolio .button-container .btn').click(function(){
  
      let filter = $(this).attr('data-filter');
  
      if(filter == 'all'){
        $('.portfolio .image-container .box').show('400')
      }else{
        $('.portfolio .image-container .box').not('.'+filter).hide('200');
        $('.portfolio .image-container .box').filter('.'+filter).show('400');
      }
  
    });
  
   /* $('#theme-toggler').click(function(){
      $(this).toggleClass('fa-sun');
      $('body').toggleClass('dark-theme');
    });*/