$(document).ready(function () {
    function lightWindow() {
        $('.light-bg').fadeIn('slow');
        $('.light-box').slideDown('slow');
    }

    function closelightWindow() {
        $('.light-bg').fadeOut('slow');
        $('.light-box').slideUp('fast');
    }

    $('.open-light-window').on('click', function () {
        lightWindow();
    });
    $('.close-box').on('click', function () {
        closelightWindow();
    });
});