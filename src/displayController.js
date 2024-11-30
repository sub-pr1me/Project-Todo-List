import { func } from "./mainFunctions.js";
import { dom } from "./DOM.js";

const display = () => {
    dom.table.textContent = '';
    const list = func.getList();
    for (let i = 0; i < func.getList().length; i++) {
        
        if ('p_title' in list[i]) {
            
            dom.newProjectWindow(table, i, list[i].p_title, list[i].p_due, 
            list[i].p_priority, list[i].p_status, list[i].p_descr, list[i].p_checklist);
            
        };
    };
    
    console.log(func.getList());
};

export { display }