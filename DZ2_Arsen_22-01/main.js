// First

const block = document.querySelector('.block');
const circle = document.querySelector('.circle');
const centerX = circle.offsetLeft + circle.offsetWidth / 2;
const centerY = circle.offsetTop + circle.offsetHeight / 2;
const radius = circle.offsetWidth / 2;
let angle = 0;

function moveBlock() {
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    block.style.left = x + 'px';
    block.style.top = y + 'px';
    angle += 0.01;
    setTimeout(moveBlock, 10);
}

moveBlock();





// Second

// let seconds = 0;
//
// const intervalId = setInterval(() => {
//     console.log(seconds);
//     seconds++;
//     if (seconds > 60) {
//         clearInterval(intervalId);
//     }
// }, 1000);
