document.addEventListener("DOMContentLoaded",()=>{

const nameInpute=document.getElementById("name");
const email=document.getElementById("email");
const password=document.getElementById("password");
const errorMassage=document.getElementById("fullnameerror");
const emailerror=document.getElementById("emailerror");
const passworderror=document.getElementById("passworderror");
const form=document.getElementById("form");

 form.addEventListener('submit', (e)=>{
let hasError=false;
//full name validation
if(nameInpute.value.trim() ===""){
    e.preventDefault();   
    errorMassage.innerHTML='Full Name is required!!';
    hasError=true;
}else {
    errorMassage.innerHTML="" ;
}




//password 

 if(password.value.trim()===''){
    e.preventDefault()
    passworderror.innerHTML='password is required!!'
    hasError=true
 }else if(password.value.length < 8){
    e.preventDefault()
    passworderror.innerHTML='password must be more than 8 character!!'
    hasError=true;
 }else if (password.value.length > 20){
    e.preventDefault()
    passworderror.innerHTML='password must be less than 20 character!!'
    hasError=true;
 }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\w_]).{8,20}$/.test(password.value)){
    e.preventDefault();
passworderror.innerHTML='password must be includ uppercase,lowercase,number,and special character !!';
hasError=true;
 }else{
    passworderror.innerHTML='';
 }

//emailS
if(email.value.trim() ===''){
    e.preventDefault()
    emailerror.innerHTML='Email is required!!'
    hasError=true;
}else if( !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
    e.preventDefault()
    emailerror.innerHTML='invalif email form . must be like: example user@gmail.com!!'
    hasError=true;
}else{emailerror.innerHTML=''

}
 if (!hasError){
    alert('successfully submitted');
    passworderror.innerHTML='';
    passworderror.style.border=''; }  
})
})