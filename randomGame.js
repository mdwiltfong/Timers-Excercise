const { clearInterval } = require("timers");

function randomGame(){
    let i=0;
let x=setInterval(()=>{
let num = Math.round(Math.random()*100);
i++
if(num<75){
    i++;
}else{
i++;
console.log(i)
console.log(num)
clearInterval(x)
}
},1000)

}

randomGame();