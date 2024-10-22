let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");

    greetParagraph.style.color = "green"

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    greetParagraph.innerHTML = "Welcome " + age + " " + "year old " + fname + " " + lname + "!";
}

function trivia1() {
    let triviaAnswer = document.getElementById("trivia1-answer");

    let fname = document.getElementById("fname").value;

    // get values from form
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    // give result based off of what they selected
    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Sweet tooth eh?";
    }
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Rotten tuna, yuck!"
    }
    else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are correct!";
    }
}


function q1() {
    let triviaAnswer = document.getElementById("trivia1-answer");

    let fname = document.getElementById("fname").value;

    // get values from form
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    // give result based off of what they selected
    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Sweet tooth eh?";
    }
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Rotten tuna, yuck!"
    }
    else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are correct!";
    }
}