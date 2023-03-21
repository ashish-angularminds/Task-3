var fullname = document.getElementById("fullname");
var password = document.getElementById("password");
var number = document.getElementById("number");
var url = document.getElementById("url");
var month = document.getElementById("month");
var per = document.getElementById("per");
var uni = document.getElementById("uni");
var time = document.getElementById("time");
var week = document.getElementById("week");
var date = document.getElementById("date");
var email = document.getElementById("email");
var gender = document.getElementById("gender");
var range = document.getElementById("range");
var file = document.getElementById("file");
var color = document.getElementById("color");
var hidden = document.getElementById("hidden");
var radio = document.querySelector('input[name="radio"]:checked');
var angular = document.getElementById("angular");
var react = document.getElementById("react");
var reset = document.getElementById("reset");
var submit = document.getElementById("submit1");
reset.addEventListener('hover', function () {
    location.reload();
});
submit.addEventListener('mousedown', function (e) {
    e.preventDefault();
    var passRegex = /^[A-Za-z]{1,}\d{1,}/;
    if (fullname.value.length < 5) {
        alert("Enter Name");
    }
    else if (password.value.length < 8 || !passRegex.test(password.value)) {
        alert("Enter valid password");
    }
    else if (number.value === "") {
        alert("Enter number");
        console.log("Enter number");
    }
    else if (url.value === "") {
        alert("Enter Url");
        console.log("Enter Url");
    }
    else if (month.value === "") {
        alert("Select month");
        console.log("Select month");
    }
    else if (per.value === "") {
        alert("Enter percentage");
        console.log("Enter percentage");
    }
    else if (uni.value === "") {
        alert("Enter University name");
        console.log("Enter University name");
    }
    else if (time.value === "") {
        alert("Select time");
        console.log("Select time");
    }
    else if (week.value === "") {
        alert("Select week");
        console.log("Select week");
    }
    else if (date.value === "") {
        alert("Enter birth date");
        console.log("Enter birth date");
    }
    else if (email.value === "") {
        alert("Enter email");
        console.log("Enter email");
    }
    else if (file.value === "") {
        alert("Select file");
        console.log("Select file");
    }
    else if (angular.checked != true && react.checked != true) {
        alert("Select either option from skills");
        console.log("Select either option from skills");
    }
    if (true) {
        // console.log(`Name:${fullname.value} Password:${password.value} tel:${per.value}
        // url:${url.value} Month:${month.value} number:${number.value} textarea:${uni.value} 
        // time:${time.value} week:${week.value} date:${date.value} email:${email.value} 
        // select:${gender.value} range:${range.value} file:${file.value} 
        // color:${color.value} radio:${radio.value} checkbox1:${angular.checked} 
        // checkbox2:${react.checked}`)
        // event.preventDefault();
        // alert(`Successful ${fullname.value}`)
        var person = {
            name: fullname.value,
            fullname: fullname.value,
            password: password.value,
            number: number.value,
            email: email.value,
            month: month.value,
            per: per.value,
            uni: uni.value,
            time: time.value,
            week: week.value,
            date: date.value,
            gender: gender.value,
            range: range.value,
            file: file.value,
            color: color.value,
            hidden: hidden.value,
            radio: radio.value,
            angular: angular.value,
            react: react.value,
            reset: reset.value,
            url: url.value
        };
        $.ajax({
            url: 'https://winter-summer-sceptre.glitch.me/submit',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                console.log(data);
            },
            data: JSON.stringify(person)
        });
    }
});
