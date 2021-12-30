const person = [{firstName:"John", lastName:"Doe", age:46}, {firstName:"sam", lastName:"curian", age:26}, {firstName:"Jn", lastName:"rai", age:34}, {firstName:"Jn", lastName:"shukla", age:86}, {firstName:"Jn", lastName:"singh", age:55}, {firstName:"irnv", lastName:"mohit", age:65}];


var n = Math.floor(Math.random() * 5);
document.querySelector(".box1").innerHTML = person[n].lastName;
document.querySelector('.box1').value = person[n].age;
var n = Math.floor(Math.random() * 5);
document.querySelector(".box2").innerHTML = person[n].lastName;
document.querySelector('.box2').value = person[n].age;
var n = Math.floor(Math.random() * 5);
document.querySelector(".box3").innerHTML = person[n].lastName;
document.querySelector('.box3').value = person[n].age;
var n = Math.floor(Math.random() * 5);
document.querySelector(".box4").innerHTML = person[n].lastName;
document.querySelector('.box4').value = person[n].age;



const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");


const  ys =document.getElementsByClassName("y");
var mainBox ;
var valueBox;

box1.addEventListener('dragstart', function() {
    mainBox = box1;
    valueBox = box1.value;
});
box2.addEventListener('dragstart', function() {
    mainBox = box2;
    valueBox = box2.value;
});

box3.addEventListener('dragstart', function() {
    mainBox = box3;
    valueBox = box3.value;
});
box4.addEventListener('dragstart', function() {
    mainBox = box4;
    valueBox = box4.value;
});




for (y of ys){
    y.addEventListener('dragover', (e)=> {
         e.preventDefault();
        console.log('Dragover has been done');
    });
    y.addEventListener('dragenter', ()=> {
        console.log('Dragenter has been done');
    });
    y.addEventListener('dragleave', ()=> {
        console.log('Dragleave has been done');
    });
    y.addEventListener('drop', (e)=> {
        console.log('Drop has been done');
        e.target.append(valueBox);
        // e.target.append(mainBox);
    });
}

var i ;

for(i=0;i<3;i++){
     document.getElementById("camp").innerHTML= ys[i];

}





