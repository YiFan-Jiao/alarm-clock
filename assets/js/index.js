'use strict'

const bigTime = document.querySelector('.big-time');
const inPutTime = document.querySelector('.input-time');
const setButton = document.querySelector('.alarm-button');
const alarmTime = document.querySelector('.alarm-time');
const start = new Audio('./assets/audio/Love is like fire.mp3');
start.type = 'audio/mp3';

const alarm = {
    getTime:function(){
        const date = new Date;
        const gHours = date.getHours().toString().padStart(2, '0');
        const gMins = date.getMinutes().toString().padStart(2, '0');
        const gSecs = date.getSeconds().toString().padStart(2, '0');
        return `${gHours}:${gMins}:${gSecs}`;
    }
}

const getBigTime = setInterval(function(){
    bigTime.innerHTML = alarm.getTime(); 
},1000)

setButton.addEventListener('click', () => {
    if(inPutTime.value.trim() <= alarm.getTime().substring(0,5)) {
        alarmTime.innerHTML = `<i class="fa-solid fa-bell"></i>Please enter the correct time`;
    } else {
        alarmTime.innerHTML = `<i class="fa-solid fa-bell"></i>${inPutTime.value.trim()}`;
        setInterval(function(){
            if (inPutTime.value.trim() === alarm.getTime().substring(0,5)) {
                alarmTime.style.color = "#FC0119";
                start.play();
            }
            console.log(1)
        },1000)
    }
});