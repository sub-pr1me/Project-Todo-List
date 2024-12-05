import "./styles.css";
import { func } from "./mainFunctions.js";
import { events } from "./eventListeners.js";
import { display } from "./displayController.js";

func.initApp();

events();

!func.previouslyRun() ? func.defaultTask() : console.log('');

display();