// alert("1234");
let inputField = document.getElementById("todoinput");
let toDoContainer = document.getElementById("toDoContainer");

function addTodo(){
    console.log("to do added", inputField.value);
    let item = document.createElement('p');
    item.innerText = inputField.value;
    toDoContainer.appendChild(item);
    inputField.value = ' ';

    item.addEventListener('click', function(e){
        item.style.textDecoration = "line-through"
    })
};

