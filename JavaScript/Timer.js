const timerCells = document.querySelectorAll('.timer-number');
const timerContainer = document.querySelector('#timer-container');
const setTimerContainer = document.querySelector('#setTime-container');
let startTimer;

let timerNumbers = [];
for (let i = 0; i < timerCells.length; i++) {
    timerNumbers.push(Number(timerCells[i].textContent));
}

function reset(numbersType) {
    for (let i = 0; i < numbersType.length; i++) {
        numbersType[i] = 0;
    }
}

function updateCells(cellsType, numbersType) {
    for (let i = 0; i < cellsType.length; i++) {
        cellsType[i].textContent = numbersType[i];
    }
}

function getSumOfArrayItems(tot, num) {
    return tot + num;
}

let checkStartTimer = timerNumbers.reduce(getSumOfArrayItems, 0);

function cellsManagerSubTimer(numberOfCells, indexTensOfS) {
    if (checkStartTimer === 9 * numberOfCells) {
        reset(timerNumbers);
        updateCells(timerCells, timerNumbers);
    } else if (timerNumbers[numberOfCells - 1] < 0) {
        timerNumbers[numberOfCells - 2]--;
        if (numberOfCells - 1 === indexTensOfS) {
            timerNumbers[numberOfCells - 1] = 5;
            return cellsManagerSubTimer(numberOfCells - 1, indexTensOfS);
        } else if (numberOfCells - 1 === indexTensOfS - 2) {
            timerNumbers[numberOfCells - 1] = 5;
            return cellsManagerSubTimer(numberOfCells - 1, indexTensOfS);
        } else {
            timerNumbers[numberOfCells - 1] = 9;
            return cellsManagerSubTimer(numberOfCells - 1, indexTensOfS);
        }
    }
}

function onPlayTimer() {
    startTimer = setInterval(function () {
        timerNumbers[5]--;
        cellsManagerSubTimer(6, 4);
        updateCells(timerCells, timerNumbers);
    }, 1000);
}

function cellsManagerSumTimeData(numberOfCells) {
    if (timerNumbers[numberOfCells - 1] > 9) {
        timerNumbers[numberOfCells - 1] = 0;
        timerNumbers[numberOfCells - 2]++;
        if (timerNumbers[numberOfCells - 2] > 5) {
            timerNumbers[numberOfCells - 2] = 0;
            timerNumbers[numberOfCells - 3]++;
            return cellsManagerSumTimeData(numberOfCells - 2);
        }
    }
}

function setTimer(indexCell, numToAdd) {
    
    for(let i=0; i < numToAdd; i++) {
        timerNumbers[indexCell]++;
        cellsManagerSumTimeData(indexCell + 1);
    }
}

function timer(e) {

    switch (e.target.id) {
        case 's1':
            setTimer(5, 1);
            break;
        case 's10':
            setTimer(5, 10);
            break;
        case 's30':
            setTimer(5, 30);
            break;
        case 'm1':
            setTimer(3, 1);
            break;
        case 'm10':
            setTimer(3, 10);
            break;
        case 'm30':
            setTimer(3, 30);
            break;
        case 'h1':
            setTimer(1, 1);
            break;
        case 'h2':
            setTimer(1, 2);
            break;
        case 'play-timer':
            onPlayTimer();
            break;
        case 'pause-timer':
            clearInterval(startTimer);
            break;
        case 'reset-timer':
            clearInterval(startTimer);
            reset(timerNumbers);
            break;
    }


    updateCells(timerCells, timerNumbers);
}

timerContainer.addEventListener('click', timer);
