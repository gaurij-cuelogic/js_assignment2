function storeindb(email,firstname,lastname,password,gender,address)
{ alert("in store");
var get_index =localStorage.getItem("unique_index");
  image = localStorage.getItem("img");
  var person = {
    p_email : email,
    p_firstname : firstname,
    p_lastname : lastname,
    p_password : password,
    p_gender : gender,
    p_address : address,
    p_img : image,
    p_todo :[]};


   var DataArr = ArrayCheck();     
  DataArr.push(person);
  
  
   myJSON = JSON.stringify(DataArr);
   localStorage.setItem("testJSON",myJSON); 
}

function ArrayCheck()
{
  text = localStorage.getItem("testJSON");
  obj= JSON.parse(text);
  if(obj == undefined)
  {
   var data =new Array();
   return data;
  }
  else
  {
    return obj;
  }
}
