'use strict'

const bigTime = document.querySelector('.big-time');

const alarm = {
    getTime:function(){
        let date = new Date;
        let gHours = date.getHours().toString().padStart(2, '0');
        let gMins = date.getMinutes().toString().padStart(2, '0');
        let gSecs = date.getSeconds().toString().padStart(2, '0');
        bigTime.innerHTML = `${gHours}:${gMins}:${gSecs}`;
    }
}

let getBigTime = setInterval(function(){
   alarm.getTime(); 
},1000)