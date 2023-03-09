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
const submit = document.getElementById("submit1");

reset.addEventListener('click', ()=>{
    location.reload()
})



submit.addEventListener('mousedown', (e)=>{

    

    if(fullname.value=== ""){
        console.log("Enter Name")
        alert("Enter Name")
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
        alert("Select month")
        console.log("Select month")
    }

    else if(per.value===""){
        alert("Enter percentage")
        console.log("Enter percentage")
    }

    else if(uni.value===""){
        alert("Enter University name")
        console.log("Enter University name")
    }

    else if(time.value===""){
        alert("Select time")
        console.log("Select time")
    }
    
    else if(week.value===""){
        alert("Select week")
        console.log("Select week")
    }

    else if(date.value===""){
        alert("Enter birth date")
        console.log("Enter birth date")
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
        alert("Select either option from skills")
        console.log("Select either option from skills")
    }

    else{
        console.log(`Name:${fullname.value} Password:${password.value} tel:${per.value}
        url:${url.value} Month:${month.value} number:${number.value} textarea:${uni.value} 
        time:${time.value} week:${week.value} date:${date.value} email:${email.value} 
        select:${gender.value} range:${range.value} file:${file.value} 
        color:${color.value} radio:${radio.value} checkbox1:${angular.checked} 
        checkbox2:${react.checked}`)
        event.preventDefault();
        alert(`Successful ${fullname.value}`)
    }

    event.preventDefault();
})