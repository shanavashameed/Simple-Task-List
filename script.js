let taskList = []

function addTask(){
    const Input = document.getElementById("taskInput").value;
    const task = taskInput.value; 
    if(task!==''){
        taskList.push(task)
        taskInput.value='';
        updateTaskList();
    }
}
function updateTaskList(){
    const taskListUI=document.getElementById("taskList");
    taskListUI.innerHTML='';
    taskList.forEach((task,index)=>{
        const listItem = document.createElement("li");
        listItem.textContent= `${index +1}. ${task}`;
        taskListUI.appendChild(listItem);
    })

}

function removeTask(){
    taskList.pop()
    updateTaskList()
}  