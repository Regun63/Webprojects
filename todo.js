
let todoList=[];
let todoDate=[];
addTasks();
function addTodo(){
    let todoElementValue= document.querySelector('#todoInput').value;
    let todoDateValue=document.querySelector('#datepicker').value;
    todoList.push(todoElementValue);
    todoDate.push(todoDateValue);
       document.querySelector('#todoInput').value = '';
    document.querySelector('#datepicker').value = '';
    addTasks();
}

function addTasks(){
    let todoContainer=document.querySelector('#todo-container');
    let newHtml='';
    for(let i=0;i<todoList.length;i++){
       newHtml+= `<div  class="p-2"><span  style="display:inline-block;" class=" text-secondary fs-4 w-25 border border-0 border-secondary-subtle rounded"> ${todoList[i]}</span>
       <span style=" inline-block;" class="w-50 fs-5 border border-0 fw-bold text-primary-emphasis"> ${todoDate[i]}</span>
        <button class="btn btn-danger ml-3" type="button" onclick="todoList.splice(${i},1);todoDate.splice(${i},1); addTasks();" >Delete</button>
        </div>`
    }
    todoContainer.innerHTML=newHtml;
}