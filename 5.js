// console.log("hello world");

var input = document.querySelector("#input");
var ol = document.querySelector("#order-list");

var arr = [];

function addTodo() {
    if(input.value.trim() === "") {
        alert("Please Enter a List to Add ");
    }else { 
        arr.push(input.value)
        renderTodo()
    }
}

function deleteTodo(index) {
    arr.splice(index , 1)
    renderTodo()
}
function editTodo(index){
    var editValue = prompt("Enter New List to Add")
    arr[index] = editValue
    // console.log(index , editValue);
    if(editValue.trim() === ""){
        alert ("Please Enter a List to Edit")
    }else{ 
        renderTodo()
    }    
}


function renderTodo(){
    ol.innerHTML = '';
    for(var i = 0; i < arr.length; i++){
        ol.innerHTML += `<li>${arr[i]} 
        <button onclick="editTodo(${i})">Edit</button> 
        <button onclick="deleteTodo(${i})">Delete</button> 
        </li>`
    }
    input.value = ""
    // console.log(arr);
}