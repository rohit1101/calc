const btns = document.querySelectorAll('.btn');
const result = document.querySelector('#equal');
const inpEl = document.querySelector('.input ');
const clearing = document.querySelector('.c');

let expression = '';

window.addEventListener('keydown', e => {
  if (e.keyCode === 13 && expression) {
    output();
  }
});

function handleClick(e) {
  const val = e.currentTarget.dataset.n;
  console.log(e.currentTarget.dataset.n);
  inpEl.value += e.currentTarget.dataset.n;
  expression += val;
}

function output() {
  if (expression.trim()) {
    console.log(expression);
    inpEl.value = eval(expression).toFixed(2);
  }
}

function handleInput(e) {
  e.preventDefault();
  expression = e.currentTarget.value;
}

clearing.addEventListener('click', e => {
  expression = '';
  inpEl.value = '';
});

inpEl.addEventListener('input', handleInput);
result.addEventListener('click', output);
btns.forEach(op => {
  op.addEventListener('click', handleClick);
});
