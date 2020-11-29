'use strict';

//Получаем данные
let money = document.querySelector('.money');
//let questionTag = document.querySelector('.Question');
let uRight = document.querySelector('.uRight');
let victory = document.querySelector('.victory');
let wrong = document.querySelector('.wrong');
let query = 0;

let game = {

    run() {
        if (query != 0) {
            uRight.classList.remove("showUp");
        }
        renderer.qrender(questions[query]);
        let buttons = document.querySelectorAll('.answers');
        buttons.forEach(function(button) {
            button.addEventListener('click', clickHandler);
        });



        /*for (let query = 1; query <= answers.length; query++) {
            let buttons = document.querySelectorAll('.answers');
            buttons.forEach(function(button) {
                button.addEventListener('click', clickHandler);
            });
        }*/
    },

    init() {
        renderer.qrender(questions[0]);
    }
};

game.init();
document.querySelector('.exit').addEventListener('click', exitClick);
game.run();

function clickHandler(button) {
    let id = +button.target.getAttribute('data-id');
    let answ = answers[query];
    if (query === 4 && answ.includes(id)) {
        money.innerText = +money.innerText + 100000;
        victory.classList.add("showUp");
        return;
    } else if (answ.includes(id)) {
        uRight.classList.add("showUp");
        money.innerText = +money.innerText + 100000;
        query++;
        document.querySelector('.uRightMessage').addEventListener('click', rightClick);
    } else {
        wrong.classList.add("showUp");
        document.querySelector('.yes').addEventListener('click', yesClick);
        document.querySelector('.no').addEventListener('click', noClick);
    }
}

function rightClick() {
    uRight.classList.remove("showUp");
    game.run();
}

function yesClick() {
    wrong.classList.remove("showUp");
    query = 0;
    money.innerText = '0';
    game.run();
}

function noClick() {
    wrong.classList.remove("showUp");
}

function exitClick() {
    alert('Вы выиграли ' + money.innerText + ' тугриков! Заходите ещё. \n Страница будет обновлена.');
    location.reload();
}
