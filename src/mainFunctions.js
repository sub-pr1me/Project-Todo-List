const app = (function () {
    const list = [];
    const getList = () => list.flat();
    
    const addProject = (projectName) => {
        list.push([projectName]);
    };

    const removeProject = (projectIndex) => {
        list.splice(projectIndex, 1)
    };

    const addTask = (projectIndex, title) => {
        const Task = (title) => {
            return { title };
        };        
        list[projectIndex].push(Task(title));
    };

    const removeTask = (projectIndex, taskIndex) => {
        list[projectIndex].splice(taskIndex, 1);
    };

    const showDialog = (dialog, form) => {
        form.reset();
        dialog.showModal();
    };

    const closeDialog = (dialog) => {
        dialog.close()
    };

    const formSubmission = (form) => {
        const formData = Object.fromEntries(new FormData(form).entries());
        return formData;
    };

    return { getList, addProject, removeProject, addTask, removeTask,
        showDialog, closeDialog, formSubmission };
})();

export { app }