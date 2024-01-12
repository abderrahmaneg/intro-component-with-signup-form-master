
let btn = document.getElementById('claim');
let fname=document.getElementById('fname');
let lname=document.getElementById('lname');
let email=document.getElementById('email');
let pwd=document.getElementById('pwd');


btn.addEventListener('click', function(event){
     event.preventDefault();
     valideInputs();
     

});

function setError(element){
     let inputControl = element.parentElement;
     let errorDisplay = inputControl.querySelectorAll('.success');
    
     
     errorDisplay[0].style.display="block";
     errorDisplay[1].style.display="block";
     
}

function setSuccess(element){
     let inputControl = element.parentElement;
     let errorDisplay = inputControl.querySelectorAll('.success');
       
     errorDisplay[0].style.display="none";
     errorDisplay[1].style.display="none";
     
    
}
// validation email 
const isValidEmail = email => {
     const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     return re.test(String(email).toLowerCase());
   };
   

// validation function for input
function valideInputs() {
    let fnameValue = fname.value.trim();
    let lnameValue = lname.value.trim();
    let emailValue = email.value.trim();
    let pwdValue = pwd.value.trim();
    
    if (fnameValue == '' ){
     setError(fname);
    }
    else{
     setSuccess(fname);
    }
    if (lnameValue == ''){
     setError(lname);
    }else{
     setSuccess(lname);
    }
    if (!isValidEmail(emailValue)){
    setError(email);
    }else{
     setSuccess(email);
    }
    if (pwdValue == ''){
     setError(pwd);
    }else{
     setSuccess(pwd);
    }



}
