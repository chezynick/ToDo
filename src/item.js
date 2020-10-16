import {list} from './index.js'
//new item constructor
function Item (project,title,date,priority){
    this.project=project;
    this.title=title;
    this.date =date;
    this.priority=priority;
    list.push(this)
    
}
export default Item