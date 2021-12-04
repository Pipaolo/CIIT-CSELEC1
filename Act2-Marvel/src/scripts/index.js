

const welcomeO = $('#welcome-o');

const renderIcons = () => {
    $('#arrow-icon').replaceAll(arrowIcon);
    $('#stacked-arrows').replaceAll(stackedArrowsIcon);
};

const animateRings = () => {
    let circleRingInterval = 1000;
    let circleRingDelayIncrement = 300;
    // Fade in the rings
    $(".circle-ring").each(function (i) {
        const ring = $(this);
        setTimeout(function () {
            ring.toggleClass('scale-0');
        }, circleRingInterval);
        circleRingInterval += circleRingDelayIncrement;

    });
};

$(function () {
    renderIcons();
    animateRings();

    setInterval(() => {
        animateRings();
    }, 3000);
    $('#hawkeye-image').toggleClass("scale-0");
    // $('#ring-1').hide().fadeIn('slow', 'swing', function () {
    //     $("#ring-2").hide().fadeIn('slow', 'swing', function () {
    //         $("#ring-3").hide().fadeIn('slow', 'swing');
    //     });

    // });
});

