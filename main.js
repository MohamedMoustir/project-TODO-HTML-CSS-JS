
let li =document.querySelector(".nav ul")
let contine = document.querySelector('.contine') ;
let section = document.querySelector('section');
let add = document.querySelectorAll('.add');
  function OpenMun() {
li.style.display="block";
contine.style.filter="blur(5px)";
  }
function CloseMun() {
  li.style.display="none";
contine.style.filter="blur(0)"

}

function Addbook(target){
  add.forEach( (e)=>{
       target.classList="fa-solid fa-check add"
     
  });
}
let contor_shoo = document.querySelector(".contor-shoo");

function plusfun() {
  let temp=2
  for (let i = 0; i < temp; i++) {
  contor_shoo.innerHTML=i;
  }
}
// Register js
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password1 =document.querySelector('#password1')
let password2 =document.querySelector('#password2')
// login
let fakename = document.querySelector('#input-text');
let fakemail = document.querySelector('#input-pass');

function setDate() {
if(password1.value !==password2.value || name.value==""||email.value==""){
  document.forms[0].action="Rojester.html"
  alert("hhh")
  
}else{
  localStorage.setItem('name',name.value)
localStorage.setItem('email',email.value)
localStorage.setItem('password1',password1.value)
localStorage.setItem('password2',password2.value)

}
}

function getDate() {
 localStorage.setItem('fakename',fakename.value)
 localStorage.setItem('fakemail',fakemail.value)
// verfye local storge
  if ( localStorage.getItem('fakename')== localStorage.getItem('name') || localStorage.getItem('fakemail')==localStorage.getItem('password1')) {
    console.log('yessss')
  }else{
    document.forms[0].action="login.html"
  }
}
// shooping
function shooping() {
  window.location.href="/shooping.html"
  
}