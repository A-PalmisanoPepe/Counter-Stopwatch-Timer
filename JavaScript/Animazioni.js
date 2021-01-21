// Animazioni flipcard per smartphone e tablet
let flipCardCounter = document.querySelector('#flip-card-counter');
let innerCounter = document.querySelector('#counter');
let flipCardStopwatch = document.querySelector('#flip-card-stopwatch');
let innerStopwatch = document.querySelector('#stopwatch');
let flipCardTimer = document.querySelector('#flip-card-timer');
let innerTimer = document.querySelector('#timer');

function turnFlipcardStopwatch() {
    innerStopwatch.classList.add('flip-card-inner-active');
    innerStopwatch.classList.remove('flip-card-inner');
    innerTimer.classList.remove('flip-card-inner-active');
    innerTimer.classList.add('flip-card-inner');
    innerCounter.classList.remove('flip-card-inner-active');
    innerCounter.classList.add('flip-card-inner');
}

flipCardStopwatch.addEventListener('click', turnFlipcardStopwatch);

function turnFlipcardTimer() {
    innerTimer.classList.add('flip-card-inner-active');
    innerTimer.classList.remove('flip-card-inner');
    innerCounter.classList.remove('flip-card-inner-active');
    innerCounter.classList.add('flip-card-inner');
    innerStopwatch.classList.remove('flip-card-inner-active');
    innerStopwatch.classList.add('flip-card-inner');
}

flipCardTimer.addEventListener('click', turnFlipcardTimer);

function turnFlipcardCounter() {
    
    innerCounter.classList.add('flip-card-inner-active');
    innerCounter.classList.remove('flip-card-inner');
    innerTimer.classList.remove('flip-card-inner-active');
    innerTimer.classList.add('flip-card-inner');
    innerStopwatch.classList.remove('flip-card-inner-active');
    innerStopwatch.classList.add('flip-card-inner');
}

flipCardCounter.addEventListener('click', turnFlipcardCounter);

// Animazioni elemento play/pausa
const playPauseStopwatch = document.querySelector('#stopwatch-play-pause');
const playStopwatch = document.querySelector('#play-stopwatch');
const pauseStopwatch = document.querySelector('#pause-stopwatch');
const playPauseTimer = document.querySelector('#timer-play-pause');
const pauseTimer = document.querySelector('#pause-timer');
const playTimer = document.querySelector('#play-timer');

function togglePlayStopwatch() {
    playStopwatch.classList.toggle('play-active');
    pauseStopwatch.classList.toggle('pause-active');
}

playPauseStopwatch.addEventListener('click', togglePlayStopwatch);

function togglePlayTimer() {
    playTimer.classList.toggle('play-active');
    pauseTimer.classList.toggle('pause-active');
}

playPauseTimer.addEventListener('click', togglePlayTimer);