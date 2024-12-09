import { func } from "./mainFunctions.js";
import { dom } from "./DOM.js";
import { display } from "./displayController.js";

const events = () => {
  dom.addProjectBtn.addEventListener("click", () => {
    dom.pForm.reset();
    dom.pDialog.showModal();
  });

  dom.pCancel.addEventListener("click", () => {
    dom.pDialog.close();
  });

  dom.pForm.addEventListener("submit", (e) => {
    e.stopImmediatePropagation();
    e.preventDefault();
    func.addProject(func.getProjectFormData(dom.pForm));
    dom.pDialog.close();
    display();
  });
};

export { events };
