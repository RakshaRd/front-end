let todoList = [
    {
        item:'by milk' , 
        dueDate:"4/5/2023"
    } ,
    {
        item:'go to college' , 
        dueDate:"4/5/2023"
    }
];
displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = dateElement.Value;
    let todoDate = dateElement.Value;
    todoList.push({item : todoItem , dueDate : todoDate});
   inputElement.Value = '';
   dateElement.Value = '';

   displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml = ' ';
    for (let i = 0; i < todoList.length; i++){
        let {item, dueDate} = todoList[i];
        newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete' onclick="todoList.splice(${i}, 1); displayItems();">Delete</button>
        `;
    }
    containerElement.innerHTML = newHtml;
    
}