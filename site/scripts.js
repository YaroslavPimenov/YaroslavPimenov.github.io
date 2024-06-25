let cardElement = document.querySelector(".card");

cardElement.addEventListener("click", flip);

function flip(){
  cardElement.classList.toggle("flipped")
}

function startTime() {
    var weekday = new Array();
    weekday[0] =  "Неділя";
    weekday[1] = "Понеділок";
    weekday[2] = "Вівторок";
    weekday[3] = "Середа";
    weekday[4] = "Четвер";
    weekday[5] = "П'ятниця";
    weekday[6] = "Субота";
    var month = new Array();
    month[0] = "Січень";
    month[1] = "Лютий";
    month[2] = "Березень";
    month[3] = "Квітень";
    month[4] = "Травень";
    month[5] = "Червень";
    month[6] = "Липень";
    month[7] = "Серпень";
    month[8] = "Вересень";
    month[9] = "Жовтень";
    month[10] = "Листопад";
    month[11] = "Грудень";
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d = today.getDate();
    var y = today.getFullYear();
    var wd = weekday[today.getDay()];
    var mt = month[today.getMonth()];
  
    m = checkTime(m);
    s = checkTime(s);
                    document.getElementById('date').innerHTML =
    d;
 document.getElementById('day').innerHTML =
    wd;
 document.getElementById('month').innerHTML =
    mt + "/" + y;
    
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
document.getElementById('conspB').addEventListener('click', function() 
{
    window.location.href = 'conspects.html';
});
document.getElementById('examB').addEventListener('click', function() 
{
    window.location.href = 'examination.html';
});
document.getElementById('videoB').addEventListener('click', function() 
{
    window.location.href = 'videos.html';
});
