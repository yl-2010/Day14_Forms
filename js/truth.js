let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");

    greetParagraph.style.color = "green"

    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    greetParagraph.innerHTML = "Welcome " + age + " " + "year old " + fname + " " + lname + "!";
}

function trivia1() {
    let triviaAnswer = document.getElementById("trivia1-answer");


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
    let q1Answer = document.getElementById("q1-answer");


    // get values from form
    let htmlSelected = document.getElementById("r1").checked;
    let roboticsSelected = document.getElementById("r2").checked;
    let chromeSelected = document.getElementById("r3").checked;

    // give result based off of what they selected
    if (htmlSelected) {
        q1Answer.innerHTML = fname + ", you are wrong. This <em>is</em> my first time learning HTML.";
    }
    else if (roboticsSelected) {
        q1Answer.innerHTML = fname + ", you are right! I did robotics for <em>two</em> years in middle school."
    }
    else if (chromeSelected) {
        q1Answer.innerHTML = fname + ", you are wrong. I use the <a href='https://www.arc.net' target='_blank'>Arc Browser</a>.";
    }
    else {
        q1Answer.innerHTML = fname + ", select something!";
    }
}