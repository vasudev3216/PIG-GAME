'use strict';
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let playing = true;

score0EL.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add('hidden');
let currentScore = 0;
let scores = [0, 0];
let activePlayer = 0;
function switchPlayer() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle('player--active');
    player0.classList.toggle('player--active');
}


btnRoll.addEventListener('click', function () {
    if (playing) {

        const dice = Math.trunc(Math.random() * 6) + 1;
        diceEL.classList.remove('hidden');
        diceEL.src = `dice-${dice}.png`;


        if (dice !== 1) {

            currentScore = currentScore + dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        }
        else {


            switchPlayer();


        }



    }
});


btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] = scores[activePlayer] + currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEL.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');


        }

        else {
            switchPlayer();
        }


    }
});

btnNew.addEventListener('click', function () {
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    diceEL.classList.add('hidden');

    playing = true;
    activePlayer = 0;
    player1.classList.remove('player--active');
    player0.classList.add('player--active');

    score0EL.textContent = 0;
    score1El.textContent = 0;
    scores = [0, 0];
    currentScore = 0;
    current0EL.textContent = currentScore;
    current1EL.textContent = currentScore;



});



