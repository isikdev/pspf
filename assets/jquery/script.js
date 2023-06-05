new WOW().init();
$('.production__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    nextArrow: "<div class='next'>",
    prevArrow: "<div class='prev'>",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false,
            }
        },
    ]
});
$(".reviews__slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    nextArrow: "<div class='next'>",
    prevArrow: "<div class='prev'>",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false,
            }
        },
    ]
});
$(".work__item").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    nextArrow: "<div class='next'>",
    prevArrow: "<div class='prev'>",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false,
            }
        },
    ]
});
$(document).scroll(function (e) {
    $(window).scrollTop() > 100 ? $('.navbar').addClass('navbar__color') : $('.navbar').removeClass('navbar__color');
});


let body = $(".body")

$(".give__tel, .give__tel-close").on("click", function () {
    $(".popup__tel").toggleClass("popup-active");
    body.toggleClass("body-hidden")
});
$(".give__catalog, .give__catalog-close").on("click", function () {
    $(".popup__catalog").toggleClass("popup-active");
    body.toggleClass("body-hidden")
});
$(".give__kamin, .give__kamin-close").on("click", function () {
    $(".popup__camin").toggleClass("popup-active");
    body.toggleClass("body-hidden")
});
$(".give__project, .give__project-close").on("click", function () {
    $(".popup__project").toggleClass("popup-active");
    body.toggleClass("body-hidden")
});
$(".give__proposal, .give__proposal-close").on("click", function () {
    $(".popup__proposal").toggleClass("popup-active");
    body.toggleClass("body-hidden")
});
$(".give__want, .give__want-close").on("click", function () {
    $(".popup__want").toggleClass("popup-active");
    body.toggleClass("body-hidden")
});
$(".give__special, .give__special-close").on("click", function () {
    $(".popup__special").toggleClass("popup-active");
    body.toggleClass("body-hidden")
});
$(".give__manager, .give__manager-close").on("click", function () {
    $(".popup__manager").toggleClass("popup-active");
    body.toggleClass("body-hidden")
});
$(".give__contact, .give__contact-close").on("click", function () {
    $(".popup__contact").toggleClass("popup-active");
    body.toggleClass("body-hidden")
});
$(".give__order, .give__order-close").on("click", function () {
    $(".popup__order").toggleClass("popup-active");
    body.toggleClass("body-hidden")
});
// переменные 
/// BUTTONS
let popup__tel = $(".give__tel");
let popup__catalog = $(".give__catalog");
let popup__camin = $(".give__kamin");
let popup__project = $(".give__project");
let popup__proposal = $(".give__proposal");
let popup__want = $(".give__want");
let popup__special = $(".give__special");
let popup__manager = $(".give__manager");
let popup__contact = $(".give__contact")
let popup__order = $(".give__order");

/// POPUP MAIN
let popuptelBody = $(".popup__tel");
let popupcatalogBody = $(".popup__catalog");
let popupcaminBody = $(".popup__camin");
let popupprojectBody = $(".popup__project");
let popupproposalBody = $(".popup__proposal");
let popupwantBody = $(".popup__want");
let popupspecialBody = $(".popup__want");
let popupmanagerBody = $(".popup__manager");
let popupcontactBody = $(".popup__contact");
let popuporderBody = $(".popup__order");


// BUTTONS CLOSE
let popup__telClose = $(".give__tel-close");
let popup__catalogClose = $(".give__catalog-close");
let popup__caminClose = $(".give__kamin-close");
let popup__projectClose = $(".give__project-close");
let popup__proposalClose = $(".give__proposal-close");
let popup__wantClose = $(".give__want-close");
let popup__specialClose = $(".give__special-close");
let popup__managerClose = $(".give__manager-close");
let popup__contactClose = $(".give__contact-close")
let popup__orderClose = $(".give__order-close");


$(".nav__tel-burger").on("click", function () {
    $(".mobile__menu-wrapper").toggleClass("mobile__menu-wrapper-active");
    body.toggleClass("body-hidden")
});