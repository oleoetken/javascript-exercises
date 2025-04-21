const removeFromArray = function(array, ...args) {
    // need new array to push the elements to we want to keep
    const newArray = [];

    array.forEach(element => {
        // sort out all elements that are equal to args 
        if(!args.includes(element)) {
            newArray.push(element);
        }
    });
    return newArray;
};
removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1, 2, 2, 3], 2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
removeFromArray([1, 2, 3, 4], 7, 2);
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
removeFromArray([1, 2, 3], "1", 3);
// Do not edit below this line
module.exports = removeFromArray;
