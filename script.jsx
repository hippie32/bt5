function showhello(){
    alert("ok")
}
showhello()

let x= 100 + 200;
console.log(x);
let arrnumber=[1,3,5,7,9,11,13,15,17,19];
console.log("lenght"+''+ arrnumber.length);
console.log("arrnumber[6]"+''+arrnumber[6]);
arrnumber.splice(5, 1);
console.log(arrnumber)
let arrnumber1= arrnumber.map(x=>x*3);
console.log(arrnumber1)