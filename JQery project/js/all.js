
      /*Pagination dynamic*/
      var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },

        /*Autoplay自動播放*/
        autoplay: {
          delay: 3000,
        },

      });

      /*回到上方按鈕*/
      $(document).ready(function () {
        $('.top a').click(function (e) { 
          e.preventDefault(); 
          $('html,body').animate(
          {scrollTop: 0},700);}
          );
      });

      /*選單收合 */
      $(document).ready(function () {
        $('.nav > li > a').click(function (e) { 
          e.preventDefault();
          $(this).parent().siblings().find('ul').slideUp();
          $(this).parent().find('ul').slideToggle();
          $('.dropdown-item a').addClass('animate__animated animate__slideInDown'); 
        });
      });


  


     

