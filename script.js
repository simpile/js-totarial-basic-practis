
// تمرین اول 
// function show(){
//     var name ="Nasim";
//     alert("Wellcom" + " " + name )
// }

// گرفتن 2 عدد از اینپوت و جمع آنها و نشان دادنش در میان تگهای ایندکس
// var sumHolder=document.getElementById("Sum")

// function Total(){
// var one = document.getElementById("Work").value;
// var two = document.getElementById("Donate").value;
// var tot = parseInt(one) + parseInt(two);
// sumHolder.innerHTML=tot;

// }
// تمرین سوم(قسمت 6مدائنی )

// function submit(){
//     var name= document.getElementById("Name").value;
//     document.getElementById("Hello").innerHTML="Good Morning"+" "+ name;


// }

// تمرین چهارم قسمت 7

// var person{
//     Name: document.getElementById("Name").value,
//     Family: document.getElementById("Family").value,
//     Email: document.getElementById("Email").value,

// }

// function submit(){
//     alert (person.Name)
// }

// تمرین 5-قسمت 8

// function showTime(){
//     document.getElementById('clock').innerHTML=Date()
// }

// function Boom(){
//     document.getElementById('magic').innerHTML="BOOM"
// }

// if else switch


// var date= new Date();
// var hour= date.getHours();
// alert(hour)

// if(hour>20){
//      alert("Good Night")
// }
// else if(hour>18)
// { alert("Good Evening")}
// else if( hour>15)
// {alert("Good Afternoon")}

// else{
//     alert("Good Morning")
// }
// var day= date.getDay()
// switch(day){
//     case 6:{alert("Shanbe"); break;}
//     default:{alert("Weekday")}
// }


// function submit(){
//     var input = document.getElementById("name").value;
//     var hello= document.getElementById("Hello")
   
//     hello.innerHTML="Hello"+" "+input;

// try{
//    if (input == "") throw "empty";
//   }
// catch(error){
// alert("Name can not be "+error);
// }
// finally{

// }
// }
// debugger
var person ={
  firstName: document.getElementById("name").value,
  lastName: document.getElementById("family").value,

  fullName: function(){
return this.firstName + " " + this.lastName;
  }
}



function time(){

var date= new Date();
var hour= date.getHours();
  if(hour<20){
    document.getElementById("goodTime").innerHTML="Good morning" + " " + person.firstName
  }
  else{
    document.getElementById("goodTime").innerHTML="Good Night" + " " + person.firstName

  }
}
function submit(){
  document.getElementById("hello").innerHTML="Welcom"+" "+person.fullName();
document.getElementById("holder").style.display="none";
time()
}