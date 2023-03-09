const fullname = document.getElementById("fullname");
const password = document.getElementById("password");
const number = document.getElementById("number");
const url = document.getElementById("url");
const month = document.getElementById("month");
const per = document.getElementById("per");
const uni = document.getElementById("uni");
const time = document.getElementById("time");
const week = document.getElementById("week");
const date = document.getElementById("date");
const email = document.getElementById("email");
const gender = document.getElementById("gender");
const range = document.getElementById("range");
const file = document.getElementById("file");
const color = document.getElementById("color");
const hidden = document.getElementById("hidden");
const radio = document.querySelector('input[name="radio"]:checked');   
const angular = document.getElementById("angular");
const react = document.getElementById("react");
const reset = document.getElementById("reset");
const submit = document.getElementById("submit");

reset.addEventListener('click', ()=>{
    location.reload()
})

submit.addEventListener('mousedown', ()=>{
    if(fullname.value=== ""){
        alert("Enter Name")
        console.log("Enter Name")
    }
    
    else if(password.value===""){
        alert("Enter password")
        console.log("Enter password")
    }

    else if(number.value===""){
        alert("Enter number")
        console.log("Enter number")
    }

    else if(url.value===""){
        alert("Enter Url")
        console.log("Enter Url")
    }

    else if(month.value===""){
        alert("Enter month")
        console.log("Enter month")
    }

    else if(per.value===""){
        alert("Enter percentage")
        console.log("Enter percentage")
    }

    else if(uni.value===""){
        alert("Enter University name")
        console.log("University name")
    }

    else if(time.value===""){
        alert("Enter time")
        console.log("Enter time")
    }
    
    else if(week.value===""){
        alert("Enter week")
        console.log("Enter week")
    }

    else if(date.value===""){
        alert("Enter date")
        console.log("Enter date")
    }

    else if(email.value===""){
        alert("Enter email")
        console.log("Enter email")
    }
    
    else if(file.value===""){
        alert("Select file")
        console.log("Select file")
    }

    else if(angular.checked != true && react.checked != true){
        alert("Select either option")
        console.log("Select either option")
    }

    else{
        alert("Successful")
        console.log("Successful")
    }
})

// submit.addEventListener('mousedown', ()=>{
//     alert("Successful")
//     console.log("Successful")
// })