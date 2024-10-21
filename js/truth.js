let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");

    greetParagraph.style.color = "green"

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    greetParagraph.innerHTML = "Greetings " + age + " " + "year old " + fname + " " + lname + "!";
}

function trivia1() {
    let triviaAnswer = document.getElementById("trivia1-answer");


    // get values from form
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let age = document.getElementById("honey").checked;

}