
//Why Should Choose Us

let count = document.querySelectorAll(".count");
let arr = Array.from(count);
arr.map(function (item) {
    let startnumber = 0;

    function counterup() {
        startnumber++;
        item.innerHTML = startnumber;
        if (startnumber == item.dataset.number) {
            clearInterval(stop)
        }
    }


    let stop = setInterval(function () {
        counterup()

    }, 50)

});


//Enroll Form

function validateForm() {

    let isValid = true;

    document.getElementById("nameError").textcontent = ""; //clear the error message of previous one.
    document.getElementById("emailError").textcontent = ""; //clear the error message of previous one.
    document.getElementById("phoneError").textcontent = ""; //clear the error message of previous one.
    document.getElementById("coursesError").textcontent = ""; //clear the error message of previous one.


    //Name Validation 

    const name = document.getElementById("name").value;
    if (name == "") {
        document.getElementById("nameError").textContent = "Name is required";
        isValid = false;
    }


    //Email Validation


    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email == "") {
        document.getElementById("emailError").textContent = "Email is required";
        isValid = false;
    } else if (!emailPattern) {
        document.getElementById("emailError").textContent = "Email is should contain @, ex: test@gmail.com";
        isValid = false;
    }


    //Phone Validation


    const phone = document.getElementById("phone").value;
    const phonePattern = /^\+?[0-9]{1,3}[-.\\s]?\(?\d{1,5}\)?[-.\\s]?\d{1,5}[-.\\s]?\d{1,9}$/;
    if (phone == "") {
        document.getElementById("phoneError").textContent = "Phone number is required";
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "phone nummber should contain digits not text ex: 9087654321";
        isValid = false;
    }

    // courses Validation

    const courses = document.getElementById("courses").value;
    if (courses == "") {
        document.getElementById("coursesError").textContent = "Select the course";
        isValid = false;

    }

    return isValid

}


//API Calling - Axios Method

let tablebody = document.getElementById("api-data");
axios.get("https://jsonplaceholder.typicode.com/users/")
    .then(function (response) {
        const data = response.data

        if (data) {
            data.forEach(function (item) {

                tablebody.innerHTML += `<tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.username}</td>
            <td>${item.email}</td>
            <td>${item.address.city}</td>
            <td>${item.phone}</td>
            </tr>`
            })
        }
    })