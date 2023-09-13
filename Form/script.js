const handleSubmit=()=>{
    let name=document.getElementById("name").value;
    let surname=document.getElementById("surname").value;
    let email=document.getElementById("email").value;
    let pass1=document.getElementById("password").value;
    let pass2=document.getElementById("password2").value;
    if (name.charCodeAt(0)<65 || name.charCodeAt(0)>90){
        document.getElementById("name").value="";
        document.getElementById("name").placeholder="Name not valid, retry";
        document.getElementById("email").value="";
        document.getElementById("surname").value="";
        name="";
        email="";
        surname="";
    }
    if (surname.charCodeAt(0)<65 || surname.charCodeAt(0)>90){
        document.getElementById("surname").value="";
        document.getElementById("surname").placeholder="Surname not valid, retry";
        document.getElementById("email").value="";
        document.getElementById("name").value="";
    }
    emailArr=email.split("@");
    if(emailArr.length<2 || !emailArr[0].includes(".") || !emailArr[1].includes(".")){
        document.getElementById("email").value="";
        document.getElementById("email").placeholder="Email not valid, retry";
        document.getElementById("password").value="";
        document.getElementById("password2").value="";
        email="";
        pass1="";
        pass2="";
    }
    if(!(/\W|_/.test(pass1) && /\d/.test(pass1) && /[A-Z]/.test(pass1))){
        document.getElementById("password").value="";
        document.getElementById("password").placeholder="Wrong password, retry";
        document.getElementById("password2").value="";
        pass1="";
        pass2="";
    }
    if(pass1!=pass2){
        console.log(pass1)
        console.log(pass2)
        document.getElementById("password").value="";
        document.getElementById("password").placeholder="Verification error, retry";
        document.getElementById("password2").value="";
        document.getElementById("password2").placeholder="Passwords not equal, retry";
        pass1="";
        pass2="";
    }
    console.log((name!="" && surname!="" && email!="" && pass1!="" & pass2!="")==1)
    console.log(name)
    console.log(surname)
    console.log(email)
    console.log(pass1)
    console.log(pass1)
    if((name!="" && surname!="" && email!="" && pass1!="" & pass2!="")==1){
        console.log("done")
        document.getElementById("container").style.visibility='collapse';
        document.getElementById("title").style.visibility="collapse";
        document.getElementById("instruction").style.visibility="collapse";
        document.getElementById("thanks").style.visibility="visible";
    }
}
//(.!?-$)