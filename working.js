var display = document.getElementById('displaybox');

var operation;
var curr = 0;
var prev;
var key;
var currstring = '';

function allclear(){
    curr = 0;
    operation = undefined;
    prev = undefined;
    currstring = '';
    displaycurr();
}

function displaycurr(){
    if(currstring == '')
        display.innerText = 0;
    else
        display.innerText = currstring;
}

function percentagefunction(){
    if(prev == undefined){
        curr /= 100;
    }
    else
        curr = (prev * curr) / 100;
    currstring = curr.toString();
    displaycurr();
}

function equalfunction(){
    if(prev != undefined && operation != undefined){
        switch(operation){
            case '+':
                // prev += curr;
                // curr = 0;
                // currstring = '';
                // display.innerText = prev;
                curr += prev;
                prev = undefined;
                currstring = curr.toString();
                displaycurr();
                operation = undefined;
                break;
            case '-':
                // prev -= curr;
                // curr = 0;
                // currstring = '';
                // display.innerText = prev;
                curr = prev-curr;
                prev = undefined;
                currstring = curr.toString();
                displaycurr();
                operation = undefined;
                break;
            case '/':
                // prev /= curr;
                // curr = 0;
                // currstring = '';
                // display.innerText = prev;
                curr = prev/curr;
                prev = undefined;
                currstring = curr.toString();
                displaycurr();
                operation = undefined;
                break;
            case '*':
                // prev *= curr;
                // curr = 0;
                // currstring = '';
                // display.innerText = prev;
                curr *= prev;
                prev = undefined;
                currstring = curr.toString();
                displaycurr();
                operation = undefined;
                break;
        }
    }
}

function performoperation(){
    if((key >= '0' && key <= '9') || key == '.'){
        currstring += key;
        // curr = parseInt(curr.toString() + key);
        curr = parseFloat(currstring);
        // curr = curr * 10 + parseInt(key);
        displaycurr();
    }
    else if (key == '*' || key == '-' || key == '/' || key == '+'){
        if(operation == undefined){
            operation = key;
            display.innerText = key;
            if(prev == undefined){
                prev = curr;
            }
            curr = 0;
            currstring = '';
        }
        else if(curr == 0){
            operation = key;
            display.innerText = key;
        }
        else if(curr != 0 && prev != undefined){
            equalfunction();
            operation = key;
            display.innerText = key;
        }
    }

    else if (key == '%'){
        percentagefunction();
    }

    else if(key == 'Enter'){
        equalfunction();
    }

    else if(key == 'Backspace'){
        if(currstring != ''){
            currstring = currstring.slice(0,-1);
            curr = parseFloat(currstring);
        }
        // var temp = curr % 10;
        // curr -= temp;
        // curr /= 10;
        displaycurr();
    }

    else if(key == 'Escape'){
        allclear();
    }
}

displaycurr();

var zero = document.getElementById('zero');
zero.addEventListener("click", function(){
    key = '0';
    performoperation();
});

var one = document.getElementById('one');
one.addEventListener("click", function(){
    key = '1';
    performoperation();
});

var two = document.getElementById('two');
two.addEventListener("click", function(){
    key = '2';
    performoperation();
});

var three = document.getElementById('three');
three.addEventListener("click", function(){
    key = '3';
    performoperation();
});

var four = document.getElementById('four');
four.addEventListener("click", function(){
    key = '4';
    performoperation();
});

var five = document.getElementById('five');
five.addEventListener("click", function(){
    key = '5';
    performoperation();
});

var six = document.getElementById('six');
six.addEventListener("click", function(){
    key = '6';
    performoperation();
});

var seven = document.getElementById('seven');
seven.addEventListener("click", function(){
    key = '7';
    performoperation();
});

var eight = document.getElementById('eight');
eight.addEventListener("click", function(){
    key = '8';
    performoperation();
});

var nine = document.getElementById('nine');
nine.addEventListener("click", function(){
    key = '9';
    performoperation();
});

var dot = document.getElementById('dot');
dot.addEventListener("click", function(){
    key = '.';
    performoperation();
});

var ac = document.getElementById('ac');
ac.addEventListener("click", allclear)

var plus = document.getElementById('plus');
plus.addEventListener("click", function(){
    key = '+';
    performoperation();
})

var minus = document.getElementById('minus');
minus.addEventListener("click", function(){
    key = '-';
    performoperation();
})

var divide = document.getElementById('divide');
divide.addEventListener("click", function(){
    key = '/';
    performoperation();
})

var multiply = document.getElementById('multiply');
multiply.addEventListener("click", function(){
    key = '*';
    performoperation();
})

var percent = document.getElementById('percentage');
percent.addEventListener('click', percentagefunction);

var sign = document.getElementById('sign');
sign.addEventListener('click', function(){
    if(curr != 0){
        // currstring = '-' + currstring;
        // curr = parseFloat(currstring);
        curr = -1 * curr;
        currstring = curr.toString();
        // curr = -1 * curr;
        displaycurr();
    }
    // else if(curr == 0 && prev != undefined){
    //     prev = -1 * prev;
    //     display.innerText = prev;
    // }
});




document.addEventListener('keydown', function(event){
    key = event.key;
    performoperation();
});

var equal = document.getElementById('equal');
equal.addEventListener('click', equalfunction);