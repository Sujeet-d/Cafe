
// POP_UP 2

// function popup1() {
//     document.getElementById('con1').style.visibility = 'visible';
// }
// setTimeout(popup1, 10000);
// function pop1cancel() {
//     document.getElementById('popup1').style.display = 'none';
// }

// LOGIN VALIDATE
validate = () => {
    let name = document.getElementById('name').value;
    let pass = document.getElementById('password').value;
    if (name == "" || pass == "") {
        alert("Please fill the Empty Field")
    }
    else if (name == "sujeet" && pass == "sujeetds@5") {
        alert("login successfully");
        window.location = "index.html";
        return false;
    } else {
        alert("incorrect user name or password");
    }
}

// REGFORM VALIDATE

function pass() {
    let pas = document.getElementById('pass').value;
    let fn = document.getElementById('fn').value;
    let ln = document.getElementById('ln').value;
    let email = document.getElementById('em').value;
    let confi = document.getElementById('confi').value;
    if (pas == "" || fn == "" || ln == "" || email == "" || confi == "") {
        alert("Please Fill the Empty Field");
    } else if (pas != confi) {
        alert("password and confirm password must be same")
    } else if (pas == confi) {
        alert("Registered successfully Please login");
        window.location = "login.html";
        return false;
    }
}

// CONTACT VALIDATE
// function contact() {
//     let names = document.getElementById('names').value;
//     let email = document.getElementById('email').value;
//     let number = document.getElementById('number').value;
//     number = parseInt(number);
//     let text = document.getElementById('text').value;
//     if (names == "" || email == "" || number == "" || text == "") {
//         alert("Please fill all the fields");
//     } else {
//         alert("Submitted Succesfully")
//         // alert("Please Enter the number Correctly")
//     }
// }

// function validate() {
//     let name = document.getElementById("name").value;
//     let subject = document.getElementById("subject").value;
//     let phone = document.getElementById("phone").value;
//     let email = document.getElementById("email").value;
//     let message = document.getElementById("message").value;
//     let error_message = document.getElementById("error_message");

//     error_message.style.padding = "10px";

//     let errors = [];

//     if (name.length < 5) {
//         errors.push("Please Enter a valid Name");
//     }
//     if (subject.length < 10) {
//         errors.push("Please Enter a Correct Subject");
//     }
//     if (isNaN(phone) || phone.length != 10) {
//         errors.push("Please Enter a valid Phone Number");
//     }
//     if (email.indexOf("@") == -1 || email.length < 6) {
//         errors.push(
//             "Please Enter a valid Email");
//     }
//     if (message.length <= 40) {
//         errors.push(
//             "Please Enter More Than 40 Characters");
//     }

//     if (errors.length > 0) {
//         error_message.innerHTML =
//             errors.join("<br>");
//         return false;
//     }
//     else {
//         alert(
//             "Form Submitted Successfully!");
//         return true;
//     }
// }

// Link toggle
// setInterval(function () {
//     document.querySelector("a").classList.toggle("on")
// }, 1000)

