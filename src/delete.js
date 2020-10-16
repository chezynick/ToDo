 import { list } from './index.js'
 import {renderToDo} from './index.js'
function deleteItem(){
    list = list.filter(a =>a.title !== this.value)
    localStorage.clear('listy');
    localStorage.setItem('listy', JSON.stringify(list)); 
    renderToDo(list)
    }
   
    export default deleteItem  
