const func = (function () {
    const list = [];    
    const getList = () => list;
    
    const getProjectFormData = (form) => {
        const formData = Object.fromEntries(new FormData(form).entries());
        formData.p_status = 'In progress';
        formData.p_checklist = [];
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
    
    return { list, getList, getProjectFormData, getTaskFormData,
        changeStatus, addProject, removeProject, addTask };
})();

export { func }