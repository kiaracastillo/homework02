import { addPageContent, setLoggedInOut } from "../model/model.js";

function initListeners() {
  $("nav .links a").on("click", (e) => {
    e.preventDefault();
    let btnID = e.currentTarget.id;

    addPageContent(btnID);
  });

  //Esto hare que al hacer click en log in cambie a log out
  $("nav .log span").on("click", (e) => {
    e.preventDefault();
    setLoggedInOut();
  });
}

$(document).ready(function () {
  addPageContent("home");
  initListeners();
});
