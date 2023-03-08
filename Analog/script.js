

function callback() {
    var date = new Date();
    var minute = date.getMinutes();
 var angle = (minute / 60) * 360;
    var second = date.getSeconds();
    console.log(second); 
   var secangle = (second * 6);
    var hours = date.getHours();
    
var minutehand = document.querySelector('.minutehand');
var sechand = document.querySelector('.secondhand');
    minutehand.style.transform = `rotate(${angle}deg)`;
    console.log(secangle);
sechand.style.transform = `rotate(${secangle}deg)`;
}

setInterval(callback, 1000);


