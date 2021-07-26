


function countDown(num){

let x=setInterval(()=>{
  console.log(--num)
},1000)

setTimeout(()=>{clearInterval(x)
console.log(`DONE!`)
},num*1000)
 
  
}



