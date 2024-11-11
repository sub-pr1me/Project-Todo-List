const app = (function () {
    const list = [];
    const getList = () => list;
    
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
    return { getList, addProject, removeProject, addTask, removeTask };
})();

export { app };