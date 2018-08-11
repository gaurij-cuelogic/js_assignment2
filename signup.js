function signup()
{ //alert("in signup");
  //email
   var email= document.getElementById("email").value; 
   //first name  
   var firstname = document.getElementById("first").value;
   //last name
   var lastname = document.getElementById("last").value;
   //password
   var password = document.getElementById("pwd").value;
   //gender
   if (document.getElementById('m').checked)
   {
     var gender = document.getElementById('m').value;
   }
   else
   {
      var gender = document.getElementById('f').value;
   }
   //address
   var address = document.getElementById("addresstxt").value;
  
   //img
   var file = document.getElementById("pic").files[0];
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function ()
   {
   var path= reader.result;
   localStorage.setItem("img", path);
   
    };
    reader.onerror = function (error)
   {
      console.log('Error: ', error);
   };
  
  
   if(validation(email,firstname,lastname,password,address)==true)
    {
      storeindb(email,firstname,lastname,password,gender,address);
      window.location.href = "signin.html";
     }
    
}