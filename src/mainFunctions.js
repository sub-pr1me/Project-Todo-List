const func = (function () {
    let list = [];    
    const getList = () => list;
    
    const getProjectFormData = (form) => {
        const formData = Object.fromEntries(new FormData(form).entries());
        formData.p_status = 'In progress';
        formData.p_checklist = [];
        formData.p_collapsed = 0;
        return formData;
    };

    function changeStatus(index, value) {
        list[index].p_status = value;
    };

    const addProject = (formDataObject) => {
        list.push(formDataObject);
    };

    const removeProject = (projectIndex) => {
        list.splice(projectIndex, 1);
    };

    const getTaskFormData = (form) => {
        let formData = Object.fromEntries(new FormData(form).entries());
        return formData;
    };

    const addTask = (index, data) => {
        list[index].p_checklist.push(data);
    };

    const saveDescription = (description, index) => {
        list[index].p_description = description;
    };

    function createIndicator() {
        let indicator = 1;
        localStorage.setItem('indicator', JSON.stringify(indicator));
    };

    function previouslyRun() {
        let check = JSON.parse(localStorage.getItem('indicator'));
        return check;
    };

    const defaultTask = () => {
        const defaultProject = {};
        const fns = require('date-fns')
        const dateFormatted = fns.format(fns.parseISO('2024-12-25'), 'yyyy-MM-dd')
        defaultProject.p_title = 'Christmas dinner'
        defaultProject.p_due = dateFormatted
        defaultProject.p_priority = 'High'
        defaultProject.p_status = 'In progress'
        defaultProject.p_descr = 'Yearly family and friends gathering.'
        defaultProject.p_checklist = [{t_title: 'Buy groceries', t_due: '2024-12-24'}, {t_title: 'Rent Santa Claus costume', t_due: '2024-12-25'}]
        defaultProject.p_collapsed = 0;
        list.push(defaultProject);
    };

    const initApp = () => {
        if (getList().length < 1) {
            for (let i = 0; i < localStorage.length - 1; i++) {
                let item = JSON.parse(localStorage.getItem(`appData${i}`)); 
                list.push(item);
            };
        };
    };

    return { list, getList, getProjectFormData, getTaskFormData,
        changeStatus, addProject, removeProject, addTask, initApp, 
        defaultTask, previouslyRun, createIndicator, saveDescription };
})();

export { func }