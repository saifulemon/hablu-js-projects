function myTime(){
    var myDate = new Date();
    var hr,min = (myDate.getMinutes() < 10) ? "0" + myDate.getMinutes() : myDate.getMinutes(),
        sec = (myDate.getSeconds() < 10) ? "0" + myDate.getSeconds() : myDate.getSeconds(),
        M = (myDate.getHours() >= 12) ? "PM" : "AM";

    if (myDate.getHours() == 0) {
        hr = 12;
    }
    else if(myDate.getHours() > 12){
        hr = myDate.getHours() - 12;
    }
    else {
        hr = myDate.getHours();
    }

    var currentTime = hr + ':' + min + ':' + sec + ':';

    document.getElementsByClassName("H")[0].innerHTML = currentTime;
    document.getElementsByClassName("M")[0].innerHTML = M;

    var nowDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    nowMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    myDay = myDate.getDate();

    var currentDate = nowDay[myDate.getDay()] + ',' + nowMonth[myDate.getMonth()] + " " + myDay;
    document.getElementsByClassName("date")[0].innerHTML = currentDate;
}

myTime();

setInterval(function(){
    myTime();
}, 1000);