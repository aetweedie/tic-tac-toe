//var spec = require(./../spec.js);

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');

var x = 'X';
var o = 'O';
var counter = 1;

var writeMove = function(e) {
  if(e.target.innerHTML === '') {
    if (counter % 2 === 0) {
      e.target.innerHTML = x;
      counter+= 1;
      winner();
      console.log(counter);
    } else {
      e.target.innerHTML = o;
      counter+= 1;
      winner();
    }
  }
};

var winner = function() {
  if ((one.innerHTML === 'X' && two.innerHTML === 'X' && three.innerHTML === 'X') ||
      (four.innerHTML === 'X' && five.innerHTML === 'X' && six.innerHTML === 'X') ||
      (seven.innerHTML === 'X' && eight.innerHTML === 'X' && nine.innerHTML === 'X') ||
      (one.innerHTML === 'X' && four.innerHTML === 'X' && seven.innerHTML === 'X') ||
      (two.innerHTML === 'X' && five.innerHTML === 'X' && eight.innerHTML === 'X') ||
      (three.innerHTML === 'X' && six.innerHTML === 'X' && nine.innerHTML === 'X') ||
      (one.innerHTML === 'X' && five.innerHTML === 'X' && nine.innerHTML === 'X') ||
      (three.innerHTML === 'X' && five.innerHTML === 'X' && seven.innerHTML === 'X')) {
        alert('X wins!');
        window.location.reload();
  } else if (
      (one.innerHTML === 'O' && two.innerHTML === 'O' && three.innerHTML === 'O') ||
      (four.innerHTML === 'O' && five.innerHTML === 'O' && six.innerHTML === 'O') ||
      (seven.innerHTML === 'O' && eight.innerHTML === 'O' && nine.innerHTML === 'O') ||
      (one.innerHTML === 'O' && four.innerHTML === 'O' && seven.innerHTML === 'O') ||
      (two.innerHTML === 'O' && five.innerHTML === 'O' && eight.innerHTML === 'O') ||
      (three.innerHTML === 'O' && six.innerHTML === 'O' && nine.innerHTML === 'O') ||
      (one.innerHTML === 'O' && five.innerHTML === 'O' && nine.innerHTML === 'O') ||
      (three.innerHTML === 'O' && five.innerHTML === 'O' && seven.innerHTML === 'O')) {
        alert('O wins!');
        window.location.reload();
      } else if (counter >= 10) {
        alert('The Cat won');
        window.location.reload();
      }
};

one.addEventListener('click', writeMove);
two.addEventListener('click', writeMove);
three.addEventListener('click', writeMove);
four.addEventListener('click', writeMove);
five.addEventListener('click', writeMove);
six.addEventListener('click', writeMove);
seven.addEventListener('click', writeMove);
eight.addEventListener('click', writeMove);
nine.addEventListener('click', writeMove);

//Ways to win[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]
