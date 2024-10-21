let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");

    greetParagraph.style.color = "green"

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    greetParagraph.innerHTML = "Greetings " + age + " " + "year old " + fname + " " + lname + "!";
}