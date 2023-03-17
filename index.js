function getTodos() {
    var todos = new Array;
    var todos_str = localStorage.getItem("todo");
 if (todos_str !== null){
    todos= JSON.parse(todos_str)
 }
 return todos;
}



function add(){
    var task = document.getElementById("task").value;
    var todos = getTodos();
    todos.push(task);
    localStorage.setItem("todo", JSON.stringify(todos));
    show();
    return false;
}
function clearDefault(a) {
    if (a.defaultValue ==a.value){a,value=''}
    
}
function remove () {
    var id = this.getAttribute("id");
    var todos = getTodos();
    todos.splice(id, 1);
    localStorage.setItem("todo", JSON.stringify(todos));
    show();
    return false;
}

function show (){
    var todos = getTodos();
    var html = '<ul>';
   for (i=0; i<todos.length; i++ ){
    html += '<li>' + todos[i] +'<button class ="remove" id="' + i + '">Delete</button></li>';
   };
   html += '</ul>'
   document.getElementById('todos').innerHTML = html;
   var buttons = document.getElementsByClassName('remove');
   for (var i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', remove);
   };
}
document.getElementById('add').addEventListener('click', add);
show();