$(document).ready(function () {

    $("#vaGreen").on("click", function () {
        window.open('https://thegreentourist.herokuapp.com/')
    });

    $('#quizGame').hover(function () {
        $(this).css('cursor', 'pointer');
    })

    $("#burger").on("click", function () {
        window.open('https://thawing-journey-81610.herokuapp.com/')
    });

    $('#burger').hover(function () {
        $(this).css('cursor', 'pointer');
    })

    $("#stateOfHappiness").on("click", function () {
        window.open('https://baileyrva.github.io/stateofhappiness/')
    });

    $('#stateOfHappiness').hover(function () {
        $(this).css('cursor', 'pointer');
    })

})