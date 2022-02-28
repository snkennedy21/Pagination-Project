'use strict';

// IIFE
(function () {
  let numbers = document.querySelectorAll('.number');
  let elipsis1 = document.querySelector('.elipsis1');
  let elipsis2 = document.querySelector('.elipsis2');
  let firstNumber = document.querySelector('.first');
  let lastNumber = document.querySelector('.last');
  let buttonLeft = document.querySelector('.button-left');
  let buttonRight = document.querySelector('.button-right');
  let index = 0;

  const greenBackground = function (number) {
    number.style.backgroundColor = '#087f5b';
    number.style.color = '#fff';
  }

  const whiteBackground = function (number) {
    number.style.backgroundColor = '#fff';
    number.style.color = '#343a40';
  }

  let numbersArray = Array.from(numbers);

  numbers.forEach((selected) => {

    // Color Changes
    selected.addEventListener('click', function () {
      numbers.forEach((selected) => {
        whiteBackground(selected);
        selected.addEventListener('mouseleave', function () {
          whiteBackground(selected);
        })
      })
      greenBackground(selected);

      selected.addEventListener('mouseover', function () {
        greenBackground(selected);
      })
      selected.addEventListener('mouseleave', function () {
        greenBackground(selected);
      })
    })
    selected.addEventListener('mouseover', function () {
      greenBackground(selected);
    })
    selected.addEventListener('mouseleave', function () {
      whiteBackground(selected);
    })


    // Moving Around Numbers
    selected.addEventListener('click', function () {
      index = numbersArray.indexOf(selected);
      numbers.forEach((number) => {
        let numberOptions = numbersArray.indexOf(number);
        if ((numberOptions + 2) < (index)) {
          number.classList.add('hidden');
        }
        if ((numberOptions - 2) > (index)) {
          number.classList.add('hidden');
        }
        if ((numberOptions - 2) <= (index) && (numberOptions) > (index)) {
          number.classList.remove('hidden');
        }
        if ((numberOptions + 2) >= (index) && (numberOptions) < (index)) {
          number.classList.remove('hidden');
        }
        if ((index + 1) >= 4) {
          firstNumber.classList.remove('hidden');
        }
        if ((index + 1) >= 5) {
          elipsis1.classList.remove('hidden');
        } else {
          elipsis1.classList.add('hidden');
        }
        if ((index - 1) <= 10) {
          lastNumber.classList.remove('hidden');
        }
        if ((index - 1) <= 9) {
          elipsis2.classList.remove('hidden');
        } else {
          elipsis2.classList.add('hidden');
        }
      })
    })
  })

  buttonLeft.addEventListener('click', function () {

  })
}())