

$(document).ready(function () {

    $("#quizGame").on("click", function () {
        window.open('https://rquinn1017.github.io/Quiz_Game/')
    });

    $('#quizGame').hover(function () {
        $(this).css('cursor', 'pointer');
    })

    $("#weatherDash").on("click", function () {
        window.open('https://rquinn1017.github.io/WorldOfWeather/')
    });

    $('#weatherDash').hover(function () {
        $(this).css('cursor', 'pointer');
    })

    $("#stateOfHappiness").on("click", function () {
        window.open('https://baileyrva.github.io/stateofhappiness/')
    });

    $('#stateOfHappiness').hover(function () {
        $(this).css('cursor', 'pointer');
    })

})