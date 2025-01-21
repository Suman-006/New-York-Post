$(document).ready(function() {
    $('.hero_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('.video_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        prevArrow: '<button type="button" title="Previous" class="slick-prev custom-prev"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button type="button" title="Next" class="slick-next custom-next"><i class="fa-solid fa-angle-right"></i></button>'
    });
    $('.frame_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.card_slider'
      });
    $('.card_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        centerMode: true,
        centerPadding: '20px',
        asNavFor: '.frame_slider',
        prevArrow: '<button type="button" title="Previous" class="slick-prev custom-prev"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button type="button" title="Next" class="slick-next custom-next"><i class="fa-solid fa-angle-right"></i></button>',
        responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
    });
});

let scrollRef = 0;

window.addEventListener('scroll', function() {
// increase value up to 10, then refresh AOS
scrollRef <= 10 ? scrollRef++ : AOS.refresh();
});

$(document).ready(function () {
    const $section = $("#sticky_row");
    const $stickyDiv = $("#sticky_col");
    const sectionOffsetTop = $section.offset().top;
    const sectionHeight = $section.outerHeight();
  
    $(window).on("scroll", function () {
      const scrollY = $(this).scrollTop();
  
      if (scrollY >= (sectionOffsetTop + 40) && scrollY <= sectionOffsetTop + (sectionHeight - 260)) {
        console.log(scrollY);
        $stickyDiv.addClass("fixed");
      } else {
        $stickyDiv.removeClass("fixed");
      }
    });
});