const randomColor = function() {
    const hexs = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexs[Math.floor(Math.random()*16)]
    }
    return color;
}

let change;

const changeColor = function() {
    document.body.style.backgroundColor = randomColor();
}

const startColor = function () {
    if (!change) {
        change = setInterval(changeColor, 2000)
    }
}

const endColor = function () {
    clearInterval(change)
    change = null
}

document.querySelector('#start').addEventListener('click', startColor);

document.querySelector('#stop').addEventListener('click', endColor);