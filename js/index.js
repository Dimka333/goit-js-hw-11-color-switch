const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let timerId = null;

const bodyRef = document.querySelector('body');
const startBtnRef = document.querySelector('[data-action="start"]');
const stopBtnRef = document.querySelector('[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const handlClickStart = () => {
  if (!timerId) {
    timerId = setInterval(() => {
      bodyRef.setAttribute(
        'style',
        `background-color: ${colors[randomIntegerFromInterval(0, 5)]}`,
      );
    }, 666);
  }
};
const handleClickStop = () => {
  clearInterval(timerId);
  timerId = null;
};
startBtnRef.addEventListener('click', handlClickStart);
stopBtnRef.addEventListener('click', handleClickStop);