let display = document.querySelector(".display");

function getGradePoints(grade) {
    if (grade == "O") {
        return 10;
    }   else if (grade == "A+") {
        return 9;
    }   else if (grade == "A") {
        return 8;
    }   else if (grade == "B+") {
        return 7;
    }   else if (grade == "B") {
        return 6;
    }   else if (grade == "C") {
        return 5;
    }
}

function myFunction() {
    let credit1 = document.querySelector("#credit1");
    let grade1 = document.querySelector("#grade1");
    let credit2 = document.querySelector("#credit2");
    let grade2 = document.querySelector("#grade2");
    let credit3 = document.querySelector("#credit3");
    let grade3 = document.querySelector("#grade3");
    let credit4 = document.querySelector("#credit4");
    let grade4 = document.querySelector("#grade4");
    let credit5 = document.querySelector("#credit5");
    let grade5 = document.querySelector("#grade5");
    let credit6 = document.querySelector("#credit6");
    let grade6 = document.querySelector("#grade6");
    
    credit1 = Number(credit1.value);
    credit2 = Number(credit2.value);
    credit3 = Number(credit3.value);
    credit4 = Number(credit4.value);
    credit5 = Number(credit5.value);
    credit6 = Number(credit6.value);

    let total_credit = credit1 + credit2 + credit3 + credit4 + credit5 + credit6;

    grade1 = (grade1).value;
    grade2 = (grade2).value;
    grade3 = (grade3).value;
    grade4 = (grade4).value;
    grade5 = (grade5).value;
    grade6 = (grade6).value;

    let total_credits = (credit1 * getGradePoints(grade1)) + (credit2 * getGradePoints(grade2)) + (credit3 * getGradePoints(grade3)) + (credit4 * getGradePoints(grade4)) + (credit5 * getGradePoints(grade5)) + (credit6 * getGradePoints(grade6));

    let GPA = (total_credits / total_credit).toFixed(2);

    display.innerHTML="Your total Credit Point is: " + total_credit + "<br>Your GPA is: " + GPA;
}

function reset() {
    credit1.value="";
    grade1.value="";
    credit2.value="";
    grade2.value="";
    credit3.value="";
    grade3.value="";
    credit4.value="";
    grade4.value="";
    credit5.value="";
    grade5.value="";
    credit6.value="";
    grade6.value="";

    display.innerHTML="¯\\_(ツ)_/¯"
}