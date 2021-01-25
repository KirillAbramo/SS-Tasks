// В последовательности a1,... an все отрицательные члены увеличить на 0.5 а все не отрицательные заменить на 0.1. N187
const myArr = [-3, -2, -1, 0, 1, 2, 3, 4];
function result3 (arr) {
    let newArr = arr.map(n => n < 0 ? n + 0.5 : 0.1);
    return newArr;
}
console.log(result3(myArr));

// Даны натуральное числа n, действительные числа а1,...,an. Получить max (|a1|,...,|an|) и корень из а1квадрат+...аnквадрат. N205
const yourArr = [-100, -50, 0, 50, 100, 1000, -30];
function result5(arr) {
    let mArr =[];
    for(let i=0; i<arr.length; i++){
       mArr.push(Math.abs(arr[i]));
    }
    return Math.max(...mArr);
}
console.log(result5(yourArr));


const hisArr = [1, 2, 3, 4, 5]
function result6(arr) {
    let res = arr.map(num => Math.pow(num, 2))
        .reduce((acc, num) => {
            return acc + num
        }, 0);
    return Math.sqrt(res);
}
console.log(result6(hisArr));


// Дано натуральное число m<27. Получить все трехзначные натуральные числа, сумма цифр которых равна m. N593
function result7(num) {
    for (let m = 100; m <= 999; m++) {
        let a = (m / 100);
        let b = a.toFixed(2);
        let c = +b[0] + +b[2] + +b[3];
        if (c === num) {
            console.log(b[0] + b.slice(2));
        }
    }
}
result7(5);

// function result13(sumValue) {
//     const digitsSum = function (number) {
//       let sum = 0;
//     //   console.log(number);
//       while (number) {
//         sum += number % 10;
//         number = Math.floor(number / 10);
//       }
  
//       return sum;
//     };
  
//     let numbers = [];
  
//     for (let number = 100; number <= 999; number++) {
//       if (digitsSum(number) === sumValue) {
//         numbers.push(number);
//       }
//     }
  
//     return numbers;
//   }
  
//   console.dir(result13(5));