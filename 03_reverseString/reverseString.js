const reverseString = function(text) {
    let splitText = text.split("");
    let reverseArray = splitText.reverse();
    let joinArray = reverseArray.join("");
    console.log(joinArray);
    return joinArray;
};

reverseString("hello");
reverseString("hello there");
reverseString("123! abc! Hello, Odinite.");
reverseString("");


// Do not edit below this line
module.exports = reverseString;
