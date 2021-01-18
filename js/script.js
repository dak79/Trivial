let point = 0;
let qNumb = 0;
let i = 0;

function right() {
  if (document.querySelector('.rightBox').checked === true) {
    let green = document.querySelector('.rightChoice');
    green.style.color = 'green';
    green.innerHTML += '&#x2713; + 3 POINT';
    for (let i = 1; i <= 4; i++) {
      document.querySelector('.all' + i).disabled = true;
    }
    point += 3;
    document.querySelector('#point').innerHTML = point;
  } else if (document.querySelector('.wrongBox1').checked === true) {
    let red = document.querySelector('.wrongChoice1');
    red.style.color = 'red';
    red.style.textDecoration = 'line-through';
    for (let i = 1; i <= 4; i++) {
      document.querySelector('.all' + i).disabled = true;
    }
  } else if (document.querySelector('.wrongBox2').checked === true) {
    let red = document.querySelector('.wrongChoice2');
    red.style.color = 'red';
    red.style.textDecoration = 'line-through';
    for (let i = 1; i <= 4; i++) {
      document.querySelector('.all' + i).disabled = true;
    }
  } else if (document.querySelector('.wrongBox3').checked === true) {
    let red = document.querySelector('.wrongChoice3');
    red.style.color = 'red';
    red.style.textDecoration = 'line-through';
    for (let i = 1; i <= 4; i++) {
      document.querySelector('.all' + i).disabled = true;
    }
  }
}

function next() {
  i += 1;
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
