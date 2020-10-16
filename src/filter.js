import {renderToDo,list,} from './index.js'
//event listener for filter buttons
function filterButtons (){
    let filters = document.querySelectorAll('.filterBoxes')
    for(let i=0;i<filters.length;i++){
        filters[i].addEventListener('click', filterFunc)
        function filterFunc(){
            if(filters[i].innerText === 'View All'){
                renderToDo(list)
            } else if (filters[i].innerText === 'Urgent'){
                let urgentFilter = list.filter(a => a.priority === true)
                renderToDo(urgentFilter);
      } else if (filters[i].innerText === 'Today'){
    let a = new Date();
    let y = a.getFullYear();
    let m = a.getMonth()
    let d = a.getDate();
    let realMonth = m + 1;
    let currentDate = y + '/' + realMonth + '/' + d
            let todayFilter = list.filter(a => a.date === currentDate)
            renderToDo(todayFilter);
      }  
      };          
      };
      };
      export default filterButtons