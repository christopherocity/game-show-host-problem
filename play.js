const stats = {
    'stayWins': 0,
    'stayLosses': 0,
    'switchWins': 0,
    'switchLosses': 0
}
for (let i = 0; i < 10000; i++) {
    stats[play(stats)]++;
}
console.log('stats - ', stats)

function play() {
    let doors = {
        '1': false,
        '2': false,
        '3': false
    };
    doors[getRandomDoor()] = true;
    const choice = getRandomDoor()
    while (true) {
        const doorToRemove = getRandomDoor();
        if (doorToRemove !== choice && doors[doorToRemove] === false) {
            delete doors[doorToRemove];
            break;
        }
    }
    let carDoor;
    for (const [key, value] of Object.entries(doors)) {
        if (value === true) {
            carDoor = key;
        }
    }
    const switchChoice = getYesOrNo();
    if (!switchChoice) {
        return carDoor === choice ? 'stayWins' : 'stayLosses';
    }
    if (switchChoice) {
        return carDoor !== choice ? 'switchWins' : 'switchLosses';
    }
}

function getRandomDoor() {
    return `${Math.floor(Math.random() * 3) + 1}`;
}

function getYesOrNo() {
    return !!Math.floor(Math.random() * 2);
}