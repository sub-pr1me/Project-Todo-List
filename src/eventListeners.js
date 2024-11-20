import { app } from "./mainFunctions.js";
import { dom } from "./DOM.js";

const events = () => {
    dom.pAdd.addEventListener('click', () => {
        app.showDialog(dom.pDialog, dom.pForm);
    });
    
    dom.pCancel.addEventListener('click', () => {
        app.closeDialog(dom.pDialog);
    });
    
    dom.pSubmit.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        e.preventDefault();
        app.addProject(app.formSubmission(dom.pForm));
        app.closeDialog(dom.pDialog);
        console.log(app.getList());
    });
};

export { events }