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
    const carDoor = getRandomDoor();
    doors[carDoor] = true;

    const choice = getRandomDoor()

    const doorToRemove = Object.keys(doors).find(key => key !== choice && key !== carDoor);
    delete doors[doorToRemove];

    const switchChoice = !!Math.floor(Math.random() * 2);

    return !switchChoice
        ? carDoor === choice
            ? 'stayWins'
            : 'stayLosses'
        : carDoor !== choice
            ? 'switchWins'
            : 'switchLosses';
}

function getRandomDoor() {
    return `${Math.floor(Math.random() * 3) + 1}`;
}
