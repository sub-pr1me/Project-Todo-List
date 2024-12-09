import { func } from "./mainFunctions.js";
import { dom } from "./DOM.js";

const display = () => {
  dom.table.textContent = "";
  localStorage.clear();
  func.createIndicator();

  for (let i = 0; i < func.list.length; i++) {
    if ("p_title" in func.list[i]) {
      dom.newProjectWindow(
        dom.table,
        i,
        func.list[i].p_title,
        func.list[i].p_due,
        func.list[i].p_priority,
        func.list[i].p_status,
        func.list[i].p_descr,
        func.list[i].p_checklist,
        func.list[i].p_collapsed,
      );
    }
    localStorage.setItem(
      `appData${localStorage.length - 1}`,
      JSON.stringify(func.list[i]),
    );
  }
};

export { display };
