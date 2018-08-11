function store(email,firstname,lastname,password,gender,address,todo)
{ alert("in store");
var get_index =localStorage.getItem("unique_index");
    //var get_index =localStorage.getItem("unique_index");
    alert(get_index);
    image = localStorage.getItem("img");
    var person = {
    p_email : email,
    p_firstname : firstname,
    p_lastname : lastname,
    p_password : password,
    p_gender : gender,
    p_address : address,
    p_img : image,
    p_todo :todo};


    var DataArr = ArrayCheck();  
    DataArr[get_index] = person;
    myJSON = JSON.stringify(DataArr);
    localStorage.setItem("testJSON",myJSON); 
    alert("profile updated succesfully");
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
