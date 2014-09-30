/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var hideAllPanels, showSelectedPanel, removeActiveClassFromAllButtons, addActiveClassToSelectedButton, setButtonClick, showPanel, i, buttons = document.querySelectorAll(".menubar > div"),
    panels = document.querySelectorAll(".panel");
hideAllPanels = function () {
    "use strict";
    var i;
    for (i = 0; i < panels.length; i = i + 1) {
        panels[i].style.display = "none";
    }
};
showSelectedPanel = function (index) {
    "use strict";
    // show the selected panel. Google css display property.
    // (panel is a block html element)
    // note the index of the panel to display is sent to this function
};
removeActiveClassFromAllButtons = function () {
    "use strict";
    // loop through all the buttons and remove all the classes from each
    // note we have already collected all the buttons and have them in a
    // buttons array. See first line of this page
};
addActiveClassToSelectedButton = function (button) {
    "use strict";
    // add the class "menuActive" to the button sent to this function
};
setButtonClick = function (numberClickedOn) {
    "use strict";
    buttons[numberClickedOn].onclick = function () {
        hideAllPanels();
        showSelectedPanel(numberClickedOn);
        removeActiveClassFromAllButtons();
        addActiveClassToSelectedButton(buttons[numberClickedOn]);
    };
};
for (i = 0; i < buttons.length; i = i + 1) {
    setButtonClick(i);
}