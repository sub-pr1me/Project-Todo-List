import { func } from "./mainFunctions.js";
import { display } from "./displayController.js";

const dom = (function () {
  let index = "";

  const addProjectBtn = document.getElementById("addProjectBtn");
  const pDialog = document.getElementById("p_dialog");
  const pForm = document.getElementById("p_form");
  const pCancel = document.querySelector(".p_cancel");
  const pSubmit = document.querySelector(".p_submit");
  const tDialog = document.getElementById("t_dialog");
  const tForm = document.getElementById("t_form");
  const tCancel = document.querySelector(".t_cancel");
  const table = document.getElementById("table");

  const newProjectWindow = (
    parent,
    projectIndex,
    title,
    due,
    priority,
    status,
    description,
    checklist,
  ) => {
    const pContainer = document.createElement("div");
    const pHeader = document.createElement("div");
    const pBody = document.createElement("div");
    const pTitle = document.createElement("div");
    const pDue = document.createElement("div");
    const pDueLabel = document.createElement("div");
    const pDueDate = document.createElement("div");
    const pToggle = document.createElement("div");
    const pPriority = document.createElement("div");
    const pPriorityLabel = document.createElement("div");
    const pPriorityLevels = document.createElement("div");
    const Low = document.createElement("button");
    const Medium = document.createElement("button");
    const High = document.createElement("button");
    const pStatus = document.createElement("div");
    const pStatusLabel = document.createElement("div");
    const pStatusValue = document.createElement("div");
    const pDescription = document.createElement("div");
    const pDescriptionLabel = document.createElement("div");
    const pDescriptionField = document.createElement("textarea");
    const pChecklist = document.createElement("div");
    const pChecklistLabel = document.createElement("div");
    const pBtns = document.createElement("div");
    const pAddTask = document.createElement("button");
    const pCompleteProject = document.createElement("button");
    const pDeleteProject = document.createElement("button");

    pContainer.classList.add("project", "column");
    pHeader.classList.add("text", "row", "left", "bold", "pHeader");
    pBody.classList.add("pBody", "column");
    pTitle.classList.add("text", "row", "center", "bold", "bigger", "pTitle");
    pDue.classList.add("row", "left", "due");
    pDueLabel.classList.add("text", "bold");
    pDueDate.classList.add("text", "smaller");
    pToggle.classList.add("text", "smaller", "pToggle");
    pPriority.classList.add("row", "left", "priority", "collapsible");
    pPriorityLabel.classList.add("text", "bold");
    pPriorityLevels.classList.add("row");
    Low.classList.add("text", "smaller", "Low", "pri");
    Medium.classList.add("text", "smaller", "Medium", "pri");
    High.classList.add("text", "smaller", "High", "pri");
    pStatus.classList.add("row", "left", "pStatus", "collapsible");
    pStatusLabel.classList.add("text", "bold");
    pStatusValue.classList.add("text", "smaller", "status");
    pDescription.classList.add("column", "left", "collapsible");
    pDescriptionLabel.classList.add("text", "bold");
    pDescriptionField.classList.add("border", "italic");
    pDescriptionField.setAttribute(
      "oninput",
      'this.style.height = "";this.style.height = this.scrollHeight + "px"',
    );
    pDescriptionField.setAttribute("name", "description");
    pChecklist.classList.add("column", "center", "collapsible");
    pChecklistLabel.classList.add("text", "bold", "center");
    pBtns.classList.add("row", "center", "wrap", "collapsible");
    pAddTask.classList.add("btn", "add");
    pCompleteProject.classList.add("btn", "compl");
    pDeleteProject.classList.add("btn", "del");

    pHeader.textContent = "Project";
    pTitle.textContent = `- ${title} -`;
    pDueLabel.textContent = "Due:";
    pDueDate.textContent = `${due}`;
    pToggle.textContent = "Collapse";
    pPriorityLabel.textContent = "Priority:";
    Low.textContent = "Low";
    Medium.textContent = "Medium";
    High.textContent = "High";
    pStatusLabel.textContent = "Status:";
    pStatusValue.textContent = `${status}`;
    pDescriptionLabel.textContent = "Description:";
    pDescriptionField.textContent = `${description}`;
    pAddTask.textContent = "Add task";
    pCompleteProject.textContent = "Finish Project";
    pDeleteProject.textContent = "Delete Project";

    parent.appendChild(pContainer);
    pContainer.appendChild(pHeader);
    pContainer.appendChild(pBody);
    pBody.appendChild(pTitle);
    pBody.appendChild(pDue);
    pBody.appendChild(pPriority);
    pBody.appendChild(pStatus);
    pBody.appendChild(pDescription);
    pBody.appendChild(pChecklist);
    pBody.appendChild(pBtns);
    pDue.appendChild(pDueLabel);
    pDue.appendChild(pDueDate);
    pDue.appendChild(pToggle);
    pPriority.appendChild(pPriorityLabel);
    pPriority.appendChild(pPriorityLevels);
    pPriorityLevels.appendChild(Low);
    pPriorityLevels.appendChild(Medium);
    pPriorityLevels.appendChild(High);
    pStatus.appendChild(pStatusLabel);
    pStatus.appendChild(pStatusValue);
    pDescription.appendChild(pDescriptionLabel);
    pDescription.appendChild(pDescriptionField);
    pChecklist.appendChild(pChecklistLabel);

    if (func.list[projectIndex].p_checklist.length > 0) {
      pChecklistLabel.textContent = "Checklist:";
    }

    for (let i = 0; i < func.list[projectIndex].p_checklist.length; i++) {
      const pChecklistData = document.createElement("div");
      const pChecklistTaskTitle = document.createElement("div");
      const pChecklistTaskDue = document.createElement("div");
      const pChecklistTaskDueLabel = document.createElement("div");
      const pChecklistTaskDueDate = document.createElement("div");

      pChecklistData.classList.add("row", "space_between");
      pChecklistTaskTitle.classList.add("text", "smaller", "checklist");
      pChecklistTaskDue.classList.add("row", "left", "due", "checklist");
      pChecklistTaskDueLabel.classList.add("text", "bold", "checklist");
      pChecklistTaskDueDate.classList.add("text", "smaller", "checklist");

      pChecklist.appendChild(pChecklistData);
      pChecklistData.appendChild(pChecklistTaskTitle);
      pChecklistData.appendChild(pChecklistTaskDue);
      pChecklistTaskDue.appendChild(pChecklistTaskDueLabel);
      pChecklistTaskDue.appendChild(pChecklistTaskDueDate);

      pChecklistTaskTitle.textContent = `${checklist[i].t_title}`;
      pChecklistTaskDueLabel.textContent = "Due:";
      pChecklistTaskDueDate.textContent = `${checklist[i].t_due}`;
    }

    pBtns.appendChild(pAddTask);
    pBtns.appendChild(pCompleteProject);
    pBtns.appendChild(pDeleteProject);

    function setPriority(value) {
      if (Low.textContent === `${value}`) {
        Low.classList.add("highlight");
      } else if (Medium.textContent === `${value}`) {
        Medium.classList.add("highlight");
      } else if (High.textContent === `${value}`) {
        High.classList.add("highlight");
      }
    }
    setPriority(priority);

    function togglePriority() {
      const priorityBtns = document.querySelectorAll(".pri");
      priorityBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          if (
            !e.target.classList.contains("highlight") &&
            e.target.textContent === "Low"
          ) {
            func.list[projectIndex].p_priority = "Low";
            e.target.classList.add("highlight");
            e.target.nextSibling.classList.remove("highlight");
            e.target.nextSibling.nextSibling.classList.remove("highlight");
            display();
          } else if (
            !e.target.classList.contains("highlight") &&
            e.target.textContent === "Medium"
          ) {
            func.list[projectIndex].p_priority = "Medium";
            e.target.classList.add("highlight");
            e.target.previousSibling.classList.remove("highlight");
            e.target.nextSibling.classList.remove("highlight");
            display();
          } else if (
            !e.target.classList.contains("highlight") &&
            e.target.textContent === "High"
          ) {
            func.list[projectIndex].p_priority = "High";
            e.target.classList.add("highlight");
            e.target.previousSibling.classList.remove("highlight");
            e.target.previousSibling.previousSibling.classList.remove(
              "highlight",
            );
            display();
          }
        });
      });
    }
    togglePriority();

    function setStatus(element) {
      if (element.textContent === "Complete") {
        pStatusValue.classList.add("highlight");
        pCompleteProject.textContent = "Re-open Project";
      }
    }
    setStatus(pStatusValue);

    function toggleCollapse() {
      function toggle(element) {
        element.parentNode.nextSibling.classList.toggle("collapsed");
        element.parentNode.nextSibling.nextSibling.classList.toggle(
          "collapsed",
        );
        element.parentNode.nextSibling.nextSibling.nextSibling.classList.toggle(
          "collapsed",
        );
        element.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.classList.toggle(
          "collapsed",
        );
        element.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.toggle(
          "collapsed",
        );
      }

      if (func.list[projectIndex].p_collapsed == 0) {
        pToggle.addEventListener("click", (e) => {
          if (func.list[projectIndex].p_collapsed == 0) {
            func.list[projectIndex].p_collapsed = 1;
            e.target.textContent = "Expand";
            toggle(e.target);
            display();
          } else if (func.list[projectIndex].p_collapsed == 1) {
            func.list[projectIndex].p_collapsed = 0;
            e.target.textContent = "Collapse";
            toggle(e.target);
            display();
          }
        });
      } else if (func.list[projectIndex].p_collapsed == 1) {
        pToggle.textContent = "Expand";
        toggle(pToggle);
        pToggle.addEventListener("click", (e) => {
          if (func.list[projectIndex].p_collapsed == 0) {
            func.list[projectIndex].p_collapsed = 1;
            e.target.textContent = "Expand";
            toggle(e.target);
            display();
          } else if (func.list[projectIndex].p_collapsed == 1) {
            func.list[projectIndex].p_collapsed = 0;
            e.target.textContent = "Collapse";
            toggle(e.target);
            display();
          }
        });
      }
    }
    toggleCollapse();

    pDescriptionField.addEventListener("input", () => {
      func.list[projectIndex].p_descr = pDescriptionField.value;
    });

    pCompleteProject.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      if (pStatusValue.textContent === "In progress") {
        func.changeStatus(projectIndex, "Complete");
      } else if (pStatusValue.textContent === "Complete") {
        func.changeStatus(projectIndex, "In progress");
      }
      display();
    });

    pDeleteProject.addEventListener("click", () => {
      func.removeProject(projectIndex);
      parent.removeChild(pContainer);
      localStorage.removeItem(`appData${projectIndex}`);
      display();
    });

    pAddTask.addEventListener("click", () => {
      tForm.reset();
      tDialog.showModal();

      index = projectIndex;

      tCancel.addEventListener("click", () => {
        tDialog.close();
      });
    });
  };

  tForm.addEventListener("submit", (e) => {
    e.preventDefault();
    func.addTask(index, func.getTaskFormData(tForm));
    tDialog.close();
    display();
  });

  return {
    addProjectBtn,
    pDialog,
    pForm,
    pCancel,
    pSubmit,
    tDialog,
    tForm,
    table,
    newProjectWindow,
  };
})();

export { dom };
