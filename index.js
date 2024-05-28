const a = 10;
const num = Number(prompt("Enter Number of inputs: "));
function myFun(a) {
    const pref = prompt("enter your preference: (total),(even),(odd),(positive),(negative),(zeros),(sum),(strings) ");
    switch (pref) {
        case "total":
            {
                for (let i = 0; i < a; i++) {
                    console.log(`total number of inputs: ${a}`);
                }
                break;
            }
        case "even":
            {
                for (let i = 1; i <= a; i++) {
                    const num1 = prompt(`Enter number ${i}:`);
                    if (num1 % 2 == 0) {
                        console.log(`${num1} is even`);
                    }
                    else {
                        console.log(`${num1} is not even`);
                    }
                }
                break;
            }
        case "odd":
            {
                for (let i = 1; i <= a; i++) {
                    const num1 = prompt(`Enter number ${i}:`);
                    if (num1 % 2 == 1) {
                        console.log(`${num1} is odd`);
                    }
                    else {
                        console.log(`${num1} is not odd`);
                    }
                }
                break;
            }
        case "positive":
            {
                for (let i = 1; i <= a; i++) {
                    const num1 = prompt(`Enter number ${i}:`);
                    if (num1 > 0) {
                        console.log(`${num1} is a positive number`);
                    }
                    else {
                        console.log(`${num1} is not a positive number`);
                    }
                }
                break;
            }
        case "negative":
            {
                for (let i = 1; i <= a; i++) {
                    const num1 = prompt(`Enter number ${i}:`);
                    if (num1 < 0) {
                        console.log(`${num1} is a Negitive number`);
                    }
                    else {
                        console.log(`${num1} is not a Negative number`);
                    }
                }
                break;
            }
        case "zeros":
            {
                let count = 0;
                for (let i = 1; i <= a; i++) {
                    const num1 = Number(prompt(`enter number ${i}:`));
                    if (num1 == 0) {
                        count++;
                    }
                }
                console.log(`total number of zeros: ${count}`);
                break;
            }
        case "sum":
            {
                let sum = 0;
                for (let i = 1; i <= a; i++) {
                    const num1 = Number(prompt(`enter number ${i}:`));
                    sum += num1;
                }
                console.log(`total sum of inputs: ${sum}`);
                break;
            }
        case "strings":
            {
                let count = 0;
                for (let i = 1; i <= a; i++) {
                    const num1 = prompt(`${i}. Enter number||string:`);
                    if (isNaN(num1)) {
                        count++;
                    }

                }
                console.log(`total number of String inputs: ${count}`);
                break;
            }
        default:
            {
                console.log("invalid preference!");
            }
    }

}
myFun(num);

const prefre = 0;
function operations() {
    const prefre = prompt("Enter your prefrence:(add),(subtract),(multiply),(divide) ");
    switch (prefre) {
        case "add":
            {
                let add = 0;
                const a = prompt("enter the number of inputs: ");
                for (let i = 1; i <= a; i++) {
                    const num1 = Number(prompt(`Enter number ${i}: `));
                    add += num1;
                }
                console.log(`Addition of inputs: ${add}`);
                break;
            }
        case "subtract":
            {
                let sub;
                const a = prompt("enter the number of inputs: ");
                const num1 = Number(prompt(`Enter number 1: `));
                sub = num1;
                for (let i = 2; i <= a; i++) {
                    const num2 = Number(prompt(`Enter number ${i}: `));
                    sub -= num2;
                }
                console.log(`Subtraction of inputs: ${sub}`);
                break;
            }
        case "multiply":
            {
                let multiply = 1;
                const a = prompt("enter the number of inputs: ");
                for (let i = 1; i <= a; i++) {
                    const num1 = Number(prompt(`Enter number ${i}: `));
                    multiply *= num1;
                }
                console.log(`multiply of inputs: ${multiply}`);
                break;
            }
        case "divide":
            {
                let divide;
                const a = prompt("enter the number of inputs: ");
                const num1 = Number(prompt(`Enter number 1: `));
                divide = num1;
                for (let i = 2; i <= a; i++) {
                    const num2 = Number(prompt(`Enter number ${i}: `));
                    divide /= num2;
                }
                console.log(`division of inputs: ${divide}`);
                break;
            }
        default:
            {
                console.log("invalid preference!!!");
            }
    }
}