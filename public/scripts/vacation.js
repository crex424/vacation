document.getElementById("vacation-form"). onsubmit = () => {
    clearErrors();

    let isValid = true;


    let vacation = document.getElementById("destination").value;
    if (vacation == "none") {
        document.getElementById("destination-err").style.display = "block";
        isValid = false;
    }


    let numTrav = document.getElementById("num-travelers").value.trim();
    if (numTrav <= 0) {
        document.getElementById("num-err").style.display = "block";
        isValid = false;
    }

    return isValid;
};

function clearErrors() {
    let errors = document.getElementsByClassName("error");
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}