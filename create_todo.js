function create_todo()
{  alert("in create_todo");
    var get_index = localStorage.getItem("unique_index");
    var data = localStorage.getItem("testJSON"); 
    var obj_data= JSON.parse(data);
    if (document.getElementById('is_public').checked)
    {
      var todo_ispublic =document.getElementById('y_public').value;
    }
    else
    {
       var todo_ispublic = document.getElementById('n_public').value;
    }

   /* var file = document.getElementById("pic").files[0];
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
    };*/
   
    obj_todo = {
    todo_name:document.getElementById("todo_name").value,
    todo_desc:document.getElementById("todo_desc").value,
    todo_type:document.getElementById("todo_type").value,
    todo_duedate:document.getElementById("todo_date").value,
    todo_isreminder : document.getElementById("reminder_type").value,
    todo_reminderdate:document.getElementById("reminder_date").value,
     todo_ispublic : todo_ispublic,
     //todo_attatchments : file 
     todo_del : false
    }
    
    //alert(x);
    obj_data[get_index].p_todo.push(obj_todo);
    myJSON = JSON.stringify(obj_data);
   localStorage.setItem("testJSON",myJSON); 
    
}


