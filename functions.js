function popup(){
alert("hello");//first function
}
const first_func=document.getElementById('first_func');
first_func.addEventListener('click',popup());
//popup();
//popup();//function call
function age(age=18){
    //if()
    alert(age);//default function
}
const default_func=document.getElementById('age').value;
age(default_func);
//age();//function call
//Anonymous functions and arrow functions
//But you can also create a function that doesn't have a name:Anonymous functions
greetings=(function(){
    console.log("hello");
})
//greetings();
//function logKey(hii) {
  //  alert(`You pressed "${hii.key}".`);
 // }
  const textBox=document.getElementById('any');
  
  textBox.addEventListener('keydown',(hii)=> {alert(`You pressed "${hii.key}".`);});

(function(hello){
    console.log(hai);
})

