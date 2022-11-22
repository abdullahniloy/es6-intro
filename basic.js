var deposit = 400;
// condition
if (deposit > 200) {

}
else if (deposit < 200) {

}
else if (deposit => 200) {

}
else if (deposit != 200) {

}
else if (deposit <= 200) {

}
else if (deposit == 200) {

}

// ARRAY

const numbers = [45, 65, 57, 67, 34, 78, 34];
const countElement = numbers.length;
console.log(countElement);

numbers.push(555);
console.log(numbers)
//numbers.pop();
//console.log(numbers)

numbers[3] = 111;
console.log(numbers)

if (numbers.indexOf(222) != -1) {
    console.log(true);

}
else {
    console.log(false);
}

if (numbers.includes(555)) {
    console.log(true);
}
else {
    console.log(false);
}


// function recap

function fullName(first, second) {
    const name = first + ' ' + second;
    return name;
}

const getName = fullName('niloy', 'abdullah');
console.log(getName);