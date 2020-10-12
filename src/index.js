console.log('hello world');
function createToDo(project,title){
    this.project = project;
    this.title = title;
};
let toDoList = [];
let new1 = new createToDo('shopping','bananas');
toDoList.push(new1)
let project = [];
project.push('shopping','work','personal');
renderProjects(); 


//add event listener for addProject button
const addProject = document.getElementById('addProject');
addProject.addEventListener('click', projectAdd)
function projectAdd () {
    let projectName = prompt('what would you like to call your new list?')
    project.push(projectName); 
    renderProjects();  
}
function renderProjects () {
        const listProject = document.getElementById('projects');
    listProject.innerHTML = '';
for(let i=0;i<project.length;i++){

    const newItem = document.createElement('div');
    newItem.classList.add('projectList')
    newItem.innerText = project[i]
    listProject.appendChild(newItem);

    button();
    items();
}
};

//add event listener for to do list button
function button() {
    let newToDo = document.getElementById('addToDo');
    newToDo.addEventListener('click', addToDo)
};
function addToDo(){
    let a = prompt('which project');
    let b = prompt('what do you want to do?')
    let newToDo = new createToDo(a,b)
    toDoList.push(newToDo)  
    items();
}

//event listener for projects to display to do list
function items  ()  {
    const container = document.getElementById('toDo');

    const projects = document.querySelectorAll('.projectList')
    for(let i=0;i<projects.length;i++)
    projects[i].addEventListener('click',() => {
        let result = toDoList.filter(a => a.project === project[i])
        container.innerHTML = '';
    result.forEach(a => {
        let newItem = document.createElement('div');
        newItem.classList.add('newItem');
        newItem.innerText= a.title;
        container.appendChild(newItem);
    })
    }
)
}
