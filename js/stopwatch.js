let stopwatchContainer = document.querySelector('#stopwatch-container');
let cellsStopwatch = document.querySelectorAll('.number-stopwatch');
let stopwatchStart;

let numberStopwatch = [];
for (let i = 0; i < cellsStopwatch.length; i++) {
    numberStopwatch.push(Number(cellsStopwatch[i].textContent));
}

function updateCells(cellsType, numbersType) {
    for (let i = 0; i < cellsType.length; i++) {
        cellsType[i].textContent = numbersType[i];
    }
}

function reset(numbersType) {
    for (let i = 0; i < numbersType.length; i++) {
        numbersType[i] = 0;
    }
}

function cellsManagerStopwatch(numberOfCells, indexTensOfS) {
    let indexTensOfM = indexTensOfS - 2;
    if (numberStopwatch[indexTensOfS] > 5) {
        numberStopwatch[indexTensOfS] = 0;
        numberStopwatch[indexTensOfS - 1]++;
        return cellsManagerStopwatch(numberOfCells - 1);
    } else if (numberStopwatch[indexTensOfM] > 5) {
        numberStopwatch[indexTensOfM] = 0;
        numberStopwatch[indexTensOfM - 1]++;
        return cellsManagerStopwatch(numberOfCells - 1);
    } else if (numberStopwatch[numberOfCells - 1] > 9) {
        numberStopwatch[numberOfCells - 1] = 0;
        numberStopwatch[numberOfCells - 2]++;
        return cellsManagerStopwatch(numberOfCells - 1);
    }
}

function onPlayStopwatch() {
    stopwatchStart = setInterval(function() {
        numberStopwatch[numberStopwatch.length - 1]++;
        cellsManagerStopwatch(8, 4);
        updateCells(cellsStopwatch, numberStopwatch);
    }, 10);
}

function stopwatch(e) {
    switch (e.target.id) {
        case 'play-stopwatch':
            onPlayStopwatch();
            break;
        case 'pause-stopwatch':
            clearInterval(stopwatchStart);
            break;
        case 'reset-stopwatch':
            clearInterval(stopwatchStart);
            reset(numberStopwatch);
            updateCells(cellsStopwatch, numberStopwatch);
            break;
    }
}

stopwatchContainer.addEventListener('click', stopwatch);