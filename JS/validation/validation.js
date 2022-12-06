

function clearErrors(){
    error = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML = "";
    }
}
function seteerror(id, error){
    // sets error inside tag of id
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}
function validateForm(){
  var returnval = true;

  //   perform validation and if validation fails, set the value of returnval to false
   var name = document.forms['myForm']["fname"].value;
   if (name.length<5){
    seteerror("name", "lenth of name is too short");
    returnval = false;
   }
   if (name.length == 0){
    seteerror("name", "lenth of name cannot be zero!");
    returnval = false;
   }
   var email = document.forms['myForm']["femail"].value;
   if (email.length>15){
    seteerror("email", "emil length is too long!");
    returnval = false;
   }
   var phone = document.forms['myForm']["fphone"].value;
   if (phone.length!=10){
    seteerror("phone", "phone numbar should be of 10 digits!");
    returnval = false;
   }
  
   var password = document.forms['myForm']["fpass"].value;
   if (password.length < 6){
    seteerror("pass", "passowrd should be atleast 6 character long!");
    returnval = false;
   }
   var cpassword = document.forms['myForm']["fcpass"].value;
   if (cpassword != password){
    seteerror("cpass", "passowrd and confirm password match!");
    returnval = false;
   }
  




   return returnval;
}