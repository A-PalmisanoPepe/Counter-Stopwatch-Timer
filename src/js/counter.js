let counterCells = document.querySelectorAll('.counter-number');
let counterContainer = document.querySelector('#counter-container');

let counterNumbers = [];
for (let i = 0; i < counterCells.length; i++) {
    counterNumbers.push(Number(counterCells[i].textContent));
}

// function resetC() {
//     for (let i = 0; i < counterNumbers.length; i++) {
//         counterNumbers[i] = 0;
//     }
// }
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

let checkStartSubtraction = counterNumbers.reduce(getSumOfArrayItems, 0);

function cellsManagerSubtraction(numberOfCells) {
    if (checkStartSubtraction === 9 * numberOfCells) {
        reset(counterNumbers); 
        updateCells(counterCells, counterNumbers);
    } else if (counterNumbers[numberOfCells - 1] < 0) {
        counterNumbers[numberOfCells - 2]--;
        counterNumbers[numberOfCells - 1] = 9;
        return cellsManagerSubtraction(numberOfCells - 1);
    }
}

function cellsManagerSum(numberOfCells) {
    if (counterNumbers[numberOfCells - 1] > 9) {
        counterNumbers[numberOfCells - 1] = 0;
        counterNumbers[numberOfCells - 2]++;
        return cellsManagerSum(numberOfCells - 1);
    }
}

function counter(e) {
    switch (e.target.id) {
        case 'plus':
            counterNumbers[counterNumbers.length - 1]++;
            cellsManagerSum(9);
            updateCells(counterCells, counterNumbers);
            break;
        case 'minus':
            counterNumbers[counterNumbers.length - 1]--;
            cellsManagerSubtraction(9);
            updateCells(counterCells, counterNumbers);
            break;
        case 'reset-counter':
            reset(counterNumbers);
            updateCells(counterCells, counterNumbers);
            break;
    }
}

counterContainer.addEventListener('click', counter);