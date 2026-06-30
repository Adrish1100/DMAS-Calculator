const add = document.getElementById('add');
const subtract = document.getElementById('sub');
const multiply = document.getElementById('mul');
const divide = document.getElementById('divide');
const output = document.getElementById('output')
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const clear = document.getElementById('C');
const equal = document.getElementById('equal');
const dot = document.getElementById('dot');
const percent = document.getElementById('percent');
const sign = document.getElementById('sign');
let first = true;
let second = false;
let firstno = 0;
let secondno = 0;
let firstbuffer = '';
let secbuffer = '';
let allowadd = false;
let allowdivide = false;
let allowmultiply = false;
let allowsubtract = false;
let operator = '';
let result;
let buffer;

dot.addEventListener('click', () => {
  if (first) {
    if (firstbuffer === '') {
      firstbuffer = '0.';
    } else if (!firstbuffer.includes('.')) {
      firstbuffer += '.';
}      
  } else {
    if (secbuffer === '') {
      secbuffer = '0.';
    } else if (!secbuffer.includes('.')) {
      secbuffer += '.';
    }
  }
  output.value += '.';
});

// Adds Click Function To Numbers and Dot
zero.addEventListener('click', () => {
  if (first) {
    firstbuffer += '0';
  } else {
    secbuffer += '0';
    }
    output.value += '0';
});

one.addEventListener('click', () => {
  if (first) {
    firstbuffer += '1'
    allowadd = true;
allowsubtract = true;
allowmultiply = true;
allowdivide = true;
  }
  if (second) {
    secbuffer += '1'
    allowadd = false;
allowsubtract = false;
allowmultiply = false;
allowdivide = false;
  }
  output.value += '1'
})

two.addEventListener('click', () => {
  if (first) {
    firstbuffer += '2'
    allowadd = true;
allowsubtract = true;
allowmultiply = true;
allowdivide = true;
  }
  if (second) {
    secbuffer += '2'
    allowadd = false;
allowsubtract = false;
allowmultiply = false;
allowdivide = false;
  }
  output.value += '2';
})

three.addEventListener('click', () => {
  if (first) {
    firstbuffer += '3'
    allowadd = true;
allowsubtract = true;
allowmultiply = true;
allowdivide = true;
  }
  if (second) {
    secbuffer += '3'
    allowadd = false;
allowsubtract = false;
allowmultiply = false;
allowdivide = false;
  }
  output.value += '3';
})

four.addEventListener('click', () => {
  if (first) {
    firstbuffer += '4'
    allowadd = true;
allowsubtract = true;
allowmultiply = true;
allowdivide = true;
  }
  if (second) {
    secbuffer += '4'
    allowadd = false;
allowsubtract = false;
allowmultiply = false;
allowdivide = false;
  }
  output.value += '4';
})

five.addEventListener('click', () => {
  if (first) {
    firstbuffer += '5'
    allowadd = true;
allowsubtract = true;
allowmultiply = true;
allowdivide = true;
  }
  if (second) {
    secbuffer += '5'
    allowadd = false;
allowsubtract = false;
allowmultiply = false;
allowdivide = false;
  }
  output.value += '5';
})

six.addEventListener('click', () => {
  if (first) {
    firstbuffer += '6'
    allowadd = true;
allowsubtract = true;
allowmultiply = true;
allowdivide = true;
  }
  if (second) {
    secbuffer += '6'
    allowadd = false;
allowsubtract = false;
allowmultiply = false;
allowdivide = false;
  }
  output.value += '6';
})

seven.addEventListener('click', () => {
  if (first) {
    firstbuffer += '7'
    allowadd = true;
allowsubtract = true;
allowmultiply = true;
allowdivide = true;
  }
  if (second) {
    secbuffer += '7'
    allowadd = false;
allowsubtract = false;
allowmultiply = false;
allowdivide = false;
  }
  output.value += '7';
})

eight.addEventListener('click', () => {
  if (first) {
    firstbuffer += '8'
    allowadd = true;
allowsubtract = true;
allowmultiply = true;
allowdivide = true;
  }
  if (second) {
    secbuffer += '8'
    allowadd = false;
allowsubtract = false;
allowmultiply = false;
allowdivide = false;
  }
  output.value += '8';
})

