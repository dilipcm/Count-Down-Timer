let alertItem = document.querySelector("#alert-msg");
let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");


// function add(){
//   document.write("hello")
// }
var countDown = () => {
  var x = document.getElementById("myLocalDate").value;
  let futureDate = new Date(x);
  let currentDate = new Date();
  let myDate = futureDate - currentDate;

  // console.log("future Date:"+futureDate);
  // console.log("Current Date:"+currentDate);
  // console.log(" Date:"+myDate);

  let days = Math.floor(myDate / 1000 / 60 / 60 / 24);

  let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;

  let min = Math.floor(myDate / 1000 / 60) % 60;

  let sec = Math.floor(myDate / 1000) % 60;

  // var alert_msg= "";

  

  if (days>0 || hours>0 || min>0 || sec>30 ){

  daysItem.innerHTML = days;
  hoursItem.innerHTML = hours;
  minItem.innerHTML = min;
  secItem.innerHTML = sec;
  let alert_msg= "";
    alertItem.innerHTML = alert_msg;
  }

  else if (days==0 && hours==0 && sec<=30){
    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;
    let alert_msg="About to expire in "+sec+" Seconds!";
    alertItem.innerHTML = alert_msg;
  }
  
  else if (days<=0 && hours<=0 && min<=0 && sec<=0 ){
    daysItem.innerHTML = 0;
    hoursItem.innerHTML = 0;
    minItem.innerHTML = 0;
    secItem.innerHTML = 0;
    let alert_msg= "Expired!! Click on below button to reset timer";
    alertItem.innerHTML = alert_msg;
  }

}

countDown()

setInterval(countDown, 1000)
