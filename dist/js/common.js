$(document).ready(function () {
    $(".slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
        ]
    });

    //MENU
    $(".burger").click(function () {
        $(this).toggleClass('active');
        $(".nav").slideToggle(300);
    });

    //QUESTIONS
    $(".questions__block-item").click(function () {
        $(this).toggleClass('active').closest(".questions__block-li").siblings().find(".questions__block-item").removeClass('active');
        $(this).closest(".questions__block-li").find(".questions__dropdown").slideToggle(300).closest(".questions__block-li").siblings().find(".questions__dropdown").slideUp(300);
    });

    $(".questions__list-item").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $(".questions__content-item").eq(index).addClass('active').siblings().removeClass('active');
    });

});

