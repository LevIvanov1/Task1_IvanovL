// else if
let a = Math.floor(Math.random() * 100);
console.log(" -------- First file ----------");
console.log("random number var1: " + a);
let output;

if ((a > 10 ? a : a * 2) > 5) {
    output = (2 * a) + 1;
}
    else {
        if ((a < 3 ? 1 : 2 * (a - 2)) > 4) {
            output = 5;
        }
    else {
            if (a % 2 == 0) {
                output = 6
            } else {
                output = 7
            }
        }
    }

// (a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);
console.log("result var1: " + output);
// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с помощью console.log()


// Switch

let a1 = Math.floor(Math.random() * 100);
console.log("random number var2: " + a1);
let result;
let Check = (a1 > 10 ? a1 : a1 * 2) > 5;

switch (Check) {
    case true:
        result = (2 * a1) + 1; break;
    case false:
        if (a1 < 3) {
            result = 1;
        } else {
            switch (2 * (a1 - 2) > 4) {
                case true:
                result = 5;
                    break;
                case false:
                    result = (a1 % 2 == 0 ? 6 : 7);
                    break;
            }
        }
}
console.log("result var2: " + result);

// ------------------------------ Второй файл

// else if
console.log(" ----- Second file ----------");
function manyChecks1() {
    let a2 = Math.floor(Math.random() * 20) + 1;
    console.log(`a2 = ${a2}`);
    let result1 = '';

    if (a2 > 10) {
        result1 += 'a is bigger than 10';
    }
    else {
        result1 += 'a is less than or equal to 10 ';
        if (a2 === 5) {
            result1 += 'an example of a special case';
        }
    } if (a2 === 15) {
        result1 += 'but a is not 15';
    }
    if (a2 > 5) {
        result1 += 'and a is greater than 5';
    } else {
        result1 += ' and a is less than or equal to 5';
    }
    result1 += (a2 % 2 ? ' and a is odd' : ' and a is even ');
    console.log("result var3: " + result1);
}
    manyChecks1();


// Switch
function manyChecks2() {
    let a3 = Math.floor(Math.random() * 20) + 1;
    console.log(`a3 = ${a3}`);
    let result2 = '';
    switch (true) {
        case (a3 > 10):
            result2 += 'a is bigger than 10';
            break;
        default:
            result2 += 'a is less than or equal to 10 ';
            if (a3 === 5) {
                result2 += 'an example of a special case';
            }
            break;
    }
    switch (a3) {
        case 15:
            result2 += 'but a is not 15';
            break;
    }
    switch (true) {
        case (a3 > 5):
            result2 += 'and a is greater than 5';
            break;
        default:
            result2 += 'and a is less than or equal to 5 ';
            break;
    }
    result2 += (a3 % 2 ? ' and a is odd' : ' and a is even ');
    console.log("result var4: " + result2);
}
manyChecks2();
console.log(" ----------------------------");
