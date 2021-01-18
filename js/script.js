let point = 0;
let qNumb = 0;
let i = 0;
let test = false;

function right() {

  if (document.querySelector('.rightBox').checked === true) {
    let green = document.querySelector('.rightChoice');
    green.style.color = 'green';
    green.innerHTML += '&#x2713; + 3 POINT';
    point += 1.5;
    document.querySelector('#point').innerHTML = point;
    for (let i = 1; i <= 4; i++) {
      document.querySelector('.all' + i).disabled = true;
    }
    if (document.querySelector('.warning') !== '') {
      let warning = document.querySelector('.warning');
      warning.innerHTML = '';
    }
    return true;

  } else if (document.querySelector('.wrongBox1').checked === true) {
    let red = document.querySelector('.wrongChoice1');
    red.style.color = 'red';
    red.style.textDecoration = 'line-through';
    for (let i = 1; i <= 4; i++) {
      document.querySelector('.all' + i).disabled = true;
    }
    if (document.querySelector('.warning') !== '') {
      let warning = document.querySelector('.warning');
      warning.innerHTML = '';
    }
    return true;

  } else if (document.querySelector('.wrongBox2').checked === true) {
    let red = document.querySelector('.wrongChoice2');
    red.style.color = 'red';
    red.style.textDecoration = 'line-through';
    for (let i = 1; i <= 4; i++) {
      document.querySelector('.all' + i).disabled = true;
    }
    if (document.querySelector('.warning') !== '') {
      let warning = document.querySelector('.warning');
      warning.innerHTML = '';
    }
    return true;

  } else if (document.querySelector('.wrongBox3').checked === true) {
    let red = document.querySelector('.wrongChoice3');
    red.style.color = 'red';
    red.style.textDecoration = 'line-through';
    for (let i = 1; i <= 4; i++) {
      document.querySelector('.all' + i).disabled = true;
    }
    if (document.querySelector('.warning') !== '') {
      let warning = document.querySelector('.warning');
      warning.innerHTML = '';
    }
    return true;
  }
}

function next() {
  let test = right();
  i += 1;

  if ((i === 1) || (test === true)) {
    let cancelAll = document.querySelector('#question' + i);
    cancelAll.innerHTML = "";
    let questionOne = document.querySelector('.displayQuestion' + i);
    questionOne.style.display = 'flex';
    questionOne.style.flexFlow = 'column';
    if (qNumb === 10) {
      let questionNumber = document.querySelector('#questionNumber');
      questionNumber.innerHTML = '10/10';
      let totalPoint = document.querySelector('#total');
      totalPoint.innerHTML = point + "/30";
    } else {
      qNumb += 1;
      let questionNumber = document.querySelector('#questionNumber');
      questionNumber.innerHTML = qNumb + '/ 10';
    }

  } else {
    i -= 1;
    let warning = document.querySelector('.warning');
    warning.style.color = 'red';
    warning.style.fontSize = '2em';
    warning.innerHTML = 'Forgot to answer?';
  }
}

function selectOnlyThis(id) {

  for (var i = 1; i <= 4; i++) {
    document.querySelector('.all' + i).checked = false;
  }
  document.getElementById(id).checked = true;
}

function reloadPage() {
  window.location.reload();
}
