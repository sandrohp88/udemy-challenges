// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4) should return [1,3]

// Question 3: Write a function that converts HEX to RGB. Then Make that function autodect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

// The Rules Are:
// You have until June 30st at 11:59pm EST to submit your solution file (using Github. If you don't know how to do that, check out the lecture in the Git + Github section of the course). You will have to submit the link to the #coding-challenge Discord group with the following message: -challenge github.com// . The bot will listen for the command in any channel its in and will reply with "thanks for your submission" if it succeeded.

// Use whatever tools you have as developers (google, friends, Discord, programming buddy etc...) but I will not be offering any help with this challenge. Just like a developer you must solve a problem and build something that will be challenging. Nobody will hold your hand during the job so we want to experience that by figuring it all out on your own!

const question1 = (array) => {
    // Sort the array numeracally
    array.sort((x, y) => x - y);
    let result = [];
    for (let index = 0; index < array.length;) {
        const element = array[index];
        let tmp = [];
        // add equal elements to an array
        while (element === array[++index]) {
            tmp.push(element)
        }
        // Check if there is just one element, if so, no need to return an array
        if (tmp.length === 1) {
            result.push(tmp[0]);
        } else {

            result.push(tmp);
        }
    }
    return result;
}

const question2 = (array, target) => {
    // Since you can decompouse a number like target - x = y
    // Here  x is the first number of the array, so if y 
    // Exists in array, I have my solution, if do not exits,
    // I check with the next x in array.
    // This approach give us the twp more distant numbers in the array that
    // satisfies the condition(x+y =  target) 
    let result = [];
    let i = 0;
    while (i < array.length && 
        !array.includes(target - array[i++])
    );

    // Ternary operator to check if there is a solution
    i < array.length ? result.push(array[--i], target - array[i]): [];
    return result;
}

const question3 = (color) => {
    // Detect color format
    if(color.substring(0,1) === "#"){ // HEX
        // Remove #
        color = color.substring(1,color.length);
        const r = parseInt(color.substring(0,2),16); 
        const g = parseInt(color.substring(2,4),16); 
        const b = parseInt(color.substring(4,6),16); 
        color = `rgb(${r},${g},${b})`;

    }else{ // RGB
        // I got this from: https://haacked.com/archive/2009/12/29/convert-rgb-to-hex.aspx/
        const digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
        const red = parseInt(digits[2]);
        const green = parseInt(digits[3]);
        const blue = parseInt(digits[4]);
        
        const rgb = blue | (green << 8) | (red << 16);
        color = digits[1] + '#' + rgb.toString(16);
    }
    return color;
}


// let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let array = [1, 2, 2, 3];
let rgbColor = "rgb(255, 0, 0)";
let hexColor = "#ff0000"
console.log(question3(hexColor));
