function signin()
{
  x = localStorage.getItem("testJSON");
  obj= JSON.parse(x);
  signin_email = document.getElementById("email_sign").value;
  signin_pwd = document.getElementById("pwd_sign").value;
  var index = 0;
  for(var i = 0; i<obj.length ;i++)
  {
    if(signin_email == obj[i].p_email)
     {
       if(signin_pwd == obj[i].p_password)
       {
           alert("login successful");
           index=i;
          

       }
       else
       {
            alert("password wrong");
       }
       localStorage.setItem("unique_index",index);
       window.location.href = "dashboard.html";
   }

 }

    
 //  alert(index);
//profile(index);

}