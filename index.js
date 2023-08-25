// Code your solutions in this file
function writeCards(arr, greeting) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${greeting} gift!`);
    }

    return newArr;

}

function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(num);
        num--;
    }
}