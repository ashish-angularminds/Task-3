const fullname = document.getElementById("fullname") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const number = document.getElementById("number") as HTMLInputElement;
const url = document.getElementById("url") as HTMLInputElement;
const month = document.getElementById("month") as HTMLInputElement;
const per = document.getElementById("per") as HTMLInputElement;
const uni = document.getElementById("uni") as HTMLInputElement;
const time = document.getElementById("time") as HTMLInputElement;
const week = document.getElementById("week") as HTMLInputElement;
const date = document.getElementById("date") as HTMLInputElement;
const email = document.getElementById("email") as HTMLInputElement;
const gender = document.getElementById("gender") as HTMLInputElement;
const range = document.getElementById("range") as HTMLInputElement;
const file = document.getElementById("file") as HTMLInputElement;
const color = document.getElementById("color") as HTMLInputElement;
const hidden = document.getElementById("hidden") as HTMLInputElement;
const radio = document.querySelector('input[name="radio"]:checked') as HTMLInputElement;   
const angular = document.getElementById("angular") as HTMLInputElement;
const react = document.getElementById("react") as HTMLInputElement;
const reset = document.getElementById("reset") as HTMLInputElement;
const submit = document.getElementById("submit1") as HTMLInputElement;

reset.addEventListener('hover', ()=>{
    location.reload()
})



submit.addEventListener('mousedown', (e)=>{
    e.preventDefault();
    let passRegex = /^[A-Za-z]{1,}\d{1,}/;
    let numberRegex = /\d{10}/;

    if(fullname.value.length < 5){
        alert("Enter valid Name")
    }
    
    else if(password.value.length < 8 || !passRegex.test(password.value)){
        alert("Enter valid password")

        
    }

    else if(number.value.length !== 10 ||  !numberRegex.test(number.value)){
        alert("Enter valid number")
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

    if(true){
        // console.log(`Name:${fullname.value} Password:${password.value} tel:${per.value}
        // url:${url.value} Month:${month.value} number:${number.value} textarea:${uni.value} 
        // time:${time.value} week:${week.value} date:${date.value} email:${email.value} 
        // select:${gender.value} range:${range.value} file:${file.value} 
        // color:${color.value} radio:${radio.value} checkbox1:${angular.checked} 
        // checkbox2:${react.checked}`)
        // event.preventDefault();
        // alert(`Successful ${fullname.value}`)


        let person = {
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
        }

        
        $.ajax({
            url: 'https://winter-summer-sceptre.glitch.me/submit',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                console.log(data)
            },
            data: JSON.stringify(person)
        });
    }
   
})