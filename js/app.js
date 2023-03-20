$(document).ready(function () {

    //* BURGER ACTIVE

    $('.nav-toggle').on('click', function (event) {
        event.preventDefault();

        $('.burger').toggleClass('active'); // появление меню при нажатии на бургер
        $(this).toggleClass('active'); // изменение меню бургер при открытии меню
    });

    //* SLIDER

    // $('.benefit__slider').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     // centerMode: true,
    //     responsive: [
    //         {
    //             breakpoint: 550,
    //             settings: {
    //                 slidesToShow: 1
    //             }
    //         }
    //     ]
    // })
});