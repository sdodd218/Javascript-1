function submitData() {
    let min = Number (guessForm.min.value);
    let max = Number (guessForm.max.value);
    

    if (min == "" || max == "") {
        let value = "Both fields must be filled in.";
        let color = "red";
        updateDOM(value, color);
        return false;
    }

    if(min >= max) {
        let value = "the min value cannot be greater than the max value"
        let color ="red";
        updateDOM(value, color);
        return false;
    }
numberGuessGame(min,max)
    return false;  } 

function updateDOM(value, color) {
    document.getElementById("output").innerHTML = value;
    document.getElementById("output").style.color = color;
}

function numberGuessGame(min, max) {
    let num = Math.ceil(randomNumber(min, max));
    console.log(num);
    let message =
     "I'm thinking of a number between" + min + "and" + max + "try to guess it.";
     let guess;
     do {
        guess = parseInt(prompt(message));
        if (guess < num) {
            message = "Oh No! The guess is to low, Bring it up and Keep trying";
            guess = parseInt(prompt(message));
        }
        if (guess > num) {
            message = "Oh No! The guess is to high, Bring it down and Keep trying";
            guess = parseInt(prompt(message));
        }
        if (isNaN(guess)) {
            break;
        }

     } while (guess !==num);
        message = "Congrats, You are number 1!"
        updateDOM(message, "green");}


function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}