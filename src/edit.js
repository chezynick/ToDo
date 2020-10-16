
import {renderToDo,list,} from './index.js'
//edit function
function editToDo(){
    const toDos = document.getElementById('toDo');
    toDos.innerHTML = '';
    const newButton = document.getElementById('new')
    newButton.style.display='none'
    let a = list.findIndex(a => a.title == this.value)
    //access newForm box
    let newForm = document.getElementById('newForm')
    newForm.style.display ='flex';
    //add  text box for project name
    let projectText = document.getElementById('projectText')
    projectText.value = list[a].project
    //add text box for title of ToDo
    let toDoText = document.getElementById('toDoText')
    toDoText.value = list[a].title
    //get due date
    let dateText = document.getElementById('dateText')
    dateText.innerText =list[a].date
    //urgent tick box
    let urgentBox =document.getElementById('urgentBox')
    
    //add submit button and link to new function to create to do
    let submitButton = document.createElement('button')
    submitButton.setAttribute('id','submit')
    submitButton.innerText='Edit'
    newForm.appendChild(submitButton);
    submitButton.addEventListener('click', createNewItem)
    function createNewItem(){
        
        newButton.style.display='block'
        newForm.removeChild(submitButton)
        list[a].project = projectText.value;
        list[a].title = toDoText.value;
        list[a].date = dateText.value;
        if (urgentBox.checked){
             list[a].priority = true
        }else{
            list[a].priority = false
        }
        projectText.value = 'shopping';
        toDoText.value = '';
        newForm.style.display = 'none'
    renderToDo(list) 
    }
 }     
 export default editToDo 