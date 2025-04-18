const repeatString = function(text, num) {
    if (num < 0) {
        return "ERROR";
    }
    let newText = "";
    for (let i = 0; i < num; i++) {
        newText += text;
    }
    return newText;
};

repeatString("hey", 3);
repeatString("hello", 10);
repeatString("hi", 1);
repeatString("bye", 0);
repeatString("", 10);
repeatString("goodbye", -1);

// Do not edit below this line
module.exports = repeatString;
