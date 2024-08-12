// INPUTS
const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");

// OUTPUTS
const dayOtp = document.getElementById("DD");
const monthOtp = document.getElementById("MM");
const yearOtp = document.getElementById("YY");

// FORM ELEMENT
const form = document.querySelector("form");

// ADDING THE SUBMIT EVENT LISTENER TO FORM
form.addEventListener("submit", handleSubmit);

// Current Date
const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value) {
            i.style.borderColor = "red";
            parent.querySelector("small").innerText = "This field is required.";
            validator = false;
        } else if (i === monthInp && monthInp.value > 12) {
            monthInp.style.borderColor = "red";
            monthInp.parentElement.querySelector("small").innerText = "Must be a valid month.";
            validator = false;
        } else if (i === dayInp && dayInp.value > months[monthInp.value - 1]) {
            dayInp.style.borderColor = "red";
            dayInp.parentElement.querySelector("small").innerText = "Must be a valid day.";
            validator = false;
        } else {
            i.style.borderColor = "black";
            parent.querySelector("small").innerText = "";
        }
    });
    return validator;
}

function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
        let inputDay = parseInt(dayInp.value);
        let inputMonth = parseInt(monthInp.value);
        let inputYear = parseInt(yearInp.value);

        if (inputDay > day) {
            day += months[month - 1];
            month -= 1;
        }

        const d = day - inputDay;
        const m = month - inputMonth;
        const y = year - inputYear;

        dayOtp.innerHTML = d;
        monthOtp.innerHTML = m;
        yearOtp.innerHTML = y;
    }
}
