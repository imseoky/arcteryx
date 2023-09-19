$(document).ready(function(){

    media();

    function media(){

      const sw = $(window).width();

      if(sw >= 1230){
        var swiper = new Swiper(".mySwiper", {
          loop : true,
          autoplay : {
              delay: 2000,
              disableOnInteraction: false,
          },
          slidesPerView: 4,
          spaceBetween: 30,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      }else if(sw <= 1220){

      }

      if(sw >= 1220){
      $(window).scroll(function(){
        const scroll = $(window).scrollTop();
        // console.log(scroll);
  
        if(scroll >= 300){
          $('.header-wrap').addClass('on');
          $('.header-logo svg').addClass('on');
          $('.sub-menu-body .sub-menu').addClass('on');
        }else{
          $('.header-wrap').removeClass('on');
          $('.header-logo svg').removeClass('on');
          $('.sub-menu-body .sub-menu').removeClass('on');
        }
      });
      }else{
      
      }
    }

    $(window).resize(function(){
      sw = $(window).width();     
      media();
    });
    
    $('.main-menu li').mouseenter(function(){
      let result = $(this).attr('data-alt');
      $('.sub-menu').removeClass('active');
      $(`#${result}`).addClass('active');

      $('.sub-menu-body').addClass('active');
      // $('.main-menu').addClass('on');
      $('.header-logo svg').addClass('on');
    });

    $('.sub-menu').mouseleave(function(){
      $(this).removeClass('active');

      $('.sub-menu-body').removeClass('active');
      $('.main-menu').removeClass('on');
      $('.header-logo svg').removeClass('on');
    });

    $('#hamburger').click(function(){
      $('#hamburger span:nth-child(1)').toggleClass('active');
      $('#hamburger span:nth-child(2)').toggleClass('active');
      $('#hamburger span:nth-child(3)').toggleClass('active');

      $('.mobile-menu').toggleClass('on');
      $('.main-menu').toggleClass('on');
      $('.header-logo svg').toggleClass('active');
    });

      AOS.init();
});