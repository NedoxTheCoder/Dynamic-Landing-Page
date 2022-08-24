// DOM elements


const time  =document.getElementById("time");
const greeting = document.getElementById("greeting")
const name = document.getElementById("name")
const focus = document.getElementById("focus")


// Show time


function showTime(){
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    //Set a.m or p.m
    const amPM = hour >= 12 ? "PM" : "AM";

    // 12 Hour
    hour = hour % 12 || 12;

    // Output time

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPM}`

    setTimeout(showTime, 1000);
}
// Add 0
function addZero(n){
    return (parseInt(n, 10) < 10 ? "0" : "") + n
}

// Set background  and Greeting
function setBgGreet(){
    let today = new Date();
    let hour = today.getHours();
    
    if (hour < 12){
        //morn
        document.body.style.backgroundImage = "url('./images/morning.jpg')";
        greeting.textContent = "Good Morning!";
        // document.body.style.backgroundRepeat = "no-repeat";
        // document.body.style.backgroundSize = "cover";

    }else if (hour < 18){
        document.body.style.backgroundImage = "url('./images/afternoon2.jpg')"
        greeting.textContent = "Good Afternoon!"
        // document.body.style.backgroundRepeat = "no-repeat"
        // document.body.style.backgroundSize = "cover"
        focus.style.color = "#fff"
    }else if (hour < 22){
        document.body.style.backgroundImage = "url('./images/evening2.jpg')"
        greeting.textContent = "Good Evening!"
        document.body.style.color = 'white'
        // document.body.style.backgroundRepeat = "no-repeat"
        // document.body.style.backgroundSize = "cover"
    }else{
        document.body.style.backgroundImage = "url('./images/night.jpg')"
        greeting.textContent = "Good Night!"
        document.body.style.color = 'white'
        // document.body.style.backgroundRepeat = "no-repeat"
        // document.body.style.backgroundSize = "cover"
    }
}

//Get Name
function getName(){
    if (localStorage.getItem("name") === null){
        name.textContent = "->[Enter Name]<-";

    }else{
        name.textContent = localStorage.getItem("name");
    }
}
// Set Name
function setName(e){
    if (e.type === 'keypress'){
        //MAKE SURE "ENTER" is pressed
        if (e.which === 13 || e.keyCode == 13){
            localStorage.setItem("name", e.target.innerText)
            name.blur()
        }
    }else{
        localStorage.setItem("name", e.target.innerText)
    }
}
// Get focus
function getFocus(){
    if (localStorage.getItem("focus") === null){
        focus.textContent = "->[Enter Focus]<-";

    }else{
        focus.textContent = localStorage.getItem("focus");
    }
}
function setFocus(e){
    if (e.type === 'keypress'){
        //MAKE SURE "ENTER" is pressed
        if (e.which === 13 || e.keyCode == 13){
            localStorage.setItem("focus", e.target.innerText)
            focus.blur()
        }
    }else{
        localStorage.setItem("focus", e.target.innerText)
    }
}
name.addEventListener('keypress',setName)
name.addEventListener('blur',setName)

focus.addEventListener('keypress',setFocus)
focus.addEventListener('blur',setFocus)
// RUN

showTime()
setBgGreet()
getName()
getFocus()