nine.addEventListener('click', () => {
  if (first) {
    firstbuffer += '9'
    allowadd = true;
allowsubtract = true;
allowmultiply = true;
allowdivide = true;
  }
  if (second) {
    secbuffer += '9'
    allowadd = false;
allowsubtract = false;
allowmultiply = false;
allowdivide = false;
  }
  output.value += '9';
})

// adds functionality to the operators
add.addEventListener('click', () => {
if (allowadd) {
  if (second) {
    buffer = output.value
    output.value = buffer.slice(0, -1)
}
  operator = 'add';
  output.value += '+'
  }

if (first) {
  firstno = Number(firstbuffer);
  first = false;
  second = true;
  }
  
  allowadd = false;
  allowsubtract = true;
  allowmultiply = true;
  allowdivide = true;
});

subtract.addEventListener('click', () => {
 if (allowsubtract) {
  if (second) {
    buffer = output.value
    output.value = buffer.slice(0, -1)
}
  operator = 'subtract';
  output.value += '-'
  }
  
  if (first) {
  firstno = Number(firstbuffer);
  first = false;
  second = true;
  }
  
  allowadd = true;
  allowsubtract = false;
  allowmultiply = true;
  allowdivide = true;
  
});

multiply.addEventListener('click', () => {
if (allowmultiply) {
  if (second) {
    buffer = output.value
    output.value = buffer.slice(0, -1)
}

  operator = 'multiply';
  output.value += '×'
  }

if (first) {
  firstno = Number(firstbuffer);
  first = false;
  second = true;
  }
  
  allowadd = true;
  allowsubtract = true;
  allowmultiply = false;
  allowdivide = true;
  
});

divide.addEventListener('click', () => {
if (allowdivide) {
  if (second) {
buffer = output.value
    output.value = buffer.slice(0, -1)
}
  operator = 'divide';
  output.value += '÷'
  }
  
  
if (first) {
  firstno = Number(firstbuffer);
  first = false;
  second = true;
  }
  
  allowadd = true;
  allowsubtract = true;
  allowmultiply = true;
  allowdivide = false;
});

percent.addEventListener('click', ()=>{
    if (first) {
        firstbuffer = String(Number(firstbuffer)/100);
    }
    else if (second) {
        secbuffer = String(Number(secbuffer)/100)
    }
    
    output.value += '%'
})
equal.addEventListener('click',() =>{
    secondno = Number(secbuffer);
    if (operator === 'add') {
    result = firstno + secondno
  output.value = firstno + secondno;
}
else if (operator === 'subtract') {
result = firstno - secondno
  output.value = firstno - secondno;
}
else if (operator === 'multiply') {
result = firstno * secondno
  output.value = firstno * secondno;
}
else if (operator === 'divide') {
  if (secondno === 0) {
    output.value = "Error"; // can't divide by 0
  } else {
  result = firstno / secondno
    output.value = firstno / secondno;
  }
}
firstbuffer = String(result)
secbuffer = ''
firstno = 0
secondno = 0
first = true
second = false
operator = ''
allowadd = true;
allowsubtract = true;
allowmultiply = true;
allowdivide = true;
})
clear.addEventListener('click', () => {
  // Reset all the variables
  firstbuffer = '';
  secbuffer = '';
  firstno = 0;
  secondno = 0;
  operator = '';
  
  // Reset the flags
  first = true;
  second = false;
  
  // Reset operator locks
  allowadd = true;
  allowsubtract = true;
  allowmultiply = true;
  allowdivide = true;
  
  // Reset the display
  output.value = '';
});
sign.addEventListener('click', () => {
    if (first) {
        if (firstbuffer !== '') {
            firstbuffer = String(-Number(firstbuffer));
            output.value = firstbuffer;
        }
    }
    else if (second) {
        if (secbuffer !== '') {
            secbuffer = String(-Number(secbuffer));
            output.value = firstbuffer;

            switch (operator) {
                case 'add':
                    output.value += '+';
                    break;
                case 'subtract':
                    output.value += '-';
                    break;
                case 'multiply':
                    output.value += '×';
                    break;
                case 'divide':
                    output.value += '÷';
                    break;
            }

            output.value += secbuffer;
        }
    }
});