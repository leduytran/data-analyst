// Loading
var loading = "";
loading += "    <div class=\"retinaSpinner\">";
loading += "        <div style=\"position: absolute; top: -2px;\">";
loading += "            <div class=\"spinner_circle part1\" style=\"-webkit-transform: rotate(0deg) translate(6px, 0px); transform: rotate(0deg) translate(6px, 0px);\"><\/div>";
loading += "        <\/div>";
loading += "        <div style=\"position: absolute; top: -2px;\">";
loading += "            <div class=\"spinner_circle part2\" style=\"-webkit-transform: rotate(45deg) translate(6px, 0px); transform: rotate(45deg) translate(6px, 0px);\"><\/div>";
loading += "        <\/div>";
loading += "        <div style=\"position: absolute; top: -2px;\">";
loading += "            <div class=\"spinner_circle part3\" style=\"-webkit-transform: rotate(90deg) translate(6px, 0px); transform: rotate(90deg) translate(6px, 0px);\"><\/div>";
loading += "        <\/div>";
loading += "        <div style=\"position: absolute; top: -2px;\">";
loading += "           <div class=\"spinner_circle part4\" style=\"-webkit-transform: rotate(135deg) translate(6px, 0px); transform: rotate(135deg) translate(6px, 0px);\"><\/div>";
loading += "        <\/div>";
loading += "        <div style=\"position: absolute; top: -2px;\">";
loading += "            <div class=\"spinner_circle part5\" style=\"-webkit-transform: rotate(180deg) translate(6px, 0px); transform: rotate(180deg) translate(6px, 0px);\"><\/div>";
loading += "        <\/div>";
loading += "        <div style=\"position: absolute; top: -2px;\">";
loading += "            <div class=\"spinner_circle part6\" style=\"-webkit-transform: rotate(225deg) translate(6px, 0px); transform: rotate(225deg) translate(6px, 0px);\"><\/div>";
loading += "        <\/div>";
loading += "        <div style=\"position: absolute; top: -2px;\">";
loading += "            <div class=\"spinner_circle part7\" style=\"-webkit-transform: rotate(270deg) translate(6px, 0px); transform: rotate(270deg) translate(6px, 0px);\"><\/div>";
loading += "        <\/div>";
loading += "        <div style=\"position: absolute; top: -2px;\">";
loading += "            <div class=\"spinner_circle part8\" style=\"-webkit-transform: rotate(315deg) translate(6px, 0px); transform: rotate(315deg) translate(6px, 0px);\"><\/div>";
loading += "        <\/div>";
loading += "    <\/div>";


$(".se-pre-con").append(loading);

$(window).load(function () {
    // Animate loader off screen
    $("body > .se-pre-con").fadeOut("slow");
});

$('table tr').click(function() {
        var href = $(this).attr("href");
        if(href) {
            window.open(href, '_blank');
        }
    });


if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

if ($('#back-to-home').length) {
    var scrollTrigger = 100, // px
        backToHome = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-home').removeClass('show');
            } else {
                $('#back-to-home').addClass('show');
            }
        };
    backToHome();
    $(window).on('scroll', function () {
        backToHome();
    });
};
