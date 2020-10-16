let list = localStorage.getItem('listy')
? JSON.parse(localStorage.getItem('listy'))
: [] ;

import Item from './item.js'
import filterButtons from './filter.js'
if(list.length === 0){
let list1 = new Item('jobby','get a job','2020/10/15',true)
let list2= new Item('jobby','write a CV','2020/11/18',false)
let list3= new Item('home','vacuum','2020/11/15',true)
}
render();

renderToDo(list)

//new ToDo
const button =document.getElementById('new');
button.addEventListener('click', addButton)

//add button function
function addButton(){
    let newForm = document.getElementById('newForm')
    newForm.style.display ='flex';
    const toDos = document.getElementById('toDo');
    toDos.innerHTML = '';
    //add  text box for project name
    let projectText = document.getElementById('projectText')
    //add text box for title of ToDo
    let toDoText = document.getElementById('toDoText')
    //get due date
    let dateText = document.getElementById('dateText')
    //urgent tick box
    let urgentBox =document.getElementById('urgentBox')
    //add submit button and link to new function to create to do
    let submitButton = document.createElement('button')
    submitButton.setAttribute('id','submit')
    submitButton.innerText='+Add'
    newForm.appendChild(submitButton);
    submitButton.addEventListener('click', createNewItem)
    function createNewItem(){
        let project = projectText.value;
        let title = toDoText.value;
        let dateFor = dateText.value;
        let priority;
        newForm.removeChild(submitButton)   
        if (urgentBox.checked){
             priority = true
        }else{
             priority = false
        }
        let newlist = new Item(project,title,dateFor,priority) 
        localStorage.clear('listy');
        localStorage.setItem('listy', JSON.stringify(list)); 
        projectText.value = 'shopping'
        toDoText.value = ''
        newForm.style.display ='none';  
        render();
        renderToDo(list)
    }
    };

//render project list
function render(){
const project = document.getElementById('projects');
project.innerHTML = '';
//map out new array with just project names
let projects = list.map(a => a.project);
//filter projects to just show different named projects
let projectResult = projects.filter((x,i,a) => a.indexOf(x) ==i )
//map results
projectResult.map(a => {
    let projList = document.createElement('div');
    projList.classList.add('projectList');
    projList.innerText = a
    project.appendChild(projList)
    return projectResult
  //event listener for projects
  
});

let projTabs = document.querySelectorAll('.projectList')
let projectsArr = Array.from(projTabs)
    projectsArr.forEach(a =>{
   a.addEventListener('click', filterProjects)
});
};

//render toDo LIst
function renderToDo(arr){
const toDos = document.getElementById('toDo');
toDos.innerHTML = '';
arr.forEach(a => {
    let newtoDo = document.createElement('div');
    let checkBox = document.createElement('img');
    let titleBox = document.createElement('titleBox')
    let editButton = document.createElement('img')
    editButton.classList.add('editButton')
    checkBox.classList.add('checkBox')
    newtoDo.classList.add('newItem')
    editButton.src = 'pen.png'
    checkBox.src = 'bin.png'
    editButton.value = a.title
    titleBox.innerText = a.title
    checkBox.value = a.title;
    newtoDo.appendChild(editButton)
    newtoDo.appendChild(titleBox)
    newtoDo.appendChild(checkBox)
    toDos.appendChild(newtoDo)

   
});
 const editButton = document.querySelectorAll('.editButton');
    let editArr =Array.from(editButton)
    editArr.forEach(a => {
        a.addEventListener('click', editToDo)
})
//event listener for checkbox and delete button

    const deleteBox = document.querySelectorAll('.checkBox');
    let deleteArr = Array.from(deleteBox)
    deleteArr.forEach(a => {
        a.addEventListener('click', deleteItem)
        
    })
};
export {
    list,
    renderToDo,
    }
import deleteItem from './delete.js'
import editToDo from './edit.js'

    function filterProjects(){
       
        let results = list.filter(a => a.project === this.innerText)
    renderToDo(results)    
    };
filterButtons();
