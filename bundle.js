/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/montserrat/Montserrat-VariableFont_wght.ttf */ "./src/assets/fonts/montserrat/Montserrat-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/montserrat/Montserrat-Italic-VariableFont_wght.ttf */ "./src/assets/fonts/montserrat/Montserrat-Italic-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Montserrat';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype'),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n    \n    font-weight: 400;\n    font-style: normal;\n}\n\nbody {\n    background-color: bisque;\n    font-family: Montserrat;\n    margin: 0 0 0 0;\n}\n\nbutton {\n    margin-top: 3px;\n    padding: 4px 20px 4px 20px;\n    border-radius: 5px;\n    box-shadow: 0 2px 6px gray;\n    font-size: 16px;\n}\n\n.delete-button {\n    background-color: rgba(189, 28, 28, 0.7);\n}\n\nlabel {\n    padding: 5px;\n    border-radius: 5px;\n}\n\n\n.one {\n    background-color: red;\n}\n\n.two {\n    background-color: orange;\n}\n\n.three {\n    background-color: rgb(218, 140, 140);\n}\n\n.four {\n    background-color: lightgreen;\n}\n\n.five {\n    background-color: green;\n}\n\n\n /* Nav Styling ------------------------------------------------------------- */\n nav {\n    height: 100px;\n    min-height: 100px;\n    max-height: 150px;\n    background-color: #EBBCBC;\n\n    display: flex;\n    width: calc(100% - 25px);\n    align-items: center;\n    flex-wrap: wrap;\n    padding: 5px;\n    padding-left: 20px;\n\n    border-radius: 0 0 6px 6px;\n    box-shadow: 0 0px 7px black;\n\n}\n\n.nav-title {\n    flex: 1;\n    text-align: right;\n    font-size: 22px;\n}\n\nnav ul {\n    flex: 1;\n    text-align: right;\n    padding-right: 30px;\n    flex-shrink: 3;\n}\n\nnav ul li {\n    display: inline-block;\n    list-style: none;\n    margin: 10px 20px;\n}\n\n /* Nav Button Animations --------------------------------------------------- */\n\n.navButtonToggle {\n    position:relative;\n}\n\n.navButtonToggle:after {\n    content: '';\n    width: 0;\n    height: 3px;\n    position: absolute;\n    bottom: -5px;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #555358;\n    transition: width 0.3s;\n}\n\n.navButtonToggle:hover:after {\n    width:70%;\n}\n\n.portfolioToggle a{\n    text-decoration: none;\n    color: black;\n}\n\n/* Add Button Styling and animations */\n\n.add-button {\n    display: block;\n    position: fixed;\n    height: 62px;\n    width: 62px;\n    border-radius: 40px;\n    font-size: 30px;\n    bottom: 35px;\n    right: 40px;\n    background-color: #EBBCBC;\n    box-shadow: 0 0 4px;\n    border-width: 1px;\n    -webkit-transition-duration: 0.1s;\n    transition-duration: 0.1s;\n    cursor:pointer;\n}\n\n.add-button:hover {\n    background-color: #c79c9c;\n    transition-duration: .2s;\n    transform: scale(1.1) rotate(180deg);\n\n}\n\n.add-button:active {\n    background-color: #fffafa;\n    transform: translateY(4px);\n    transition-duration: 0;\n}\n\n\n.project-container-add-menu {\n    \n    display: flex;\n    position: absolute;\n\n    left: calc(50% - 200px);\n    top: calc(50% - 75px);\n\n    height: 150;\n    width: 400px;\n    background-color: rgb(218, 140, 140);\n    transition-duration: 0.1s;\n    padding: 5px;\n\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n    box-shadow: 0 0 10px rgb(92, 72, 72);\n}\n\n.project-container-add-menu:hover {\n    transform: scale(1.05);\n}\n \n.project-container-add-menu-container {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    font-size: 22px;\n}\n\n/*\n.new-project-name-container {\n    font-size: 16px;\n} */\n\n.new-project-form-container {\n    font-size: 16px;\n    padding: 2px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#new-project-priority-input {\n    /* background-color:green; */\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n    /* box-shadow: 0 0 10px rgb(92, 72, 72);} */\n}\n\n.new-project-button-container {\n    display: flex;\n    width: 250px;\n    justify-content: space-around;\n    padding-bottom: 10px;\n}\n\n\n/* -------------- Project Container Styling -------------- */\n\n.project-container {\n    display: flex;\n    margin: 10px;\n    justify-content: center;\n    flex-wrap: wrap;\n}\n\n/* -------------- Project Pane Styling -------------- */\n.project-pane {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 400px;\n    width: 400px;\n    margin: 10px;\n    background-color: rgb(218, 140, 140);\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n    box-shadow: 0 0 10px rgb(92, 72, 72);\n    text-align: center;\n    \n}\n\n.project-name-container {\n    display: flex;\n    justify-content: end;\n    align-items: center;\n    padding: 5px 5px 5px 5px;\n    border-radius: 4px 4px 0px 0px;\n}\n\n.project-name {\n    position: relative;\n    max-width: 350px;\n    text-align: center;\n    flex-grow: 1;\n}\n\n.project-edit-button {\n    height: 25px;\n    -webkit-transition-duration: 0.1s;\n    transition-duration: 0.1s;\n    border-radius: 100%;\n}\n\n.project-edit-button:hover{\n    transform: scale(1.15);\n    transition-duration: 0.1s;\n    background-color: white;\n    /* border-radius: 10px; */\n}\n\n.project-todo-element-container {\n    background-color:rgb(240, 206, 206);\n    flex-grow:1;\n    margin: 5px 5px 4px 5px;\n    padding: 5px;\n    border-radius: 5px;\n    border: 1px solid rgb(126, 105, 105);\n    max-height: 81%;\n    display: flex;\n    flex-direction: column;\n    max-width: 94%;\n}\n\n.project-todo-button-container {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.project-todo-button {\n    padding: 4px;\n    margin-top: 0px;\n    transform: scale(.9);\n}\n\n.project-todo-list {\n    height: 100%;\n    display:flex;\n    flex-direction: column;\n}\n\n.todo-list {\n    flex-grow: 6;\n    /* background-color: grey; */\n    overflow-y: auto;\n    padding-top: 5px;\n    max-height: 223px;\n}\n\n\n\n.todo-element-container {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    width: inherit;\n    overflow: hidden;\n}\n\n\n\n\n.todo-div-name {\n    max-width: 340px;    \n    padding: 2px;\n    width: 90%;\n    text-align: start;\n}\n\n.todo-edit-button {\n    height: 17px;\n    margin-left: auto;\n    margin-right: 2px;\n}\n\n\n.todo-list-completed {\n    position: relative;\n    flex-grow: 1;\n    min-height: 20px;\n    max-height: 45px;\n    padding-top: 0px;\n}\n\n.todo-completed {\n    opacity: 40%;\n    text-decoration: line-through;\n}\n\n.project-date-container {\n    display: flex; \n    justify-content: space-between;\n    padding: 0px 5px 0px 5px;\n}\n\n\n/* -------------- Project Edit Pane Styling -------------- */\n\n.project-edit-pane {\n    position: absolute;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n\n    background-color: rgb(218, 140, 140);\n    height: 380px;\n    width: 375px;\n    margin: 8px 0px 5px 10px;\n\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n    box-shadow: 0 0 10px rgb(92, 72, 72);\n}\n\n.edit-project-title-text {\n    font-size: 22px;\n}\n\n.edit-project-priority-input {\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n    width: 230px;\n    margin-top: 5px;\n}\n\n/* -------------- Project Add Todo Pane Styling -------------- */\n\n.project-add-todo-pane {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    width: 363px;\n    height: 310px;\n    background-color:rgb(218, 140, 140);\n    padding: 5px;\n    justify-content: start;\n    align-items: flex-start;\n\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n\n}\n\n.project-add-todo-name-label {\n    display: flex; \n    width: 98%;\n}\n\n.project-add-todo-name-input {\n    width: 85%;\n}\n\n.project-add-todo-description-label {\n    display: flex;\n    width: 98%;\n}\n\n.project-add-todo-description-input {\n    width: 85%;\n}\n\n\n\n#project-add-todo-priority-label {\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n    width: 230px;\n    align-self: center;\n}\n\n.project-add-todo-notes-label {\n    width: 95%;\n    height: 300%;\n    text-align: start;\n    /* align-self: flex-start; */\n}\n\n.project-add-todo-notes-input {\n    width: 98%;\n    height: 80%;\n    resize: none;\n}\n\n.project-add-todo-date-label {\n    align-self: center\n}\n\n.project-add-todo-button-container {\n    align-self: center;\n    margin: 10px;\n}\n\n.marked-for-deletion {\n    background-color:rgba(189, 28, 28, 0.7);\n}\n\n\n.project-delete-todo-pane {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    width: 373px;\n    height: 320px;\n    background-color:rgb(218, 140, 140);\n\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n}\n\n.project-delete-todo-list {\n    display: flex;\n    flex-direction: column;\n    background-color: #f9f4f4;\n    height: 75%;\n    max-height: 75%;\n    overflow-y: auto;\n    width: 97%;\n    padding: 5px;\n\n\n    border-radius: 5px;\n    border: 1px solid rgb(92, 72, 72);\n\n}\n\n.project-delete-todo-div {\n    align-self: flex-start;\n    padding: 3px;\n    padding-left: 3px;\n    width: 90%;\n    text-align: start;\n}\n\n.project-delete-todo-completed-button {\n    width: 250px;\n    align-self: center;\n}\n\n/* -------------- Project Edit Todo Pane Styling -------------- */\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Montserrat';\n    src: url('./assets/fonts/montserrat/Montserrat-VariableFont_wght.ttf') format('truetype'),\n    url('./assets/fonts/montserrat/Montserrat-Italic-VariableFont_wght.ttf') format('truetype');\n    \n    font-weight: 400;\n    font-style: normal;\n}\n\nbody {\n    background-color: bisque;\n    font-family: Montserrat;\n    margin: 0 0 0 0;\n}\n\nbutton {\n    margin-top: 3px;\n    padding: 4px 20px 4px 20px;\n    border-radius: 5px;\n    box-shadow: 0 2px 6px gray;\n    font-size: 16px;\n}\n\n.delete-button {\n    background-color: rgba(189, 28, 28, 0.7);\n}\n\nlabel {\n    padding: 5px;\n    border-radius: 5px;\n}\n\n\n.one {\n    background-color: red;\n}\n\n.two {\n    background-color: orange;\n}\n\n.three {\n    background-color: rgb(218, 140, 140);\n}\n\n.four {\n    background-color: lightgreen;\n}\n\n.five {\n    background-color: green;\n}\n\n\n /* Nav Styling ------------------------------------------------------------- */\n nav {\n    height: 100px;\n    min-height: 100px;\n    max-height: 150px;\n    background-color: #EBBCBC;\n\n    display: flex;\n    width: calc(100% - 25px);\n    align-items: center;\n    flex-wrap: wrap;\n    padding: 5px;\n    padding-left: 20px;\n\n    border-radius: 0 0 6px 6px;\n    box-shadow: 0 0px 7px black;\n\n}\n\n.nav-title {\n    flex: 1;\n    text-align: right;\n    font-size: 22px;\n}\n\nnav ul {\n    flex: 1;\n    text-align: right;\n    padding-right: 30px;\n    flex-shrink: 3;\n}\n\nnav ul li {\n    display: inline-block;\n    list-style: none;\n    margin: 10px 20px;\n}\n\n /* Nav Button Animations --------------------------------------------------- */\n\n.navButtonToggle {\n    position:relative;\n}\n\n.navButtonToggle:after {\n    content: '';\n    width: 0;\n    height: 3px;\n    position: absolute;\n    bottom: -5px;\n    left: 50%;\n    transform: translateX(-50%);\n    background: #555358;\n    transition: width 0.3s;\n}\n\n.navButtonToggle:hover:after {\n    width:70%;\n}\n\n.portfolioToggle a{\n    text-decoration: none;\n    color: black;\n}\n\n/* Add Button Styling and animations */\n\n.add-button {\n    display: block;\n    position: fixed;\n    height: 62px;\n    width: 62px;\n    border-radius: 40px;\n    font-size: 30px;\n    bottom: 35px;\n    right: 40px;\n    background-color: #EBBCBC;\n    box-shadow: 0 0 4px;\n    border-width: 1px;\n    -webkit-transition-duration: 0.1s;\n    transition-duration: 0.1s;\n    cursor:pointer;\n}\n\n.add-button:hover {\n    background-color: #c79c9c;\n    transition-duration: .2s;\n    transform: scale(1.1) rotate(180deg);\n\n}\n\n.add-button:active {\n    background-color: #fffafa;\n    transform: translateY(4px);\n    transition-duration: 0;\n}\n\n\n.project-container-add-menu {\n    \n    display: flex;\n    position: absolute;\n\n    left: calc(50% - 200px);\n    top: calc(50% - 75px);\n\n    height: 150;\n    width: 400px;\n    background-color: rgb(218, 140, 140);\n    transition-duration: 0.1s;\n    padding: 5px;\n\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n    box-shadow: 0 0 10px rgb(92, 72, 72);\n}\n\n.project-container-add-menu:hover {\n    transform: scale(1.05);\n}\n \n.project-container-add-menu-container {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    font-size: 22px;\n}\n\n/*\n.new-project-name-container {\n    font-size: 16px;\n} */\n\n.new-project-form-container {\n    font-size: 16px;\n    padding: 2px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#new-project-priority-input {\n    /* background-color:green; */\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n    /* box-shadow: 0 0 10px rgb(92, 72, 72);} */\n}\n\n.new-project-button-container {\n    display: flex;\n    width: 250px;\n    justify-content: space-around;\n    padding-bottom: 10px;\n}\n\n\n/* -------------- Project Container Styling -------------- */\n\n.project-container {\n    display: flex;\n    margin: 10px;\n    justify-content: center;\n    flex-wrap: wrap;\n}\n\n/* -------------- Project Pane Styling -------------- */\n.project-pane {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 400px;\n    width: 400px;\n    margin: 10px;\n    background-color: rgb(218, 140, 140);\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n    box-shadow: 0 0 10px rgb(92, 72, 72);\n    text-align: center;\n    \n}\n\n.project-name-container {\n    display: flex;\n    justify-content: end;\n    align-items: center;\n    padding: 5px 5px 5px 5px;\n    border-radius: 4px 4px 0px 0px;\n}\n\n.project-name {\n    position: relative;\n    max-width: 350px;\n    text-align: center;\n    flex-grow: 1;\n}\n\n.project-edit-button {\n    height: 25px;\n    -webkit-transition-duration: 0.1s;\n    transition-duration: 0.1s;\n    border-radius: 100%;\n}\n\n.project-edit-button:hover{\n    transform: scale(1.15);\n    transition-duration: 0.1s;\n    background-color: white;\n    /* border-radius: 10px; */\n}\n\n.project-todo-element-container {\n    background-color:rgb(240, 206, 206);\n    flex-grow:1;\n    margin: 5px 5px 4px 5px;\n    padding: 5px;\n    border-radius: 5px;\n    border: 1px solid rgb(126, 105, 105);\n    max-height: 81%;\n    display: flex;\n    flex-direction: column;\n    max-width: 94%;\n}\n\n.project-todo-button-container {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.project-todo-button {\n    padding: 4px;\n    margin-top: 0px;\n    transform: scale(.9);\n}\n\n.project-todo-list {\n    height: 100%;\n    display:flex;\n    flex-direction: column;\n}\n\n.todo-list {\n    flex-grow: 6;\n    /* background-color: grey; */\n    overflow-y: auto;\n    padding-top: 5px;\n    max-height: 223px;\n}\n\n\n\n.todo-element-container {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    width: inherit;\n    overflow: hidden;\n}\n\n\n\n\n.todo-div-name {\n    max-width: 340px;    \n    padding: 2px;\n    width: 90%;\n    text-align: start;\n}\n\n.todo-edit-button {\n    height: 17px;\n    margin-left: auto;\n    margin-right: 2px;\n}\n\n\n.todo-list-completed {\n    position: relative;\n    flex-grow: 1;\n    min-height: 20px;\n    max-height: 45px;\n    padding-top: 0px;\n}\n\n.todo-completed {\n    opacity: 40%;\n    text-decoration: line-through;\n}\n\n.project-date-container {\n    display: flex; \n    justify-content: space-between;\n    padding: 0px 5px 0px 5px;\n}\n\n\n/* -------------- Project Edit Pane Styling -------------- */\n\n.project-edit-pane {\n    position: absolute;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n\n    background-color: rgb(218, 140, 140);\n    height: 380px;\n    width: 375px;\n    margin: 8px 0px 5px 10px;\n\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n    box-shadow: 0 0 10px rgb(92, 72, 72);\n}\n\n.edit-project-title-text {\n    font-size: 22px;\n}\n\n.edit-project-priority-input {\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n    width: 230px;\n    margin-top: 5px;\n}\n\n/* -------------- Project Add Todo Pane Styling -------------- */\n\n.project-add-todo-pane {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    width: 363px;\n    height: 310px;\n    background-color:rgb(218, 140, 140);\n    padding: 5px;\n    justify-content: start;\n    align-items: flex-start;\n\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n\n}\n\n.project-add-todo-name-label {\n    display: flex; \n    width: 98%;\n}\n\n.project-add-todo-name-input {\n    width: 85%;\n}\n\n.project-add-todo-description-label {\n    display: flex;\n    width: 98%;\n}\n\n.project-add-todo-description-input {\n    width: 85%;\n}\n\n\n\n#project-add-todo-priority-label {\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n    width: 230px;\n    align-self: center;\n}\n\n.project-add-todo-notes-label {\n    width: 95%;\n    height: 300%;\n    text-align: start;\n    /* align-self: flex-start; */\n}\n\n.project-add-todo-notes-input {\n    width: 98%;\n    height: 80%;\n    resize: none;\n}\n\n.project-add-todo-date-label {\n    align-self: center\n}\n\n.project-add-todo-button-container {\n    align-self: center;\n    margin: 10px;\n}\n\n.marked-for-deletion {\n    background-color:rgba(189, 28, 28, 0.7);\n}\n\n\n.project-delete-todo-pane {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    width: 373px;\n    height: 320px;\n    background-color:rgb(218, 140, 140);\n\n    border-radius: 5px;\n    border: 2px solid rgb(92, 72, 72);\n}\n\n.project-delete-todo-list {\n    display: flex;\n    flex-direction: column;\n    background-color: #f9f4f4;\n    height: 75%;\n    max-height: 75%;\n    overflow-y: auto;\n    width: 97%;\n    padding: 5px;\n\n\n    border-radius: 5px;\n    border: 1px solid rgb(92, 72, 72);\n\n}\n\n.project-delete-todo-div {\n    align-self: flex-start;\n    padding: 3px;\n    padding-left: 3px;\n    width: 90%;\n    text-align: start;\n}\n\n.project-delete-todo-completed-button {\n    width: 250px;\n    align-self: center;\n}\n\n/* -------------- Project Edit Todo Pane Styling -------------- */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_editButton_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/editButton.png */ "./src/assets/editButton.png");
/* harmony import */ var _todoObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoObj */ "./src/todoObj.js");




// This is the display controller. There is only one displayController, and it manages the CRUD of all html elements. This controller should only receive information from logicController (which sends commands to CRUD both displayController's html elements and the projectObj/todoObj information). displayController needs to generate a new element, then return that element back up to logicController, which should pass that element along to eventController for assigning new EventHandler's to div's that need them

const displayController = () => {

    // I generate divs

    const getInfo = () => {
        return `I am displayController. My functions are as follows: 

        `; 
    }

    const generateProjectContainerDiv = () => {

        let finishedDiv = document.createElement('div');
        finishedDiv.classList.add('project-container');

        let addButton = document.createElement('button');
        addButton.innerHTML = " + ";
        addButton.classList.add('add-button')
        finishedDiv.appendChild(addButton);

        return [finishedDiv, addButton];
    }

    const generateProjectContainerAddButtonMenu = () => {

        let finishedDiv = document.createElement('div');
        finishedDiv.classList.add('project-container-add-menu');

        let addButtonContainer = document.createElement('div');
        addButtonContainer.classList.add('project-container-add-menu-container');
        addButtonContainer.innerHTML = `Add New Project`;
        finishedDiv.appendChild(addButtonContainer);

        // name, due date, priority


        let newProjectFormContainer = document.createElement('form');
        newProjectFormContainer.classList.add('new-project-form-container');

        let nameLabel = document.createElement('label');
        nameLabel.innerHTML = `Name: `;
        newProjectFormContainer.appendChild(nameLabel);
        let nameInput = document.createElement('input');
        nameInput.value = 'New Project Name';
        nameLabel.appendChild(nameInput);

        let priorityLabel = document.createElement('label');
        priorityLabel.innerHTML = `Priority: `;
        priorityLabel.id = "new-project-priority-input";
        newProjectFormContainer.appendChild(priorityLabel);
        let priorityInput = document.createElement('input');
        priorityInput.type = 'range';
        priorityInput.max = 5;
        priorityInput.min = 1;
        priorityInput.value = 3;
                priorityLabel.appendChild(priorityInput);
        let priorityOutput = document.createElement('output');
        priorityOutput.value = priorityInput.value;
        priorityInput.oninput = () => {priorityOutput.value = priorityInput.value};
        priorityLabel.appendChild(priorityOutput);

        let dueDateLabel = document.createElement('label');
        dueDateLabel.innerHTML = `Due Date: `;
        newProjectFormContainer.appendChild(dueDateLabel);
        let dueDateInput = document.createElement('input');
        dueDateInput.type = 'date';
        dueDateInput.required = true;
        dueDateLabel.appendChild(dueDateInput);

        let creationDateLabel = document.createElement('label');
        creationDateLabel.innerHTML = `Created On: `;
        newProjectFormContainer.appendChild(creationDateLabel);
        let creationDate = new Date()
        creationDateLabel.innerHTML += `${creationDate.toDateString()}`;


        let addProjectButtonContainer = document.createElement('div');
        addProjectButtonContainer.classList.add('new-project-button-container')
        let saveButton = document.createElement('button');
        saveButton.innerHTML = `Save`;
        // changing the button's type overrides the default Save Button functionality of the form element to NOT REDIRECT with the form element, aka reloading the page
        saveButton.type = 'button';
        let cancelButton = document.createElement('button');
        cancelButton.innerHTML = `Cancel`;
        addProjectButtonContainer.appendChild(saveButton);
        addProjectButtonContainer.appendChild(cancelButton);

        newProjectFormContainer.appendChild(addProjectButtonContainer);

        // creationDateLabel.appendChild(creationDateInput);
        // <input type="date" value="2017-06-01">

        addButtonContainer.appendChild(newProjectFormContainer);


        return [finishedDiv, nameInput, priorityInput, priorityLabel, dueDateInput, creationDate, saveButton, cancelButton];
    }

    const generateProjectPane = (nameInput, priorityInput, dueDateInput, creationDateInput, todoListInput) => {

        let finishedDiv = document.createElement('div');
        finishedDiv.classList.add('project-pane');

        // finishedDiv.innerHTML = ` I am a new ProjectPane, here are the values passed to me:
        // nameInput: ${nameInput}
        // priorityInput: ${priorityInput}
        // dueDateInput: ${dueDateInput}
        // creationDateInput: ${creationDateInput}
        // todoListInput: ${todoListInput}`;

        let nameContainer = document.createElement('div');
        nameContainer.classList.add('project-name-container');

        let projectName = document.createElement('div');
        projectName.classList.add('project-name');
        projectName.innerHTML = `${nameInput}`;
        nameContainer.appendChild(projectName);

        let projectEditButton = document.createElement('img');
        projectEditButton.src = _assets_editButton_png__WEBPACK_IMPORTED_MODULE_0__;
        projectEditButton.classList.add('project-edit-button');
        nameContainer.appendChild(projectEditButton);

        finishedDiv.appendChild(nameContainer);

        // todoList container and Elements
        const todoListContainer = document.createElement('div');
        todoListContainer.classList.add('project-todo-element-container');
        finishedDiv.appendChild(todoListContainer);

        const todoListButtonContiainer = document.createElement('div');
        todoListButtonContiainer.classList.add('project-todo-button-container');
        todoListContainer.appendChild(todoListButtonContiainer);

        const projectTodoAddButton = document.createElement('button');
        projectTodoAddButton.classList.add('project-todo-button');
        projectTodoAddButton.innerHTML = `Add To-Do`;
        todoListButtonContiainer.appendChild(projectTodoAddButton);

        const projectTodoDeleteButton = document.createElement('button');
        projectTodoDeleteButton.classList.add('project-todo-button');
        projectTodoDeleteButton.innerHTML = `Delete To-Do`;
        todoListButtonContiainer.appendChild(projectTodoDeleteButton);

        // Generate todoListDivs from todoListInput and populate appropriately
        let projectTodoList = generateTodoListContainer(todoListInput);
        todoListContainer.appendChild(projectTodoList[0]);
        const todoListUncompleted = projectTodoList[1];
        const todoListCompleted = projectTodoList[2];

        const dateContainer = document.createElement('div');
        dateContainer.classList.add('project-date-container');
        finishedDiv.appendChild(dateContainer);

        const creationDate = document.createElement('div')
        creationDate.classList.add('project-creation-date');
        // functionality converting creationDate to readable format
        let readableCreationDateInput = (new Date(creationDateInput)).toDateString();
        creationDate.innerHTML = readableCreationDateInput;
        dateContainer.appendChild(creationDate);
        
        const age = document.createElement('div')
        age.classList.add('project-age');
        // functionality calculating age of project
        dateContainer.appendChild(age);

        const dueDate = document.createElement('div');
        dueDate.classList.add('project-due-date');
        // functionality converting dueDate to readable format
        let readableDueDateInput = (new Date(dueDateInput)).toDateString();
        dueDate.innerHTML = readableDueDateInput;
        dateContainer.appendChild(dueDate);


        return [finishedDiv, projectEditButton, nameContainer, projectTodoAddButton, projectTodoDeleteButton, todoListUncompleted, todoListCompleted];

    }

    const generateTodoDiv = (todo) => {
        const todoDiv = document.createElement('div'); 
        todoDiv.classList.add('todo-element-container');


        // console.log(todo.getTitle());


        if(todo.getComplete()) {
            todoDiv.classList.add('todo-completed');
        } else {
            todoDiv.classList.add('todo-incomplete');
        }

        // If todo.completed == true, set classlist of new div element
        // set todoDiv name length to cap at maximum length of viewport area
        const checkbox = document.createElement('input');
        checkbox.classList.add('todo-div-checkbox');
        checkbox.type = 'checkbox';
        // console.log(todo.getComplete());
        if(todo.getComplete()) {
            checkbox.setAttribute('checked', "");
        }
        todoDiv.appendChild(checkbox);

        const todoDivName = document.createElement('label');
        todoDivName.classList.add('todo-div-name');

        // Checking title length and trimming down. Had significant difficulty getting overflow-x: hidden to work in CSS, so decided to just manually trim title down and add "..." to end to indicate a longer title
        let title = todo.getTitle();
        let newTitle = "";
        if(title.length > 34){
            newTitle = "";
            for (let i = 0; i < 34; i++) {
                newTitle += title.charAt(i);
            }
            newTitle += "...";
        } else {
            newTitle = title;
        }
        todoDivName.innerHTML = newTitle;
        todoDiv.appendChild(todoDivName);


        let todoEditButton = document.createElement('img');
        todoEditButton.src = _assets_editButton_png__WEBPACK_IMPORTED_MODULE_0__;
        todoEditButton.classList.add('project-edit-button', 'todo-edit-button')
        todoDiv.appendChild(todoEditButton);

        // Attach a reference to its completed div within each todoObj that get's parsed in this method (which should be all of them)
        todo.setTodoDiv(todoDiv);


        return todoDiv;
    }

    // Takes a todoList[] of todoObj's and creates a suitable, finished, project-todo-list
    const generateTodoListContainer = (todoListArray) => {

        const projectTodoList = document.createElement('div');
        projectTodoList.classList.add('project-todo-list');

        const todoList = document.createElement('div');
        todoList.classList.add('todo-list');
        
        const todoListCompleted = document.createElement('div');
        todoListCompleted.classList.add('todo-list', 'todo-list-completed');

        projectTodoList.appendChild(todoList);
        projectTodoList.innerHTML += '--- Completed ---';
        projectTodoList.appendChild(todoListCompleted);

        // Reinstantiating the reference to todoList via querySelector - using innerHTML flushes the references 
        const todoListReference = projectTodoList.querySelector('.todo-list');

        // Logic for creating and parsing todoListArray elements, using 
        if(todoListArray) {

            todoListArray.forEach(element => {

                let tempDiv = generateTodoDiv(element);
            
                if(element.getComplete()){
                    // console.log("Element's getComplete() returned True");
                    todoListCompleted.appendChild(tempDiv);
                } else {
                    // console.log("Element's getComplete returned False")
                    // console.log(todoListReference);
                    todoListReference.appendChild(tempDiv);
                }
            });
        }


        return [projectTodoList, todoListReference, todoListCompleted];

    }

    const generateProjectEditPane = (targetProject) => {

        // console.log(`You clicked the editProject button targeting the project: `);
        // console.log(targetProject.getInfo());

        const editPane = document.createElement('div');
        editPane.classList.add('project-edit-pane');

        // editPane.innerHTML = targetProject.getInfo();

        const editTitle = document.createElement('p');
        editTitle.classList.add('edit-project-title-text');
        editTitle.innerHTML = `Edit Project`;
        editPane.appendChild(editTitle);

        // Header Text
        const editProjectNameContainer = document.createElement('div');
        editProjectNameContainer.classList.add('edit-project-name-container');
        editPane.appendChild(editProjectNameContainer);

        // Name Input
        let nameLabel = document.createElement('label');
        nameLabel.innerHTML = `Name: `;
        editProjectNameContainer.appendChild(nameLabel);
        let nameInput = document.createElement('input');
        nameInput.value = targetProject.getProjectName();
        nameLabel.appendChild(nameInput);

        // Priority Slider
        let priorityLabel = document.createElement('label');
        priorityLabel.innerHTML = `Priority: `;
        priorityLabel.classList.add ("edit-project-priority-input");
        editPane.appendChild(priorityLabel);
        let priorityInput = document.createElement('input');
        priorityInput.type = 'range';
        priorityInput.max = 5;
        priorityInput.min = 1;
        priorityInput.value = targetProject.getProjectPriority();
        priorityLabel.appendChild(priorityInput);
        let priorityOutput = document.createElement('output');
        priorityOutput.value = priorityInput.value;
        priorityInput.oninput = () => {priorityOutput.value = priorityInput.value};
        priorityLabel.appendChild(priorityOutput);

        // Due Date
        let dueDateLabel = document.createElement('label');
        dueDateLabel.innerHTML = `Due Date: `;
        editPane.appendChild(dueDateLabel);
        let dueDateInput = document.createElement('input');
        dueDateInput.type = 'date';
        dueDateInput.required = true;
        // dueDateInput.value = "2021-02-02";
        let tempDueDate = targetProject.getProjectDueDate()
        console.log(targetProject.getProjectDueDate())
        // tempDueDate.setDate(tempDueDate.getDate() - 1);
        tempDueDate = tempDueDate.getTime();
        dueDateInput.valueAsNumber = tempDueDate;
        dueDateLabel.appendChild(dueDateInput);

        // Creation Date
        let creationDateLabel = document.createElement('label');
        creationDateLabel.innerHTML = `Created On: `;
        editPane.appendChild(creationDateLabel);
        let creationDateInput = document.createElement('input')
        creationDateInput.type = 'date';
        creationDateInput.required = true;
        let tempCreationDate = targetProject.getProjectCreationDate();
        creationDateInput.valueAsDate = tempCreationDate;
        creationDateLabel.appendChild(creationDateInput);

        
        // Age
        let ageLabel = document.createElement('label');
        ageLabel.innerHTML = `Age: `;
        editPane.appendChild(ageLabel)

        const ageMillis = (Date.now() - targetProject.getProjectCreationDate());
        // console.log(`ageMillis: ${ageMillis}`);
        const seconds = ageMillis / 1000;
        // console.log(`Seconds: ${seconds}`);
        let totalMinutes = seconds / 60;
        // console.log(`TotalMinutes: ${totalMinutes}`)
        // console.log(`TotalMinutes.toFixed: ${totalMinutes.toFixed()}`);
        let days = totalMinutes.toFixed() / (60*24);
        // console.log(`Days: ${days}`);
        // console.log(`Days.toFixed: ${days.toFixed()}`);
        totalMinutes -= ((60*24) * days.toFixed());
        // console.log(`new TotalMinutes: ${totalMinutes}`);
        // console.log(`new TotalMinutes.toFixed: ${totalMinutes.toFixed()}`);
        let hours = totalMinutes / 60;
        // console.log(`Hours: ${hours}`);
        // console.log(`Hours.toFixed: ${hours.toFixed()}`);
        totalMinutes -= (hours.toFixed() * 60); 
        // console.log(`newNEW TotalMinutes: ${totalMinutes}`);
        // Adjusting to readable strings
        days = days.toFixed();
        hours = hours.toFixed();
        totalMinutes = totalMinutes.toFixed();       

        // console.log(`----------------`);
        // console.log(ageMillis);
        // console.log(`Seconds: ${seconds}`);
        // console.log(`TotalMinutes: ${totalMinutes}`);
        // console.log(`Hours: ${hours}`);
        // console.log(`Days: ${days}`);
        // console.log(`----------------`)

        let age;
        if (ageMillis > 86400000 ) {
            age = (days - 1) + " Days"; // Days - 1 because the above line days = days.toFixed() rounds up. This way, you don't create a project yesterday that's already 2 days old when viewed today
        } else {
            age = hours + " Hours, " + totalMinutes + " Minutes";
        }
        
        ageLabel.innerHTML += age;

        // Save, Cancel, Delete Buttons
        let editProjectButtonContainer = document.createElement('div');
        editProjectButtonContainer.classList.add('edit-project-button-container')
        let saveButton = document.createElement('button');
        saveButton.innerHTML = `Save`;
        // changing the button's type overrides the default Save Button functionality of the form element to NOT REDIRECT with the form element, aka reloading the page
        saveButton.type = 'button';
        let cancelButton = document.createElement('button');
        cancelButton.innerHTML = `Cancel`;
        editProjectButtonContainer.appendChild(saveButton);
        editProjectButtonContainer.appendChild(cancelButton);
        editPane.appendChild(editProjectButtonContainer);

        let deleteProjectButton = document.createElement('button');
        deleteProjectButton.innerHTML = 'Delete';
        deleteProjectButton.classList.add('delete-button');
        deleteProjectButton.type = 'button';
        editPane.appendChild(deleteProjectButton);


        let savedInputs = [nameInput, priorityInput, dueDateInput, creationDateInput];
        // console.log(savedInputs);
        

        return [editPane, priorityInput, priorityLabel, saveButton, cancelButton, deleteProjectButton, savedInputs ] ;

    }

    const generateProjectAddTodoPane = (targetProject) => {

        const addTodoPane = document.createElement('div');
        addTodoPane.classList.add('project-add-todo-pane');
        
        // Title
        const titleLabel = document.createElement('label');
        titleLabel.innerHTML = 'Name: ';
        titleLabel.classList.add('project-add-todo-name-label');
        addTodoPane.appendChild(titleLabel);
        const titleInput = document.createElement('input');
        titleInput.classList.add('project-add-todo-name-input');
        titleInput.maxLength = "30";
        titleInput.value = "New To-Do";
        titleInput.minLength = "1";
        titleLabel.appendChild(titleInput);

        // Description
        const descriptionLabel = document.createElement('label');
        descriptionLabel.innerHTML = `Description: `;
        descriptionLabel.classList.add('project-add-todo-description-label');
        addTodoPane.appendChild(descriptionLabel);
        const descriptionInput = document.createElement('input');
        descriptionInput.classList.add('project-add-todo-description-input');
        descriptionInput.maxLength = "24";
        descriptionLabel.appendChild(descriptionInput);
        
        // Priority
        let priorityLabel = document.createElement('label');
        priorityLabel.innerText = `Priority: `;
        priorityLabel.id = "project-add-todo-priority-label";
        addTodoPane.appendChild(priorityLabel);
        let priorityInput = document.createElement('input');
        priorityInput.type = 'range';
        priorityInput.max = 5;
        priorityInput.min = 1;
        priorityInput.value = 3;
        priorityLabel.appendChild(priorityInput);
        let priorityOutput = document.createElement('output');
        priorityOutput.value = priorityInput.value;
        priorityInput.oninput = () => {priorityOutput.value = priorityInput.value};
        priorityLabel.appendChild(priorityOutput);

        // Notes
        const notesLabel = document.createElement('label');
        notesLabel.innerText = "Notes:                     ";
        notesLabel.classList.add('project-add-todo-notes-label');
        addTodoPane.appendChild(notesLabel);
        const notesInput = document.createElement('textarea');
        notesInput.classList.add('project-add-todo-notes-input');
        notesLabel.appendChild(notesInput);

        // Due Date
        let dueDateLabel = document.createElement('label');
        dueDateLabel.innerHTML = `Due Date: `;
        dueDateLabel.classList.add('project-add-todo-date-label');
        addTodoPane.appendChild(dueDateLabel);
        let dueDateInput = document.createElement('input');
        dueDateInput.type = 'date';
        dueDateLabel.appendChild(dueDateInput);


        // Creation Date
        let creationDateLabel = document.createElement('label');
        creationDateLabel.innerHTML = `Created On: `;
        creationDateLabel.classList.add('project-add-todo-date-label');
        addTodoPane.appendChild(creationDateLabel);
        let creationDate = new Date()
        creationDateLabel.innerText += `${creationDate.toDateString()}`;

        // Buttons
        const addTodoButtonContainer = document.createElement('div');
        addTodoButtonContainer.classList.add('project-add-todo-button-container');
        let saveButton = document.createElement('button');
        saveButton.innerHTML = `Save new To-Do`;
        // changing the button's type overrides the default Save Button functionality of the form element to NOT REDIRECT with the form element, aka reloading the page
        saveButton.type = 'button';
        let cancelButton = document.createElement('button');
        cancelButton.innerHTML = `Cancel new To-Do`;
        cancelButton.type = 'button';
        addTodoButtonContainer.appendChild(saveButton);
        addTodoButtonContainer.appendChild(cancelButton);
        addTodoPane.appendChild(addTodoButtonContainer);

        return [addTodoPane, titleInput, descriptionInput, priorityLabel, priorityInput, notesInput, dueDateInput, creationDate, saveButton, cancelButton];

    }

    const generateProjectDeleteTodoPane = (targetProject) => {
        const deleteTodoPane = document.createElement('div');
        deleteTodoPane.classList.add('project-delete-todo-pane');
        
        const todoPane = document.createElement('div');
        todoPane.classList.add('project-delete-todo-list');
        deleteTodoPane.appendChild(todoPane);

        const targetProjectTodoList = targetProject.getTodoList();
        
        let todoPaneList = [];

        targetProjectTodoList.forEach( element => {
            let todoElementDiv = generateProjectDeleteTodoDiv(element);
            todoPane.appendChild(todoElementDiv);
            todoPaneList.push(element);
        });




        // Example of tracing from targetProject to all todo elements
        // console.log(targetProject.getTodoList()[0].getInfo());



        // Buttons
        const deleteTodoButtonContainer = document.createElement('div');
        deleteTodoButtonContainer.classList.add('project-delete-todo-button-container');
        let deleteSelectedButton = document.createElement('button');
        deleteSelectedButton.innerHTML = `Delete Selected`;
        // changing the button's type overrides the default Save Button functionality of the form element to NOT REDIRECT with the form element, aka reloading the page
        deleteSelectedButton.type = 'button';

        let cancelButton = document.createElement('button');
        cancelButton.innerHTML = `Cancel`;
        cancelButton.type = 'button';
        deleteTodoButtonContainer.appendChild(deleteSelectedButton);
        deleteTodoButtonContainer.appendChild(cancelButton);
        deleteTodoPane.appendChild(deleteTodoButtonContainer);

        const deleteCompletedButton = document.createElement('button');
        deleteCompletedButton.innerHTML = `Delete Completed To-do's`;
        deleteCompletedButton.classList.add('project-delete-todo-completed-button')
        deleteCompletedButton.type = 'button';
        deleteTodoButtonContainer.appendChild(deleteCompletedButton);


        return [deleteTodoPane, deleteSelectedButton, cancelButton, deleteCompletedButton, todoPaneList];
    }

    const generateProjectDeleteTodoDiv = (todoObject) => {

        const todoPane = document.createElement('div');

        if( todoObject.getComplete() ){
            // console.log(`${todoObject.getTitle()} is complete: ${todoObject.getComplete()}`)
            todoPane.classList.add('todo-completed');
        }
        todoPane.classList.add('project-delete-todo-div')


        // Trimming down long title strings that escape name.maxLength
        const titleText = todoObject.getTitle();
        // console.log(titleText);
        let newTitle = "";
        if (titleText.length > 32) {
            for (let i = 0; i < 34; i++) {
                newTitle += titleText.charAt(i);
            }
            newTitle += "...";
        } else {
            newTitle = titleText;
        }
        // console.log(newTitle);
        todoPane.innerText += newTitle;


        todoObject.setTodoDeletionDiv(todoPane);
        return todoPane;


    }

    const generateEditTodoPane = (targetTodo) => {

        const addTodoPane = document.createElement('div');
        addTodoPane.classList.add('project-add-todo-pane');
        
        // Title
        const titleLabel = document.createElement('label');
        titleLabel.innerHTML = 'Name: ';
        titleLabel.classList.add('project-add-todo-name-label');
        addTodoPane.appendChild(titleLabel);
        const titleInput = document.createElement('input');
        titleInput.classList.add('project-add-todo-name-input');
        titleInput.maxLength = "30";
        titleInput.value = targetTodo.getTitle();
        titleInput.minLength = "1";
        titleLabel.appendChild(titleInput);

        // Description
        const descriptionLabel = document.createElement('label');
        descriptionLabel.innerHTML = `Description: `;
        descriptionLabel.classList.add('project-add-todo-description-label');
        addTodoPane.appendChild(descriptionLabel);
        const descriptionInput = document.createElement('input');
        descriptionInput.classList.add('project-add-todo-description-input');
        descriptionInput.maxLength = "24";
        descriptionInput.value = targetTodo.getDescription();
        descriptionLabel.appendChild(descriptionInput);
        
        // Priority
        let priorityLabel = document.createElement('label');
        priorityLabel.innerText = `Priority: `;
        priorityLabel.id = "project-add-todo-priority-label";
        addTodoPane.appendChild(priorityLabel);
        let priorityInput = document.createElement('input');
        priorityInput.type = 'range';
        priorityInput.max = 5;
        priorityInput.min = 1;
        // console.log(targetTodo.getPriority());
        priorityInput.value = targetTodo.getPriority();
        priorityLabel.appendChild(priorityInput);
        let priorityOutput = document.createElement('output');
        priorityOutput.value = priorityInput.value;
        priorityInput.oninput = () => {priorityOutput.value = priorityInput.value};
        priorityLabel.appendChild(priorityOutput);

        // Notes
        const notesLabel = document.createElement('label');
        notesLabel.innerText = "Notes:                     ";
        notesLabel.classList.add('project-add-todo-notes-label');
        addTodoPane.appendChild(notesLabel);
        const notesInput = document.createElement('textarea');
        notesInput.classList.add('project-add-todo-notes-input');
        notesInput.value = targetTodo.getNotes();
        notesLabel.appendChild(notesInput);

        // Due Date
        let dueDateLabel = document.createElement('label');
        dueDateLabel.innerHTML = `Due Date: `;
        dueDateLabel.classList.add('project-add-todo-date-label');
        addTodoPane.appendChild(dueDateLabel);
        let dueDateInput = document.createElement('input');
        dueDateInput.type = 'date';
        dueDateInput.required = true;
        let tempDueDate = targetTodo.getDueDate()
        tempDueDate = tempDueDate.getTime();
        dueDateInput.valueAsNumber = tempDueDate;
        dueDateLabel.appendChild(dueDateInput);

        // Creation Date
        let creationDateLabel = document.createElement('label');
        creationDateLabel.innerHTML = `Created On: `;
        creationDateLabel.classList.add('project-add-todo-date-label');
        addTodoPane.appendChild(creationDateLabel);
        let creationDateInput = document.createElement('input');
        creationDateInput.type = 'date'
        creationDateInput.required = true;
        let tempCreationDate = targetTodo.getCreationDate();
        creationDateInput.valueAsDate = tempCreationDate;
        creationDateLabel.appendChild(creationDateInput);
        
        // Buttons
        const addTodoButtonContainer = document.createElement('div');
        addTodoButtonContainer.classList.add('project-add-todo-button-container');
        let saveButton = document.createElement('button');
        saveButton.innerHTML = `Save To-Do`;
        // changing the button's type overrides the default Save Button functionality of the form element to NOT REDIRECT with the form element, aka reloading the page
        saveButton.type = 'button';
        let cancelButton = document.createElement('button');
        cancelButton.innerHTML = `Cancel Edit To-Do`;
        cancelButton.type = 'button';
        addTodoButtonContainer.appendChild(saveButton);
        addTodoButtonContainer.appendChild(cancelButton);
        addTodoPane.appendChild(addTodoButtonContainer);

        return [addTodoPane, titleInput, descriptionInput, priorityLabel, priorityInput, notesInput, dueDateInput, creationDateInput, saveButton, cancelButton];

    }

    return {
        getInfo,
        generateProjectContainerDiv,
        generateProjectContainerAddButtonMenu,
        generateProjectPane,
        generateTodoDiv,
        generateTodoListContainer,
        generateProjectEditPane,
        generateProjectAddTodoPane,
        generateProjectDeleteTodoPane,
        generateProjectDeleteTodoDiv,
        generateEditTodoPane,
        
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);

/***/ }),

/***/ "./src/eventController.js":
/*!********************************!*\
  !*** ./src/eventController.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// I am eventController, I am an object that assigns event functions to div's that are passed to me via logicController.

// import logicController from "./logicController.js";

const eventController = ( logicControllerReference ) => {

    // console.log(logicControllerReference);

    let _menuOpen = false;
    const _logicController = logicControllerReference;
    // console.log("I am _logicController: " + _logicController);
    // console.log(_logicController);


    const _toggleMenuOpen = () => {
        if(menuOpen) {
            _menuOpen = false;
        } else {
            _menuOpen = true;
        }
    }

    const attachProjectContainerAddButtonListener = (div) => {
        div.addEventListener('click', () => {
            _logicController._toggleProjectContainerAddButtonMenu();
        })
    };

    const attachAddProjectPrioritySlider = (inputDivValue, targetDiv) => {
        inputDivValue.addEventListener('input', () => {
            _logicController._updatePriorityColor(targetDiv, inputDivValue.value);
        })
    }

    const attachProjectTodoPrioritySlider = (inputDivValue, targetDiv) => {
        inputDivValue.addEventListener('input', () => {
            _logicController._updateTodoPriorityColor(targetDiv, inputDivValue.value);
        })
    }

    const attachAddProjectSave = (targetDiv, values) => {
        // console.log(values);
        targetDiv.addEventListener('click', () => {
            // console.log('you clicked save');
            // console.log(values);
            _logicController._addProjectSaveButton(values);
        });
    }

    const attachAddProjectCancel = (div, parentMenuDiv) => {
        div.addEventListener('click', () => {
            _logicController._addProjectCancelButton(parentMenuDiv);
        })
    }

    const attachProjectEditButton = (targetDiv, targetObject) => {
        targetDiv.addEventListener('click', () => {
            _logicController._editProject(targetObject);
        })
    }

    const attachProjectEditSaveButton = (targetDiv, targetProject, savedInputs) => {
        targetDiv.addEventListener('click', () => {
            _logicController._editProjectSaveButton(targetProject, savedInputs);
        });
    }

    const attachProjectEditCancelButton = (targetDiv, targetProject) => {
        targetDiv.addEventListener('click', () => {
            _logicController._editProjectCancelButton(targetProject);
        });
    }

    const attachProjectEditDeleteButton = (targetDiv, targetProject) => {
        targetDiv.addEventListener('click', () => {
            _logicController._editProjectDeleteButton(targetProject);
        });
    }

    const attachProjectTodoAddButton = (targetDiv, targetProject ) => {
        targetDiv.addEventListener('click', () => {
            _logicController._projectAddTodoButton(targetProject);
        })
    }

    const attachProjectTodoDeleteButton = (targetDiv, targetProject ) => {
        targetDiv.addEventListener('click', () => {
            _logicController._projectDeleteTodoButton(targetProject);

        })
    }

    const attachProjectAddTodoSaveButton = (targetSaveButton, targetProject, addTodoPane, savedValues) => {
        targetSaveButton.addEventListener('click', () => {
            _logicController._projectAddTodoSaveButton(targetProject, addTodoPane, savedValues);
        })
    }

    const attachProjectAddTodoCancelButton = (targetCancelButton, targetProject, addTodoPane) => {
        // console.log('here');
        targetCancelButton.addEventListener('click', () => {
            _logicController._projectAddTodoCancelButton(targetProject, addTodoPane);
        })
    }

    const attachSelectTodoForDeletion = (targetTodoDiv) => {
        targetTodoDiv.addEventListener('click', () => {
            // console.log('You clicked a todo Div in the delete pane!');
            _logicController._toggleSelectedDivForDeletion(targetTodoDiv)
        })
    }

    const attachProjectDeleteSelectedButton = (targetDeleteSelectedButton, targetProject, deleteTodoPane, todoPaneList) => {
        targetDeleteSelectedButton.addEventListener('click', () => {
            _logicController._projectDeleteTodoSelectedButton(targetProject, deleteTodoPane, todoPaneList);
        })
    }

    const attachProjectDeleteCancelButton = (targetDeleteCancel, targetProject, deleteTodoPane) => {
        targetDeleteCancel.addEventListener('click', () => {

            
            _logicController._projectDeleteTodoCancelButton(targetProject, deleteTodoPane);

            // _logicController._projectAddTodoCancelButton(targetProject, addTodoPane);
        })
    }

    const attachProjectDeleteCompletedButton = (targetDeleteCompletedButton, targetProject, deleteTodoPane, todoPaneList) => {
        targetDeleteCompletedButton.addEventListener('click', () => {
            // console.log(`You cliked the Delete Completed button from project: `)
            // console.log(targetProject.getProjectName());
            
            _logicController._projectDeleteTodoCompletedButton(targetProject, deleteTodoPane, todoPaneList);
        })
    }

    const attachTodoListeners = (targetTodo, targetProject) => {
        const targetTodoDiv = targetTodo.getTodoDiv();
        targetTodoDiv.firstChild.addEventListener('click', () => {
            // console.log(`You clicked the first child of ${targetTodoDiv}`)
            _logicController._toggleCompletedTodo(targetTodo);
        })
        targetTodoDiv.firstChild.nextSibling.addEventListener('click', () => {
            // console.log(`You clicked the second child of ${targetTodoDiv}`)
            _logicController._toggleCompletedTodo(targetTodo);
        })
        targetTodoDiv.lastChild.addEventListener('click', () => {
            // console.log(`You clicked the last child of ${targetTodoDiv}`)
            _logicController._editTodoPane(targetTodo, targetProject);
        })
    }

    const attachEditTodoSaveButton = (targetSaveButton, targetProject, targetTodo, editTodoPaneDiv, savedValues) => {
        targetSaveButton.addEventListener('click', () => {
            _logicController._projectEditTodoSaveButton(targetProject, targetTodo, editTodoPaneDiv, savedValues);
        })
    }

    const attachEditTodoCancelButton = (targetCancelButton, targetProject, editTodoPaneDiv) => {
        targetCancelButton.addEventListener('click', () => {
            _logicController._projectAddTodoCancelButton(targetProject, editTodoPaneDiv);

        })
    }


    return {
        _toggleMenuOpen,
        attachProjectContainerAddButtonListener,
        attachAddProjectCancel,
        attachAddProjectPrioritySlider,
        attachProjectTodoPrioritySlider,
        attachAddProjectSave,
        attachProjectEditButton,
        attachProjectEditSaveButton,
        attachProjectEditCancelButton,
        attachProjectEditDeleteButton,
        attachProjectTodoAddButton,
        attachProjectTodoDeleteButton,
        attachProjectAddTodoSaveButton,
        attachProjectAddTodoCancelButton,
        attachSelectTodoForDeletion,
        attachProjectDeleteSelectedButton,
        attachProjectDeleteCancelButton,
        attachProjectDeleteCompletedButton,
        attachTodoListeners,
        attachEditTodoSaveButton,
        attachEditTodoCancelButton,



    }

}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventController);

/***/ }),

/***/ "./src/logicController.js":
/*!********************************!*\
  !*** ./src/logicController.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectContainerObj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectContainerObj.js */ "./src/projectContainerObj.js");
/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController.js */ "./src/displayController.js");
/* harmony import */ var _eventController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventController.js */ "./src/eventController.js");
/* harmony import */ var _todoObj_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoObj.js */ "./src/todoObj.js");
// I am the logicController, I decide logic whenever events are fired by their eventHandler

// Lessons learned from using Dates in my project
// 1. Don't use Dates
// 2. If you have to use dates, don't use them in input forms
// 3. If you have to use them in input forms, use everything in milliseconds and only convert to year/month/day for display purposes
// 4. Do you really have to use Dates? Really? Can we just... not?
// 5. For timezone inconsistencies when constructing Dates without specific times, try to use getTime() for milliseconds baseline, and adjust for getTimezoneOffset() when necessary



// import {eventController, attachAddButtonListener } from './eventController.js';



// import projectObj from './project.js';


function logicController() {

    let _projectContainer = (0,_projectContainerObj_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    let _displayController = (0,_displayController_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    let _contentDiv = document.getElementById('content'); //_contentDiv should have its own getters and setters for typechecking and safety, but is only invoked and instantiated once on page init to be populated with generateProjectContainer(), so it gets a pass here
    let _eventController = (0,_eventController_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this);
    let _useLocalStorage;

    // Test for local storage support and availability, see storageAvailable comments for more details
    if(storageAvailable('localStorage')) {
        _useLocalStorage = true;
    } else {
        _useLocalStorage = false;
    }




    const getInfo = () => {
        return `I am logicController.getInfo()
        These are my values:
        _projectContainer: ${_projectContainer};
        _contentDiv: ${_contentDiv};
        `;
    }
    this.getInfo = getInfo;


    // Init isn't being used at all in logicController, maybe it's safe to remove? XXXUPDATEXXX Trace this
    const init = (newProjectContainerObj) => {
        _projectContainer = newProjectContainerObj;
    }

    const generateProjectContainerObj = () => {

        // console.log('second test')

        const projectContainerDivArr = _displayController.generateProjectContainerDiv(); 

        const projectContainerDiv = projectContainerDivArr[0]
        const addButton = projectContainerDivArr[1];
        _projectContainer.init([], projectContainerDiv, addButton, false);;
        _eventController.attachProjectContainerAddButtonListener(addButton);

        _contentDiv.appendChild(projectContainerDiv);

        // If applicable, read from localStorage 
        _readLocalStorage()

    }

    const getProjectContainer = () => {
        return _projectContainer;
    }
    this.getProjectContainer = getProjectContainer;

    // In a perfect world, this setter function typechecks newProjectContainer to always receive a projectContainerObj from projectContainerObj. For the purpose of this project, it should only be invoked once when the page is first loaded and not changed from that initial container - even if no projects exist, the container should still be present. 
    const setProjectContainer = (newProjectContainer) => {
        _projectContainer = newProjectContainer;
    }
    this.setProjectContainer = setProjectContainer;

    const _toggleProjectContainerAddButtonMenu = () => {

        // console.log(`toggle projectContainerObj's addButtonMenu`);

        // console.log('Check if the menu is in a state to be opened');
        if( !_projectContainer.getAddButtonMenu()) {
            _projectContainer.toggleAddButtonMenu();
            // console.log(_projectContainer.getAddButtonMenu());

            let _addMenu = _displayController.generateProjectContainerAddButtonMenu();
            _projectContainer.getProjectContainerDiv().appendChild(_addMenu[0]);

            // Add event handlers to priority color slider, and buttons, keep reference of div objects referring to input.value


            // console.log('addButtonMenu is in a state to be opened, go to displayController and build the div necessary to populate the menu');

            // Adding Event listeners to appropriate objects in addButtonMenu
            // return [finishedDiv, nameInput, priorityInput, priorityLabel, dueDateInput, creationDate, saveButton, cancelButton]
            
            // console.log('Adding eventlistener to cancel button');
            _eventController.attachAddProjectCancel(_addMenu[7], _addMenu[0]);

            // console.log('Adding eventListener to priority slider');
            _eventController.attachAddProjectPrioritySlider(_addMenu[2], _addMenu[3]);

            // console.log('Adding functionality to save button');
            _eventController.attachAddProjectSave(_addMenu[6], _addMenu);




        } else {
            console.log('_projectContainerMenu is true, and is already open: _projectContainer._addButtonMenu: ' + _projectContainer.getAddButtonMenu());
        }
        return true;
    }
    this._toggleProjectContainerAddButtonMenu = _toggleProjectContainerAddButtonMenu;

    const _addProjectSaveButton = (values) => {
        // values is the _addMenu array created in _toggleProjectContainerAddButtonMenu
        
        // get values from appropriate input fields
        // Do thing to values
        // close menu

        // console.log(values);

        // let sampleDiv = document.createElement('div');
        // sampleDiv.classList.add('project-pane');
        // _projectContainer.getProjectContainerDiv().appendChild(sampleDiv);

        const nameInput = values[1].value;
        const priorityInput = values[2].value;
        // console.log(values[4].value)
        let dueDateInput;
        if ( values[4].value ) {
            dueDateInput = new Date(values[4].valueAsDate);
            // Compensating for timezoneOffset in display
            let timezoneOffset = dueDateInput.getTimezoneOffset()
            let newLocalizedDueDateInput = dueDateInput.getTime() + (timezoneOffset * 60000);
            dueDateInput = new Date(newLocalizedDueDateInput);

        } else {
            dueDateInput = new Date();
        }
        // console.log(dueDateInput);
        const creationDateInput = values[5];
        // const projectDivInput = sampleDiv;

        // console.log(`I am Save button, you clicked me. Here's what I am returning: 
        // nameInput: ${nameInput}
        // priorityInput: ${priorityInput}
        // dueDateInput: ${dueDateInput}
        // creationDate: ${creationDateInput}`)
        
        _generateProject(nameInput, creationDateInput, dueDateInput, priorityInput, []);


        // Do the thing to instantiate a new project here

        // // Generate appropriate projectPane div here
        // //  ------- XXXUPDATEXXX -------
               
        // let todoListInput = [];
        // let projectPaneValues = _displayController.generateProjectPane(nameInput, priorityInput, dueDateInput, creationDateInput, todoListInput);

        // // console.log(_projectContainer.getInfo());
        // _projectContainer.createProject( nameInput, creationDateInput, dueDateInput, priorityInput, projectDivInput );


// projectNameInput, creationDateInput, dueDateInput, projectPriorityInput, projectDivInput, todoListInput

        // Closing the addProject Menu
        _projectContainer.toggleAddButtonMenu();
        _projectContainer.getProjectContainerDiv().removeChild(values[0]);

        // Update Local Storage
        _writeLocalStorage();

    }
    this._addProjectSaveButton = _addProjectSaveButton;

    const _addProjectCancelButton = (div) => {
        // Toggle menu bool to closed
        // Close menu
        if( _projectContainer.getAddButtonMenu() ) {
            // console.log(`Current state of ${_projectContainer.getAddButtonMenu()}`);
            _projectContainer.toggleAddButtonMenu();
            _projectContainer.getProjectContainerDiv().removeChild(div);
            return true;
        } else {
            return false;
        }
    }
    this._addProjectCancelButton = _addProjectCancelButton;
    
    const _updatePriorityColor = (targetDiv, newValue) => {
        // console.log(newValue);
        // console.log(`I am _updatePriorityColor! I have been called on targetDiv: ${targetDiv} with newValue: ${newValue}`)
        // console.log(typeof newValue);

        // Typechanging newValue to a string to hit the switch statement's strict type checking
        // let newValueString = '';
        // newValueString = newValueString + newValue;

        targetDiv.classList.remove("one");
        targetDiv.classList.remove("two");
        targetDiv.classList.remove("three");
        targetDiv.classList.remove("four");
        targetDiv.classList.remove("five");

        switch(newValue) {
            case '1':
                targetDiv.classList.add("one");
                break;
            case '2':
                targetDiv.classList.add("two");
                break;
            case '3':
                targetDiv.classList.add("three");
                break;
            case '4':
                targetDiv.classList.add("four");
                break;
            case '5':
                targetDiv.classList.add("five");
                break;
        }

    }
    this._updatePriorityColor = _updatePriorityColor;

    const _updateTodoPriorityColor = (targetDiv, newValue) => {
        // console.log(newValue);
        // console.log(`I am _updatePriorityColor! I have been called on targetDiv: ${targetDiv} with newValue: ${newValue}`)
        // console.log(typeof newValue);

        // Typechanging newValue to a string to hit the switch statement's strict type checking
        // let newValueString = '';
        // newValueString = newValueString + newValue;

        targetDiv.classList.remove("one-todo");
        targetDiv.classList.remove("two-todo");
        targetDiv.classList.remove("three-todo");
        targetDiv.classList.remove("four-todo");
        targetDiv.classList.remove("five-todo");

        switch(newValue) {
            case '1':
                targetDiv.classList.add("one-todo");
                break;
            case '2':
                targetDiv.classList.add("two-todo");
                break;
            case '3':
                targetDiv.classList.add("three-todo");
                break;
            case '4':
                targetDiv.classList.add("four-todo");
                break;
            case '5':
                targetDiv.classList.add("five-todo");
                break;
        }

    }
    this._updateTodoPriorityColor = _updateTodoPriorityColor;

    const _generateProject = (nameInput, creationDateInput, dueDateInput, priorityInput, todoListInput) => {

        // Generate projectPane Div
        // Generate projectObj
        // Attach functionality to appropriate Div elements, tying them to projectObj values

        // Sample todoList for use in test - XXXUPDATEXXX
        let sampleTodo = (0,_todoObj_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
        sampleTodo.init('sampleTrue with a really long name that is supposed to overflow onto the next line, I really hope that everything works out okay, trim it correctly please!', 'description', new Date(), new Date(), 5, 'notes', [], true);
        let sampleTodo2 = (0,_todoObj_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
        sampleTodo2.init('sampleFalse with a really long name that is supposed to overflow onto the next line, I really hope that everything works out okay, trim it correctly please!', 'description', new Date(), new Date(), 4, 'notes', [], false);
        let sampleTodo3 = (0,_todoObj_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
        sampleTodo3.init('False12345678901234567890124567890123456789012345678901234578901234567890', 'description', new Date(), new Date(), 2, 'notes', [], false);
        let sampleTodo4 = (0,_todoObj_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
        sampleTodo4.init('True12345678901234567890124567890123456789012345678901234578901234567890', 'description', new Date(), new Date(), 1, 'notes', [], true);


        let sampleTodoList = [sampleTodo,sampleTodo2, sampleTodo3, sampleTodo4];


        // XXXUPDATEXXX Remove this line when appropriate
        // console.log(todoListInput);
        // todoListInput = todoListInput.concat(sampleTodoList);
        // XXXUPDATEXXX Appending sampleTodoList to todoListInput, remove this later

        // Generate projectPane Div
        let projectPaneDivValues = _displayController.generateProjectPane(nameInput, priorityInput, dueDateInput, creationDateInput, todoListInput);
        _projectContainer.getProjectContainerDiv().appendChild(projectPaneDivValues[0]);

        // updatePriority color of projectPane
        _updatePriorityColor(projectPaneDivValues[2], priorityInput);

       
        // Generate projectObj
        let newProject = _projectContainer.createProject( nameInput, new Date(creationDateInput), new Date(dueDateInput), priorityInput,projectPaneDivValues[0], todoListInput );

        // Attach projectObj to _projectContainer._projectArr[]
        _projectContainer.addProject(newProject);


        // Attach functionality to appropriate Div elements, tying them to projectObj values
        newProject.setProjectDiv(projectPaneDivValues[0]);

        // attach projectEditButton functionality
        _eventController.attachProjectEditButton(projectPaneDivValues[1], newProject)

        // Attach todoButton functionality
        _eventController.attachProjectTodoAddButton(projectPaneDivValues[3], newProject);
        _eventController.attachProjectTodoDeleteButton(projectPaneDivValues[4], newProject);

        // Attach todoDiv Functionality
        // console.log(newProject.getTodoList());
        newProject.getTodoList().forEach(element => {
            _eventController.attachTodoListeners(element, newProject);
        })
        // XXXUPDATEXXX Replace the above function to take toDo elements from below
        // todoListInput.forEach(element => {
        //     _eventController.attachTodoListeners(element, newProject);
        // })




    }
    this._generateProject = _generateProject;

    const _editProject = (targetProject) => {
        // console.log(`You clicked the _editProject button targeting the project: `);
        // console.log(targetProject.getInfo());

        // Toggle menuOpen
        if(targetProject.getProjectMenuOpen()) {
            console.log("Error! Edit Project menu is returning true, and is already open!");
            return;
        } else {
            targetProject.toggleProjectMenuOpen();
        }
        

        // Generate editProjectPane
        const editPane = _displayController.generateProjectEditPane(targetProject);



        targetProject.getProjectDiv().appendChild(editPane[0]);

        // Assign initial Priority Slider Color
        _updatePriorityColor(editPane[2], targetProject.getProjectPriority());

        // Attach Priority Slider functionality
        _eventController.attachAddProjectPrioritySlider(editPane[1], editPane[2]);
        // _updatePriorityColor(editPane[0], targetProject.getProjectPriority());


        // Attach eventListeners to Save, Cancel and Delete buttons
        const editProjectSaveButton = editPane[3];
        const editProjectCancelButton = editPane[4];
        const editProjectDeleteButton = editPane[5];
        const savedInputs = editPane[6];
        _eventController.attachProjectEditSaveButton(editProjectSaveButton, targetProject, savedInputs);
        _eventController.attachProjectEditCancelButton(editProjectCancelButton, targetProject);
        _eventController.attachProjectEditDeleteButton(editProjectDeleteButton, targetProject);




    }
    this._editProject = _editProject;

    const _editProjectSaveButton = (targetProject, savedValues) => {
        // console.log(`You clicked the Save button on the EDIT page of the following project: `);
        // console.log(targetProject.getInfo());

        // On project save, close editPane, write new values to projectObj, update DOM values to match new projectObj values, toggleProjectMenuOpen()

        // console.log(`I have savedValues! Those are : `);
        // console.log(`Name: ${savedValues[0].value}`);
        // console.log(`Priority: ${toString(savedValues[1].value)}`);
        // console.log(`Due Date: ${savedValues[2].valueAsDate}`);
        // console.log(`Creation Date: ${savedValues[3].valueAsDate}`);


        // Write new values 
        targetProject.setProjectName(savedValues[0].value);
        targetProject.setProjectPriority(savedValues[1].value);


            // Write new dueDate if new dueDate !== oldDueDate values
            let newDueDate = savedValues[2].value;
            // console.log(`newDueDate: ${newDueDate}`); // format "2022-03-21"
            let oldDueDate = targetProject.getProjectDueDate();
            // console.log(`oldDueDate: ${oldDueDate}`);
            let oldDueDateString = `${oldDueDate.getFullYear()}-`
            if(oldDueDate.getMonth() + 1 < 10) {
                oldDueDateString += `0${oldDueDate.getMonth() + 1}-`
            } else {
                oldDueDateString += `${oldDueDate.getMonth() + 1}-`
            }
            if(oldDueDate.getDate() < 10) {
                oldDueDateString += `0${oldDueDate.getDate()}`
            } else {
                oldDueDateString += `${oldDueDate.getDate()}`
            }
            // console.log(`oldDueDateString: ${oldDueDateString}`);
            // console.log(`newDueDate: ${newDueDate} vs ${oldDueDateString}: oldDueDateString`);
            // console.log( newDueDate != oldDueDateString);
            if (newDueDate !== oldDueDateString ) {
                // console.log(`newDueDate !== oldDueDateString!`);
                // console.log(`Set new due date to ${newDueDate} with current time filled in!`);
                targetProject.setProjectDueDate(new Date(newDueDate));
            }

            // Write new creationDate if new creationDate !== oldCreationDate values
            let newCreationDate = savedValues[3].value;
            // console.log(`newCreationDate: ${newCreationDate}`); // format "2022-03-21"
            let oldCreationDate = targetProject.getProjectCreationDate();
            // console.log(`oldCreationDate: ${oldCreationDate}`);
            let oldCreationDateString = `${oldCreationDate.getFullYear()}-`
            if(oldCreationDate.getMonth() + 1 < 10) {
                oldCreationDateString += `0${oldCreationDate.getMonth() + 1}-`
            } else {
                oldCreationDateString += `${oldCreationDate.getMonth() + 1}-`
            }
            if(oldCreationDate.getDate() < 10) {
                oldCreationDateString += `0${oldCreationDate.getDate()}`
            } else {
                oldCreationDateString += `${oldCreationDate.getDate()}`
            }
            // console.log(`oldCreationDateString: ${oldCreationDateString}`);
            // console.log(`newCreationDate: ${newCreationDate} vs ${oldCreationDateString}: oldCreationDateString`);
            // console.log( newCreationDate != oldCreationDateString);
            if (newCreationDate !== oldCreationDateString ) {
                // console.log(`newCreationDate !== oldCreationDateString!`);
                // console.log(`Set new due date to ${newCreationDate} with current time filled in!`);
                targetProject.setProjectCreationDate(new Date(newCreationDate));
            }
       
        // console.log(` ----------- targetProject's new Data is: -------------`)
        // console.log(targetProject.getInfo());



        // Update DOM values to match new projectObj values
        let targetProjectDiv = targetProject.getProjectDiv();
        // console.log(targetProjectDiv);
            // Targeting name plate and adjusting nameplate priority
            let namePlateDiv = targetProjectDiv.firstChild
            // console.log(namePlateDiv);
            _updatePriorityColor(namePlateDiv, targetProject.getProjectPriority());
            let namePlateContentDiv = namePlateDiv.firstChild;
            // console.log(namePlateContentDiv);
            namePlateContentDiv.innerText = targetProject.getProjectName();

            // Targeting Project Date container 
            let projectDateContainerDiv = namePlateDiv.nextSibling.nextSibling;
            // console.log(projectDateContainerDiv);
            let projectCreationDateDiv = projectDateContainerDiv.firstChild;
            // Only change displayed date if the dates actually changed
            if (newCreationDate !== oldCreationDateString ) {
                
                let localizedCreationDate = targetProject.getProjectCreationDate();
                // console.log(localizedDueDate);
                // console.log(localizedDueDate.getTime());
                let timezoneOffset = localizedCreationDate.getTimezoneOffset();
                // console.log(timezoneOffset);
                // console.log(timezoneOffset * 60000);
                let newLocalizedCreationDate = localizedCreationDate.getTime() + (timezoneOffset * 60000);

                projectCreationDateDiv.innerText = (new Date(newLocalizedCreationDate)).toDateString();
            }
            let projectDueDateDiv = projectDateContainerDiv.lastChild;
            // Only change displayed date if the dates actually changed
            if (newDueDate !== oldDueDateString ) {
                 
                let localizedDueDate = targetProject.getProjectDueDate();
                // console.log(localizedDueDate);
                // console.log(localizedDueDate.getTime());
                let timezoneOffset = localizedDueDate.getTimezoneOffset();
                // console.log(timezoneOffset);
                // console.log(timezoneOffset * 60000);
                let newLocalizedDueDate = localizedDueDate.getTime() + (timezoneOffset * 60000);
                // console.log(newLocalizedDueDate);
                // console.log(new Date(newLocalizedDueDate));

                projectDueDateDiv.innerText = (new Date(newLocalizedDueDate)).toDateString();

            }


        // Close editPane and toggleProjectMenuOpen()
        let editPane = targetProject.getProjectDiv().querySelector('.project-edit-pane');
        targetProject.getProjectDiv().removeChild(editPane);
        targetProject.toggleProjectMenuOpen();


        // Update Local Storage
        _writeLocalStorage();



    }
    this._editProjectSaveButton = _editProjectSaveButton

    const _editProjectCancelButton = (targetProject) => {
        // console.log(`You clicked the Cancel button on the EDIT page of the following project: `);
        // console.log(targetProject.getInfo());
        // console.log(targetProject.getProjectDiv());

        let editPane = targetProject.getProjectDiv().querySelector('.project-edit-pane');

        // Remove the editPane div Child element from the targetProject
        targetProject.getProjectDiv().removeChild(editPane);
        // Toggle projectMenuOpen to false, so that the editMenu can be re-opened
        targetProject.toggleProjectMenuOpen();

    }
    this._editProjectCancelButton = _editProjectCancelButton;


    const _editProjectDeleteButton = (targetProject) => {
        // console.log(`You clicked the Delete button on the EDIT page of the following project: `);
        // console.log(targetProject.getInfo());
        // console.log(_projectContainer.getProjectArr()[0].getInfo());
        // console.log(_projectContainer.getInfo());
        // console.log(_projectContainer.getProjectArr());
        

        // Target Project Container and find it's index reference for targetProject
        const projectContainerArr = _projectContainer.getProjectArr();
        let index = 0;
        for (index; index < projectContainerArr.length; index++ ){
            // console.log(`Searching for targetProject (${targetProject.getProjectName()}) at index ${index}`);
            if(projectContainerArr[index] === targetProject) {
                // console.log(`You've found the project at index: ${index}. Do the thing to delete targetProject from _projectContainer._projectArr[]`);
                _projectContainer.deleteProject(index);
                _projectContainer.getProjectContainerDiv().removeChild(targetProject.getProjectDiv());
                break;
            } 
        }

        // Update Local Storage
        _writeLocalStorage();

    }
    this._editProjectDeleteButton = _editProjectDeleteButton;

    const _projectAddTodoButton = (targetProject) => {

        // console.log(`I'm in logicController, add todo button`);

        // console.log(`test if this project can open a menu, then open the Add toto menu targeting this project`);

        
        if(targetProject.getProjectMenuOpen()) {
            console.log(`TargetProject is NOT in a state to open a new menu, returning to cancel addTodoButton function`);
            return;
           
        }

        // console.log(`targetProject is in a state to open a menu, toggling and opening add todo menu`);
        targetProject.toggleProjectMenuOpen();

        // Add todo Menu
        const addTodoPaneValues = _displayController.generateProjectAddTodoPane(targetProject);
        const addTodoPane = addTodoPaneValues[0];
        const addTodoTitle = addTodoPaneValues[1];
        const addTodoDescription = addTodoPaneValues[2];
        const addTodoPriorityLabel = addTodoPaneValues[3];
        const addTodoPriorityValue = addTodoPaneValues[4];
        const addTodoNotesInput = addTodoPaneValues[5];
        const addTodoDueDateInput = addTodoPaneValues[6];
        const addTodoCreationDateInput = addTodoPaneValues[7];
        // Save and cancel buttons
        const addTodoSaveButton = addTodoPaneValues[8];
        const addTodoCancelButton = addTodoPaneValues[9];

        // Append Add Todo Menu to existing projectPane div
        const projectPane = targetProject.getProjectDiv();
        const projectNameContainer = projectPane.firstChild;
        const projectTodoElementContainer = projectNameContainer.nextSibling;
        projectTodoElementContainer.appendChild(addTodoPane);

        // Attach priority slider functionality
        _eventController.attachAddProjectPrioritySlider(addTodoPriorityValue, addTodoPriorityLabel);
        
        // Attach saveButton and cancelButton functionality     
        let savedValues = [addTodoTitle, addTodoDescription, addTodoPriorityValue, addTodoNotesInput, addTodoDueDateInput, addTodoCreationDateInput];
        _eventController.attachProjectAddTodoSaveButton(addTodoSaveButton, targetProject, addTodoPane, savedValues);
        _eventController.attachProjectAddTodoCancelButton(addTodoCancelButton, targetProject, addTodoPane);



    }
    this._projectAddTodoButton = _projectAddTodoButton;

    const _projectAddTodoSaveButton = (targetProject, addTodoPane, savedValues) => {
        // console.log(`You've click the save button on the add Todo Pane`)

        // Save values of new todoObj to targetProject
        // console.log(savedValues);
        // console.log(savedValues[0].value);
        let title = savedValues[0].value;
        const description = savedValues[1].value;
        const priority = savedValues[2].value;
        const notes = savedValues[3].value;
        let dueDate = savedValues[4].value;
        const creationDate = savedValues[5];

        if( dueDate == "") {
            // console.log(`default dueDate, overwriting with current date`);
            dueDate = new Date();
        }
        if (title == "") {
            title = "New To-Do";
        }

        // console.log(`title: ${title}
        // description: ${description}
        // priority: ${priority}
        // notes: ${notes}
        // dueDate: ${dueDate}
        // creationDate: ${creationDate}`)

        let newTodo = (0,_todoObj_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
        newTodo.init(title, description, dueDate, creationDate, priority, notes, [], false);
        // console.log(` --------- newTodo.getInfo() ---------- `)
        // console.log(newTodo.getInfo());
        // console.log(` --- targetproject.getTodoList() --- `)
        // console.log(targetProject.getTodoList());
        targetProject.addTodoObj(newTodo);
        // console.log(targetProject.getTodoList());
        // console.log(` -------------------------- targetProject.getTodoList()[0].getInfo()`);
        // console.log(targetProject.getTodoList()[0].getInfo());


        // Update targetProject's project-todo-list div appropriately
        const newTodoDiv = _displayController.generateTodoDiv(newTodo);
        const todoListContainer = targetProject.getProjectDiv().childNodes[1].childNodes[1].childNodes[0]; // This is positively filthy for stack-tracing.
        todoListContainer.appendChild(newTodoDiv);
        
        // Attach eventListeners to newly created toDo
        _eventController.attachTodoListeners(newTodo, targetProject);

        // Remove addTodoMenu from targetProject's project-pane div
        const todoElementContainer = targetProject.getProjectDiv().childNodes[1];
        todoElementContainer.removeChild(addTodoPane);
        // Toggle projectMenuOpen to false
        targetProject.toggleProjectMenuOpen();

        // Stack tracing example from the top of logic controller to each todo child
        // console.log(_projectContainer.getProjectArr()[0].getTodoList()[0].getInfo());

        // Update Local Storage
        _writeLocalStorage();

    }
    this._projectAddTodoSaveButton = _projectAddTodoSaveButton;

    const _projectAddTodoCancelButton = (targetProject, addTodoPane) => {
        // Target div and delete it
        const todoElementContainer = targetProject.getProjectDiv().childNodes[1];
        todoElementContainer.removeChild(addTodoPane);
        // Toggle projectMenuOpen to false
        targetProject.toggleProjectMenuOpen();

    }
    this._projectAddTodoCancelButton = _projectAddTodoCancelButton;

    const _projectDeleteTodoButton = (targetProject) => {

        // console.log(`I'm in logicController, delete todo button`);

        // console.log(`Test if this project can open a menu, then open the delete todo menu targeting this project`)

        if(targetProject.getProjectMenuOpen()) {
            console.log(`TargetProject is NOT in a state to open a new menu, returning to cancel deleteTodoButton function`);
            return;
        }

        // console.log(`targetProject is in a state to open a menu, toggling and opening deleteTodoMenu`);
        targetProject.toggleProjectMenuOpen();

        // Add todo Menu
        const deleteTodoPaneValues = _displayController.generateProjectDeleteTodoPane(targetProject);
        const deleteTodoPane = deleteTodoPaneValues[0];
        const deleteSelectedButton = deleteTodoPaneValues[1];
        const cancelButton = deleteTodoPaneValues[2];
        const deleteCompletedButton = deleteTodoPaneValues[3];
        const todoPaneList = deleteTodoPaneValues[4];

        // Append Add Todo Menu to existing projectPane div
        const projectPane = targetProject.getProjectDiv();
        const projectNameContainer = projectPane.firstChild;
        const projectTodoElementContainer = projectNameContainer.nextSibling;
        projectTodoElementContainer.appendChild(deleteTodoPane);

        // Attach functionality to buttons
        _eventController.attachProjectDeleteSelectedButton(deleteSelectedButton, targetProject, deleteTodoPane,todoPaneList);
        _eventController.attachProjectDeleteCancelButton(cancelButton, targetProject, deleteTodoPane);
        _eventController.attachProjectDeleteCompletedButton(deleteCompletedButton, targetProject, deleteTodoPane, todoPaneList);

        // Attach functionality to todoPaneList
        todoPaneList.forEach( element => {
            _eventController.attachSelectTodoForDeletion(element.getTodoDeletionDiv());
        });

    }
    this._projectDeleteTodoButton = _projectDeleteTodoButton;

    const _toggleSelectedDivForDeletion = (targetTodoDiv) => {
        // console.log(`You clicked a div element to target for deletion! Modifying its class to denote selection`);
        targetTodoDiv.classList.toggle('marked-for-deletion');
    }
    this._toggleSelectedDivForDeletion = _toggleSelectedDivForDeletion;

    const _projectDeleteTodoSelectedButton = (targetProject, deleteTodoPane, todoPaneList) => {

        let projectTodoElementContainer = targetProject.getProjectDiv().querySelector('.project-todo-element-container');
        let todoList = projectTodoElementContainer.querySelector('.todo-list');
        let todoListCompleted = projectTodoElementContainer.querySelector('.todo-list-completed');

        let markedForDeletion = []
        todoPaneList.forEach( element => {
            let todoClass = element.getTodoDeletionDiv().classList.contains("marked-for-deletion");
            if(todoClass) {
                markedForDeletion.push(element);
            }
        })

        // console.log(`The follow to-do elements are marked for deletion: `);
        // console.log(markedForDeletion);
        markedForDeletion.forEach(element => {
            // console.log(`Deleting the following todo: ${element.getTitle()}
            // from targetProject: ${targetProject.getProjectName()}`)
            targetProject.removeTargetTodo(element);
            
            if( element.getComplete() ){
                todoListCompleted.removeChild(element.getTodoDiv());
            } else {
                todoList.removeChild(element.getTodoDiv());
            }
        })

        // console.log(targetProject.getTodoList());

        // Remove the deleteTodoPane div Child element from the targetProject
        projectTodoElementContainer.removeChild(deleteTodoPane);
        // Toggle projectMenuOpen to false, so that the editMenu can be re-opened
        targetProject.toggleProjectMenuOpen();

        // Update Local Storage
        _writeLocalStorage();

    }
    this._projectDeleteTodoSelectedButton = _projectDeleteTodoSelectedButton;

    const _projectDeleteTodoCancelButton = (targetProject, deleteTodoPane) => {

        let projectTodoElementContainer = targetProject.getProjectDiv().querySelector('.project-todo-element-container');

        // Remove the deleteTodoPane div Child element from the targetProject
        projectTodoElementContainer.removeChild(deleteTodoPane);
        // Toggle projectMenuOpen to false, so that the editMenu can be re-opened
        targetProject.toggleProjectMenuOpen();

    }
    this._projectDeleteTodoCancelButton = _projectDeleteTodoCancelButton;
    
    const _projectDeleteTodoCompletedButton = (targetProject, deleteTodoPane, todoPaneList) => {

        let projectTodoElementContainer = targetProject.getProjectDiv().querySelector('.project-todo-element-container');
        let todoListCompleted = projectTodoElementContainer.querySelector('.todo-list-completed');

        let markedForDeletion = []
        todoPaneList.forEach( element => {
            let todoClass = element.getTodoDeletionDiv().classList.contains("todo-completed");
            if(todoClass) {
                markedForDeletion.push(element);
            }
        })

        // console.log(`The follow to-do elements are marked for deletion: `);
        // console.log(markedForDeletion);
        markedForDeletion.forEach(element => {
            // console.log(`Deleting the following todo: ${element.getTitle()}
            // from targetProject: ${targetProject.getProjectName()}`)
            targetProject.removeTargetTodo(element);
            todoListCompleted.removeChild(element.getTodoDiv());
        })

        // console.log(targetProject.getTodoList());







        // Remove the deleteTodoPane div Child element from the targetProject
        projectTodoElementContainer.removeChild(deleteTodoPane);
        // Toggle projectMenuOpen to false, so that the editMenu can be re-opened
        targetProject.toggleProjectMenuOpen();

        // Update Local Storage
        _writeLocalStorage();


    }
    this._projectDeleteTodoCompletedButton = _projectDeleteTodoCompletedButton;


    const _toggleCompletedTodo = (targetTodo) => {

        // console.log(`You clicked toggleSelectedTodo targeting: ${targetTodo}`);

        const targetTodoDiv = targetTodo.getTodoDiv();
        targetTodoDiv.classList.toggle('todo-completed');
        targetTodoDiv.classList.toggle('todo-incomplete');

        // Generating div references for easy docing of next if statement deciding functionality
        const projectTodoList = targetTodoDiv.parentNode.parentNode;
        const todoList = projectTodoList.firstChild;
        const todoListCompleted = projectTodoList.querySelector('.todo-list-completed');
        
        let isComplete = targetTodo.getComplete();
        if( isComplete ) {
            targetTodoDiv.firstChild.checked = false;
            targetTodo.setComplete(false);
            todoList.appendChild(targetTodoDiv);
        } else {
            targetTodoDiv.firstChild.checked = true;
            targetTodo.setComplete(true);
            todoListCompleted.appendChild(targetTodoDiv);
        }

        // Update Local Storage
        _writeLocalStorage();
    }
    this._toggleCompletedTodo = _toggleCompletedTodo;

    const _editTodoPane = (targetTodo, targetProject) => {

        // console.log(`You clicked the edit button target todo: ${targetTodo.getTitle()}`);

        // Toggle projectMenuOpen, generate editTodoPane, appendEditTodoPane, attach eventListeners to appropriate fields and buttons

        if(targetProject.getProjectMenuOpen()) {
            console.log(`TargetProject is NOT in a state to open a new menu, returning to cancel addTodoButton function`);
            return;
        }
        // console.log(`targetProject is in a state to open a menu, toggling and opening add todo menu`);
        targetProject.toggleProjectMenuOpen();

        let editTodoPaneValues = _displayController.generateEditTodoPane(targetTodo);
        const editTodoPaneDiv = editTodoPaneValues[0];
        const editTodoTitleInput = editTodoPaneValues[1];
        const editTodoDescriptionInput = editTodoPaneValues[2];
        const editTodoPriorityLabel = editTodoPaneValues[3];
        const editTodoPriorityInput = editTodoPaneValues[4];
        const editTodoNotesInput = editTodoPaneValues[5];
        const editTodoDueDateInput = editTodoPaneValues[6];
        const editTodoCreationDateInput = editTodoPaneValues[7];
        const editTodoSaveButton = editTodoPaneValues[8];
        const editTodoCancelButton = editTodoPaneValues[9];

        // Update and attach priority slider functionality
        _updatePriorityColor(editTodoPriorityLabel, editTodoPriorityInput.value);
            // Attach Priority Slider functionality
        _eventController.attachAddProjectPrioritySlider(editTodoPriorityInput, editTodoPriorityLabel);
        
        // Attach functionality to Save and Cancel Buttons
        let savedValues = [editTodoTitleInput, editTodoDescriptionInput, editTodoPriorityInput, editTodoNotesInput, editTodoDueDateInput, editTodoCreationDateInput]
        _eventController.attachEditTodoSaveButton(editTodoSaveButton, targetProject, targetTodo, editTodoPaneDiv, savedValues);
        _eventController.attachEditTodoCancelButton(editTodoCancelButton, targetProject, editTodoPaneDiv);
       

        // Append editTodoPane to the DOM
        const todoList = targetTodo.getTodoDiv().parentNode;
        const projectTodoList = todoList.parentNode;
        const projectTodoElementContainer = projectTodoList.parentNode;
        projectTodoElementContainer.appendChild(editTodoPaneDiv);



    }
    this._editTodoPane = _editTodoPane;

    const _projectEditTodoSaveButton = (targetProject, targetTodo, editTodoPaneDiv, savedValues) => {
        // console.log('-----------------------------------')
        // console.log(`I am _projectEditTodoSaveButton. Here are my todo initial values`);
        // console.log(targetTodo.getInfo());
        // console.log('-----------------------------------')
        
//         let savedValues = [editTodoTitleInput, editTodoDescriptionInput, editTodoPriorityInput, editTodoNotesInput, editTodoDueDateInput, editTodoCreationDateInput]


        // Save the new values to targetTodo
        // console.log(`savedValues are as follows:
        // titleInput: ${savedValues[0].value}
        // descriptionInput: ${savedValues[1].value}
        // priorityInput: ${savedValues[2].value}
        // notesInput: ${savedValues[3].value}
        // dueDateInput: ${savedValues[4].valueAsDate}
        // creationDateInput: ${savedValues[4].valueAsDate}`);

        targetTodo.setTitle(savedValues[0].value);
        targetTodo.setDescription(savedValues[1].value);
        targetTodo.setPriority(savedValues[2].valueAsNumber);
        targetTodo.setNotes(savedValues[3].value);

            // Write new dueDate if new dueDate !== oldDueDate values
            let newDueDate = savedValues[4].value;
            // console.log(`newDueDate: ${newDueDate}`); // format "2022-03-21"
            let oldDueDate = targetTodo.getDueDate();
            // console.log(`oldDueDate: ${oldDueDate}`);
            let oldDueDateString = `${oldDueDate.getFullYear()}-`
            if(oldDueDate.getMonth() + 1 < 10) {
                oldDueDateString += `0${oldDueDate.getMonth() + 1}-`
            } else {
                oldDueDateString += `${oldDueDate.getMonth() + 1}-`
            }
            if(oldDueDate.getDate() < 10) {
                oldDueDateString += `0${oldDueDate.getDate()}`
            } else {
                oldDueDateString += `${oldDueDate.getDate()}`
            }
            // console.log(`oldDueDateString: ${oldDueDateString}`);
            // console.log(`newDueDate: ${newDueDate} vs ${oldDueDateString}: oldDueDateString`);
            // console.log( newDueDate != oldDueDateString);
            if (newDueDate !== oldDueDateString ) {
                // console.log(`newDueDate !== oldDueDateString!`);
                // console.log(`Set new due date to ${newDueDate} with current time filled in!`);
                targetTodo.setDueDate(new Date(newDueDate));
            }

            // Write new creationDate if new creationDate !== oldCreationDate values
            let newCreationDate = savedValues[5].value;
            // console.log(`newCreationDate: ${newCreationDate}`); // format "2022-03-21"
            let oldCreationDate = targetTodo.getCreationDate();
            // console.log(`oldCreationDate: ${oldCreationDate}`);
            let oldCreationDateString = `${oldCreationDate.getFullYear()}-`
            if(oldCreationDate.getMonth() + 1 < 10) {
                oldCreationDateString += `0${oldCreationDate.getMonth() + 1}-`
            } else {
                oldCreationDateString += `${oldCreationDate.getMonth() + 1}-`
            }
            if(oldCreationDate.getDate() < 10) {
                oldCreationDateString += `0${oldCreationDate.getDate()}`
            } else {
                oldCreationDateString += `${oldCreationDate.getDate()}`
            }
            // console.log(`oldCreationDateString: ${oldCreationDateString}`);
            // console.log(`newCreationDate: ${newCreationDate} vs ${oldCreationDateString}: oldCreationDateString`);
            // console.log( newCreationDate != oldCreationDateString);
            if (newCreationDate !== oldCreationDateString ) {
                // console.log(`newCreationDate !== oldCreationDateString!`);
                // console.log(`Set new due date to ${newCreationDate} with current time filled in!`);
                targetTodo.setCreationDate(new Date(newCreationDate));
            }

        // Update the todo DOM elements to reflect the updated values
        let newTitle = "";
        if (savedValues[0].value.length > 32) {
            // console.log(savedValues[0].value)
            for ( let i = 0; i < 34; i++) {
                newTitle += savedValues[0].value.charAt(i);
            }
            newTitle += "...";
        } else {
            newTitle = savedValues[0].value;
        }
        targetTodo.getTodoDiv().firstChild.nextSibling.innerText = newTitle;



        // Target div and delete it
        const todoElementContainer = targetProject.getProjectDiv().childNodes[1];
        todoElementContainer.removeChild(editTodoPaneDiv);
        // Toggle projectMenuOpen to false
        targetProject.toggleProjectMenuOpen();

        // Update Local Storage
        _writeLocalStorage();
        
    }
    this._projectEditTodoSaveButton = _projectEditTodoSaveButton;

// ---------------------------- localStorage ----------------------------

// function that detects whether localStorage is both supported and available:
    // Pulled from link - 
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
    function storageAvailable(type) {
        var storage;
        try {
            storage = window[type];
            var x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch(e) {
            return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                (storage && storage.length !== 0);
        }
    }
    
    function isLocalStorageEmpty() {
        console.log("I am isLocalStorageEmpty, I still need functionality implemented here");
        
        if(localStorage.key(0) === null ){
            // yes, instert functionality here
            console.log("localStorage is empty");
        } else {
            // no, insert functionality here
            console.log("localStorage has values, here they are") 
                for ( let i = 0; localStorage.key(i) != null; i++) {
                    console.log(`${localStorage.key(i)} : ${localStorage.getItem(localStorage.key(i))}`);
                }
        }
    }
    






































    const _writeLocalStorage = () => {

        if( !_useLocalStorage) return;
        // console.log(' ------------------------------------ _writeLocalStorage() ------------------------------------');
        localStorage.clear();
        let result = _projectContainer.writeProjArrLocalStorage();
        if (!result) {
            return false;
        }
        // console.log(result);
        return true;

    }
    this._writeLocalStorage = _writeLocalStorage;

    const _readLocalStorage = () => {

        if( !_useLocalStorage) return;
        // console.log(' ------------------------------------ _readLocalStorage() ------------------------------------');

        let newProjectArr = _projectContainer.readProjectArrLocalStorage();
        // console.log(newProjectArr[0]);
        if( newProjectArr ) {
            for ( let index = 0; index < newProjectArr.length; index++) {
                _generateProject(newProjectArr[index][0], newProjectArr[index][1], newProjectArr[index][2], newProjectArr[index][3], newProjectArr[index][4] )
            }
        }



    }
    this._readLocalStorage = _readLocalStorage;




    // _readLocalStorage();


    return {
        getInfo, init,
        getProjectContainer, setProjectContainer,
        generateProjectContainerObj,
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logicController);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _todoObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoObj */ "./src/todoObj.js");





const projectObj = () => {
 
    let _projectName;
    let _todoList = [];
    let _projectCreationDate;
    let _dueDate;
    let _projectPriority;
    let _projectDiv;
    let _projectMenuOpen = false;

    const getInfo = () => {
        return `        _projectName: ${_projectName}
        _todoList: ${_todoList}
        _projectCreationDateDate: ${_projectCreationDate}
        _dueDate: ${_dueDate}
        _projectPriority: ${_projectPriority}
        _projectDiv: ${_projectDiv}
        _projectMenuOpen: ${_projectMenuOpen}`
    }

    const init = (projectName, todoList, creationDate, dueDate, projectPriority, projectDiv, projectMenuOpen) => {
        _projectName = projectName;
        _todoList = todoList;
        _projectCreationDate = creationDate;
        _dueDate = dueDate;
        _projectPriority = projectPriority;
        _projectDiv = projectDiv;
        _projectMenuOpen = projectMenuOpen;
        return true;
    }

    const getProjectName = () => {
        return _projectName;
    }

    const setProjectName = (newName) => {
        if( typeof newName === "string") {
            _projectName = newName; 
            return true;
        } else {
            console.log('projectObj.setProjectName Error! tried to pass a non-string into the _name field!');
            return false;
        }
    }

    const getProjectCreationDate = () => {
        return _projectCreationDate;
    }

    const setProjectCreationDate = (newCreationDate) => {
        if( (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(newCreationDate)) {
            _projectCreationDate = newCreationDate; 
            return true;
        } else {
            console.log('projectObj.setProjectCreationDate Error! tried to pass a non-date into the _projectCreationDate field!');
            return false;
        }
    }
    
    const getProjectDueDate = () => {
        return _dueDate;
    }

    const setProjectDueDate = (newDueDate) => {
        if( (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(newDueDate)) {
            _dueDate = newDueDate; 
            return true;
        } else {
            console.log('projectObj.setCreationDueDate Error! tried to pass a non-date into the _dueDate field!');
            return false;
        }
    }
    
    const getProjectPriority = () => {
        return _projectPriority;
    }

    const setProjectPriority = (newPriority) => {
        // This is a bit filthy. Should take numbers, 1,2,3,4,5, or string representation of these same numbers. XXXUPDATEXXX Clean this.
        if( typeof newPriority === "number" || typeof newPriority === "string" ) {
            _projectPriority = newPriority; 
            return true;
        } else {
            console.log('projectObj.setProjectPriorty Error! tried to pass a non-number into the _projectPriority field!');
            return false;
        }
    }

    const getProjectDiv = () => {
        return _projectDiv;
    }

    const setProjectDiv = (newDiv) => {
        _projectDiv = newDiv;
        return true;
    }

    const getProjectMenuOpen = () => {
        return _projectMenuOpen;
    }

    const setProjectMenuOpen = (menuOpen) => {
        if (typeof menuOpen === "boolean") {
            _projectMenuOpen = menuOpen;
            return _projectMenuOpen;
        } else {
            console.log("ERROR in setProjectMenuOpen! Tried to pass a non-boolean!")
            return;
        }
    }

    const toggleProjectMenuOpen = () => {
        if (_projectMenuOpen) {
            _projectMenuOpen = false;
        } else {
            _projectMenuOpen = true;
        }
    }

    const getTodoList = () => {
        return _todoList;
    }

    const setTodoList = (newTodoList) => {
        if( typeof newTodoList === "object") {
            // I can rewrite this with a loop and the args[] to take multiple new objects, but for my purposes, I will only ever be setting this todoList one array at a time
            _todoList = new Array(newTodoList);
            return true;
        } else {
            console.log('projectObj.setTodoList error! tried to pass a non-object into the _todoList field!');
            return false;
        }
    }

    const addTodo = (title, description, dueDate, creationDate, priority, notes, checklist, complete) => {
        const newTodo = (0,_todoObj__WEBPACK_IMPORTED_MODULE_0__["default"])();
        newTodo.init(title, description, dueDate, creationDate, priority, notes, checklist, complete);
        _todoList.push(newTodo);
    }

    const addTodoObj = (newTodo) => {

        if(typeof newTodo === "object") {
            _todoList.push(newTodo);
            return true;
        } else {
            console.log('projectObj.addTodoObj error! tried to pass a non-object to the _todoList!')
            return false;
        }           

    }

    // Takes an integer 'target'
    const removeTodo = (target) => {
        if(_todoList.length > 0) {
            _todoList.splice(target, 1);
            return true;
        } else {
            console.log('projectObj.removeTodo Error! tried to remove an element from an empty _todoList!');
            console.log(getTodoList());
            return false;
        }
    }

    const removeTargetTodo = (targetTodo) => {
        if(_todoList.length > 0) {
            let _newList = _todoList.filter(element => element != targetTodo);
            _todoList = _newList;
            return true;
        } else {
            console.log('projectObj.removeTargetTodo Error! tried to remove an element from an empty _todoList!');
            return false;
        }
    }

    const reorderTodo = (target, destination) => {
        if(target < _todoList.length && destination < _todoList.length) {
            // console.log('For Debugging: Console log of OLD _todoList: ');
            // console.log(getTodoList());
            _todoList.splice(destination, 0, (_todoList.splice(target, 1)[0]));
            // console.log('For Debugging: Console log of NEW _todoList: ');
            // console.log(getTodoList());
            return true;
        } else {
            console.log('projectObj.reorderTodo Error! Tried to pass a value greater than _todoList.length for target or destination!');
            return false;
        }
    }

    const writeProjectLocalStorage = (index) => {
        // console.log(`I am writeProjectLocal Storage, taking index: ${index}, targeting project: ${getProjectName()}`);
        // console.log(`Writing my values to localStorage`);

        // console.log(`My values are as follows: 
        // name: ${getProjectName()}
        // priority: ${getProjectPriority()}
        // dueDate: ${getProjectDueDate()}
        // creationDate: ${getProjectCreationDate()}
        // todoList: ${getTodoList()}
        // todoList.length: ${getTodoList().length}`);

        localStorage.setItem(`project${index}Name`, `${getProjectName()}`);
        localStorage.setItem(`project${index}Priority`, `${getProjectPriority()}`);
        localStorage.setItem(`project${index}DueDate`, `${getProjectDueDate()}`);
        localStorage.setItem(`project${index}CreationDate`, `${getProjectCreationDate()}`);
        localStorage.setItem(`project${index}TodoListLength`, `${getTodoList().length}`);

        // Set the follow to be a loop that runs over todoList and runs writeTodoLocalStorage() for each of them, taking projectIndex and todoIndex as a value
        for( let todoIndex = 0; todoIndex < getTodoList().length; todoIndex++ ) {
            // _projectArr[i].writeProjectLocalStorage(i);
            let result = getTodoList()[todoIndex].writeTodoLocalStorage(index, todoIndex);
            if (!result) {
                return false;
            }
        }

        // localStorage.setItem(`project${index}TodoList`, `${getTodoList()}`);

        return true;
    }


     return {
        getInfo,
        init,
        getProjectName, setProjectName,
        getProjectCreationDate, setProjectCreationDate,
        getProjectDueDate, setProjectDueDate,
        getProjectPriority, setProjectPriority,
        getProjectDiv, setProjectDiv,
        getProjectMenuOpen, setProjectMenuOpen, toggleProjectMenuOpen,
        getTodoList, setTodoList, addTodo, addTodoObj, removeTodo, removeTargetTodo, reorderTodo,
        writeProjectLocalStorage,
        
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectObj);

/***/ }),

/***/ "./src/projectContainerObj.js":
/*!************************************!*\
  !*** ./src/projectContainerObj.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _todoObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoObj */ "./src/todoObj.js");





// I am projectContainerObj. I house an object that contains all of projectObs and also contain the <div> reference to relevant DOM elements for later manipulation by logicController

const projectContainerObj = () => {

    let _projectArr = [];
    let _projectContainerDiv;
    let _addButton;
    let _addButtonMenu = false;


    const getInfo = () => {
        return `I am projectContainerObj.getInfo()
        _projectArr: ${_projectArr}
        _projectContainerDiv: ${_projectContainerDiv}
        _addButton: ${_addButton}
        _addButtonMenu: ${_addButtonMenu}`
    }

    const init = (newProjectArr, newProjectContainerDiv, newAddButton, newAddButtonMenu) => {
        _projectArr = newProjectArr;
        _projectContainerDiv = newProjectContainerDiv
        _addButton = newAddButton;
        _addButtonMenu = newAddButtonMenu;
    }

    const getProjectArr = () => {
        return _projectArr;
    }

    const setProjectArr = (newProjectArr) => {
        if (typeof newProjectArr === "object") {
            _projectArr = newProjectArr;
            return true;
        } else {
            console.log('projectContainerObj._setProjectArr Error! tried to pass a non-object into the _projectArr field!');
            return false;
        }
    }

    const addProject = (newProjectObj) => {
        if(typeof newProjectObj === "object") {
            _projectArr.push(newProjectObj);
            return true;
        } else {
            console.log('projectContainerObj._addProjectArr Error! tried to pass a non-object to push into _projectArr!');
            return false;
        }
    }

    const deleteProject = (index) => {
        if(typeof index === "number" && index < _projectArr.length) {
            _projectArr.splice(index, 1);
            return true;
        } else {
            console.log('projectContainerObj.deleteProject Error! tried to pass a non-number to index for _projectArr.splice OR index >= _projectArr.length: ' + index);
            return false;
        }
    }

    const getProjectContainerDiv = () => {
        return _projectContainerDiv;
    }

    // In an ideal world, this type checks to see that newProjectContainerDiv is a Node.
    const setProjectContainerDiv = (newProjectContainerDiv) => {
        // if (typeof newProjectContainerDiv === "object") {
            _projectContainerDiv = newProjectContainerDiv;
            return true;
        // } else {
            // console.log('projectContainerObj._setProjectArr Error! tried to pass a non-object into the _projectArr field!');
            // return false;
        
    }

    const getAddButton = () => {
        return _addButton;
    }

    // See type checking comment for setProjectContainerDiv
    const setAddButton = () => {
        _projectContainerDiv = newProjectContainerDiv;
        return true;
    }

    const getAddButtonMenu = () => {
        return _addButtonMenu;
    }

    const toggleAddButtonMenu = () => {
        if (_addButtonMenu) {
            _addButtonMenu = false;
        } else {
            _addButtonMenu = true;
        }
    }

    const createProject = (projectNameInput, creationDateInput, dueDateInput, projectPriorityInput, projectDivInput, todoListInput) => {
        let newProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

        // Optional switch here, a project can be created without an active todoList, which instead generates an empty array
        if( todoListInput ) {
            newProject.init(projectNameInput, todoListInput, creationDateInput, dueDateInput, projectPriorityInput, projectDivInput, false);
            // console.log(newProject.getInfo());
            return newProject;
        } else {
            newProject.init(projectNameInput, [], creationDateInput, dueDateInput, projectPriorityInput, projectDivInput, false);
            // console.log(newProject.getInfo());
            return newProject;
        }
    }


    const writeProjArrLocalStorage = () => {
        // console.log(`I am writeProjArrLocalStorage(). _projArr[]: ${_projectArr}
        // _projArr.length: ${_projectArr.length}`);
        // console.log("Writing _projArr[] to localStorage.");

        _projectArr;

        for( let i = 0; i < _projectArr.length; i++ ) {

            localStorage.setItem(`projArrLength`, `${_projectArr.length}`);

            let result = _projectArr[i].writeProjectLocalStorage(i);
            if (!result) {
                return false;
            }
        }


        return true;
    }

    const readProjectArrLocalStorage = () => {

        let result = false;

        let numProjects = localStorage.getItem('projArrLength');
        
        let newProjArr = []
        let index = 0;

        if(numProjects > 0) {
            for( index; index < numProjects; index++ ){
                let projectName = localStorage.getItem(`project${index}Name`);
                let projectPriority = localStorage.getItem(`project${index}Priority`);
                let projectDueDate = localStorage.getItem(`project${index}DueDate`);
                let projectCreationDate = localStorage.getItem(`project${index}CreationDate`);
                let projectTodoListLength = localStorage.getItem(`project${index}TodoListLength`);
                let projectTodoList = [];
                if (projectTodoListLength > 0) {
                    // Retrieve todoList
                    for (let todoIndex = 0; todoIndex < projectTodoListLength; todoIndex++) {
                        let todoName = localStorage.getItem(`project${index}todo${todoIndex}Name`);
                        let todoDescription = localStorage.getItem(`project${index}todo${todoIndex}Description`);
                        let todoPriority = localStorage.getItem(`project${index}todo${todoIndex}Priority`);
                        let todoNotes = localStorage.getItem(`project${index}todo${todoIndex}Notes`);
                        let todoDueDate = localStorage.getItem(`project${index}todo${todoIndex}DueDate`);
                        let todoCreationDate = localStorage.getItem(`project${index}todo${todoIndex}CreationDate`);
                        let todoComplete = localStorage.getItem(`project${index}todo${todoIndex}Complete`);

                        if (todoComplete === "false") {
                            todoComplete = false;
                        } else {
                            todoComplete = true;
                        }

                        let newTodo = (0,_todoObj__WEBPACK_IMPORTED_MODULE_1__["default"])();
                        newTodo.init(todoName, todoDescription, new Date(todoDueDate), new Date(todoCreationDate), Number(todoPriority), todoNotes, [], todoComplete)
                        projectTodoList.push(newTodo);





                    }
                }
                let newProject = [projectName, projectCreationDate, projectDueDate, projectPriority, projectTodoList]
                newProjArr.push(newProject);



                // localStorage.setItem(`project${index}CreationDate`, `${getProjectCreationDate()}`);
                // localStorage.setItem(`project${index}TodoListLength`, `${getTodoList().length}`);


            }
            




        } else {
            return false;
        }

        return newProjArr;
    }




    return {

        getInfo, init,
        getProjectArr, setProjectArr, addProject, deleteProject,
        getProjectContainerDiv, setProjectContainerDiv,
        getAddButton, setAddButton, 
        getAddButtonMenu, toggleAddButtonMenu,
        createProject,
        writeProjArrLocalStorage,
        readProjectArrLocalStorage,





    }


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectContainerObj);

/***/ }),

/***/ "./src/todoObj.js":
/*!************************!*\
  !*** ./src/todoObj.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isDate/index.js");



const todoObj = () => {

    let _title;
    let _description;
    let _dueDate;
    let _creationDate;
    let _priority;
    let _notes;
    let _checklist;
    let _complete;
    let _todoDiv;
    let _todoDeletionDiv;

    const getInfo = () => {
        // console.log('_checklist contents: ');
        // console.log(getChecklist());
        return `                _title: ${_title}
                _description: ${_description}
                _dueDate: ${_dueDate}
                _creationDate: ${_creationDate}
                _priority: ${_priority}
                _notes: ${_notes}
                _checklist: ${_checklist}
                _complete: ${_complete}
                _todoDiv: ${_todoDiv}`

    }

    // In a perfect world, init assigns these properties through their relevant setters for type-checking
    const init = (title, description, dueDate, creationDate, priority, notes, checklist, complete, todoDiv) => {
        _title = title;
        _description = description;
        _dueDate = dueDate;
        _creationDate = creationDate;
        _priority = priority;
        _notes = notes;
        _checklist = checklist;
        _complete = complete;
        _todoDiv = todoDiv;
    }

    const getTitle = () => {
        return _title;
    }

    const setTitle = (_newTitle) => {
        if( typeof _newTitle === "string") {
            _title = _newTitle; 
            return true;
        } else {
            console.log('todoObj._setTitle Error! tried to pass a non-string into the _title field!');
            return false;
        }
    }

    const getDescription = () => {
        return _description;
    }

    const setDescription = (newDesc) => {
        if( typeof newDesc === "string") {
            _description = newDesc; 
            return true;
        } else {
            console.log('todoObj.setDescription Error! tried to pass a non-string into the _description field!');
            return false;
        }
    }

    const getDueDate = () => {
        return _dueDate;
    }

    const setDueDate = (newDueDate) => {
        if( (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(newDueDate)) {
            _dueDate = newDueDate; 
        } else {
            console.log('todoObj.setDueDate Error! tried to pass a non-string into the _dueDate field!')
        }
    }

    const getCreationDate = () => {
        return _creationDate;
    }

    const setCreationDate = (newCreationDate) => {
        if( (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(newCreationDate)) {
            _creationDate = newCreationDate; 
        } else {
            console.log('todoObj.setCreationDate Error! tried to pass a non-date into the _creationDate field!')
        }
    }

    const getPriority = () => {
        return _priority;
    }

    const setPriority = (newPriority) => {
        if( typeof newPriority === "number" ) {
            _priority = newPriority; 
        } else 
            console.log('todoObj.setPriorty Error! tried to pass a non-number into the _priority field!')
    }
    
    const getNotes = () => {
        return _notes;
    }

    const setNotes = (newNotes) => {
        if( typeof newNotes === "string") {
            _notes = newNotes; 
            return true;
        } else {
            console.log('todoObj.setNotes Error! tried to pass a non-string into the _notes field!');
            return false;
        }
    }

    const getChecklist = () => {
        return _checklist;
    }

    const setChecklist = (newChecklist) => {
        if( typeof newChecklist === "object" ) {
            _checklist = newChecklist;
            return true;
        } else {
            console.log('todoObj.setChecklist Error! tried to pass a non-object into the _checklist field!');
            return false;
        }
    }

    const addItemToChecklist = (newItem, check) => {
        if( typeof newItem === "string") {

            Object.defineProperty(_checklist, newItem, {
                enumerale: true,
                writable: true,
                configurable: true,
                value: check
            })
            return true;
        } else {
            console.log('todoObj.addItemToChecklist Error! tried to pass a non-string as a newItem for _checklist!');
            return false;
        }
    }

    const deleteItemOffChecklist = (item) => {
        if (typeof item === "string") {

            if(_checklist.hasOwnProperty(item)) {
                delete _checklist[item];
                return true;
            } else {
                console.log(`todoObj.deleteItemOffChecklist Error! _checklist.${item} not found as a property in _checklist!`)
                return false;
            }

        } else {
            console.log('todoObj.deleteItemOffChecklist Error! Tried to pass a non-string into propertys hasOwnProperty!');
            return false;
        }
    }

    const toggleItemInChecklist = (property) => {
        if(_checklist.hasOwnProperty(property) ) {
            if( _checklist[property] ) {
                _checklist[property] = false;
                return true;
            } else {
                _checklist[property] = true;
                return true;
            }
        } else {
            console.log('todoObj.toggleItemInChecklist Error! _checklist does not have property: ' + property);
            return false;
        }
    }

    const getComplete = () => {
        return _complete;
    }

    const setComplete = (newComplete) => {
        if( typeof newComplete === "boolean") {
            _complete = newComplete; 
            return true;
        } else {
            console.log('todoObj._setComplete Error! tried to pass a non-booelan into the _complete field!');
            return false;
        }
    }

    const getTodoDiv = () => {
        return _todoDiv;
    }

    const setTodoDiv = (newDiv) => {
        _todoDiv = newDiv;
        return true;
    }

    const getTodoDeletionDiv = () => {
        return _todoDeletionDiv;
    }

    const setTodoDeletionDiv = (newDiv) => {
        _todoDeletionDiv = newDiv;
        return true;
    }

    const writeTodoLocalStorage = (projectIndex, todoIndex) => {
        // console.log(`I am writeTodoLocal Storage, taking projectIndex: ${projectIndex} and todoIndex: ${todoIndex}, targeting todo: ${getTitle()}`);
        // console.log(`Writing my values to localStorage`);

        // console.log(`My values are as follows: 
        // name: ${getTitle()}
        // description: ${getDescription()}
        // priority: ${getPriority()}
        // notes: ${getNotes()}
        // dueDate: ${getDueDate()}
        // creationDate: ${getCreationDate()}
        // completed: ${getComplete()}`);


        localStorage.setItem(`project${projectIndex}todo${todoIndex}Name`, `${getTitle()}`);
        localStorage.setItem(`project${projectIndex}todo${todoIndex}Description`, `${getDescription()}`);
        localStorage.setItem(`project${projectIndex}todo${todoIndex}Priority`, `${getPriority()}`);
        localStorage.setItem(`project${projectIndex}todo${todoIndex}Notes`, `${getNotes()}`);
        localStorage.setItem(`project${projectIndex}todo${todoIndex}DueDate`, `${getDueDate()}`);
        localStorage.setItem(`project${projectIndex}todo${todoIndex}CreationDate`, `${getCreationDate()}`);
        localStorage.setItem(`project${projectIndex}todo${todoIndex}Complete`, `${getComplete()}`);


        return true;
    }

    return {
        getInfo,
        init,
        getTitle, setTitle,
        getDescription, setDescription,
        getDueDate, setDueDate,
        getCreationDate, setCreationDate,
        getPriority, setPriority,
        getNotes, setNotes,
        getChecklist, setChecklist, addItemToChecklist, deleteItemOffChecklist, toggleItemInChecklist,
        getComplete, setComplete,
        getTodoDiv, setTodoDiv,
        getTodoDeletionDiv, setTodoDeletionDiv,
        writeTodoLocalStorage,


        
    }


};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoObj);

/***/ }),

/***/ "./src/utils/header-nav.js":
/*!*********************************!*\
  !*** ./src/utils/header-nav.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function headerNav() {

    let nav = document.createElement('nav');
    nav.innerHTML = 'D Roemer';

    let title = document.createElement('div');
    title.classList.add('nav-title');
    title.innerHTML = "To-Do";
    nav.appendChild(title);

    let list = document.createElement('ul');
    
    let listOptions = document.createElement('li');
    listOptions.classList.add('navButtonToggle', 'optionsToggle');
    listOptions.innerHTML = 'Options';

    let listAbout = document.createElement('li');
    listAbout.classList.add('navButtonToggle', 'aboutToggle');
    listAbout.innerHTML = 'About';

    let listPortfolio = document.createElement('li');
    listPortfolio.classList.add('navButtonToggle', 'portfolioToggle');

    let portfolioLink = document.createElement('a');
    portfolioLink.href = "https://github.com/dominicroemer";
    portfolioLink.innerHTML = 'Portfolio';

    listPortfolio.appendChild(portfolioLink);

    list.appendChild(listOptions);
    list.appendChild(listAbout);
    list.appendChild(listPortfolio);

    nav.appendChild(list);


    return nav;

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerNav);


/***/ }),

/***/ "./src/assets/editButton.png":
/*!***********************************!*\
  !*** ./src/assets/editButton.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aaff8c09241df25db940.png";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-Italic-VariableFont_wght.ttf":
/*!*****************************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-Italic-VariableFont_wght.ttf ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f578a4cdcf58b09e908f.ttf";

/***/ }),

/***/ "./src/assets/fonts/montserrat/Montserrat-VariableFont_wght.ttf":
/*!**********************************************************************!*\
  !*** ./src/assets/fonts/montserrat/Montserrat-VariableFont_wght.ttf ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3068cdb43142f5625baf.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _utils_header_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/header-nav.js */ "./src/utils/header-nav.js");
/* harmony import */ var _logicController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logicController.js */ "./src/logicController.js");


// import TodoObj from './todoObj.js';
// import todoTest from './tests/todoTest.js';
// import projectObjTest from './tests/projectObjTest.js';





// function component() {
//     const element = document.createElement('div');
//     element.innerHTML = `Sample string goes here css test`;
//     element.classList.add('hello');
//     return element;
// }
// document.body.appendChild(component());


// console.log('test')
const nav = (0,_utils_header_nav_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
document.body.insertBefore(nav, document.getElementById('content'));


let logicController = new _logicController_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
logicController.generateProjectContainerObj();





//                        Testing object functionality
//        Be sure to uncomment out the corresponding imports for test purposes
// console.log('(`-----------------------------------------------finished state of todoTest(): ' + todoTest());
// console.log(`----------------------------------------------- finished state of projectObjTest(): ` + projectObjTest())
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGNBQWMsYUFBYSxXQUFXLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssS0FBSyxN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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsNkJBQTZCLG1EQUFVO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7OztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsVUFBVTtBQUMvQztBQUNBLG1DQUFtQyxRQUFRO0FBQzNDO0FBQ0Esd0NBQXdDLGFBQWE7QUFDckQsZ0RBQWdELHVCQUF1QjtBQUN2RTtBQUNBLGdDQUFnQyxLQUFLO0FBQ3JDLHdDQUF3QyxlQUFlO0FBQ3ZEO0FBQ0EsNENBQTRDLGFBQWE7QUFDekQsb0RBQW9ELHVCQUF1QjtBQUMzRTtBQUNBLGlDQUFpQyxNQUFNO0FBQ3ZDLHlDQUF5QyxnQkFBZ0I7QUFDekQ7QUFDQSwrQ0FBK0MsYUFBYTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLFFBQVE7QUFDM0Msd0NBQXdDLGFBQWE7QUFDckQsaUNBQWlDLE1BQU07QUFDdkMsZ0NBQWdDLEtBQUs7QUFDckM7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsNEJBQTRCOztBQUV0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7OztBQUtUO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLDhCQUE4Qix1QkFBdUIsZUFBZSx5QkFBeUI7QUFDN0Y7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7O0FDenNCaEM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxjQUFjO0FBQzNFO0FBQ0EsU0FBUztBQUNUO0FBQ0EsOERBQThELGNBQWM7QUFDNUU7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw0REFBNEQsY0FBYztBQUMxRTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsMkdBQTJHO0FBQzNHO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRCxxQ0FBcUMsK0JBQStCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNELHFDQUFxQywrQkFBK0I7QUFDcEU7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7O0FBRUEsb0VBQW9FLFdBQVc7O0FBRS9FO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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IndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZXZlbnRDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWNDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3RDb250YWluZXJPYmouanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvT2JqLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdXRpbHMvaGVhZGVyLW5hdi5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL21vbnRzZXJyYXQvTW9udHNlcnJhdC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9tb250c2VycmF0L01vbnRzZXJyYXQtSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIFxcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xcbiAgICBtYXJnaW46IDAgMCAwIDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgcGFkZGluZzogNHB4IDIwcHggNHB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IGdyYXk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4OSwgMjgsIDI4LCAwLjcpO1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5cXG4ub25lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4udHdvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4udGhyZWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAxNDAsIDE0MCk7XFxufVxcblxcbi5mb3VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLmZpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuXFxuIC8qIE5hdiBTdHlsaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4gbmF2IHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgbWluLWhlaWdodDogMTAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJCQ0JDO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA2cHggNnB4O1xcbiAgICBib3gtc2hhZG93OiAwIDBweCA3cHggYmxhY2s7XFxuXFxufVxcblxcbi5uYXYtdGl0bGUge1xcbiAgICBmbGV4OiAxO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgICBmbGV4OiAxO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gICAgZmxleC1zaHJpbms6IDM7XFxufVxcblxcbm5hdiB1bCBsaSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XFxufVxcblxcbiAvKiBOYXYgQnV0dG9uIEFuaW1hdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLm5hdkJ1dHRvblRvZ2dsZSB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG4ubmF2QnV0dG9uVG9nZ2xlOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC01cHg7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kOiAjNTU1MzU4O1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xcbn1cXG5cXG4ubmF2QnV0dG9uVG9nZ2xlOmhvdmVyOmFmdGVyIHtcXG4gICAgd2lkdGg6NzAlO1xcbn1cXG5cXG4ucG9ydGZvbGlvVG9nZ2xlIGF7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4vKiBBZGQgQnV0dG9uIFN0eWxpbmcgYW5kIGFuaW1hdGlvbnMgKi9cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGhlaWdodDogNjJweDtcXG4gICAgd2lkdGg6IDYycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgYm90dG9tOiAzNXB4O1xcbiAgICByaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VCQkNCQztcXG4gICAgYm94LXNoYWRvdzogMCAwIDRweDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbi5hZGQtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M3OWM5YztcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDE4MGRlZyk7XFxuXFxufVxcblxcbi5hZGQtYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZhZmE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwO1xcbn1cXG5cXG5cXG4ucHJvamVjdC1jb250YWluZXItYWRkLW1lbnUge1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDIwMHB4KTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDc1cHgpO1xcblxcbiAgICBoZWlnaHQ6IDE1MDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAxNDAsIDE0MCk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOTIsIDcyLCA3Mik7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYig5MiwgNzIsIDcyKTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyLWFkZC1tZW51OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuIFxcbi5wcm9qZWN0LWNvbnRhaW5lci1hZGQtbWVudS1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLypcXG4ubmV3LXByb2plY3QtbmFtZS1jb250YWluZXIge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufSAqL1xcblxcbi5uZXctcHJvamVjdC1mb3JtLWNvbnRhaW5lciB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtcHJpb3JpdHktaW5wdXQge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5MiwgNzIsIDcyKTtcXG4gICAgLyogYm94LXNoYWRvdzogMCAwIDEwcHggcmdiKDkyLCA3MiwgNzIpO30gKi9cXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0gUHJvamVjdCBDb250YWluZXIgU3R5bGluZyAtLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0gUHJvamVjdCBQYW5lIFN0eWxpbmcgLS0tLS0tLS0tLS0tLS0gKi9cXG4ucHJvamVjdC1wYW5lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMTQwLCAxNDApO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5MiwgNzIsIDcyKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiKDkyLCA3MiwgNzIpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4ucHJvamVjdC1uYW1lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMHB4IDBweDtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5wcm9qZWN0LWVkaXQtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0LWVkaXQtYnV0dG9uOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cXG59XFxuXFxuLnByb2plY3QtdG9kby1lbGVtZW50LWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI0MCwgMjA2LCAyMDYpO1xcbiAgICBmbGV4LWdyb3c6MTtcXG4gICAgbWFyZ2luOiA1cHggNXB4IDRweCA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTI2LCAxMDUsIDEwNSk7XFxuICAgIG1heC1oZWlnaHQ6IDgxJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWF4LXdpZHRoOiA5NCU7XFxufVxcblxcbi5wcm9qZWN0LXRvZG8tYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4ucHJvamVjdC10b2RvLWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC45KTtcXG59XFxuXFxuLnByb2plY3QtdG9kby1saXN0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgICBmbGV4LWdyb3c6IDY7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZXk7ICovXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgIG1heC1oZWlnaHQ6IDIyM3B4O1xcbn1cXG5cXG5cXG5cXG4udG9kby1lbGVtZW50LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcblxcblxcblxcbi50b2RvLWRpdi1uYW1lIHtcXG4gICAgbWF4LXdpZHRoOiAzNDBweDsgICAgXFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi50b2RvLWVkaXQtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAxN3B4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XFxufVxcblxcblxcbi50b2RvLWxpc3QtY29tcGxldGVkIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDQ1cHg7XFxuICAgIHBhZGRpbmctdG9wOiAwcHg7XFxufVxcblxcbi50b2RvLWNvbXBsZXRlZCB7XFxuICAgIG9wYWNpdHk6IDQwJTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5wcm9qZWN0LWRhdGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMHB4IDVweCAwcHggNXB4O1xcbn1cXG5cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLSBQcm9qZWN0IEVkaXQgUGFuZSBTdHlsaW5nIC0tLS0tLS0tLS0tLS0tICovXFxuXFxuLnByb2plY3QtZWRpdC1wYW5lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDE0MCwgMTQwKTtcXG4gICAgaGVpZ2h0OiAzODBweDtcXG4gICAgd2lkdGg6IDM3NXB4O1xcbiAgICBtYXJnaW46IDhweCAwcHggNXB4IDEwcHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDkyLCA3MiwgNzIpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2IoOTIsIDcyLCA3Mik7XFxufVxcblxcbi5lZGl0LXByb2plY3QtdGl0bGUtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLmVkaXQtcHJvamVjdC1wcmlvcml0eS1pbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDkyLCA3MiwgNzIpO1xcbiAgICB3aWR0aDogMjMwcHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0gUHJvamVjdCBBZGQgVG9kbyBQYW5lIFN0eWxpbmcgLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ucHJvamVjdC1hZGQtdG9kby1wYW5lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMzYzcHg7XFxuICAgIGhlaWdodDogMzEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIxOCwgMTQwLCAxNDApO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5MiwgNzIsIDcyKTtcXG5cXG59XFxuXFxuLnByb2plY3QtYWRkLXRvZG8tbmFtZS1sYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICB3aWR0aDogOTglO1xcbn1cXG5cXG4ucHJvamVjdC1hZGQtdG9kby1uYW1lLWlucHV0IHtcXG4gICAgd2lkdGg6IDg1JTtcXG59XFxuXFxuLnByb2plY3QtYWRkLXRvZG8tZGVzY3JpcHRpb24tbGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogOTglO1xcbn1cXG5cXG4ucHJvamVjdC1hZGQtdG9kby1kZXNjcmlwdGlvbi1pbnB1dCB7XFxuICAgIHdpZHRoOiA4NSU7XFxufVxcblxcblxcblxcbiNwcm9qZWN0LWFkZC10b2RvLXByaW9yaXR5LWxhYmVsIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOTIsIDcyLCA3Mik7XFxuICAgIHdpZHRoOiAyMzBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1hZGQtdG9kby1ub3Rlcy1sYWJlbCB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGhlaWdodDogMzAwJTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIC8qIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7ICovXFxufVxcblxcbi5wcm9qZWN0LWFkZC10b2RvLW5vdGVzLWlucHV0IHtcXG4gICAgd2lkdGg6IDk4JTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtYWRkLXRvZG8tZGF0ZS1sYWJlbCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlclxcbn1cXG5cXG4ucHJvamVjdC1hZGQtdG9kby1idXR0b24tY29udGFpbmVyIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5tYXJrZWQtZm9yLWRlbGV0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE4OSwgMjgsIDI4LCAwLjcpO1xcbn1cXG5cXG5cXG4ucHJvamVjdC1kZWxldGUtdG9kby1wYW5lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMzczcHg7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIxOCwgMTQwLCAxNDApO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5MiwgNzIsIDcyKTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLXRvZG8tbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY0ZjQ7XFxuICAgIGhlaWdodDogNzUlO1xcbiAgICBtYXgtaGVpZ2h0OiA3NSU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHdpZHRoOiA5NyU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTIsIDcyLCA3Mik7XFxuXFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZS10b2RvLWRpdiB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUtdG9kby1jb21wbGV0ZWQtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tIFByb2plY3QgRWRpdCBUb2RvIFBhbmUgU3R5bGluZyAtLS0tLS0tLS0tLS0tLSAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5QkFBeUI7SUFDekI7OERBQzJGOztJQUUzRixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7O0NBR0MsOEVBQThFO0NBQzlFO0lBQ0csYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCOztJQUV6QixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjs7SUFFbEIsMEJBQTBCO0lBQzFCLDJCQUEyQjs7QUFFL0I7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0NBRUMsOEVBQThFOztBQUUvRTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxRQUFRO0lBQ1IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztJQUNULDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUEsc0NBQXNDOztBQUV0QztJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixvQ0FBb0M7O0FBRXhDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixzQkFBc0I7QUFDMUI7OztBQUdBOztJQUVJLGFBQWE7SUFDYixrQkFBa0I7O0lBRWxCLHVCQUF1QjtJQUN2QixxQkFBcUI7O0lBRXJCLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixZQUFZOztJQUVaLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBOzs7R0FHRzs7QUFFSDtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQywyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixvQkFBb0I7QUFDeEI7OztBQUdBLDREQUE0RDs7QUFFNUQ7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBLHVEQUF1RDtBQUN2RDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLG9DQUFvQztJQUNwQyxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOzs7OztBQUtBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHdCQUF3QjtBQUM1Qjs7O0FBR0EsNERBQTREOztBQUU1RDtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG1CQUFtQjs7SUFFbkIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixZQUFZO0lBQ1osd0JBQXdCOztJQUV4QixrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBLGdFQUFnRTs7QUFFaEU7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHVCQUF1Qjs7SUFFdkIsa0JBQWtCO0lBQ2xCLGlDQUFpQzs7QUFFckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7OztBQUlBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUNBQW1DOztJQUVuQyxrQkFBa0I7SUFDbEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFlBQVk7OztJQUdaLGtCQUFrQjtJQUNsQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUEsaUVBQWlFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvbW9udHNlcnJhdC9Nb250c2VycmF0LVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgdXJsKCcuL2Fzc2V0cy9mb250cy9tb250c2VycmF0L01vbnRzZXJyYXQtSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XFxuICAgIG1hcmdpbjogMCAwIDAgMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbiAgICBwYWRkaW5nOiA0cHggMjBweCA0cHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA2cHggZ3JheTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg5LCAyOCwgMjgsIDAuNyk7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcblxcbi5vbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi50d28ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi50aHJlZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDE0MCwgMTQwKTtcXG59XFxuXFxuLmZvdXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4uZml2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG5cXG4gLyogTmF2IFN0eWxpbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbiBuYXYge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gICAgbWF4LWhlaWdodDogMTUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQkJDQkM7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDZweCA2cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMHB4IDdweCBibGFjaztcXG5cXG59XFxuXFxuLm5hdi10aXRsZSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbm5hdiB1bCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgICBmbGV4LXNocmluazogMztcXG59XFxuXFxubmF2IHVsIGxpIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDEwcHggMjBweDtcXG59XFxuXFxuIC8qIE5hdiBCdXR0b24gQW5pbWF0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ubmF2QnV0dG9uVG9nZ2xlIHtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcblxcbi5uYXZCdXR0b25Ub2dnbGU6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogLTVweDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIGJhY2tncm91bmQ6ICM1NTUzNTg7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3M7XFxufVxcblxcbi5uYXZCdXR0b25Ub2dnbGU6aG92ZXI6YWZ0ZXIge1xcbiAgICB3aWR0aDo3MCU7XFxufVxcblxcbi5wb3J0Zm9saW9Ub2dnbGUgYXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIEFkZCBCdXR0b24gU3R5bGluZyBhbmQgYW5pbWF0aW9ucyAqL1xcblxcbi5hZGQtYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaGVpZ2h0OiA2MnB4O1xcbiAgICB3aWR0aDogNjJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBib3R0b206IDM1cHg7XFxuICAgIHJpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJCQ0JDO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNHB4O1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuLmFkZC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzc5YzljO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGUoMTgwZGVnKTtcXG5cXG59XFxuXFxuLmFkZC1idXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmFmYTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDA7XFxufVxcblxcblxcbi5wcm9qZWN0LWNvbnRhaW5lci1hZGQtbWVudSB7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjAwcHgpO1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gNzVweCk7XFxuXFxuICAgIGhlaWdodDogMTUwO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDE0MCwgMTQwKTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcXG4gICAgcGFkZGluZzogNXB4O1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5MiwgNzIsIDcyKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiKDkyLCA3MiwgNzIpO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXItYWRkLW1lbnU6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG4gXFxuLnByb2plY3QtY29udGFpbmVyLWFkZC1tZW51LWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4vKlxcbi5uZXctcHJvamVjdC1uYW1lLWNvbnRhaW5lciB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59ICovXFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuZXctcHJvamVjdC1wcmlvcml0eS1pbnB1dCB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6Z3JlZW47ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDkyLCA3MiwgNzIpO1xcbiAgICAvKiBib3gtc2hhZG93OiAwIDAgMTBweCByZ2IoOTIsIDcyLCA3Mik7fSAqL1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLSBQcm9qZWN0IENvbnRhaW5lciBTdHlsaW5nIC0tLS0tLS0tLS0tLS0tICovXFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLSBQcm9qZWN0IFBhbmUgU3R5bGluZyAtLS0tLS0tLS0tLS0tLSAqL1xcbi5wcm9qZWN0LXBhbmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAxNDAsIDE0MCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDkyLCA3MiwgNzIpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2IoOTIsIDcyLCA3Mik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5wcm9qZWN0LW5hbWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwcHggMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnByb2plY3QtZWRpdC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuXFxuLnByb2plY3QtZWRpdC1idXR0b246aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xcbn1cXG5cXG4ucHJvamVjdC10b2RvLWVsZW1lbnQtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjQwLCAyMDYsIDIwNik7XFxuICAgIGZsZXgtZ3JvdzoxO1xcbiAgICBtYXJnaW46IDVweCA1cHggNHB4IDVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjYsIDEwNSwgMTA1KTtcXG4gICAgbWF4LWhlaWdodDogODElO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXgtd2lkdGg6IDk0JTtcXG59XFxuXFxuLnByb2plY3QtdG9kby1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5wcm9qZWN0LXRvZG8tYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjkpO1xcbn1cXG5cXG4ucHJvamVjdC10b2RvLWxpc3Qge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICAgIGZsZXgtZ3JvdzogNjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogZ3JleTsgKi9cXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgbWF4LWhlaWdodDogMjIzcHg7XFxufVxcblxcblxcblxcbi50b2RvLWVsZW1lbnQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuXFxuXFxuXFxuLnRvZG8tZGl2LW5hbWUge1xcbiAgICBtYXgtd2lkdGg6IDM0MHB4OyAgICBcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLnRvZG8tZWRpdC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDE3cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXG59XFxuXFxuXFxuLnRvZG8tbGlzdC1jb21wbGV0ZWQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgbWluLWhlaWdodDogMjBweDtcXG4gICAgbWF4LWhlaWdodDogNDVweDtcXG4gICAgcGFkZGluZy10b3A6IDBweDtcXG59XFxuXFxuLnRvZG8tY29tcGxldGVkIHtcXG4gICAgb3BhY2l0eTogNDAlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnByb2plY3QtZGF0ZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwcHggNXB4IDBweCA1cHg7XFxufVxcblxcblxcbi8qIC0tLS0tLS0tLS0tLS0tIFByb2plY3QgRWRpdCBQYW5lIFN0eWxpbmcgLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ucHJvamVjdC1lZGl0LXBhbmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMTQwLCAxNDApO1xcbiAgICBoZWlnaHQ6IDM4MHB4O1xcbiAgICB3aWR0aDogMzc1cHg7XFxuICAgIG1hcmdpbjogOHB4IDBweCA1cHggMTBweDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOTIsIDcyLCA3Mik7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYig5MiwgNzIsIDcyKTtcXG59XFxuXFxuLmVkaXQtcHJvamVjdC10aXRsZS10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0LXByaW9yaXR5LWlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOTIsIDcyLCA3Mik7XFxuICAgIHdpZHRoOiAyMzBweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLSBQcm9qZWN0IEFkZCBUb2RvIFBhbmUgU3R5bGluZyAtLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5wcm9qZWN0LWFkZC10b2RvLXBhbmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAzNjNweDtcXG4gICAgaGVpZ2h0OiAzMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjE4LCAxNDAsIDE0MCk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDkyLCA3MiwgNzIpO1xcblxcbn1cXG5cXG4ucHJvamVjdC1hZGQtdG9kby1uYW1lLWxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIHdpZHRoOiA5OCU7XFxufVxcblxcbi5wcm9qZWN0LWFkZC10b2RvLW5hbWUtaW5wdXQge1xcbiAgICB3aWR0aDogODUlO1xcbn1cXG5cXG4ucHJvamVjdC1hZGQtdG9kby1kZXNjcmlwdGlvbi1sYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA5OCU7XFxufVxcblxcbi5wcm9qZWN0LWFkZC10b2RvLWRlc2NyaXB0aW9uLWlucHV0IHtcXG4gICAgd2lkdGg6IDg1JTtcXG59XFxuXFxuXFxuXFxuI3Byb2plY3QtYWRkLXRvZG8tcHJpb3JpdHktbGFiZWwge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5MiwgNzIsIDcyKTtcXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWFkZC10b2RvLW5vdGVzLWxhYmVsIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgaGVpZ2h0OiAzMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgLyogYWxpZ24tc2VsZjogZmxleC1zdGFydDsgKi9cXG59XFxuXFxuLnByb2plY3QtYWRkLXRvZG8tbm90ZXMtaW5wdXQge1xcbiAgICB3aWR0aDogOTglO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1hZGQtdG9kby1kYXRlLWxhYmVsIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyXFxufVxcblxcbi5wcm9qZWN0LWFkZC10b2RvLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLm1hcmtlZC1mb3ItZGVsZXRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTg5LCAyOCwgMjgsIDAuNyk7XFxufVxcblxcblxcbi5wcm9qZWN0LWRlbGV0ZS10b2RvLXBhbmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAzNzNweDtcXG4gICAgaGVpZ2h0OiAzMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjE4LCAxNDAsIDE0MCk7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDkyLCA3MiwgNzIpO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUtdG9kby1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjRmNDtcXG4gICAgaGVpZ2h0OiA3NSU7XFxuICAgIG1heC1oZWlnaHQ6IDc1JTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgd2lkdGg6IDk3JTtcXG4gICAgcGFkZGluZzogNXB4O1xcblxcblxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5MiwgNzIsIDcyKTtcXG5cXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLXRvZG8tZGl2IHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZS10b2RvLWNvbXBsZXRlZC1idXR0b24ge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0gUHJvamVjdCBFZGl0IFRvZG8gUGFuZSBTdHlsaW5nIC0tLS0tLS0tLS0tLS0tICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5pbXBvcnQgZWRpdEJ1dHRvbiBmcm9tICcuL2Fzc2V0cy9lZGl0QnV0dG9uLnBuZyc7XG5pbXBvcnQgdG9kb09iaiBmcm9tICcuL3RvZG9PYmonO1xuXG4vLyBUaGlzIGlzIHRoZSBkaXNwbGF5IGNvbnRyb2xsZXIuIFRoZXJlIGlzIG9ubHkgb25lIGRpc3BsYXlDb250cm9sbGVyLCBhbmQgaXQgbWFuYWdlcyB0aGUgQ1JVRCBvZiBhbGwgaHRtbCBlbGVtZW50cy4gVGhpcyBjb250cm9sbGVyIHNob3VsZCBvbmx5IHJlY2VpdmUgaW5mb3JtYXRpb24gZnJvbSBsb2dpY0NvbnRyb2xsZXIgKHdoaWNoIHNlbmRzIGNvbW1hbmRzIHRvIENSVUQgYm90aCBkaXNwbGF5Q29udHJvbGxlcidzIGh0bWwgZWxlbWVudHMgYW5kIHRoZSBwcm9qZWN0T2JqL3RvZG9PYmogaW5mb3JtYXRpb24pLiBkaXNwbGF5Q29udHJvbGxlciBuZWVkcyB0byBnZW5lcmF0ZSBhIG5ldyBlbGVtZW50LCB0aGVuIHJldHVybiB0aGF0IGVsZW1lbnQgYmFjayB1cCB0byBsb2dpY0NvbnRyb2xsZXIsIHdoaWNoIHNob3VsZCBwYXNzIHRoYXQgZWxlbWVudCBhbG9uZyB0byBldmVudENvbnRyb2xsZXIgZm9yIGFzc2lnbmluZyBuZXcgRXZlbnRIYW5kbGVyJ3MgdG8gZGl2J3MgdGhhdCBuZWVkIHRoZW1cblxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoKSA9PiB7XG5cbiAgICAvLyBJIGdlbmVyYXRlIGRpdnNcblxuICAgIGNvbnN0IGdldEluZm8gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgSSBhbSBkaXNwbGF5Q29udHJvbGxlci4gTXkgZnVuY3Rpb25zIGFyZSBhcyBmb2xsb3dzOiBcblxuICAgICAgICBgOyBcbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZVByb2plY3RDb250YWluZXJEaXYgPSAoKSA9PiB7XG5cbiAgICAgICAgbGV0IGZpbmlzaGVkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZpbmlzaGVkRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyJyk7XG5cbiAgICAgICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRCdXR0b24uaW5uZXJIVE1MID0gXCIgKyBcIjtcbiAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1idXR0b24nKVxuICAgICAgICBmaW5pc2hlZERpdi5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuXG4gICAgICAgIHJldHVybiBbZmluaXNoZWREaXYsIGFkZEJ1dHRvbl07XG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVQcm9qZWN0Q29udGFpbmVyQWRkQnV0dG9uTWVudSA9ICgpID0+IHtcblxuICAgICAgICBsZXQgZmluaXNoZWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZmluaXNoZWREaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXItYWRkLW1lbnUnKTtcblxuICAgICAgICBsZXQgYWRkQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lci1hZGQtbWVudS1jb250YWluZXInKTtcbiAgICAgICAgYWRkQnV0dG9uQ29udGFpbmVyLmlubmVySFRNTCA9IGBBZGQgTmV3IFByb2plY3RgO1xuICAgICAgICBmaW5pc2hlZERpdi5hcHBlbmRDaGlsZChhZGRCdXR0b25Db250YWluZXIpO1xuXG4gICAgICAgIC8vIG5hbWUsIGR1ZSBkYXRlLCBwcmlvcml0eVxuXG5cbiAgICAgICAgbGV0IG5ld1Byb2plY3RGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBuZXdQcm9qZWN0Rm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdC1mb3JtLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGxldCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBuYW1lTGFiZWwuaW5uZXJIVE1MID0gYE5hbWU6IGA7XG4gICAgICAgIG5ld1Byb2plY3RGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gICAgICAgIGxldCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBuYW1lSW5wdXQudmFsdWUgPSAnTmV3IFByb2plY3QgTmFtZSc7XG4gICAgICAgIG5hbWVMYWJlbC5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuXG4gICAgICAgIGxldCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5pbm5lckhUTUwgPSBgUHJpb3JpdHk6IGA7XG4gICAgICAgIHByaW9yaXR5TGFiZWwuaWQgPSBcIm5ldy1wcm9qZWN0LXByaW9yaXR5LWlucHV0XCI7XG4gICAgICAgIG5ld1Byb2plY3RGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgICAgICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHByaW9yaXR5SW5wdXQudHlwZSA9ICdyYW5nZSc7XG4gICAgICAgIHByaW9yaXR5SW5wdXQubWF4ID0gNTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5taW4gPSAxO1xuICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gMztcbiAgICAgICAgICAgICAgICBwcmlvcml0eUxhYmVsLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuICAgICAgICBsZXQgcHJpb3JpdHlPdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvdXRwdXQnKTtcbiAgICAgICAgcHJpb3JpdHlPdXRwdXQudmFsdWUgPSBwcmlvcml0eUlucHV0LnZhbHVlO1xuICAgICAgICBwcmlvcml0eUlucHV0Lm9uaW5wdXQgPSAoKSA9PiB7cHJpb3JpdHlPdXRwdXQudmFsdWUgPSBwcmlvcml0eUlucHV0LnZhbHVlfTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5hcHBlbmRDaGlsZChwcmlvcml0eU91dHB1dCk7XG5cbiAgICAgICAgbGV0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGR1ZURhdGVMYWJlbC5pbm5lckhUTUwgPSBgRHVlIERhdGU6IGA7XG4gICAgICAgIG5ld1Byb2plY3RGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gICAgICAgIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICAgICAgZHVlRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgZHVlRGF0ZUxhYmVsLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG5cbiAgICAgICAgbGV0IGNyZWF0aW9uRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY3JlYXRpb25EYXRlTGFiZWwuaW5uZXJIVE1MID0gYENyZWF0ZWQgT246IGA7XG4gICAgICAgIG5ld1Byb2plY3RGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0aW9uRGF0ZUxhYmVsKTtcbiAgICAgICAgbGV0IGNyZWF0aW9uRGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgICAgY3JlYXRpb25EYXRlTGFiZWwuaW5uZXJIVE1MICs9IGAke2NyZWF0aW9uRGF0ZS50b0RhdGVTdHJpbmcoKX1gO1xuXG5cbiAgICAgICAgbGV0IGFkZFByb2plY3RCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdC1idXR0b24tY29udGFpbmVyJylcbiAgICAgICAgbGV0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc2F2ZUJ1dHRvbi5pbm5lckhUTUwgPSBgU2F2ZWA7XG4gICAgICAgIC8vIGNoYW5naW5nIHRoZSBidXR0b24ncyB0eXBlIG92ZXJyaWRlcyB0aGUgZGVmYXVsdCBTYXZlIEJ1dHRvbiBmdW5jdGlvbmFsaXR5IG9mIHRoZSBmb3JtIGVsZW1lbnQgdG8gTk9UIFJFRElSRUNUIHdpdGggdGhlIGZvcm0gZWxlbWVudCwgYWthIHJlbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICBzYXZlQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdXR0b24uaW5uZXJIVE1MID0gYENhbmNlbGA7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgICAgICBuZXdQcm9qZWN0Rm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uQ29udGFpbmVyKTtcblxuICAgICAgICAvLyBjcmVhdGlvbkRhdGVMYWJlbC5hcHBlbmRDaGlsZChjcmVhdGlvbkRhdGVJbnB1dCk7XG4gICAgICAgIC8vIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiMjAxNy0wNi0wMVwiPlxuXG4gICAgICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybUNvbnRhaW5lcik7XG5cblxuICAgICAgICByZXR1cm4gW2ZpbmlzaGVkRGl2LCBuYW1lSW5wdXQsIHByaW9yaXR5SW5wdXQsIHByaW9yaXR5TGFiZWwsIGR1ZURhdGVJbnB1dCwgY3JlYXRpb25EYXRlLCBzYXZlQnV0dG9uLCBjYW5jZWxCdXR0b25dO1xuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlUHJvamVjdFBhbmUgPSAobmFtZUlucHV0LCBwcmlvcml0eUlucHV0LCBkdWVEYXRlSW5wdXQsIGNyZWF0aW9uRGF0ZUlucHV0LCB0b2RvTGlzdElucHV0KSA9PiB7XG5cbiAgICAgICAgbGV0IGZpbmlzaGVkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZpbmlzaGVkRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtcGFuZScpO1xuXG4gICAgICAgIC8vIGZpbmlzaGVkRGl2LmlubmVySFRNTCA9IGAgSSBhbSBhIG5ldyBQcm9qZWN0UGFuZSwgaGVyZSBhcmUgdGhlIHZhbHVlcyBwYXNzZWQgdG8gbWU6XG4gICAgICAgIC8vIG5hbWVJbnB1dDogJHtuYW1lSW5wdXR9XG4gICAgICAgIC8vIHByaW9yaXR5SW5wdXQ6ICR7cHJpb3JpdHlJbnB1dH1cbiAgICAgICAgLy8gZHVlRGF0ZUlucHV0OiAke2R1ZURhdGVJbnB1dH1cbiAgICAgICAgLy8gY3JlYXRpb25EYXRlSW5wdXQ6ICR7Y3JlYXRpb25EYXRlSW5wdXR9XG4gICAgICAgIC8vIHRvZG9MaXN0SW5wdXQ6ICR7dG9kb0xpc3RJbnB1dH1gO1xuXG4gICAgICAgIGxldCBuYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgcHJvamVjdE5hbWUuaW5uZXJIVE1MID0gYCR7bmFtZUlucHV0fWA7XG4gICAgICAgIG5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gICAgICAgIGxldCBwcm9qZWN0RWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBwcm9qZWN0RWRpdEJ1dHRvbi5zcmMgPSBlZGl0QnV0dG9uO1xuICAgICAgICBwcm9qZWN0RWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWVkaXQtYnV0dG9uJyk7XG4gICAgICAgIG5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVkaXRCdXR0b24pO1xuXG4gICAgICAgIGZpbmlzaGVkRGl2LmFwcGVuZENoaWxkKG5hbWVDb250YWluZXIpO1xuXG4gICAgICAgIC8vIHRvZG9MaXN0IGNvbnRhaW5lciBhbmQgRWxlbWVudHNcbiAgICAgICAgY29uc3QgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0xpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10b2RvLWVsZW1lbnQtY29udGFpbmVyJyk7XG4gICAgICAgIGZpbmlzaGVkRGl2LmFwcGVuZENoaWxkKHRvZG9MaXN0Q29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCB0b2RvTGlzdEJ1dHRvbkNvbnRpYWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0xpc3RCdXR0b25Db250aWFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdG9kby1idXR0b24tY29udGFpbmVyJyk7XG4gICAgICAgIHRvZG9MaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9MaXN0QnV0dG9uQ29udGlhaW5lcik7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRvZG9BZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJvamVjdFRvZG9BZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC10b2RvLWJ1dHRvbicpO1xuICAgICAgICBwcm9qZWN0VG9kb0FkZEJ1dHRvbi5pbm5lckhUTUwgPSBgQWRkIFRvLURvYDtcbiAgICAgICAgdG9kb0xpc3RCdXR0b25Db250aWFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUb2RvQWRkQnV0dG9uKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VG9kb0RlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwcm9qZWN0VG9kb0RlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvZG8tYnV0dG9uJyk7XG4gICAgICAgIHByb2plY3RUb2RvRGVsZXRlQnV0dG9uLmlubmVySFRNTCA9IGBEZWxldGUgVG8tRG9gO1xuICAgICAgICB0b2RvTGlzdEJ1dHRvbkNvbnRpYWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRvZG9EZWxldGVCdXR0b24pO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIHRvZG9MaXN0RGl2cyBmcm9tIHRvZG9MaXN0SW5wdXQgYW5kIHBvcHVsYXRlIGFwcHJvcHJpYXRlbHlcbiAgICAgICAgbGV0IHByb2plY3RUb2RvTGlzdCA9IGdlbmVyYXRlVG9kb0xpc3RDb250YWluZXIodG9kb0xpc3RJbnB1dCk7XG4gICAgICAgIHRvZG9MaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUb2RvTGlzdFswXSk7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0VW5jb21wbGV0ZWQgPSBwcm9qZWN0VG9kb0xpc3RbMV07XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0Q29tcGxldGVkID0gcHJvamVjdFRvZG9MaXN0WzJdO1xuXG4gICAgICAgIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRhdGUtY29udGFpbmVyJyk7XG4gICAgICAgIGZpbmlzaGVkRGl2LmFwcGVuZENoaWxkKGRhdGVDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0aW9uRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNyZWF0aW9uRGF0ZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNyZWF0aW9uLWRhdGUnKTtcbiAgICAgICAgLy8gZnVuY3Rpb25hbGl0eSBjb252ZXJ0aW5nIGNyZWF0aW9uRGF0ZSB0byByZWFkYWJsZSBmb3JtYXRcbiAgICAgICAgbGV0IHJlYWRhYmxlQ3JlYXRpb25EYXRlSW5wdXQgPSAobmV3IERhdGUoY3JlYXRpb25EYXRlSW5wdXQpKS50b0RhdGVTdHJpbmcoKTtcbiAgICAgICAgY3JlYXRpb25EYXRlLmlubmVySFRNTCA9IHJlYWRhYmxlQ3JlYXRpb25EYXRlSW5wdXQ7XG4gICAgICAgIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRpb25EYXRlKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGFnZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFnZScpO1xuICAgICAgICAvLyBmdW5jdGlvbmFsaXR5IGNhbGN1bGF0aW5nIGFnZSBvZiBwcm9qZWN0XG4gICAgICAgIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYWdlKTtcblxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kdWUtZGF0ZScpO1xuICAgICAgICAvLyBmdW5jdGlvbmFsaXR5IGNvbnZlcnRpbmcgZHVlRGF0ZSB0byByZWFkYWJsZSBmb3JtYXRcbiAgICAgICAgbGV0IHJlYWRhYmxlRHVlRGF0ZUlucHV0ID0gKG5ldyBEYXRlKGR1ZURhdGVJbnB1dCkpLnRvRGF0ZVN0cmluZygpO1xuICAgICAgICBkdWVEYXRlLmlubmVySFRNTCA9IHJlYWRhYmxlRHVlRGF0ZUlucHV0O1xuICAgICAgICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG5cbiAgICAgICAgcmV0dXJuIFtmaW5pc2hlZERpdiwgcHJvamVjdEVkaXRCdXR0b24sIG5hbWVDb250YWluZXIsIHByb2plY3RUb2RvQWRkQnV0dG9uLCBwcm9qZWN0VG9kb0RlbGV0ZUJ1dHRvbiwgdG9kb0xpc3RVbmNvbXBsZXRlZCwgdG9kb0xpc3RDb21wbGV0ZWRdO1xuXG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVUb2RvRGl2ID0gKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWVsZW1lbnQtY29udGFpbmVyJyk7XG5cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0b2RvLmdldFRpdGxlKCkpO1xuXG5cbiAgICAgICAgaWYodG9kby5nZXRDb21wbGV0ZSgpKSB7XG4gICAgICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29tcGxldGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8taW5jb21wbGV0ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdG9kby5jb21wbGV0ZWQgPT0gdHJ1ZSwgc2V0IGNsYXNzbGlzdCBvZiBuZXcgZGl2IGVsZW1lbnRcbiAgICAgICAgLy8gc2V0IHRvZG9EaXYgbmFtZSBsZW5ndGggdG8gY2FwIGF0IG1heGltdW0gbGVuZ3RoIG9mIHZpZXdwb3J0IGFyZWFcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCd0b2RvLWRpdi1jaGVja2JveCcpO1xuICAgICAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgLy8gY29uc29sZS5sb2codG9kby5nZXRDb21wbGV0ZSgpKTtcbiAgICAgICAgaWYodG9kby5nZXRDb21wbGV0ZSgpKSB7XG4gICAgICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCBcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgICAgICBjb25zdCB0b2RvRGl2TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRvZG9EaXZOYW1lLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGl2LW5hbWUnKTtcblxuICAgICAgICAvLyBDaGVja2luZyB0aXRsZSBsZW5ndGggYW5kIHRyaW1taW5nIGRvd24uIEhhZCBzaWduaWZpY2FudCBkaWZmaWN1bHR5IGdldHRpbmcgb3ZlcmZsb3cteDogaGlkZGVuIHRvIHdvcmsgaW4gQ1NTLCBzbyBkZWNpZGVkIHRvIGp1c3QgbWFudWFsbHkgdHJpbSB0aXRsZSBkb3duIGFuZCBhZGQgXCIuLi5cIiB0byBlbmQgdG8gaW5kaWNhdGUgYSBsb25nZXIgdGl0bGVcbiAgICAgICAgbGV0IHRpdGxlID0gdG9kby5nZXRUaXRsZSgpO1xuICAgICAgICBsZXQgbmV3VGl0bGUgPSBcIlwiO1xuICAgICAgICBpZih0aXRsZS5sZW5ndGggPiAzNCl7XG4gICAgICAgICAgICBuZXdUaXRsZSA9IFwiXCI7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBuZXdUaXRsZSArPSB0aXRsZS5jaGFyQXQoaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdUaXRsZSArPSBcIi4uLlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VGl0bGUgPSB0aXRsZTtcbiAgICAgICAgfVxuICAgICAgICB0b2RvRGl2TmFtZS5pbm5lckhUTUwgPSBuZXdUaXRsZTtcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRGl2TmFtZSk7XG5cblxuICAgICAgICBsZXQgdG9kb0VkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgdG9kb0VkaXRCdXR0b24uc3JjID0gZWRpdEJ1dHRvbjtcbiAgICAgICAgdG9kb0VkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1lZGl0LWJ1dHRvbicsICd0b2RvLWVkaXQtYnV0dG9uJylcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRWRpdEJ1dHRvbik7XG5cbiAgICAgICAgLy8gQXR0YWNoIGEgcmVmZXJlbmNlIHRvIGl0cyBjb21wbGV0ZWQgZGl2IHdpdGhpbiBlYWNoIHRvZG9PYmogdGhhdCBnZXQncyBwYXJzZWQgaW4gdGhpcyBtZXRob2QgKHdoaWNoIHNob3VsZCBiZSBhbGwgb2YgdGhlbSlcbiAgICAgICAgdG9kby5zZXRUb2RvRGl2KHRvZG9EaXYpO1xuXG5cbiAgICAgICAgcmV0dXJuIHRvZG9EaXY7XG4gICAgfVxuXG4gICAgLy8gVGFrZXMgYSB0b2RvTGlzdFtdIG9mIHRvZG9PYmoncyBhbmQgY3JlYXRlcyBhIHN1aXRhYmxlLCBmaW5pc2hlZCwgcHJvamVjdC10b2RvLWxpc3RcbiAgICBjb25zdCBnZW5lcmF0ZVRvZG9MaXN0Q29udGFpbmVyID0gKHRvZG9MaXN0QXJyYXkpID0+IHtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdFRvZG9MaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdG9kby1saXN0Jyk7XG5cbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0xpc3QuY2xhc3NMaXN0LmFkZCgndG9kby1saXN0Jyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0b2RvTGlzdENvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvTGlzdENvbXBsZXRlZC5jbGFzc0xpc3QuYWRkKCd0b2RvLWxpc3QnLCAndG9kby1saXN0LWNvbXBsZXRlZCcpO1xuXG4gICAgICAgIHByb2plY3RUb2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvTGlzdCk7XG4gICAgICAgIHByb2plY3RUb2RvTGlzdC5pbm5lckhUTUwgKz0gJy0tLSBDb21wbGV0ZWQgLS0tJztcbiAgICAgICAgcHJvamVjdFRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9MaXN0Q29tcGxldGVkKTtcblxuICAgICAgICAvLyBSZWluc3RhbnRpYXRpbmcgdGhlIHJlZmVyZW5jZSB0byB0b2RvTGlzdCB2aWEgcXVlcnlTZWxlY3RvciAtIHVzaW5nIGlubmVySFRNTCBmbHVzaGVzIHRoZSByZWZlcmVuY2VzIFxuICAgICAgICBjb25zdCB0b2RvTGlzdFJlZmVyZW5jZSA9IHByb2plY3RUb2RvTGlzdC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG5cbiAgICAgICAgLy8gTG9naWMgZm9yIGNyZWF0aW5nIGFuZCBwYXJzaW5nIHRvZG9MaXN0QXJyYXkgZWxlbWVudHMsIHVzaW5nIFxuICAgICAgICBpZih0b2RvTGlzdEFycmF5KSB7XG5cbiAgICAgICAgICAgIHRvZG9MaXN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCB0ZW1wRGl2ID0gZ2VuZXJhdGVUb2RvRGl2KGVsZW1lbnQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudC5nZXRDb21wbGV0ZSgpKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJFbGVtZW50J3MgZ2V0Q29tcGxldGUoKSByZXR1cm5lZCBUcnVlXCIpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvTGlzdENvbXBsZXRlZC5hcHBlbmRDaGlsZCh0ZW1wRGl2KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkVsZW1lbnQncyBnZXRDb21wbGV0ZSByZXR1cm5lZCBGYWxzZVwiKVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0b2RvTGlzdFJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9MaXN0UmVmZXJlbmNlLmFwcGVuZENoaWxkKHRlbXBEaXYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gW3Byb2plY3RUb2RvTGlzdCwgdG9kb0xpc3RSZWZlcmVuY2UsIHRvZG9MaXN0Q29tcGxldGVkXTtcblxuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlUHJvamVjdEVkaXRQYW5lID0gKHRhcmdldFByb2plY3QpID0+IHtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgWW91IGNsaWNrZWQgdGhlIGVkaXRQcm9qZWN0IGJ1dHRvbiB0YXJnZXRpbmcgdGhlIHByb2plY3Q6IGApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXRQcm9qZWN0LmdldEluZm8oKSk7XG5cbiAgICAgICAgY29uc3QgZWRpdFBhbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWRpdFBhbmUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1lZGl0LXBhbmUnKTtcblxuICAgICAgICAvLyBlZGl0UGFuZS5pbm5lckhUTUwgPSB0YXJnZXRQcm9qZWN0LmdldEluZm8oKTtcblxuICAgICAgICBjb25zdCBlZGl0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGVkaXRUaXRsZS5jbGFzc0xpc3QuYWRkKCdlZGl0LXByb2plY3QtdGl0bGUtdGV4dCcpO1xuICAgICAgICBlZGl0VGl0bGUuaW5uZXJIVE1MID0gYEVkaXQgUHJvamVjdGA7XG4gICAgICAgIGVkaXRQYW5lLmFwcGVuZENoaWxkKGVkaXRUaXRsZSk7XG5cbiAgICAgICAgLy8gSGVhZGVyIFRleHRcbiAgICAgICAgY29uc3QgZWRpdFByb2plY3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVkaXRQcm9qZWN0TmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdlZGl0LXByb2plY3QtbmFtZS1jb250YWluZXInKTtcbiAgICAgICAgZWRpdFBhbmUuYXBwZW5kQ2hpbGQoZWRpdFByb2plY3ROYW1lQ29udGFpbmVyKTtcblxuICAgICAgICAvLyBOYW1lIElucHV0XG4gICAgICAgIGxldCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBuYW1lTGFiZWwuaW5uZXJIVE1MID0gYE5hbWU6IGA7XG4gICAgICAgIGVkaXRQcm9qZWN0TmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgICAgICBsZXQgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbmFtZUlucHV0LnZhbHVlID0gdGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpO1xuICAgICAgICBuYW1lTGFiZWwuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICAgICAgICAvLyBQcmlvcml0eSBTbGlkZXJcbiAgICAgICAgbGV0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBwcmlvcml0eUxhYmVsLmlubmVySFRNTCA9IGBQcmlvcml0eTogYDtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkIChcImVkaXQtcHJvamVjdC1wcmlvcml0eS1pbnB1dFwiKTtcbiAgICAgICAgZWRpdFBhbmUuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgICAgIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC50eXBlID0gJ3JhbmdlJztcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5tYXggPSA1O1xuICAgICAgICBwcmlvcml0eUlucHV0Lm1pbiA9IDE7XG4gICAgICAgIHByaW9yaXR5SW5wdXQudmFsdWUgPSB0YXJnZXRQcm9qZWN0LmdldFByb2plY3RQcmlvcml0eSgpO1xuICAgICAgICBwcmlvcml0eUxhYmVsLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuICAgICAgICBsZXQgcHJpb3JpdHlPdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvdXRwdXQnKTtcbiAgICAgICAgcHJpb3JpdHlPdXRwdXQudmFsdWUgPSBwcmlvcml0eUlucHV0LnZhbHVlO1xuICAgICAgICBwcmlvcml0eUlucHV0Lm9uaW5wdXQgPSAoKSA9PiB7cHJpb3JpdHlPdXRwdXQudmFsdWUgPSBwcmlvcml0eUlucHV0LnZhbHVlfTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5hcHBlbmRDaGlsZChwcmlvcml0eU91dHB1dCk7XG5cbiAgICAgICAgLy8gRHVlIERhdGVcbiAgICAgICAgbGV0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGR1ZURhdGVMYWJlbC5pbm5lckhUTUwgPSBgRHVlIERhdGU6IGA7XG4gICAgICAgIGVkaXRQYW5lLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gICAgICAgIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICAgICAgZHVlRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgLy8gZHVlRGF0ZUlucHV0LnZhbHVlID0gXCIyMDIxLTAyLTAyXCI7XG4gICAgICAgIGxldCB0ZW1wRHVlRGF0ZSA9IHRhcmdldFByb2plY3QuZ2V0UHJvamVjdER1ZURhdGUoKVxuICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXRQcm9qZWN0LmdldFByb2plY3REdWVEYXRlKCkpXG4gICAgICAgIC8vIHRlbXBEdWVEYXRlLnNldERhdGUodGVtcER1ZURhdGUuZ2V0RGF0ZSgpIC0gMSk7XG4gICAgICAgIHRlbXBEdWVEYXRlID0gdGVtcER1ZURhdGUuZ2V0VGltZSgpO1xuICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWVBc051bWJlciA9IHRlbXBEdWVEYXRlO1xuICAgICAgICBkdWVEYXRlTGFiZWwuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcblxuICAgICAgICAvLyBDcmVhdGlvbiBEYXRlXG4gICAgICAgIGxldCBjcmVhdGlvbkRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNyZWF0aW9uRGF0ZUxhYmVsLmlubmVySFRNTCA9IGBDcmVhdGVkIE9uOiBgO1xuICAgICAgICBlZGl0UGFuZS5hcHBlbmRDaGlsZChjcmVhdGlvbkRhdGVMYWJlbCk7XG4gICAgICAgIGxldCBjcmVhdGlvbkRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgY3JlYXRpb25EYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICAgICAgY3JlYXRpb25EYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBsZXQgdGVtcENyZWF0aW9uRGF0ZSA9IHRhcmdldFByb2plY3QuZ2V0UHJvamVjdENyZWF0aW9uRGF0ZSgpO1xuICAgICAgICBjcmVhdGlvbkRhdGVJbnB1dC52YWx1ZUFzRGF0ZSA9IHRlbXBDcmVhdGlvbkRhdGU7XG4gICAgICAgIGNyZWF0aW9uRGF0ZUxhYmVsLmFwcGVuZENoaWxkKGNyZWF0aW9uRGF0ZUlucHV0KTtcblxuICAgICAgICBcbiAgICAgICAgLy8gQWdlXG4gICAgICAgIGxldCBhZ2VMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGFnZUxhYmVsLmlubmVySFRNTCA9IGBBZ2U6IGA7XG4gICAgICAgIGVkaXRQYW5lLmFwcGVuZENoaWxkKGFnZUxhYmVsKVxuXG4gICAgICAgIGNvbnN0IGFnZU1pbGxpcyA9IChEYXRlLm5vdygpIC0gdGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0Q3JlYXRpb25EYXRlKCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgYWdlTWlsbGlzOiAke2FnZU1pbGxpc31gKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kcyA9IGFnZU1pbGxpcyAvIDEwMDA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBTZWNvbmRzOiAke3NlY29uZHN9YCk7XG4gICAgICAgIGxldCB0b3RhbE1pbnV0ZXMgPSBzZWNvbmRzIC8gNjA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBUb3RhbE1pbnV0ZXM6ICR7dG90YWxNaW51dGVzfWApXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBUb3RhbE1pbnV0ZXMudG9GaXhlZDogJHt0b3RhbE1pbnV0ZXMudG9GaXhlZCgpfWApO1xuICAgICAgICBsZXQgZGF5cyA9IHRvdGFsTWludXRlcy50b0ZpeGVkKCkgLyAoNjAqMjQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgRGF5czogJHtkYXlzfWApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgRGF5cy50b0ZpeGVkOiAke2RheXMudG9GaXhlZCgpfWApO1xuICAgICAgICB0b3RhbE1pbnV0ZXMgLT0gKCg2MCoyNCkgKiBkYXlzLnRvRml4ZWQoKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBuZXcgVG90YWxNaW51dGVzOiAke3RvdGFsTWludXRlc31gKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYG5ldyBUb3RhbE1pbnV0ZXMudG9GaXhlZDogJHt0b3RhbE1pbnV0ZXMudG9GaXhlZCgpfWApO1xuICAgICAgICBsZXQgaG91cnMgPSB0b3RhbE1pbnV0ZXMgLyA2MDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYEhvdXJzOiAke2hvdXJzfWApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgSG91cnMudG9GaXhlZDogJHtob3Vycy50b0ZpeGVkKCl9YCk7XG4gICAgICAgIHRvdGFsTWludXRlcyAtPSAoaG91cnMudG9GaXhlZCgpICogNjApOyBcbiAgICAgICAgLy8gY29uc29sZS5sb2coYG5ld05FVyBUb3RhbE1pbnV0ZXM6ICR7dG90YWxNaW51dGVzfWApO1xuICAgICAgICAvLyBBZGp1c3RpbmcgdG8gcmVhZGFibGUgc3RyaW5nc1xuICAgICAgICBkYXlzID0gZGF5cy50b0ZpeGVkKCk7XG4gICAgICAgIGhvdXJzID0gaG91cnMudG9GaXhlZCgpO1xuICAgICAgICB0b3RhbE1pbnV0ZXMgPSB0b3RhbE1pbnV0ZXMudG9GaXhlZCgpOyAgICAgICBcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgLS0tLS0tLS0tLS0tLS0tLWApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhhZ2VNaWxsaXMpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgU2Vjb25kczogJHtzZWNvbmRzfWApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgVG90YWxNaW51dGVzOiAke3RvdGFsTWludXRlc31gKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYEhvdXJzOiAke2hvdXJzfWApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgRGF5czogJHtkYXlzfWApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgLS0tLS0tLS0tLS0tLS0tLWApXG5cbiAgICAgICAgbGV0IGFnZTtcbiAgICAgICAgaWYgKGFnZU1pbGxpcyA+IDg2NDAwMDAwICkge1xuICAgICAgICAgICAgYWdlID0gKGRheXMgLSAxKSArIFwiIERheXNcIjsgLy8gRGF5cyAtIDEgYmVjYXVzZSB0aGUgYWJvdmUgbGluZSBkYXlzID0gZGF5cy50b0ZpeGVkKCkgcm91bmRzIHVwLiBUaGlzIHdheSwgeW91IGRvbid0IGNyZWF0ZSBhIHByb2plY3QgeWVzdGVyZGF5IHRoYXQncyBhbHJlYWR5IDIgZGF5cyBvbGQgd2hlbiB2aWV3ZWQgdG9kYXlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFnZSA9IGhvdXJzICsgXCIgSG91cnMsIFwiICsgdG90YWxNaW51dGVzICsgXCIgTWludXRlc1wiO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBhZ2VMYWJlbC5pbm5lckhUTUwgKz0gYWdlO1xuXG4gICAgICAgIC8vIFNhdmUsIENhbmNlbCwgRGVsZXRlIEJ1dHRvbnNcbiAgICAgICAgbGV0IGVkaXRQcm9qZWN0QnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVkaXRQcm9qZWN0QnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2VkaXQtcHJvamVjdC1idXR0b24tY29udGFpbmVyJylcbiAgICAgICAgbGV0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc2F2ZUJ1dHRvbi5pbm5lckhUTUwgPSBgU2F2ZWA7XG4gICAgICAgIC8vIGNoYW5naW5nIHRoZSBidXR0b24ncyB0eXBlIG92ZXJyaWRlcyB0aGUgZGVmYXVsdCBTYXZlIEJ1dHRvbiBmdW5jdGlvbmFsaXR5IG9mIHRoZSBmb3JtIGVsZW1lbnQgdG8gTk9UIFJFRElSRUNUIHdpdGggdGhlIGZvcm0gZWxlbWVudCwgYWthIHJlbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICBzYXZlQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdXR0b24uaW5uZXJIVE1MID0gYENhbmNlbGA7XG4gICAgICAgIGVkaXRQcm9qZWN0QnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xuICAgICAgICBlZGl0UHJvamVjdEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICAgICAgICBlZGl0UGFuZS5hcHBlbmRDaGlsZChlZGl0UHJvamVjdEJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgbGV0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSAnRGVsZXRlJztcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICBlZGl0UGFuZS5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcblxuXG4gICAgICAgIGxldCBzYXZlZElucHV0cyA9IFtuYW1lSW5wdXQsIHByaW9yaXR5SW5wdXQsIGR1ZURhdGVJbnB1dCwgY3JlYXRpb25EYXRlSW5wdXRdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzYXZlZElucHV0cyk7XG4gICAgICAgIFxuXG4gICAgICAgIHJldHVybiBbZWRpdFBhbmUsIHByaW9yaXR5SW5wdXQsIHByaW9yaXR5TGFiZWwsIHNhdmVCdXR0b24sIGNhbmNlbEJ1dHRvbiwgZGVsZXRlUHJvamVjdEJ1dHRvbiwgc2F2ZWRJbnB1dHMgXSA7XG5cbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZVByb2plY3RBZGRUb2RvUGFuZSA9ICh0YXJnZXRQcm9qZWN0KSA9PiB7XG5cbiAgICAgICAgY29uc3QgYWRkVG9kb1BhbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkVG9kb1BhbmUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtdG9kby1wYW5lJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBUaXRsZVxuICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgdGl0bGVMYWJlbC5pbm5lckhUTUwgPSAnTmFtZTogJztcbiAgICAgICAgdGl0bGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC10b2RvLW5hbWUtbGFiZWwnKTtcbiAgICAgICAgYWRkVG9kb1BhbmUuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYWRkLXRvZG8tbmFtZS1pbnB1dCcpO1xuICAgICAgICB0aXRsZUlucHV0Lm1heExlbmd0aCA9IFwiMzBcIjtcbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IFwiTmV3IFRvLURvXCI7XG4gICAgICAgIHRpdGxlSW5wdXQubWluTGVuZ3RoID0gXCIxXCI7XG4gICAgICAgIHRpdGxlTGFiZWwuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgICAgICAgLy8gRGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJIVE1MID0gYERlc2NyaXB0aW9uOiBgO1xuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYWRkLXRvZG8tZGVzY3JpcHRpb24tbGFiZWwnKTtcbiAgICAgICAgYWRkVG9kb1BhbmUuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYWRkLXRvZG8tZGVzY3JpcHRpb24taW5wdXQnKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5tYXhMZW5ndGggPSBcIjI0XCI7XG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgICAgIFxuICAgICAgICAvLyBQcmlvcml0eVxuICAgICAgICBsZXQgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gYFByaW9yaXR5OiBgO1xuICAgICAgICBwcmlvcml0eUxhYmVsLmlkID0gXCJwcm9qZWN0LWFkZC10b2RvLXByaW9yaXR5LWxhYmVsXCI7XG4gICAgICAgIGFkZFRvZG9QYW5lLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgICAgICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHByaW9yaXR5SW5wdXQudHlwZSA9ICdyYW5nZSc7XG4gICAgICAgIHByaW9yaXR5SW5wdXQubWF4ID0gNTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5taW4gPSAxO1xuICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gMztcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgICAgICAgbGV0IHByaW9yaXR5T3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0Jyk7XG4gICAgICAgIHByaW9yaXR5T3V0cHV0LnZhbHVlID0gcHJpb3JpdHlJbnB1dC52YWx1ZTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5vbmlucHV0ID0gKCkgPT4ge3ByaW9yaXR5T3V0cHV0LnZhbHVlID0gcHJpb3JpdHlJbnB1dC52YWx1ZX07XG4gICAgICAgIHByaW9yaXR5TGFiZWwuYXBwZW5kQ2hpbGQocHJpb3JpdHlPdXRwdXQpO1xuXG4gICAgICAgIC8vIE5vdGVzXG4gICAgICAgIGNvbnN0IG5vdGVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBub3Rlc0xhYmVsLmlubmVyVGV4dCA9IFwiTm90ZXM6ICAgICAgICAgICAgICAgICAgICAgXCI7XG4gICAgICAgIG5vdGVzTGFiZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtdG9kby1ub3Rlcy1sYWJlbCcpO1xuICAgICAgICBhZGRUb2RvUGFuZS5hcHBlbmRDaGlsZChub3Rlc0xhYmVsKTtcbiAgICAgICAgY29uc3Qgbm90ZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIG5vdGVzSW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtdG9kby1ub3Rlcy1pbnB1dCcpO1xuICAgICAgICBub3Rlc0xhYmVsLmFwcGVuZENoaWxkKG5vdGVzSW5wdXQpO1xuXG4gICAgICAgIC8vIER1ZSBEYXRlXG4gICAgICAgIGxldCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkdWVEYXRlTGFiZWwuaW5uZXJIVE1MID0gYER1ZSBEYXRlOiBgO1xuICAgICAgICBkdWVEYXRlTGFiZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtdG9kby1kYXRlLWxhYmVsJyk7XG4gICAgICAgIGFkZFRvZG9QYW5lLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gICAgICAgIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICAgICAgZHVlRGF0ZUxhYmVsLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG5cblxuICAgICAgICAvLyBDcmVhdGlvbiBEYXRlXG4gICAgICAgIGxldCBjcmVhdGlvbkRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNyZWF0aW9uRGF0ZUxhYmVsLmlubmVySFRNTCA9IGBDcmVhdGVkIE9uOiBgO1xuICAgICAgICBjcmVhdGlvbkRhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC10b2RvLWRhdGUtbGFiZWwnKTtcbiAgICAgICAgYWRkVG9kb1BhbmUuYXBwZW5kQ2hpbGQoY3JlYXRpb25EYXRlTGFiZWwpO1xuICAgICAgICBsZXQgY3JlYXRpb25EYXRlID0gbmV3IERhdGUoKVxuICAgICAgICBjcmVhdGlvbkRhdGVMYWJlbC5pbm5lclRleHQgKz0gYCR7Y3JlYXRpb25EYXRlLnRvRGF0ZVN0cmluZygpfWA7XG5cbiAgICAgICAgLy8gQnV0dG9uc1xuICAgICAgICBjb25zdCBhZGRUb2RvQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZFRvZG9CdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtdG9kby1idXR0b24tY29udGFpbmVyJyk7XG4gICAgICAgIGxldCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHNhdmVCdXR0b24uaW5uZXJIVE1MID0gYFNhdmUgbmV3IFRvLURvYDtcbiAgICAgICAgLy8gY2hhbmdpbmcgdGhlIGJ1dHRvbidzIHR5cGUgb3ZlcnJpZGVzIHRoZSBkZWZhdWx0IFNhdmUgQnV0dG9uIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIGZvcm0gZWxlbWVudCB0byBOT1QgUkVESVJFQ1Qgd2l0aCB0aGUgZm9ybSBlbGVtZW50LCBha2EgcmVsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgIHNhdmVCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICBsZXQgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5pbm5lckhUTUwgPSBgQ2FuY2VsIG5ldyBUby1Eb2A7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGFkZFRvZG9CdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG4gICAgICAgIGFkZFRvZG9CdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICAgICAgYWRkVG9kb1BhbmUuYXBwZW5kQ2hpbGQoYWRkVG9kb0J1dHRvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIFthZGRUb2RvUGFuZSwgdGl0bGVJbnB1dCwgZGVzY3JpcHRpb25JbnB1dCwgcHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlJbnB1dCwgbm90ZXNJbnB1dCwgZHVlRGF0ZUlucHV0LCBjcmVhdGlvbkRhdGUsIHNhdmVCdXR0b24sIGNhbmNlbEJ1dHRvbl07XG5cbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZVByb2plY3REZWxldGVUb2RvUGFuZSA9ICh0YXJnZXRQcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVRvZG9QYW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlbGV0ZVRvZG9QYW5lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVsZXRlLXRvZG8tcGFuZScpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdG9kb1BhbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb1BhbmUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZWxldGUtdG9kby1saXN0Jyk7XG4gICAgICAgIGRlbGV0ZVRvZG9QYW5lLmFwcGVuZENoaWxkKHRvZG9QYW5lKTtcblxuICAgICAgICBjb25zdCB0YXJnZXRQcm9qZWN0VG9kb0xpc3QgPSB0YXJnZXRQcm9qZWN0LmdldFRvZG9MaXN0KCk7XG4gICAgICAgIFxuICAgICAgICBsZXQgdG9kb1BhbmVMaXN0ID0gW107XG5cbiAgICAgICAgdGFyZ2V0UHJvamVjdFRvZG9MaXN0LmZvckVhY2goIGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgbGV0IHRvZG9FbGVtZW50RGl2ID0gZ2VuZXJhdGVQcm9qZWN0RGVsZXRlVG9kb0RpdihlbGVtZW50KTtcbiAgICAgICAgICAgIHRvZG9QYW5lLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50RGl2KTtcbiAgICAgICAgICAgIHRvZG9QYW5lTGlzdC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9KTtcblxuXG5cblxuICAgICAgICAvLyBFeGFtcGxlIG9mIHRyYWNpbmcgZnJvbSB0YXJnZXRQcm9qZWN0IHRvIGFsbCB0b2RvIGVsZW1lbnRzXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldFByb2plY3QuZ2V0VG9kb0xpc3QoKVswXS5nZXRJbmZvKCkpO1xuXG5cblxuICAgICAgICAvLyBCdXR0b25zXG4gICAgICAgIGNvbnN0IGRlbGV0ZVRvZG9CdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVsZXRlVG9kb0J1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZS10b2RvLWJ1dHRvbi1jb250YWluZXInKTtcbiAgICAgICAgbGV0IGRlbGV0ZVNlbGVjdGVkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZVNlbGVjdGVkQnV0dG9uLmlubmVySFRNTCA9IGBEZWxldGUgU2VsZWN0ZWRgO1xuICAgICAgICAvLyBjaGFuZ2luZyB0aGUgYnV0dG9uJ3MgdHlwZSBvdmVycmlkZXMgdGhlIGRlZmF1bHQgU2F2ZSBCdXR0b24gZnVuY3Rpb25hbGl0eSBvZiB0aGUgZm9ybSBlbGVtZW50IHRvIE5PVCBSRURJUkVDVCB3aXRoIHRoZSBmb3JtIGVsZW1lbnQsIGFrYSByZWxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgZGVsZXRlU2VsZWN0ZWRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuXG4gICAgICAgIGxldCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLmlubmVySFRNTCA9IGBDYW5jZWxgO1xuICAgICAgICBjYW5jZWxCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICBkZWxldGVUb2RvQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVNlbGVjdGVkQnV0dG9uKTtcbiAgICAgICAgZGVsZXRlVG9kb0J1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICAgICAgICBkZWxldGVUb2RvUGFuZS5hcHBlbmRDaGlsZChkZWxldGVUb2RvQnV0dG9uQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBkZWxldGVDb21wbGV0ZWRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlQ29tcGxldGVkQnV0dG9uLmlubmVySFRNTCA9IGBEZWxldGUgQ29tcGxldGVkIFRvLWRvJ3NgO1xuICAgICAgICBkZWxldGVDb21wbGV0ZWRCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZWxldGUtdG9kby1jb21wbGV0ZWQtYnV0dG9uJylcbiAgICAgICAgZGVsZXRlQ29tcGxldGVkQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgZGVsZXRlVG9kb0J1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVDb21wbGV0ZWRCdXR0b24pO1xuXG5cbiAgICAgICAgcmV0dXJuIFtkZWxldGVUb2RvUGFuZSwgZGVsZXRlU2VsZWN0ZWRCdXR0b24sIGNhbmNlbEJ1dHRvbiwgZGVsZXRlQ29tcGxldGVkQnV0dG9uLCB0b2RvUGFuZUxpc3RdO1xuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlUHJvamVjdERlbGV0ZVRvZG9EaXYgPSAodG9kb09iamVjdCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHRvZG9QYW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgaWYoIHRvZG9PYmplY3QuZ2V0Q29tcGxldGUoKSApe1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYCR7dG9kb09iamVjdC5nZXRUaXRsZSgpfSBpcyBjb21wbGV0ZTogJHt0b2RvT2JqZWN0LmdldENvbXBsZXRlKCl9YClcbiAgICAgICAgICAgIHRvZG9QYW5lLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29tcGxldGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgdG9kb1BhbmUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZWxldGUtdG9kby1kaXYnKVxuXG5cbiAgICAgICAgLy8gVHJpbW1pbmcgZG93biBsb25nIHRpdGxlIHN0cmluZ3MgdGhhdCBlc2NhcGUgbmFtZS5tYXhMZW5ndGhcbiAgICAgICAgY29uc3QgdGl0bGVUZXh0ID0gdG9kb09iamVjdC5nZXRUaXRsZSgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aXRsZVRleHQpO1xuICAgICAgICBsZXQgbmV3VGl0bGUgPSBcIlwiO1xuICAgICAgICBpZiAodGl0bGVUZXh0Lmxlbmd0aCA+IDMyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBuZXdUaXRsZSArPSB0aXRsZVRleHQuY2hhckF0KGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3VGl0bGUgKz0gXCIuLi5cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1RpdGxlID0gdGl0bGVUZXh0O1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1RpdGxlKTtcbiAgICAgICAgdG9kb1BhbmUuaW5uZXJUZXh0ICs9IG5ld1RpdGxlO1xuXG5cbiAgICAgICAgdG9kb09iamVjdC5zZXRUb2RvRGVsZXRpb25EaXYodG9kb1BhbmUpO1xuICAgICAgICByZXR1cm4gdG9kb1BhbmU7XG5cblxuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlRWRpdFRvZG9QYW5lID0gKHRhcmdldFRvZG8pID0+IHtcblxuICAgICAgICBjb25zdCBhZGRUb2RvUGFuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhZGRUb2RvUGFuZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC10b2RvLXBhbmUnKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFRpdGxlXG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0aXRsZUxhYmVsLmlubmVySFRNTCA9ICdOYW1lOiAnO1xuICAgICAgICB0aXRsZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYWRkLXRvZG8tbmFtZS1sYWJlbCcpO1xuICAgICAgICBhZGRUb2RvUGFuZS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtdG9kby1uYW1lLWlucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQubWF4TGVuZ3RoID0gXCIzMFwiO1xuICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gdGFyZ2V0VG9kby5nZXRUaXRsZSgpO1xuICAgICAgICB0aXRsZUlucHV0Lm1pbkxlbmd0aCA9IFwiMVwiO1xuICAgICAgICB0aXRsZUxhYmVsLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gICAgICAgIC8vIERlc2NyaXB0aW9uXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLmlubmVySFRNTCA9IGBEZXNjcmlwdGlvbjogYDtcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC10b2RvLWRlc2NyaXB0aW9uLWxhYmVsJyk7XG4gICAgICAgIGFkZFRvZG9QYW5lLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC10b2RvLWRlc2NyaXB0aW9uLWlucHV0Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQubWF4TGVuZ3RoID0gXCIyNFwiO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gdGFyZ2V0VG9kby5nZXREZXNjcmlwdGlvbigpO1xuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuICAgICAgICBcbiAgICAgICAgLy8gUHJpb3JpdHlcbiAgICAgICAgbGV0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBwcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9IGBQcmlvcml0eTogYDtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5pZCA9IFwicHJvamVjdC1hZGQtdG9kby1wcmlvcml0eS1sYWJlbFwiO1xuICAgICAgICBhZGRUb2RvUGFuZS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICAgICAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBwcmlvcml0eUlucHV0LnR5cGUgPSAncmFuZ2UnO1xuICAgICAgICBwcmlvcml0eUlucHV0Lm1heCA9IDU7XG4gICAgICAgIHByaW9yaXR5SW5wdXQubWluID0gMTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0VG9kby5nZXRQcmlvcml0eSgpKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IHRhcmdldFRvZG8uZ2V0UHJpb3JpdHkoKTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgICAgICAgbGV0IHByaW9yaXR5T3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0Jyk7XG4gICAgICAgIHByaW9yaXR5T3V0cHV0LnZhbHVlID0gcHJpb3JpdHlJbnB1dC52YWx1ZTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5vbmlucHV0ID0gKCkgPT4ge3ByaW9yaXR5T3V0cHV0LnZhbHVlID0gcHJpb3JpdHlJbnB1dC52YWx1ZX07XG4gICAgICAgIHByaW9yaXR5TGFiZWwuYXBwZW5kQ2hpbGQocHJpb3JpdHlPdXRwdXQpO1xuXG4gICAgICAgIC8vIE5vdGVzXG4gICAgICAgIGNvbnN0IG5vdGVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBub3Rlc0xhYmVsLmlubmVyVGV4dCA9IFwiTm90ZXM6ICAgICAgICAgICAgICAgICAgICAgXCI7XG4gICAgICAgIG5vdGVzTGFiZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtdG9kby1ub3Rlcy1sYWJlbCcpO1xuICAgICAgICBhZGRUb2RvUGFuZS5hcHBlbmRDaGlsZChub3Rlc0xhYmVsKTtcbiAgICAgICAgY29uc3Qgbm90ZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIG5vdGVzSW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtdG9kby1ub3Rlcy1pbnB1dCcpO1xuICAgICAgICBub3Rlc0lucHV0LnZhbHVlID0gdGFyZ2V0VG9kby5nZXROb3RlcygpO1xuICAgICAgICBub3Rlc0xhYmVsLmFwcGVuZENoaWxkKG5vdGVzSW5wdXQpO1xuXG4gICAgICAgIC8vIER1ZSBEYXRlXG4gICAgICAgIGxldCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkdWVEYXRlTGFiZWwuaW5uZXJIVE1MID0gYER1ZSBEYXRlOiBgO1xuICAgICAgICBkdWVEYXRlTGFiZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtdG9kby1kYXRlLWxhYmVsJyk7XG4gICAgICAgIGFkZFRvZG9QYW5lLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gICAgICAgIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICAgICAgZHVlRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgbGV0IHRlbXBEdWVEYXRlID0gdGFyZ2V0VG9kby5nZXREdWVEYXRlKClcbiAgICAgICAgdGVtcER1ZURhdGUgPSB0ZW1wRHVlRGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZUFzTnVtYmVyID0gdGVtcER1ZURhdGU7XG4gICAgICAgIGR1ZURhdGVMYWJlbC5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuXG4gICAgICAgIC8vIENyZWF0aW9uIERhdGVcbiAgICAgICAgbGV0IGNyZWF0aW9uRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY3JlYXRpb25EYXRlTGFiZWwuaW5uZXJIVE1MID0gYENyZWF0ZWQgT246IGA7XG4gICAgICAgIGNyZWF0aW9uRGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYWRkLXRvZG8tZGF0ZS1sYWJlbCcpO1xuICAgICAgICBhZGRUb2RvUGFuZS5hcHBlbmRDaGlsZChjcmVhdGlvbkRhdGVMYWJlbCk7XG4gICAgICAgIGxldCBjcmVhdGlvbkRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNyZWF0aW9uRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSdcbiAgICAgICAgY3JlYXRpb25EYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBsZXQgdGVtcENyZWF0aW9uRGF0ZSA9IHRhcmdldFRvZG8uZ2V0Q3JlYXRpb25EYXRlKCk7XG4gICAgICAgIGNyZWF0aW9uRGF0ZUlucHV0LnZhbHVlQXNEYXRlID0gdGVtcENyZWF0aW9uRGF0ZTtcbiAgICAgICAgY3JlYXRpb25EYXRlTGFiZWwuYXBwZW5kQ2hpbGQoY3JlYXRpb25EYXRlSW5wdXQpO1xuICAgICAgICBcbiAgICAgICAgLy8gQnV0dG9uc1xuICAgICAgICBjb25zdCBhZGRUb2RvQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZFRvZG9CdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtdG9kby1idXR0b24tY29udGFpbmVyJyk7XG4gICAgICAgIGxldCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHNhdmVCdXR0b24uaW5uZXJIVE1MID0gYFNhdmUgVG8tRG9gO1xuICAgICAgICAvLyBjaGFuZ2luZyB0aGUgYnV0dG9uJ3MgdHlwZSBvdmVycmlkZXMgdGhlIGRlZmF1bHQgU2F2ZSBCdXR0b24gZnVuY3Rpb25hbGl0eSBvZiB0aGUgZm9ybSBlbGVtZW50IHRvIE5PVCBSRURJUkVDVCB3aXRoIHRoZSBmb3JtIGVsZW1lbnQsIGFrYSByZWxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgc2F2ZUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGxldCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLmlubmVySFRNTCA9IGBDYW5jZWwgRWRpdCBUby1Eb2A7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGFkZFRvZG9CdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG4gICAgICAgIGFkZFRvZG9CdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICAgICAgYWRkVG9kb1BhbmUuYXBwZW5kQ2hpbGQoYWRkVG9kb0J1dHRvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIFthZGRUb2RvUGFuZSwgdGl0bGVJbnB1dCwgZGVzY3JpcHRpb25JbnB1dCwgcHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlJbnB1dCwgbm90ZXNJbnB1dCwgZHVlRGF0ZUlucHV0LCBjcmVhdGlvbkRhdGVJbnB1dCwgc2F2ZUJ1dHRvbiwgY2FuY2VsQnV0dG9uXTtcblxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldEluZm8sXG4gICAgICAgIGdlbmVyYXRlUHJvamVjdENvbnRhaW5lckRpdixcbiAgICAgICAgZ2VuZXJhdGVQcm9qZWN0Q29udGFpbmVyQWRkQnV0dG9uTWVudSxcbiAgICAgICAgZ2VuZXJhdGVQcm9qZWN0UGFuZSxcbiAgICAgICAgZ2VuZXJhdGVUb2RvRGl2LFxuICAgICAgICBnZW5lcmF0ZVRvZG9MaXN0Q29udGFpbmVyLFxuICAgICAgICBnZW5lcmF0ZVByb2plY3RFZGl0UGFuZSxcbiAgICAgICAgZ2VuZXJhdGVQcm9qZWN0QWRkVG9kb1BhbmUsXG4gICAgICAgIGdlbmVyYXRlUHJvamVjdERlbGV0ZVRvZG9QYW5lLFxuICAgICAgICBnZW5lcmF0ZVByb2plY3REZWxldGVUb2RvRGl2LFxuICAgICAgICBnZW5lcmF0ZUVkaXRUb2RvUGFuZSxcbiAgICAgICAgXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb250cm9sbGVyOyIsIi8vIEkgYW0gZXZlbnRDb250cm9sbGVyLCBJIGFtIGFuIG9iamVjdCB0aGF0IGFzc2lnbnMgZXZlbnQgZnVuY3Rpb25zIHRvIGRpdidzIHRoYXQgYXJlIHBhc3NlZCB0byBtZSB2aWEgbG9naWNDb250cm9sbGVyLlxuXG4vLyBpbXBvcnQgbG9naWNDb250cm9sbGVyIGZyb20gXCIuL2xvZ2ljQ29udHJvbGxlci5qc1wiO1xuXG5jb25zdCBldmVudENvbnRyb2xsZXIgPSAoIGxvZ2ljQ29udHJvbGxlclJlZmVyZW5jZSApID0+IHtcblxuICAgIC8vIGNvbnNvbGUubG9nKGxvZ2ljQ29udHJvbGxlclJlZmVyZW5jZSk7XG5cbiAgICBsZXQgX21lbnVPcGVuID0gZmFsc2U7XG4gICAgY29uc3QgX2xvZ2ljQ29udHJvbGxlciA9IGxvZ2ljQ29udHJvbGxlclJlZmVyZW5jZTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkkgYW0gX2xvZ2ljQ29udHJvbGxlcjogXCIgKyBfbG9naWNDb250cm9sbGVyKTtcbiAgICAvLyBjb25zb2xlLmxvZyhfbG9naWNDb250cm9sbGVyKTtcblxuXG4gICAgY29uc3QgX3RvZ2dsZU1lbnVPcGVuID0gKCkgPT4ge1xuICAgICAgICBpZihtZW51T3Blbikge1xuICAgICAgICAgICAgX21lbnVPcGVuID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfbWVudU9wZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYXR0YWNoUHJvamVjdENvbnRhaW5lckFkZEJ1dHRvbkxpc3RlbmVyID0gKGRpdikgPT4ge1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBfbG9naWNDb250cm9sbGVyLl90b2dnbGVQcm9qZWN0Q29udGFpbmVyQWRkQnV0dG9uTWVudSgpO1xuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBjb25zdCBhdHRhY2hBZGRQcm9qZWN0UHJpb3JpdHlTbGlkZXIgPSAoaW5wdXREaXZWYWx1ZSwgdGFyZ2V0RGl2KSA9PiB7XG4gICAgICAgIGlucHV0RGl2VmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBfbG9naWNDb250cm9sbGVyLl91cGRhdGVQcmlvcml0eUNvbG9yKHRhcmdldERpdiwgaW5wdXREaXZWYWx1ZS52YWx1ZSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgYXR0YWNoUHJvamVjdFRvZG9Qcmlvcml0eVNsaWRlciA9IChpbnB1dERpdlZhbHVlLCB0YXJnZXREaXYpID0+IHtcbiAgICAgICAgaW5wdXREaXZWYWx1ZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIF9sb2dpY0NvbnRyb2xsZXIuX3VwZGF0ZVRvZG9Qcmlvcml0eUNvbG9yKHRhcmdldERpdiwgaW5wdXREaXZWYWx1ZS52YWx1ZSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgYXR0YWNoQWRkUHJvamVjdFNhdmUgPSAodGFyZ2V0RGl2LCB2YWx1ZXMpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWVzKTtcbiAgICAgICAgdGFyZ2V0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3lvdSBjbGlja2VkIHNhdmUnKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlcyk7XG4gICAgICAgICAgICBfbG9naWNDb250cm9sbGVyLl9hZGRQcm9qZWN0U2F2ZUJ1dHRvbih2YWx1ZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2hBZGRQcm9qZWN0Q2FuY2VsID0gKGRpdiwgcGFyZW50TWVudURpdikgPT4ge1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBfbG9naWNDb250cm9sbGVyLl9hZGRQcm9qZWN0Q2FuY2VsQnV0dG9uKHBhcmVudE1lbnVEaXYpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGF0dGFjaFByb2plY3RFZGl0QnV0dG9uID0gKHRhcmdldERpdiwgdGFyZ2V0T2JqZWN0KSA9PiB7XG4gICAgICAgIHRhcmdldERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIF9sb2dpY0NvbnRyb2xsZXIuX2VkaXRQcm9qZWN0KHRhcmdldE9iamVjdCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgYXR0YWNoUHJvamVjdEVkaXRTYXZlQnV0dG9uID0gKHRhcmdldERpdiwgdGFyZ2V0UHJvamVjdCwgc2F2ZWRJbnB1dHMpID0+IHtcbiAgICAgICAgdGFyZ2V0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgX2xvZ2ljQ29udHJvbGxlci5fZWRpdFByb2plY3RTYXZlQnV0dG9uKHRhcmdldFByb2plY3QsIHNhdmVkSW5wdXRzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYXR0YWNoUHJvamVjdEVkaXRDYW5jZWxCdXR0b24gPSAodGFyZ2V0RGl2LCB0YXJnZXRQcm9qZWN0KSA9PiB7XG4gICAgICAgIHRhcmdldERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIF9sb2dpY0NvbnRyb2xsZXIuX2VkaXRQcm9qZWN0Q2FuY2VsQnV0dG9uKHRhcmdldFByb2plY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2hQcm9qZWN0RWRpdERlbGV0ZUJ1dHRvbiA9ICh0YXJnZXREaXYsIHRhcmdldFByb2plY3QpID0+IHtcbiAgICAgICAgdGFyZ2V0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgX2xvZ2ljQ29udHJvbGxlci5fZWRpdFByb2plY3REZWxldGVCdXR0b24odGFyZ2V0UHJvamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGF0dGFjaFByb2plY3RUb2RvQWRkQnV0dG9uID0gKHRhcmdldERpdiwgdGFyZ2V0UHJvamVjdCApID0+IHtcbiAgICAgICAgdGFyZ2V0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgX2xvZ2ljQ29udHJvbGxlci5fcHJvamVjdEFkZFRvZG9CdXR0b24odGFyZ2V0UHJvamVjdCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgYXR0YWNoUHJvamVjdFRvZG9EZWxldGVCdXR0b24gPSAodGFyZ2V0RGl2LCB0YXJnZXRQcm9qZWN0ICkgPT4ge1xuICAgICAgICB0YXJnZXREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBfbG9naWNDb250cm9sbGVyLl9wcm9qZWN0RGVsZXRlVG9kb0J1dHRvbih0YXJnZXRQcm9qZWN0KTtcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGF0dGFjaFByb2plY3RBZGRUb2RvU2F2ZUJ1dHRvbiA9ICh0YXJnZXRTYXZlQnV0dG9uLCB0YXJnZXRQcm9qZWN0LCBhZGRUb2RvUGFuZSwgc2F2ZWRWYWx1ZXMpID0+IHtcbiAgICAgICAgdGFyZ2V0U2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIF9sb2dpY0NvbnRyb2xsZXIuX3Byb2plY3RBZGRUb2RvU2F2ZUJ1dHRvbih0YXJnZXRQcm9qZWN0LCBhZGRUb2RvUGFuZSwgc2F2ZWRWYWx1ZXMpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGF0dGFjaFByb2plY3RBZGRUb2RvQ2FuY2VsQnV0dG9uID0gKHRhcmdldENhbmNlbEJ1dHRvbiwgdGFyZ2V0UHJvamVjdCwgYWRkVG9kb1BhbmUpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2hlcmUnKTtcbiAgICAgICAgdGFyZ2V0Q2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgX2xvZ2ljQ29udHJvbGxlci5fcHJvamVjdEFkZFRvZG9DYW5jZWxCdXR0b24odGFyZ2V0UHJvamVjdCwgYWRkVG9kb1BhbmUpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGF0dGFjaFNlbGVjdFRvZG9Gb3JEZWxldGlvbiA9ICh0YXJnZXRUb2RvRGl2KSA9PiB7XG4gICAgICAgIHRhcmdldFRvZG9EaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnWW91IGNsaWNrZWQgYSB0b2RvIERpdiBpbiB0aGUgZGVsZXRlIHBhbmUhJyk7XG4gICAgICAgICAgICBfbG9naWNDb250cm9sbGVyLl90b2dnbGVTZWxlY3RlZERpdkZvckRlbGV0aW9uKHRhcmdldFRvZG9EaXYpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgYXR0YWNoUHJvamVjdERlbGV0ZVNlbGVjdGVkQnV0dG9uID0gKHRhcmdldERlbGV0ZVNlbGVjdGVkQnV0dG9uLCB0YXJnZXRQcm9qZWN0LCBkZWxldGVUb2RvUGFuZSwgdG9kb1BhbmVMaXN0KSA9PiB7XG4gICAgICAgIHRhcmdldERlbGV0ZVNlbGVjdGVkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgX2xvZ2ljQ29udHJvbGxlci5fcHJvamVjdERlbGV0ZVRvZG9TZWxlY3RlZEJ1dHRvbih0YXJnZXRQcm9qZWN0LCBkZWxldGVUb2RvUGFuZSwgdG9kb1BhbmVMaXN0KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2hQcm9qZWN0RGVsZXRlQ2FuY2VsQnV0dG9uID0gKHRhcmdldERlbGV0ZUNhbmNlbCwgdGFyZ2V0UHJvamVjdCwgZGVsZXRlVG9kb1BhbmUpID0+IHtcbiAgICAgICAgdGFyZ2V0RGVsZXRlQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIF9sb2dpY0NvbnRyb2xsZXIuX3Byb2plY3REZWxldGVUb2RvQ2FuY2VsQnV0dG9uKHRhcmdldFByb2plY3QsIGRlbGV0ZVRvZG9QYW5lKTtcblxuICAgICAgICAgICAgLy8gX2xvZ2ljQ29udHJvbGxlci5fcHJvamVjdEFkZFRvZG9DYW5jZWxCdXR0b24odGFyZ2V0UHJvamVjdCwgYWRkVG9kb1BhbmUpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGF0dGFjaFByb2plY3REZWxldGVDb21wbGV0ZWRCdXR0b24gPSAodGFyZ2V0RGVsZXRlQ29tcGxldGVkQnV0dG9uLCB0YXJnZXRQcm9qZWN0LCBkZWxldGVUb2RvUGFuZSwgdG9kb1BhbmVMaXN0KSA9PiB7XG4gICAgICAgIHRhcmdldERlbGV0ZUNvbXBsZXRlZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBZb3UgY2xpa2VkIHRoZSBEZWxldGUgQ29tcGxldGVkIGJ1dHRvbiBmcm9tIHByb2plY3Q6IGApXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXRQcm9qZWN0LmdldFByb2plY3ROYW1lKCkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBfbG9naWNDb250cm9sbGVyLl9wcm9qZWN0RGVsZXRlVG9kb0NvbXBsZXRlZEJ1dHRvbih0YXJnZXRQcm9qZWN0LCBkZWxldGVUb2RvUGFuZSwgdG9kb1BhbmVMaXN0KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2hUb2RvTGlzdGVuZXJzID0gKHRhcmdldFRvZG8sIHRhcmdldFByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VG9kb0RpdiA9IHRhcmdldFRvZG8uZ2V0VG9kb0RpdigpO1xuICAgICAgICB0YXJnZXRUb2RvRGl2LmZpcnN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgWW91IGNsaWNrZWQgdGhlIGZpcnN0IGNoaWxkIG9mICR7dGFyZ2V0VG9kb0Rpdn1gKVxuICAgICAgICAgICAgX2xvZ2ljQ29udHJvbGxlci5fdG9nZ2xlQ29tcGxldGVkVG9kbyh0YXJnZXRUb2RvKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGFyZ2V0VG9kb0Rpdi5maXJzdENoaWxkLm5leHRTaWJsaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFlvdSBjbGlja2VkIHRoZSBzZWNvbmQgY2hpbGQgb2YgJHt0YXJnZXRUb2RvRGl2fWApXG4gICAgICAgICAgICBfbG9naWNDb250cm9sbGVyLl90b2dnbGVDb21wbGV0ZWRUb2RvKHRhcmdldFRvZG8pO1xuICAgICAgICB9KVxuICAgICAgICB0YXJnZXRUb2RvRGl2Lmxhc3RDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBZb3UgY2xpY2tlZCB0aGUgbGFzdCBjaGlsZCBvZiAke3RhcmdldFRvZG9EaXZ9YClcbiAgICAgICAgICAgIF9sb2dpY0NvbnRyb2xsZXIuX2VkaXRUb2RvUGFuZSh0YXJnZXRUb2RvLCB0YXJnZXRQcm9qZWN0KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2hFZGl0VG9kb1NhdmVCdXR0b24gPSAodGFyZ2V0U2F2ZUJ1dHRvbiwgdGFyZ2V0UHJvamVjdCwgdGFyZ2V0VG9kbywgZWRpdFRvZG9QYW5lRGl2LCBzYXZlZFZhbHVlcykgPT4ge1xuICAgICAgICB0YXJnZXRTYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgX2xvZ2ljQ29udHJvbGxlci5fcHJvamVjdEVkaXRUb2RvU2F2ZUJ1dHRvbih0YXJnZXRQcm9qZWN0LCB0YXJnZXRUb2RvLCBlZGl0VG9kb1BhbmVEaXYsIHNhdmVkVmFsdWVzKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2hFZGl0VG9kb0NhbmNlbEJ1dHRvbiA9ICh0YXJnZXRDYW5jZWxCdXR0b24sIHRhcmdldFByb2plY3QsIGVkaXRUb2RvUGFuZURpdikgPT4ge1xuICAgICAgICB0YXJnZXRDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBfbG9naWNDb250cm9sbGVyLl9wcm9qZWN0QWRkVG9kb0NhbmNlbEJ1dHRvbih0YXJnZXRQcm9qZWN0LCBlZGl0VG9kb1BhbmVEaXYpO1xuXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBfdG9nZ2xlTWVudU9wZW4sXG4gICAgICAgIGF0dGFjaFByb2plY3RDb250YWluZXJBZGRCdXR0b25MaXN0ZW5lcixcbiAgICAgICAgYXR0YWNoQWRkUHJvamVjdENhbmNlbCxcbiAgICAgICAgYXR0YWNoQWRkUHJvamVjdFByaW9yaXR5U2xpZGVyLFxuICAgICAgICBhdHRhY2hQcm9qZWN0VG9kb1ByaW9yaXR5U2xpZGVyLFxuICAgICAgICBhdHRhY2hBZGRQcm9qZWN0U2F2ZSxcbiAgICAgICAgYXR0YWNoUHJvamVjdEVkaXRCdXR0b24sXG4gICAgICAgIGF0dGFjaFByb2plY3RFZGl0U2F2ZUJ1dHRvbixcbiAgICAgICAgYXR0YWNoUHJvamVjdEVkaXRDYW5jZWxCdXR0b24sXG4gICAgICAgIGF0dGFjaFByb2plY3RFZGl0RGVsZXRlQnV0dG9uLFxuICAgICAgICBhdHRhY2hQcm9qZWN0VG9kb0FkZEJ1dHRvbixcbiAgICAgICAgYXR0YWNoUHJvamVjdFRvZG9EZWxldGVCdXR0b24sXG4gICAgICAgIGF0dGFjaFByb2plY3RBZGRUb2RvU2F2ZUJ1dHRvbixcbiAgICAgICAgYXR0YWNoUHJvamVjdEFkZFRvZG9DYW5jZWxCdXR0b24sXG4gICAgICAgIGF0dGFjaFNlbGVjdFRvZG9Gb3JEZWxldGlvbixcbiAgICAgICAgYXR0YWNoUHJvamVjdERlbGV0ZVNlbGVjdGVkQnV0dG9uLFxuICAgICAgICBhdHRhY2hQcm9qZWN0RGVsZXRlQ2FuY2VsQnV0dG9uLFxuICAgICAgICBhdHRhY2hQcm9qZWN0RGVsZXRlQ29tcGxldGVkQnV0dG9uLFxuICAgICAgICBhdHRhY2hUb2RvTGlzdGVuZXJzLFxuICAgICAgICBhdHRhY2hFZGl0VG9kb1NhdmVCdXR0b24sXG4gICAgICAgIGF0dGFjaEVkaXRUb2RvQ2FuY2VsQnV0dG9uLFxuXG5cblxuICAgIH1cblxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRDb250cm9sbGVyOyIsIi8vIEkgYW0gdGhlIGxvZ2ljQ29udHJvbGxlciwgSSBkZWNpZGUgbG9naWMgd2hlbmV2ZXIgZXZlbnRzIGFyZSBmaXJlZCBieSB0aGVpciBldmVudEhhbmRsZXJcblxuLy8gTGVzc29ucyBsZWFybmVkIGZyb20gdXNpbmcgRGF0ZXMgaW4gbXkgcHJvamVjdFxuLy8gMS4gRG9uJ3QgdXNlIERhdGVzXG4vLyAyLiBJZiB5b3UgaGF2ZSB0byB1c2UgZGF0ZXMsIGRvbid0IHVzZSB0aGVtIGluIGlucHV0IGZvcm1zXG4vLyAzLiBJZiB5b3UgaGF2ZSB0byB1c2UgdGhlbSBpbiBpbnB1dCBmb3JtcywgdXNlIGV2ZXJ5dGhpbmcgaW4gbWlsbGlzZWNvbmRzIGFuZCBvbmx5IGNvbnZlcnQgdG8geWVhci9tb250aC9kYXkgZm9yIGRpc3BsYXkgcHVycG9zZXNcbi8vIDQuIERvIHlvdSByZWFsbHkgaGF2ZSB0byB1c2UgRGF0ZXM/IFJlYWxseT8gQ2FuIHdlIGp1c3QuLi4gbm90P1xuLy8gNS4gRm9yIHRpbWV6b25lIGluY29uc2lzdGVuY2llcyB3aGVuIGNvbnN0cnVjdGluZyBEYXRlcyB3aXRob3V0IHNwZWNpZmljIHRpbWVzLCB0cnkgdG8gdXNlIGdldFRpbWUoKSBmb3IgbWlsbGlzZWNvbmRzIGJhc2VsaW5lLCBhbmQgYWRqdXN0IGZvciBnZXRUaW1lem9uZU9mZnNldCgpIHdoZW4gbmVjZXNzYXJ5XG5cbmltcG9ydCBwcm9qZWN0Q29udGFpbmVyT2JqIGZyb20gJy4vcHJvamVjdENvbnRhaW5lck9iai5qcyc7XG5pbXBvcnQgZGlzcGxheUNvbnRyb2xsZXIgZnJvbSAnLi9kaXNwbGF5Q29udHJvbGxlci5qcyc7XG4vLyBpbXBvcnQge2V2ZW50Q29udHJvbGxlciwgYXR0YWNoQWRkQnV0dG9uTGlzdGVuZXIgfSBmcm9tICcuL2V2ZW50Q29udHJvbGxlci5qcyc7XG5pbXBvcnQgZXZlbnRDb250cm9sbGVyIGZyb20gJy4vZXZlbnRDb250cm9sbGVyLmpzJztcbmltcG9ydCB7IHRlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJztcbmltcG9ydCB0b2RvT2JqIGZyb20gJy4vdG9kb09iai5qcyc7XG4vLyBpbXBvcnQgcHJvamVjdE9iaiBmcm9tICcuL3Byb2plY3QuanMnO1xuXG5cbmZ1bmN0aW9uIGxvZ2ljQ29udHJvbGxlcigpIHtcblxuICAgIGxldCBfcHJvamVjdENvbnRhaW5lciA9IHByb2plY3RDb250YWluZXJPYmooKTtcbiAgICBsZXQgX2Rpc3BsYXlDb250cm9sbGVyID0gZGlzcGxheUNvbnRyb2xsZXIoKTtcbiAgICBsZXQgX2NvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpOyAvL19jb250ZW50RGl2IHNob3VsZCBoYXZlIGl0cyBvd24gZ2V0dGVycyBhbmQgc2V0dGVycyBmb3IgdHlwZWNoZWNraW5nIGFuZCBzYWZldHksIGJ1dCBpcyBvbmx5IGludm9rZWQgYW5kIGluc3RhbnRpYXRlZCBvbmNlIG9uIHBhZ2UgaW5pdCB0byBiZSBwb3B1bGF0ZWQgd2l0aCBnZW5lcmF0ZVByb2plY3RDb250YWluZXIoKSwgc28gaXQgZ2V0cyBhIHBhc3MgaGVyZVxuICAgIGxldCBfZXZlbnRDb250cm9sbGVyID0gZXZlbnRDb250cm9sbGVyKHRoaXMpO1xuICAgIGxldCBfdXNlTG9jYWxTdG9yYWdlO1xuXG4gICAgLy8gVGVzdCBmb3IgbG9jYWwgc3RvcmFnZSBzdXBwb3J0IGFuZCBhdmFpbGFiaWxpdHksIHNlZSBzdG9yYWdlQXZhaWxhYmxlIGNvbW1lbnRzIGZvciBtb3JlIGRldGFpbHNcbiAgICBpZihzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgICAgICBfdXNlTG9jYWxTdG9yYWdlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBfdXNlTG9jYWxTdG9yYWdlID0gZmFsc2U7XG4gICAgfVxuXG5cblxuXG4gICAgY29uc3QgZ2V0SW5mbyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGBJIGFtIGxvZ2ljQ29udHJvbGxlci5nZXRJbmZvKClcbiAgICAgICAgVGhlc2UgYXJlIG15IHZhbHVlczpcbiAgICAgICAgX3Byb2plY3RDb250YWluZXI6ICR7X3Byb2plY3RDb250YWluZXJ9O1xuICAgICAgICBfY29udGVudERpdjogJHtfY29udGVudERpdn07XG4gICAgICAgIGA7XG4gICAgfVxuICAgIHRoaXMuZ2V0SW5mbyA9IGdldEluZm87XG5cblxuICAgIC8vIEluaXQgaXNuJ3QgYmVpbmcgdXNlZCBhdCBhbGwgaW4gbG9naWNDb250cm9sbGVyLCBtYXliZSBpdCdzIHNhZmUgdG8gcmVtb3ZlPyBYWFhVUERBVEVYWFggVHJhY2UgdGhpc1xuICAgIGNvbnN0IGluaXQgPSAobmV3UHJvamVjdENvbnRhaW5lck9iaikgPT4ge1xuICAgICAgICBfcHJvamVjdENvbnRhaW5lciA9IG5ld1Byb2plY3RDb250YWluZXJPYmo7XG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVQcm9qZWN0Q29udGFpbmVyT2JqID0gKCkgPT4ge1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWNvbmQgdGVzdCcpXG5cbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lckRpdkFyciA9IF9kaXNwbGF5Q29udHJvbGxlci5nZW5lcmF0ZVByb2plY3RDb250YWluZXJEaXYoKTsgXG5cbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lckRpdiA9IHByb2plY3RDb250YWluZXJEaXZBcnJbMF1cbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gcHJvamVjdENvbnRhaW5lckRpdkFyclsxXTtcbiAgICAgICAgX3Byb2plY3RDb250YWluZXIuaW5pdChbXSwgcHJvamVjdENvbnRhaW5lckRpdiwgYWRkQnV0dG9uLCBmYWxzZSk7O1xuICAgICAgICBfZXZlbnRDb250cm9sbGVyLmF0dGFjaFByb2plY3RDb250YWluZXJBZGRCdXR0b25MaXN0ZW5lcihhZGRCdXR0b24pO1xuXG4gICAgICAgIF9jb250ZW50RGl2LmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXJEaXYpO1xuXG4gICAgICAgIC8vIElmIGFwcGxpY2FibGUsIHJlYWQgZnJvbSBsb2NhbFN0b3JhZ2UgXG4gICAgICAgIF9yZWFkTG9jYWxTdG9yYWdlKClcblxuICAgIH1cblxuICAgIGNvbnN0IGdldFByb2plY3RDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfcHJvamVjdENvbnRhaW5lcjtcbiAgICB9XG4gICAgdGhpcy5nZXRQcm9qZWN0Q29udGFpbmVyID0gZ2V0UHJvamVjdENvbnRhaW5lcjtcblxuICAgIC8vIEluIGEgcGVyZmVjdCB3b3JsZCwgdGhpcyBzZXR0ZXIgZnVuY3Rpb24gdHlwZWNoZWNrcyBuZXdQcm9qZWN0Q29udGFpbmVyIHRvIGFsd2F5cyByZWNlaXZlIGEgcHJvamVjdENvbnRhaW5lck9iaiBmcm9tIHByb2plY3RDb250YWluZXJPYmouIEZvciB0aGUgcHVycG9zZSBvZiB0aGlzIHByb2plY3QsIGl0IHNob3VsZCBvbmx5IGJlIGludm9rZWQgb25jZSB3aGVuIHRoZSBwYWdlIGlzIGZpcnN0IGxvYWRlZCBhbmQgbm90IGNoYW5nZWQgZnJvbSB0aGF0IGluaXRpYWwgY29udGFpbmVyIC0gZXZlbiBpZiBubyBwcm9qZWN0cyBleGlzdCwgdGhlIGNvbnRhaW5lciBzaG91bGQgc3RpbGwgYmUgcHJlc2VudC4gXG4gICAgY29uc3Qgc2V0UHJvamVjdENvbnRhaW5lciA9IChuZXdQcm9qZWN0Q29udGFpbmVyKSA9PiB7XG4gICAgICAgIF9wcm9qZWN0Q29udGFpbmVyID0gbmV3UHJvamVjdENvbnRhaW5lcjtcbiAgICB9XG4gICAgdGhpcy5zZXRQcm9qZWN0Q29udGFpbmVyID0gc2V0UHJvamVjdENvbnRhaW5lcjtcblxuICAgIGNvbnN0IF90b2dnbGVQcm9qZWN0Q29udGFpbmVyQWRkQnV0dG9uTWVudSA9ICgpID0+IHtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgdG9nZ2xlIHByb2plY3RDb250YWluZXJPYmoncyBhZGRCdXR0b25NZW51YCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0NoZWNrIGlmIHRoZSBtZW51IGlzIGluIGEgc3RhdGUgdG8gYmUgb3BlbmVkJyk7XG4gICAgICAgIGlmKCAhX3Byb2plY3RDb250YWluZXIuZ2V0QWRkQnV0dG9uTWVudSgpKSB7XG4gICAgICAgICAgICBfcHJvamVjdENvbnRhaW5lci50b2dnbGVBZGRCdXR0b25NZW51KCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhfcHJvamVjdENvbnRhaW5lci5nZXRBZGRCdXR0b25NZW51KCkpO1xuXG4gICAgICAgICAgICBsZXQgX2FkZE1lbnUgPSBfZGlzcGxheUNvbnRyb2xsZXIuZ2VuZXJhdGVQcm9qZWN0Q29udGFpbmVyQWRkQnV0dG9uTWVudSgpO1xuICAgICAgICAgICAgX3Byb2plY3RDb250YWluZXIuZ2V0UHJvamVjdENvbnRhaW5lckRpdigpLmFwcGVuZENoaWxkKF9hZGRNZW51WzBdKTtcblxuICAgICAgICAgICAgLy8gQWRkIGV2ZW50IGhhbmRsZXJzIHRvIHByaW9yaXR5IGNvbG9yIHNsaWRlciwgYW5kIGJ1dHRvbnMsIGtlZXAgcmVmZXJlbmNlIG9mIGRpdiBvYmplY3RzIHJlZmVycmluZyB0byBpbnB1dC52YWx1ZVxuXG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRCdXR0b25NZW51IGlzIGluIGEgc3RhdGUgdG8gYmUgb3BlbmVkLCBnbyB0byBkaXNwbGF5Q29udHJvbGxlciBhbmQgYnVpbGQgdGhlIGRpdiBuZWNlc3NhcnkgdG8gcG9wdWxhdGUgdGhlIG1lbnUnKTtcblxuICAgICAgICAgICAgLy8gQWRkaW5nIEV2ZW50IGxpc3RlbmVycyB0byBhcHByb3ByaWF0ZSBvYmplY3RzIGluIGFkZEJ1dHRvbk1lbnVcbiAgICAgICAgICAgIC8vIHJldHVybiBbZmluaXNoZWREaXYsIG5hbWVJbnB1dCwgcHJpb3JpdHlJbnB1dCwgcHJpb3JpdHlMYWJlbCwgZHVlRGF0ZUlucHV0LCBjcmVhdGlvbkRhdGUsIHNhdmVCdXR0b24sIGNhbmNlbEJ1dHRvbl1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0FkZGluZyBldmVudGxpc3RlbmVyIHRvIGNhbmNlbCBidXR0b24nKTtcbiAgICAgICAgICAgIF9ldmVudENvbnRyb2xsZXIuYXR0YWNoQWRkUHJvamVjdENhbmNlbChfYWRkTWVudVs3XSwgX2FkZE1lbnVbMF0pO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQWRkaW5nIGV2ZW50TGlzdGVuZXIgdG8gcHJpb3JpdHkgc2xpZGVyJyk7XG4gICAgICAgICAgICBfZXZlbnRDb250cm9sbGVyLmF0dGFjaEFkZFByb2plY3RQcmlvcml0eVNsaWRlcihfYWRkTWVudVsyXSwgX2FkZE1lbnVbM10pO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQWRkaW5nIGZ1bmN0aW9uYWxpdHkgdG8gc2F2ZSBidXR0b24nKTtcbiAgICAgICAgICAgIF9ldmVudENvbnRyb2xsZXIuYXR0YWNoQWRkUHJvamVjdFNhdmUoX2FkZE1lbnVbNl0sIF9hZGRNZW51KTtcblxuXG5cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ19wcm9qZWN0Q29udGFpbmVyTWVudSBpcyB0cnVlLCBhbmQgaXMgYWxyZWFkeSBvcGVuOiBfcHJvamVjdENvbnRhaW5lci5fYWRkQnV0dG9uTWVudTogJyArIF9wcm9qZWN0Q29udGFpbmVyLmdldEFkZEJ1dHRvbk1lbnUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHRoaXMuX3RvZ2dsZVByb2plY3RDb250YWluZXJBZGRCdXR0b25NZW51ID0gX3RvZ2dsZVByb2plY3RDb250YWluZXJBZGRCdXR0b25NZW51O1xuXG4gICAgY29uc3QgX2FkZFByb2plY3RTYXZlQnV0dG9uID0gKHZhbHVlcykgPT4ge1xuICAgICAgICAvLyB2YWx1ZXMgaXMgdGhlIF9hZGRNZW51IGFycmF5IGNyZWF0ZWQgaW4gX3RvZ2dsZVByb2plY3RDb250YWluZXJBZGRCdXR0b25NZW51XG4gICAgICAgIFxuICAgICAgICAvLyBnZXQgdmFsdWVzIGZyb20gYXBwcm9wcmlhdGUgaW5wdXQgZmllbGRzXG4gICAgICAgIC8vIERvIHRoaW5nIHRvIHZhbHVlc1xuICAgICAgICAvLyBjbG9zZSBtZW51XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWVzKTtcblxuICAgICAgICAvLyBsZXQgc2FtcGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIC8vIHNhbXBsZURpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXBhbmUnKTtcbiAgICAgICAgLy8gX3Byb2plY3RDb250YWluZXIuZ2V0UHJvamVjdENvbnRhaW5lckRpdigpLmFwcGVuZENoaWxkKHNhbXBsZURpdik7XG5cbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gdmFsdWVzWzFdLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gdmFsdWVzWzJdLnZhbHVlO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZXNbNF0udmFsdWUpXG4gICAgICAgIGxldCBkdWVEYXRlSW5wdXQ7XG4gICAgICAgIGlmICggdmFsdWVzWzRdLnZhbHVlICkge1xuICAgICAgICAgICAgZHVlRGF0ZUlucHV0ID0gbmV3IERhdGUodmFsdWVzWzRdLnZhbHVlQXNEYXRlKTtcbiAgICAgICAgICAgIC8vIENvbXBlbnNhdGluZyBmb3IgdGltZXpvbmVPZmZzZXQgaW4gZGlzcGxheVxuICAgICAgICAgICAgbGV0IHRpbWV6b25lT2Zmc2V0ID0gZHVlRGF0ZUlucHV0LmdldFRpbWV6b25lT2Zmc2V0KClcbiAgICAgICAgICAgIGxldCBuZXdMb2NhbGl6ZWREdWVEYXRlSW5wdXQgPSBkdWVEYXRlSW5wdXQuZ2V0VGltZSgpICsgKHRpbWV6b25lT2Zmc2V0ICogNjAwMDApO1xuICAgICAgICAgICAgZHVlRGF0ZUlucHV0ID0gbmV3IERhdGUobmV3TG9jYWxpemVkRHVlRGF0ZUlucHV0KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHVlRGF0ZUlucHV0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkdWVEYXRlSW5wdXQpO1xuICAgICAgICBjb25zdCBjcmVhdGlvbkRhdGVJbnB1dCA9IHZhbHVlc1s1XTtcbiAgICAgICAgLy8gY29uc3QgcHJvamVjdERpdklucHV0ID0gc2FtcGxlRGl2O1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBJIGFtIFNhdmUgYnV0dG9uLCB5b3UgY2xpY2tlZCBtZS4gSGVyZSdzIHdoYXQgSSBhbSByZXR1cm5pbmc6IFxuICAgICAgICAvLyBuYW1lSW5wdXQ6ICR7bmFtZUlucHV0fVxuICAgICAgICAvLyBwcmlvcml0eUlucHV0OiAke3ByaW9yaXR5SW5wdXR9XG4gICAgICAgIC8vIGR1ZURhdGVJbnB1dDogJHtkdWVEYXRlSW5wdXR9XG4gICAgICAgIC8vIGNyZWF0aW9uRGF0ZTogJHtjcmVhdGlvbkRhdGVJbnB1dH1gKVxuICAgICAgICBcbiAgICAgICAgX2dlbmVyYXRlUHJvamVjdChuYW1lSW5wdXQsIGNyZWF0aW9uRGF0ZUlucHV0LCBkdWVEYXRlSW5wdXQsIHByaW9yaXR5SW5wdXQsIFtdKTtcblxuXG4gICAgICAgIC8vIERvIHRoZSB0aGluZyB0byBpbnN0YW50aWF0ZSBhIG5ldyBwcm9qZWN0IGhlcmVcblxuICAgICAgICAvLyAvLyBHZW5lcmF0ZSBhcHByb3ByaWF0ZSBwcm9qZWN0UGFuZSBkaXYgaGVyZVxuICAgICAgICAvLyAvLyAgLS0tLS0tLSBYWFhVUERBVEVYWFggLS0tLS0tLVxuICAgICAgICAgICAgICAgXG4gICAgICAgIC8vIGxldCB0b2RvTGlzdElucHV0ID0gW107XG4gICAgICAgIC8vIGxldCBwcm9qZWN0UGFuZVZhbHVlcyA9IF9kaXNwbGF5Q29udHJvbGxlci5nZW5lcmF0ZVByb2plY3RQYW5lKG5hbWVJbnB1dCwgcHJpb3JpdHlJbnB1dCwgZHVlRGF0ZUlucHV0LCBjcmVhdGlvbkRhdGVJbnB1dCwgdG9kb0xpc3RJbnB1dCk7XG5cbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2coX3Byb2plY3RDb250YWluZXIuZ2V0SW5mbygpKTtcbiAgICAgICAgLy8gX3Byb2plY3RDb250YWluZXIuY3JlYXRlUHJvamVjdCggbmFtZUlucHV0LCBjcmVhdGlvbkRhdGVJbnB1dCwgZHVlRGF0ZUlucHV0LCBwcmlvcml0eUlucHV0LCBwcm9qZWN0RGl2SW5wdXQgKTtcblxuXG4vLyBwcm9qZWN0TmFtZUlucHV0LCBjcmVhdGlvbkRhdGVJbnB1dCwgZHVlRGF0ZUlucHV0LCBwcm9qZWN0UHJpb3JpdHlJbnB1dCwgcHJvamVjdERpdklucHV0LCB0b2RvTGlzdElucHV0XG5cbiAgICAgICAgLy8gQ2xvc2luZyB0aGUgYWRkUHJvamVjdCBNZW51XG4gICAgICAgIF9wcm9qZWN0Q29udGFpbmVyLnRvZ2dsZUFkZEJ1dHRvbk1lbnUoKTtcbiAgICAgICAgX3Byb2plY3RDb250YWluZXIuZ2V0UHJvamVjdENvbnRhaW5lckRpdigpLnJlbW92ZUNoaWxkKHZhbHVlc1swXSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIExvY2FsIFN0b3JhZ2VcbiAgICAgICAgX3dyaXRlTG9jYWxTdG9yYWdlKCk7XG5cbiAgICB9XG4gICAgdGhpcy5fYWRkUHJvamVjdFNhdmVCdXR0b24gPSBfYWRkUHJvamVjdFNhdmVCdXR0b247XG5cbiAgICBjb25zdCBfYWRkUHJvamVjdENhbmNlbEJ1dHRvbiA9IChkaXYpID0+IHtcbiAgICAgICAgLy8gVG9nZ2xlIG1lbnUgYm9vbCB0byBjbG9zZWRcbiAgICAgICAgLy8gQ2xvc2UgbWVudVxuICAgICAgICBpZiggX3Byb2plY3RDb250YWluZXIuZ2V0QWRkQnV0dG9uTWVudSgpICkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEN1cnJlbnQgc3RhdGUgb2YgJHtfcHJvamVjdENvbnRhaW5lci5nZXRBZGRCdXR0b25NZW51KCl9YCk7XG4gICAgICAgICAgICBfcHJvamVjdENvbnRhaW5lci50b2dnbGVBZGRCdXR0b25NZW51KCk7XG4gICAgICAgICAgICBfcHJvamVjdENvbnRhaW5lci5nZXRQcm9qZWN0Q29udGFpbmVyRGl2KCkucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2FkZFByb2plY3RDYW5jZWxCdXR0b24gPSBfYWRkUHJvamVjdENhbmNlbEJ1dHRvbjtcbiAgICBcbiAgICBjb25zdCBfdXBkYXRlUHJpb3JpdHlDb2xvciA9ICh0YXJnZXREaXYsIG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1ZhbHVlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYEkgYW0gX3VwZGF0ZVByaW9yaXR5Q29sb3IhIEkgaGF2ZSBiZWVuIGNhbGxlZCBvbiB0YXJnZXREaXY6ICR7dGFyZ2V0RGl2fSB3aXRoIG5ld1ZhbHVlOiAke25ld1ZhbHVlfWApXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiBuZXdWYWx1ZSk7XG5cbiAgICAgICAgLy8gVHlwZWNoYW5naW5nIG5ld1ZhbHVlIHRvIGEgc3RyaW5nIHRvIGhpdCB0aGUgc3dpdGNoIHN0YXRlbWVudCdzIHN0cmljdCB0eXBlIGNoZWNraW5nXG4gICAgICAgIC8vIGxldCBuZXdWYWx1ZVN0cmluZyA9ICcnO1xuICAgICAgICAvLyBuZXdWYWx1ZVN0cmluZyA9IG5ld1ZhbHVlU3RyaW5nICsgbmV3VmFsdWU7XG5cbiAgICAgICAgdGFyZ2V0RGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJvbmVcIik7XG4gICAgICAgIHRhcmdldERpdi5jbGFzc0xpc3QucmVtb3ZlKFwidHdvXCIpO1xuICAgICAgICB0YXJnZXREaXYuY2xhc3NMaXN0LnJlbW92ZShcInRocmVlXCIpO1xuICAgICAgICB0YXJnZXREaXYuY2xhc3NMaXN0LnJlbW92ZShcImZvdXJcIik7XG4gICAgICAgIHRhcmdldERpdi5jbGFzc0xpc3QucmVtb3ZlKFwiZml2ZVwiKTtcblxuICAgICAgICBzd2l0Y2gobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgICAgICAgIHRhcmdldERpdi5jbGFzc0xpc3QuYWRkKFwib25lXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnMic6XG4gICAgICAgICAgICAgICAgdGFyZ2V0RGl2LmNsYXNzTGlzdC5hZGQoXCJ0d29cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICczJzpcbiAgICAgICAgICAgICAgICB0YXJnZXREaXYuY2xhc3NMaXN0LmFkZChcInRocmVlXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnNCc6XG4gICAgICAgICAgICAgICAgdGFyZ2V0RGl2LmNsYXNzTGlzdC5hZGQoXCJmb3VyXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnNSc6XG4gICAgICAgICAgICAgICAgdGFyZ2V0RGl2LmNsYXNzTGlzdC5hZGQoXCJmaXZlXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgdGhpcy5fdXBkYXRlUHJpb3JpdHlDb2xvciA9IF91cGRhdGVQcmlvcml0eUNvbG9yO1xuXG4gICAgY29uc3QgX3VwZGF0ZVRvZG9Qcmlvcml0eUNvbG9yID0gKHRhcmdldERpdiwgbmV3VmFsdWUpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmV3VmFsdWUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgSSBhbSBfdXBkYXRlUHJpb3JpdHlDb2xvciEgSSBoYXZlIGJlZW4gY2FsbGVkIG9uIHRhcmdldERpdjogJHt0YXJnZXREaXZ9IHdpdGggbmV3VmFsdWU6ICR7bmV3VmFsdWV9YClcbiAgICAgICAgLy8gY29uc29sZS5sb2codHlwZW9mIG5ld1ZhbHVlKTtcblxuICAgICAgICAvLyBUeXBlY2hhbmdpbmcgbmV3VmFsdWUgdG8gYSBzdHJpbmcgdG8gaGl0IHRoZSBzd2l0Y2ggc3RhdGVtZW50J3Mgc3RyaWN0IHR5cGUgY2hlY2tpbmdcbiAgICAgICAgLy8gbGV0IG5ld1ZhbHVlU3RyaW5nID0gJyc7XG4gICAgICAgIC8vIG5ld1ZhbHVlU3RyaW5nID0gbmV3VmFsdWVTdHJpbmcgKyBuZXdWYWx1ZTtcblxuICAgICAgICB0YXJnZXREaXYuY2xhc3NMaXN0LnJlbW92ZShcIm9uZS10b2RvXCIpO1xuICAgICAgICB0YXJnZXREaXYuY2xhc3NMaXN0LnJlbW92ZShcInR3by10b2RvXCIpO1xuICAgICAgICB0YXJnZXREaXYuY2xhc3NMaXN0LnJlbW92ZShcInRocmVlLXRvZG9cIik7XG4gICAgICAgIHRhcmdldERpdi5jbGFzc0xpc3QucmVtb3ZlKFwiZm91ci10b2RvXCIpO1xuICAgICAgICB0YXJnZXREaXYuY2xhc3NMaXN0LnJlbW92ZShcImZpdmUtdG9kb1wiKTtcblxuICAgICAgICBzd2l0Y2gobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgJzEnOlxuICAgICAgICAgICAgICAgIHRhcmdldERpdi5jbGFzc0xpc3QuYWRkKFwib25lLXRvZG9cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgICAgICB0YXJnZXREaXYuY2xhc3NMaXN0LmFkZChcInR3by10b2RvXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnMyc6XG4gICAgICAgICAgICAgICAgdGFyZ2V0RGl2LmNsYXNzTGlzdC5hZGQoXCJ0aHJlZS10b2RvXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnNCc6XG4gICAgICAgICAgICAgICAgdGFyZ2V0RGl2LmNsYXNzTGlzdC5hZGQoXCJmb3VyLXRvZG9cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc1JzpcbiAgICAgICAgICAgICAgICB0YXJnZXREaXYuY2xhc3NMaXN0LmFkZChcImZpdmUtdG9kb1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZVRvZG9Qcmlvcml0eUNvbG9yID0gX3VwZGF0ZVRvZG9Qcmlvcml0eUNvbG9yO1xuXG4gICAgY29uc3QgX2dlbmVyYXRlUHJvamVjdCA9IChuYW1lSW5wdXQsIGNyZWF0aW9uRGF0ZUlucHV0LCBkdWVEYXRlSW5wdXQsIHByaW9yaXR5SW5wdXQsIHRvZG9MaXN0SW5wdXQpID0+IHtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBwcm9qZWN0UGFuZSBEaXZcbiAgICAgICAgLy8gR2VuZXJhdGUgcHJvamVjdE9ialxuICAgICAgICAvLyBBdHRhY2ggZnVuY3Rpb25hbGl0eSB0byBhcHByb3ByaWF0ZSBEaXYgZWxlbWVudHMsIHR5aW5nIHRoZW0gdG8gcHJvamVjdE9iaiB2YWx1ZXNcblxuICAgICAgICAvLyBTYW1wbGUgdG9kb0xpc3QgZm9yIHVzZSBpbiB0ZXN0IC0gWFhYVVBEQVRFWFhYXG4gICAgICAgIGxldCBzYW1wbGVUb2RvID0gdG9kb09iaigpO1xuICAgICAgICBzYW1wbGVUb2RvLmluaXQoJ3NhbXBsZVRydWUgd2l0aCBhIHJlYWxseSBsb25nIG5hbWUgdGhhdCBpcyBzdXBwb3NlZCB0byBvdmVyZmxvdyBvbnRvIHRoZSBuZXh0IGxpbmUsIEkgcmVhbGx5IGhvcGUgdGhhdCBldmVyeXRoaW5nIHdvcmtzIG91dCBva2F5LCB0cmltIGl0IGNvcnJlY3RseSBwbGVhc2UhJywgJ2Rlc2NyaXB0aW9uJywgbmV3IERhdGUoKSwgbmV3IERhdGUoKSwgNSwgJ25vdGVzJywgW10sIHRydWUpO1xuICAgICAgICBsZXQgc2FtcGxlVG9kbzIgPSB0b2RvT2JqKCk7XG4gICAgICAgIHNhbXBsZVRvZG8yLmluaXQoJ3NhbXBsZUZhbHNlIHdpdGggYSByZWFsbHkgbG9uZyBuYW1lIHRoYXQgaXMgc3VwcG9zZWQgdG8gb3ZlcmZsb3cgb250byB0aGUgbmV4dCBsaW5lLCBJIHJlYWxseSBob3BlIHRoYXQgZXZlcnl0aGluZyB3b3JrcyBvdXQgb2theSwgdHJpbSBpdCBjb3JyZWN0bHkgcGxlYXNlIScsICdkZXNjcmlwdGlvbicsIG5ldyBEYXRlKCksIG5ldyBEYXRlKCksIDQsICdub3RlcycsIFtdLCBmYWxzZSk7XG4gICAgICAgIGxldCBzYW1wbGVUb2RvMyA9IHRvZG9PYmooKTtcbiAgICAgICAgc2FtcGxlVG9kbzMuaW5pdCgnRmFsc2UxMjM0NTY3ODkwMTIzNDU2Nzg5MDEyNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTIzNDU3ODkwMTIzNDU2Nzg5MCcsICdkZXNjcmlwdGlvbicsIG5ldyBEYXRlKCksIG5ldyBEYXRlKCksIDIsICdub3RlcycsIFtdLCBmYWxzZSk7XG4gICAgICAgIGxldCBzYW1wbGVUb2RvNCA9IHRvZG9PYmooKTtcbiAgICAgICAgc2FtcGxlVG9kbzQuaW5pdCgnVHJ1ZTEyMzQ1Njc4OTAxMjM0NTY3ODkwMTI0NTY3ODkwMTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTc4OTAxMjM0NTY3ODkwJywgJ2Rlc2NyaXB0aW9uJywgbmV3IERhdGUoKSwgbmV3IERhdGUoKSwgMSwgJ25vdGVzJywgW10sIHRydWUpO1xuXG5cbiAgICAgICAgbGV0IHNhbXBsZVRvZG9MaXN0ID0gW3NhbXBsZVRvZG8sc2FtcGxlVG9kbzIsIHNhbXBsZVRvZG8zLCBzYW1wbGVUb2RvNF07XG5cblxuICAgICAgICAvLyBYWFhVUERBVEVYWFggUmVtb3ZlIHRoaXMgbGluZSB3aGVuIGFwcHJvcHJpYXRlXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRvZG9MaXN0SW5wdXQpO1xuICAgICAgICAvLyB0b2RvTGlzdElucHV0ID0gdG9kb0xpc3RJbnB1dC5jb25jYXQoc2FtcGxlVG9kb0xpc3QpO1xuICAgICAgICAvLyBYWFhVUERBVEVYWFggQXBwZW5kaW5nIHNhbXBsZVRvZG9MaXN0IHRvIHRvZG9MaXN0SW5wdXQsIHJlbW92ZSB0aGlzIGxhdGVyXG5cbiAgICAgICAgLy8gR2VuZXJhdGUgcHJvamVjdFBhbmUgRGl2XG4gICAgICAgIGxldCBwcm9qZWN0UGFuZURpdlZhbHVlcyA9IF9kaXNwbGF5Q29udHJvbGxlci5nZW5lcmF0ZVByb2plY3RQYW5lKG5hbWVJbnB1dCwgcHJpb3JpdHlJbnB1dCwgZHVlRGF0ZUlucHV0LCBjcmVhdGlvbkRhdGVJbnB1dCwgdG9kb0xpc3RJbnB1dCk7XG4gICAgICAgIF9wcm9qZWN0Q29udGFpbmVyLmdldFByb2plY3RDb250YWluZXJEaXYoKS5hcHBlbmRDaGlsZChwcm9qZWN0UGFuZURpdlZhbHVlc1swXSk7XG5cbiAgICAgICAgLy8gdXBkYXRlUHJpb3JpdHkgY29sb3Igb2YgcHJvamVjdFBhbmVcbiAgICAgICAgX3VwZGF0ZVByaW9yaXR5Q29sb3IocHJvamVjdFBhbmVEaXZWYWx1ZXNbMl0sIHByaW9yaXR5SW5wdXQpO1xuXG4gICAgICAgXG4gICAgICAgIC8vIEdlbmVyYXRlIHByb2plY3RPYmpcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBfcHJvamVjdENvbnRhaW5lci5jcmVhdGVQcm9qZWN0KCBuYW1lSW5wdXQsIG5ldyBEYXRlKGNyZWF0aW9uRGF0ZUlucHV0KSwgbmV3IERhdGUoZHVlRGF0ZUlucHV0KSwgcHJpb3JpdHlJbnB1dCxwcm9qZWN0UGFuZURpdlZhbHVlc1swXSwgdG9kb0xpc3RJbnB1dCApO1xuXG4gICAgICAgIC8vIEF0dGFjaCBwcm9qZWN0T2JqIHRvIF9wcm9qZWN0Q29udGFpbmVyLl9wcm9qZWN0QXJyW11cbiAgICAgICAgX3Byb2plY3RDb250YWluZXIuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcblxuXG4gICAgICAgIC8vIEF0dGFjaCBmdW5jdGlvbmFsaXR5IHRvIGFwcHJvcHJpYXRlIERpdiBlbGVtZW50cywgdHlpbmcgdGhlbSB0byBwcm9qZWN0T2JqIHZhbHVlc1xuICAgICAgICBuZXdQcm9qZWN0LnNldFByb2plY3REaXYocHJvamVjdFBhbmVEaXZWYWx1ZXNbMF0pO1xuXG4gICAgICAgIC8vIGF0dGFjaCBwcm9qZWN0RWRpdEJ1dHRvbiBmdW5jdGlvbmFsaXR5XG4gICAgICAgIF9ldmVudENvbnRyb2xsZXIuYXR0YWNoUHJvamVjdEVkaXRCdXR0b24ocHJvamVjdFBhbmVEaXZWYWx1ZXNbMV0sIG5ld1Byb2plY3QpXG5cbiAgICAgICAgLy8gQXR0YWNoIHRvZG9CdXR0b24gZnVuY3Rpb25hbGl0eVxuICAgICAgICBfZXZlbnRDb250cm9sbGVyLmF0dGFjaFByb2plY3RUb2RvQWRkQnV0dG9uKHByb2plY3RQYW5lRGl2VmFsdWVzWzNdLCBuZXdQcm9qZWN0KTtcbiAgICAgICAgX2V2ZW50Q29udHJvbGxlci5hdHRhY2hQcm9qZWN0VG9kb0RlbGV0ZUJ1dHRvbihwcm9qZWN0UGFuZURpdlZhbHVlc1s0XSwgbmV3UHJvamVjdCk7XG5cbiAgICAgICAgLy8gQXR0YWNoIHRvZG9EaXYgRnVuY3Rpb25hbGl0eVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdQcm9qZWN0LmdldFRvZG9MaXN0KCkpO1xuICAgICAgICBuZXdQcm9qZWN0LmdldFRvZG9MaXN0KCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIF9ldmVudENvbnRyb2xsZXIuYXR0YWNoVG9kb0xpc3RlbmVycyhlbGVtZW50LCBuZXdQcm9qZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8gWFhYVVBEQVRFWFhYIFJlcGxhY2UgdGhlIGFib3ZlIGZ1bmN0aW9uIHRvIHRha2UgdG9EbyBlbGVtZW50cyBmcm9tIGJlbG93XG4gICAgICAgIC8vIHRvZG9MaXN0SW5wdXQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgLy8gICAgIF9ldmVudENvbnRyb2xsZXIuYXR0YWNoVG9kb0xpc3RlbmVycyhlbGVtZW50LCBuZXdQcm9qZWN0KTtcbiAgICAgICAgLy8gfSlcblxuXG5cblxuICAgIH1cbiAgICB0aGlzLl9nZW5lcmF0ZVByb2plY3QgPSBfZ2VuZXJhdGVQcm9qZWN0O1xuXG4gICAgY29uc3QgX2VkaXRQcm9qZWN0ID0gKHRhcmdldFByb2plY3QpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFlvdSBjbGlja2VkIHRoZSBfZWRpdFByb2plY3QgYnV0dG9uIHRhcmdldGluZyB0aGUgcHJvamVjdDogYCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldFByb2plY3QuZ2V0SW5mbygpKTtcblxuICAgICAgICAvLyBUb2dnbGUgbWVudU9wZW5cbiAgICAgICAgaWYodGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0TWVudU9wZW4oKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciEgRWRpdCBQcm9qZWN0IG1lbnUgaXMgcmV0dXJuaW5nIHRydWUsIGFuZCBpcyBhbHJlYWR5IG9wZW4hXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0UHJvamVjdC50b2dnbGVQcm9qZWN0TWVudU9wZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAvLyBHZW5lcmF0ZSBlZGl0UHJvamVjdFBhbmVcbiAgICAgICAgY29uc3QgZWRpdFBhbmUgPSBfZGlzcGxheUNvbnRyb2xsZXIuZ2VuZXJhdGVQcm9qZWN0RWRpdFBhbmUodGFyZ2V0UHJvamVjdCk7XG5cblxuXG4gICAgICAgIHRhcmdldFByb2plY3QuZ2V0UHJvamVjdERpdigpLmFwcGVuZENoaWxkKGVkaXRQYW5lWzBdKTtcblxuICAgICAgICAvLyBBc3NpZ24gaW5pdGlhbCBQcmlvcml0eSBTbGlkZXIgQ29sb3JcbiAgICAgICAgX3VwZGF0ZVByaW9yaXR5Q29sb3IoZWRpdFBhbmVbMl0sIHRhcmdldFByb2plY3QuZ2V0UHJvamVjdFByaW9yaXR5KCkpO1xuXG4gICAgICAgIC8vIEF0dGFjaCBQcmlvcml0eSBTbGlkZXIgZnVuY3Rpb25hbGl0eVxuICAgICAgICBfZXZlbnRDb250cm9sbGVyLmF0dGFjaEFkZFByb2plY3RQcmlvcml0eVNsaWRlcihlZGl0UGFuZVsxXSwgZWRpdFBhbmVbMl0pO1xuICAgICAgICAvLyBfdXBkYXRlUHJpb3JpdHlDb2xvcihlZGl0UGFuZVswXSwgdGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0UHJpb3JpdHkoKSk7XG5cblxuICAgICAgICAvLyBBdHRhY2ggZXZlbnRMaXN0ZW5lcnMgdG8gU2F2ZSwgQ2FuY2VsIGFuZCBEZWxldGUgYnV0dG9uc1xuICAgICAgICBjb25zdCBlZGl0UHJvamVjdFNhdmVCdXR0b24gPSBlZGl0UGFuZVszXTtcbiAgICAgICAgY29uc3QgZWRpdFByb2plY3RDYW5jZWxCdXR0b24gPSBlZGl0UGFuZVs0XTtcbiAgICAgICAgY29uc3QgZWRpdFByb2plY3REZWxldGVCdXR0b24gPSBlZGl0UGFuZVs1XTtcbiAgICAgICAgY29uc3Qgc2F2ZWRJbnB1dHMgPSBlZGl0UGFuZVs2XTtcbiAgICAgICAgX2V2ZW50Q29udHJvbGxlci5hdHRhY2hQcm9qZWN0RWRpdFNhdmVCdXR0b24oZWRpdFByb2plY3RTYXZlQnV0dG9uLCB0YXJnZXRQcm9qZWN0LCBzYXZlZElucHV0cyk7XG4gICAgICAgIF9ldmVudENvbnRyb2xsZXIuYXR0YWNoUHJvamVjdEVkaXRDYW5jZWxCdXR0b24oZWRpdFByb2plY3RDYW5jZWxCdXR0b24sIHRhcmdldFByb2plY3QpO1xuICAgICAgICBfZXZlbnRDb250cm9sbGVyLmF0dGFjaFByb2plY3RFZGl0RGVsZXRlQnV0dG9uKGVkaXRQcm9qZWN0RGVsZXRlQnV0dG9uLCB0YXJnZXRQcm9qZWN0KTtcblxuXG5cblxuICAgIH1cbiAgICB0aGlzLl9lZGl0UHJvamVjdCA9IF9lZGl0UHJvamVjdDtcblxuICAgIGNvbnN0IF9lZGl0UHJvamVjdFNhdmVCdXR0b24gPSAodGFyZ2V0UHJvamVjdCwgc2F2ZWRWYWx1ZXMpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFlvdSBjbGlja2VkIHRoZSBTYXZlIGJ1dHRvbiBvbiB0aGUgRURJVCBwYWdlIG9mIHRoZSBmb2xsb3dpbmcgcHJvamVjdDogYCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldFByb2plY3QuZ2V0SW5mbygpKTtcblxuICAgICAgICAvLyBPbiBwcm9qZWN0IHNhdmUsIGNsb3NlIGVkaXRQYW5lLCB3cml0ZSBuZXcgdmFsdWVzIHRvIHByb2plY3RPYmosIHVwZGF0ZSBET00gdmFsdWVzIHRvIG1hdGNoIG5ldyBwcm9qZWN0T2JqIHZhbHVlcywgdG9nZ2xlUHJvamVjdE1lbnVPcGVuKClcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgSSBoYXZlIHNhdmVkVmFsdWVzISBUaG9zZSBhcmUgOiBgKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYE5hbWU6ICR7c2F2ZWRWYWx1ZXNbMF0udmFsdWV9YCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBQcmlvcml0eTogJHt0b1N0cmluZyhzYXZlZFZhbHVlc1sxXS52YWx1ZSl9YCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBEdWUgRGF0ZTogJHtzYXZlZFZhbHVlc1syXS52YWx1ZUFzRGF0ZX1gKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYENyZWF0aW9uIERhdGU6ICR7c2F2ZWRWYWx1ZXNbM10udmFsdWVBc0RhdGV9YCk7XG5cblxuICAgICAgICAvLyBXcml0ZSBuZXcgdmFsdWVzIFxuICAgICAgICB0YXJnZXRQcm9qZWN0LnNldFByb2plY3ROYW1lKHNhdmVkVmFsdWVzWzBdLnZhbHVlKTtcbiAgICAgICAgdGFyZ2V0UHJvamVjdC5zZXRQcm9qZWN0UHJpb3JpdHkoc2F2ZWRWYWx1ZXNbMV0udmFsdWUpO1xuXG5cbiAgICAgICAgICAgIC8vIFdyaXRlIG5ldyBkdWVEYXRlIGlmIG5ldyBkdWVEYXRlICE9PSBvbGREdWVEYXRlIHZhbHVlc1xuICAgICAgICAgICAgbGV0IG5ld0R1ZURhdGUgPSBzYXZlZFZhbHVlc1syXS52YWx1ZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBuZXdEdWVEYXRlOiAke25ld0R1ZURhdGV9YCk7IC8vIGZvcm1hdCBcIjIwMjItMDMtMjFcIlxuICAgICAgICAgICAgbGV0IG9sZER1ZURhdGUgPSB0YXJnZXRQcm9qZWN0LmdldFByb2plY3REdWVEYXRlKCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgb2xkRHVlRGF0ZTogJHtvbGREdWVEYXRlfWApO1xuICAgICAgICAgICAgbGV0IG9sZER1ZURhdGVTdHJpbmcgPSBgJHtvbGREdWVEYXRlLmdldEZ1bGxZZWFyKCl9LWBcbiAgICAgICAgICAgIGlmKG9sZER1ZURhdGUuZ2V0TW9udGgoKSArIDEgPCAxMCkge1xuICAgICAgICAgICAgICAgIG9sZER1ZURhdGVTdHJpbmcgKz0gYDAke29sZER1ZURhdGUuZ2V0TW9udGgoKSArIDF9LWBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2xkRHVlRGF0ZVN0cmluZyArPSBgJHtvbGREdWVEYXRlLmdldE1vbnRoKCkgKyAxfS1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihvbGREdWVEYXRlLmdldERhdGUoKSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgb2xkRHVlRGF0ZVN0cmluZyArPSBgMCR7b2xkRHVlRGF0ZS5nZXREYXRlKCl9YFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvbGREdWVEYXRlU3RyaW5nICs9IGAke29sZER1ZURhdGUuZ2V0RGF0ZSgpfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBvbGREdWVEYXRlU3RyaW5nOiAke29sZER1ZURhdGVTdHJpbmd9YCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgbmV3RHVlRGF0ZTogJHtuZXdEdWVEYXRlfSB2cyAke29sZER1ZURhdGVTdHJpbmd9OiBvbGREdWVEYXRlU3RyaW5nYCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggbmV3RHVlRGF0ZSAhPSBvbGREdWVEYXRlU3RyaW5nKTtcbiAgICAgICAgICAgIGlmIChuZXdEdWVEYXRlICE9PSBvbGREdWVEYXRlU3RyaW5nICkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBuZXdEdWVEYXRlICE9PSBvbGREdWVEYXRlU3RyaW5nIWApO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBTZXQgbmV3IGR1ZSBkYXRlIHRvICR7bmV3RHVlRGF0ZX0gd2l0aCBjdXJyZW50IHRpbWUgZmlsbGVkIGluIWApO1xuICAgICAgICAgICAgICAgIHRhcmdldFByb2plY3Quc2V0UHJvamVjdER1ZURhdGUobmV3IERhdGUobmV3RHVlRGF0ZSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBXcml0ZSBuZXcgY3JlYXRpb25EYXRlIGlmIG5ldyBjcmVhdGlvbkRhdGUgIT09IG9sZENyZWF0aW9uRGF0ZSB2YWx1ZXNcbiAgICAgICAgICAgIGxldCBuZXdDcmVhdGlvbkRhdGUgPSBzYXZlZFZhbHVlc1szXS52YWx1ZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBuZXdDcmVhdGlvbkRhdGU6ICR7bmV3Q3JlYXRpb25EYXRlfWApOyAvLyBmb3JtYXQgXCIyMDIyLTAzLTIxXCJcbiAgICAgICAgICAgIGxldCBvbGRDcmVhdGlvbkRhdGUgPSB0YXJnZXRQcm9qZWN0LmdldFByb2plY3RDcmVhdGlvbkRhdGUoKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBvbGRDcmVhdGlvbkRhdGU6ICR7b2xkQ3JlYXRpb25EYXRlfWApO1xuICAgICAgICAgICAgbGV0IG9sZENyZWF0aW9uRGF0ZVN0cmluZyA9IGAke29sZENyZWF0aW9uRGF0ZS5nZXRGdWxsWWVhcigpfS1gXG4gICAgICAgICAgICBpZihvbGRDcmVhdGlvbkRhdGUuZ2V0TW9udGgoKSArIDEgPCAxMCkge1xuICAgICAgICAgICAgICAgIG9sZENyZWF0aW9uRGF0ZVN0cmluZyArPSBgMCR7b2xkQ3JlYXRpb25EYXRlLmdldE1vbnRoKCkgKyAxfS1gXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9sZENyZWF0aW9uRGF0ZVN0cmluZyArPSBgJHtvbGRDcmVhdGlvbkRhdGUuZ2V0TW9udGgoKSArIDF9LWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKG9sZENyZWF0aW9uRGF0ZS5nZXREYXRlKCkgPCAxMCkge1xuICAgICAgICAgICAgICAgIG9sZENyZWF0aW9uRGF0ZVN0cmluZyArPSBgMCR7b2xkQ3JlYXRpb25EYXRlLmdldERhdGUoKX1gXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9sZENyZWF0aW9uRGF0ZVN0cmluZyArPSBgJHtvbGRDcmVhdGlvbkRhdGUuZ2V0RGF0ZSgpfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBvbGRDcmVhdGlvbkRhdGVTdHJpbmc6ICR7b2xkQ3JlYXRpb25EYXRlU3RyaW5nfWApO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYG5ld0NyZWF0aW9uRGF0ZTogJHtuZXdDcmVhdGlvbkRhdGV9IHZzICR7b2xkQ3JlYXRpb25EYXRlU3RyaW5nfTogb2xkQ3JlYXRpb25EYXRlU3RyaW5nYCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggbmV3Q3JlYXRpb25EYXRlICE9IG9sZENyZWF0aW9uRGF0ZVN0cmluZyk7XG4gICAgICAgICAgICBpZiAobmV3Q3JlYXRpb25EYXRlICE9PSBvbGRDcmVhdGlvbkRhdGVTdHJpbmcgKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYG5ld0NyZWF0aW9uRGF0ZSAhPT0gb2xkQ3JlYXRpb25EYXRlU3RyaW5nIWApO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBTZXQgbmV3IGR1ZSBkYXRlIHRvICR7bmV3Q3JlYXRpb25EYXRlfSB3aXRoIGN1cnJlbnQgdGltZSBmaWxsZWQgaW4hYCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0UHJvamVjdC5zZXRQcm9qZWN0Q3JlYXRpb25EYXRlKG5ldyBEYXRlKG5ld0NyZWF0aW9uRGF0ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgIC0tLS0tLS0tLS0tIHRhcmdldFByb2plY3QncyBuZXcgRGF0YSBpczogLS0tLS0tLS0tLS0tLWApXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldFByb2plY3QuZ2V0SW5mbygpKTtcblxuXG5cbiAgICAgICAgLy8gVXBkYXRlIERPTSB2YWx1ZXMgdG8gbWF0Y2ggbmV3IHByb2plY3RPYmogdmFsdWVzXG4gICAgICAgIGxldCB0YXJnZXRQcm9qZWN0RGl2ID0gdGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0RGl2KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldFByb2plY3REaXYpO1xuICAgICAgICAgICAgLy8gVGFyZ2V0aW5nIG5hbWUgcGxhdGUgYW5kIGFkanVzdGluZyBuYW1lcGxhdGUgcHJpb3JpdHlcbiAgICAgICAgICAgIGxldCBuYW1lUGxhdGVEaXYgPSB0YXJnZXRQcm9qZWN0RGl2LmZpcnN0Q2hpbGRcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5hbWVQbGF0ZURpdik7XG4gICAgICAgICAgICBfdXBkYXRlUHJpb3JpdHlDb2xvcihuYW1lUGxhdGVEaXYsIHRhcmdldFByb2plY3QuZ2V0UHJvamVjdFByaW9yaXR5KCkpO1xuICAgICAgICAgICAgbGV0IG5hbWVQbGF0ZUNvbnRlbnREaXYgPSBuYW1lUGxhdGVEaXYuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5hbWVQbGF0ZUNvbnRlbnREaXYpO1xuICAgICAgICAgICAgbmFtZVBsYXRlQ29udGVudERpdi5pbm5lclRleHQgPSB0YXJnZXRQcm9qZWN0LmdldFByb2plY3ROYW1lKCk7XG5cbiAgICAgICAgICAgIC8vIFRhcmdldGluZyBQcm9qZWN0IERhdGUgY29udGFpbmVyIFxuICAgICAgICAgICAgbGV0IHByb2plY3REYXRlQ29udGFpbmVyRGl2ID0gbmFtZVBsYXRlRGl2Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdERhdGVDb250YWluZXJEaXYpO1xuICAgICAgICAgICAgbGV0IHByb2plY3RDcmVhdGlvbkRhdGVEaXYgPSBwcm9qZWN0RGF0ZUNvbnRhaW5lckRpdi5maXJzdENoaWxkO1xuICAgICAgICAgICAgLy8gT25seSBjaGFuZ2UgZGlzcGxheWVkIGRhdGUgaWYgdGhlIGRhdGVzIGFjdHVhbGx5IGNoYW5nZWRcbiAgICAgICAgICAgIGlmIChuZXdDcmVhdGlvbkRhdGUgIT09IG9sZENyZWF0aW9uRGF0ZVN0cmluZyApIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgbG9jYWxpemVkQ3JlYXRpb25EYXRlID0gdGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0Q3JlYXRpb25EYXRlKCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobG9jYWxpemVkRHVlRGF0ZSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobG9jYWxpemVkRHVlRGF0ZS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIGxldCB0aW1lem9uZU9mZnNldCA9IGxvY2FsaXplZENyZWF0aW9uRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aW1lem9uZU9mZnNldCAqIDYwMDAwKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3TG9jYWxpemVkQ3JlYXRpb25EYXRlID0gbG9jYWxpemVkQ3JlYXRpb25EYXRlLmdldFRpbWUoKSArICh0aW1lem9uZU9mZnNldCAqIDYwMDAwKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RDcmVhdGlvbkRhdGVEaXYuaW5uZXJUZXh0ID0gKG5ldyBEYXRlKG5ld0xvY2FsaXplZENyZWF0aW9uRGF0ZSkpLnRvRGF0ZVN0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHByb2plY3REdWVEYXRlRGl2ID0gcHJvamVjdERhdGVDb250YWluZXJEaXYubGFzdENoaWxkO1xuICAgICAgICAgICAgLy8gT25seSBjaGFuZ2UgZGlzcGxheWVkIGRhdGUgaWYgdGhlIGRhdGVzIGFjdHVhbGx5IGNoYW5nZWRcbiAgICAgICAgICAgIGlmIChuZXdEdWVEYXRlICE9PSBvbGREdWVEYXRlU3RyaW5nICkge1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgbG9jYWxpemVkRHVlRGF0ZSA9IHRhcmdldFByb2plY3QuZ2V0UHJvamVjdER1ZURhdGUoKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2NhbGl6ZWREdWVEYXRlKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2NhbGl6ZWREdWVEYXRlLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgbGV0IHRpbWV6b25lT2Zmc2V0ID0gbG9jYWxpemVkRHVlRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aW1lem9uZU9mZnNldCAqIDYwMDAwKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3TG9jYWxpemVkRHVlRGF0ZSA9IGxvY2FsaXplZER1ZURhdGUuZ2V0VGltZSgpICsgKHRpbWV6b25lT2Zmc2V0ICogNjAwMDApO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld0xvY2FsaXplZER1ZURhdGUpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ldyBEYXRlKG5ld0xvY2FsaXplZER1ZURhdGUpKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3REdWVEYXRlRGl2LmlubmVyVGV4dCA9IChuZXcgRGF0ZShuZXdMb2NhbGl6ZWREdWVEYXRlKSkudG9EYXRlU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIC8vIENsb3NlIGVkaXRQYW5lIGFuZCB0b2dnbGVQcm9qZWN0TWVudU9wZW4oKVxuICAgICAgICBsZXQgZWRpdFBhbmUgPSB0YXJnZXRQcm9qZWN0LmdldFByb2plY3REaXYoKS5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1lZGl0LXBhbmUnKTtcbiAgICAgICAgdGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0RGl2KCkucmVtb3ZlQ2hpbGQoZWRpdFBhbmUpO1xuICAgICAgICB0YXJnZXRQcm9qZWN0LnRvZ2dsZVByb2plY3RNZW51T3BlbigpO1xuXG5cbiAgICAgICAgLy8gVXBkYXRlIExvY2FsIFN0b3JhZ2VcbiAgICAgICAgX3dyaXRlTG9jYWxTdG9yYWdlKCk7XG5cblxuXG4gICAgfVxuICAgIHRoaXMuX2VkaXRQcm9qZWN0U2F2ZUJ1dHRvbiA9IF9lZGl0UHJvamVjdFNhdmVCdXR0b25cblxuICAgIGNvbnN0IF9lZGl0UHJvamVjdENhbmNlbEJ1dHRvbiA9ICh0YXJnZXRQcm9qZWN0KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBZb3UgY2xpY2tlZCB0aGUgQ2FuY2VsIGJ1dHRvbiBvbiB0aGUgRURJVCBwYWdlIG9mIHRoZSBmb2xsb3dpbmcgcHJvamVjdDogYCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldFByb2plY3QuZ2V0SW5mbygpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0RGl2KCkpO1xuXG4gICAgICAgIGxldCBlZGl0UGFuZSA9IHRhcmdldFByb2plY3QuZ2V0UHJvamVjdERpdigpLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWVkaXQtcGFuZScpO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgZWRpdFBhbmUgZGl2IENoaWxkIGVsZW1lbnQgZnJvbSB0aGUgdGFyZ2V0UHJvamVjdFxuICAgICAgICB0YXJnZXRQcm9qZWN0LmdldFByb2plY3REaXYoKS5yZW1vdmVDaGlsZChlZGl0UGFuZSk7XG4gICAgICAgIC8vIFRvZ2dsZSBwcm9qZWN0TWVudU9wZW4gdG8gZmFsc2UsIHNvIHRoYXQgdGhlIGVkaXRNZW51IGNhbiBiZSByZS1vcGVuZWRcbiAgICAgICAgdGFyZ2V0UHJvamVjdC50b2dnbGVQcm9qZWN0TWVudU9wZW4oKTtcblxuICAgIH1cbiAgICB0aGlzLl9lZGl0UHJvamVjdENhbmNlbEJ1dHRvbiA9IF9lZGl0UHJvamVjdENhbmNlbEJ1dHRvbjtcblxuXG4gICAgY29uc3QgX2VkaXRQcm9qZWN0RGVsZXRlQnV0dG9uID0gKHRhcmdldFByb2plY3QpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFlvdSBjbGlja2VkIHRoZSBEZWxldGUgYnV0dG9uIG9uIHRoZSBFRElUIHBhZ2Ugb2YgdGhlIGZvbGxvd2luZyBwcm9qZWN0OiBgKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0UHJvamVjdC5nZXRJbmZvKCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhfcHJvamVjdENvbnRhaW5lci5nZXRQcm9qZWN0QXJyKClbMF0uZ2V0SW5mbygpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coX3Byb2plY3RDb250YWluZXIuZ2V0SW5mbygpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coX3Byb2plY3RDb250YWluZXIuZ2V0UHJvamVjdEFycigpKTtcbiAgICAgICAgXG5cbiAgICAgICAgLy8gVGFyZ2V0IFByb2plY3QgQ29udGFpbmVyIGFuZCBmaW5kIGl0J3MgaW5kZXggcmVmZXJlbmNlIGZvciB0YXJnZXRQcm9qZWN0XG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXJBcnIgPSBfcHJvamVjdENvbnRhaW5lci5nZXRQcm9qZWN0QXJyKCk7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAoaW5kZXg7IGluZGV4IDwgcHJvamVjdENvbnRhaW5lckFyci5sZW5ndGg7IGluZGV4KysgKXtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBTZWFyY2hpbmcgZm9yIHRhcmdldFByb2plY3QgKCR7dGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpfSkgYXQgaW5kZXggJHtpbmRleH1gKTtcbiAgICAgICAgICAgIGlmKHByb2plY3RDb250YWluZXJBcnJbaW5kZXhdID09PSB0YXJnZXRQcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFlvdSd2ZSBmb3VuZCB0aGUgcHJvamVjdCBhdCBpbmRleDogJHtpbmRleH0uIERvIHRoZSB0aGluZyB0byBkZWxldGUgdGFyZ2V0UHJvamVjdCBmcm9tIF9wcm9qZWN0Q29udGFpbmVyLl9wcm9qZWN0QXJyW11gKTtcbiAgICAgICAgICAgICAgICBfcHJvamVjdENvbnRhaW5lci5kZWxldGVQcm9qZWN0KGluZGV4KTtcbiAgICAgICAgICAgICAgICBfcHJvamVjdENvbnRhaW5lci5nZXRQcm9qZWN0Q29udGFpbmVyRGl2KCkucmVtb3ZlQ2hpbGQodGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0RGl2KCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBMb2NhbCBTdG9yYWdlXG4gICAgICAgIF93cml0ZUxvY2FsU3RvcmFnZSgpO1xuXG4gICAgfVxuICAgIHRoaXMuX2VkaXRQcm9qZWN0RGVsZXRlQnV0dG9uID0gX2VkaXRQcm9qZWN0RGVsZXRlQnV0dG9uO1xuXG4gICAgY29uc3QgX3Byb2plY3RBZGRUb2RvQnV0dG9uID0gKHRhcmdldFByb2plY3QpID0+IHtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgSSdtIGluIGxvZ2ljQ29udHJvbGxlciwgYWRkIHRvZG8gYnV0dG9uYCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coYHRlc3QgaWYgdGhpcyBwcm9qZWN0IGNhbiBvcGVuIGEgbWVudSwgdGhlbiBvcGVuIHRoZSBBZGQgdG90byBtZW51IHRhcmdldGluZyB0aGlzIHByb2plY3RgKTtcblxuICAgICAgICBcbiAgICAgICAgaWYodGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0TWVudU9wZW4oKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFRhcmdldFByb2plY3QgaXMgTk9UIGluIGEgc3RhdGUgdG8gb3BlbiBhIG5ldyBtZW51LCByZXR1cm5pbmcgdG8gY2FuY2VsIGFkZFRvZG9CdXR0b24gZnVuY3Rpb25gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgdGFyZ2V0UHJvamVjdCBpcyBpbiBhIHN0YXRlIHRvIG9wZW4gYSBtZW51LCB0b2dnbGluZyBhbmQgb3BlbmluZyBhZGQgdG9kbyBtZW51YCk7XG4gICAgICAgIHRhcmdldFByb2plY3QudG9nZ2xlUHJvamVjdE1lbnVPcGVuKCk7XG5cbiAgICAgICAgLy8gQWRkIHRvZG8gTWVudVxuICAgICAgICBjb25zdCBhZGRUb2RvUGFuZVZhbHVlcyA9IF9kaXNwbGF5Q29udHJvbGxlci5nZW5lcmF0ZVByb2plY3RBZGRUb2RvUGFuZSh0YXJnZXRQcm9qZWN0KTtcbiAgICAgICAgY29uc3QgYWRkVG9kb1BhbmUgPSBhZGRUb2RvUGFuZVZhbHVlc1swXTtcbiAgICAgICAgY29uc3QgYWRkVG9kb1RpdGxlID0gYWRkVG9kb1BhbmVWYWx1ZXNbMV07XG4gICAgICAgIGNvbnN0IGFkZFRvZG9EZXNjcmlwdGlvbiA9IGFkZFRvZG9QYW5lVmFsdWVzWzJdO1xuICAgICAgICBjb25zdCBhZGRUb2RvUHJpb3JpdHlMYWJlbCA9IGFkZFRvZG9QYW5lVmFsdWVzWzNdO1xuICAgICAgICBjb25zdCBhZGRUb2RvUHJpb3JpdHlWYWx1ZSA9IGFkZFRvZG9QYW5lVmFsdWVzWzRdO1xuICAgICAgICBjb25zdCBhZGRUb2RvTm90ZXNJbnB1dCA9IGFkZFRvZG9QYW5lVmFsdWVzWzVdO1xuICAgICAgICBjb25zdCBhZGRUb2RvRHVlRGF0ZUlucHV0ID0gYWRkVG9kb1BhbmVWYWx1ZXNbNl07XG4gICAgICAgIGNvbnN0IGFkZFRvZG9DcmVhdGlvbkRhdGVJbnB1dCA9IGFkZFRvZG9QYW5lVmFsdWVzWzddO1xuICAgICAgICAvLyBTYXZlIGFuZCBjYW5jZWwgYnV0dG9uc1xuICAgICAgICBjb25zdCBhZGRUb2RvU2F2ZUJ1dHRvbiA9IGFkZFRvZG9QYW5lVmFsdWVzWzhdO1xuICAgICAgICBjb25zdCBhZGRUb2RvQ2FuY2VsQnV0dG9uID0gYWRkVG9kb1BhbmVWYWx1ZXNbOV07XG5cbiAgICAgICAgLy8gQXBwZW5kIEFkZCBUb2RvIE1lbnUgdG8gZXhpc3RpbmcgcHJvamVjdFBhbmUgZGl2XG4gICAgICAgIGNvbnN0IHByb2plY3RQYW5lID0gdGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0RGl2KCk7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lQ29udGFpbmVyID0gcHJvamVjdFBhbmUuZmlyc3RDaGlsZDtcbiAgICAgICAgY29uc3QgcHJvamVjdFRvZG9FbGVtZW50Q29udGFpbmVyID0gcHJvamVjdE5hbWVDb250YWluZXIubmV4dFNpYmxpbmc7XG4gICAgICAgIHByb2plY3RUb2RvRWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb2RvUGFuZSk7XG5cbiAgICAgICAgLy8gQXR0YWNoIHByaW9yaXR5IHNsaWRlciBmdW5jdGlvbmFsaXR5XG4gICAgICAgIF9ldmVudENvbnRyb2xsZXIuYXR0YWNoQWRkUHJvamVjdFByaW9yaXR5U2xpZGVyKGFkZFRvZG9Qcmlvcml0eVZhbHVlLCBhZGRUb2RvUHJpb3JpdHlMYWJlbCk7XG4gICAgICAgIFxuICAgICAgICAvLyBBdHRhY2ggc2F2ZUJ1dHRvbiBhbmQgY2FuY2VsQnV0dG9uIGZ1bmN0aW9uYWxpdHkgICAgIFxuICAgICAgICBsZXQgc2F2ZWRWYWx1ZXMgPSBbYWRkVG9kb1RpdGxlLCBhZGRUb2RvRGVzY3JpcHRpb24sIGFkZFRvZG9Qcmlvcml0eVZhbHVlLCBhZGRUb2RvTm90ZXNJbnB1dCwgYWRkVG9kb0R1ZURhdGVJbnB1dCwgYWRkVG9kb0NyZWF0aW9uRGF0ZUlucHV0XTtcbiAgICAgICAgX2V2ZW50Q29udHJvbGxlci5hdHRhY2hQcm9qZWN0QWRkVG9kb1NhdmVCdXR0b24oYWRkVG9kb1NhdmVCdXR0b24sIHRhcmdldFByb2plY3QsIGFkZFRvZG9QYW5lLCBzYXZlZFZhbHVlcyk7XG4gICAgICAgIF9ldmVudENvbnRyb2xsZXIuYXR0YWNoUHJvamVjdEFkZFRvZG9DYW5jZWxCdXR0b24oYWRkVG9kb0NhbmNlbEJ1dHRvbiwgdGFyZ2V0UHJvamVjdCwgYWRkVG9kb1BhbmUpO1xuXG5cblxuICAgIH1cbiAgICB0aGlzLl9wcm9qZWN0QWRkVG9kb0J1dHRvbiA9IF9wcm9qZWN0QWRkVG9kb0J1dHRvbjtcblxuICAgIGNvbnN0IF9wcm9qZWN0QWRkVG9kb1NhdmVCdXR0b24gPSAodGFyZ2V0UHJvamVjdCwgYWRkVG9kb1BhbmUsIHNhdmVkVmFsdWVzKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBZb3UndmUgY2xpY2sgdGhlIHNhdmUgYnV0dG9uIG9uIHRoZSBhZGQgVG9kbyBQYW5lYClcblxuICAgICAgICAvLyBTYXZlIHZhbHVlcyBvZiBuZXcgdG9kb09iaiB0byB0YXJnZXRQcm9qZWN0XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNhdmVkVmFsdWVzKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2F2ZWRWYWx1ZXNbMF0udmFsdWUpO1xuICAgICAgICBsZXQgdGl0bGUgPSBzYXZlZFZhbHVlc1swXS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBzYXZlZFZhbHVlc1sxXS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBzYXZlZFZhbHVlc1syXS52YWx1ZTtcbiAgICAgICAgY29uc3Qgbm90ZXMgPSBzYXZlZFZhbHVlc1szXS52YWx1ZTtcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBzYXZlZFZhbHVlc1s0XS52YWx1ZTtcbiAgICAgICAgY29uc3QgY3JlYXRpb25EYXRlID0gc2F2ZWRWYWx1ZXNbNV07XG5cbiAgICAgICAgaWYoIGR1ZURhdGUgPT0gXCJcIikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGRlZmF1bHQgZHVlRGF0ZSwgb3ZlcndyaXRpbmcgd2l0aCBjdXJyZW50IGRhdGVgKTtcbiAgICAgICAgICAgIGR1ZURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aXRsZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICB0aXRsZSA9IFwiTmV3IFRvLURvXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgdGl0bGU6ICR7dGl0bGV9XG4gICAgICAgIC8vIGRlc2NyaXB0aW9uOiAke2Rlc2NyaXB0aW9ufVxuICAgICAgICAvLyBwcmlvcml0eTogJHtwcmlvcml0eX1cbiAgICAgICAgLy8gbm90ZXM6ICR7bm90ZXN9XG4gICAgICAgIC8vIGR1ZURhdGU6ICR7ZHVlRGF0ZX1cbiAgICAgICAgLy8gY3JlYXRpb25EYXRlOiAke2NyZWF0aW9uRGF0ZX1gKVxuXG4gICAgICAgIGxldCBuZXdUb2RvID0gdG9kb09iaigpO1xuICAgICAgICBuZXdUb2RvLmluaXQodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBjcmVhdGlvbkRhdGUsIHByaW9yaXR5LCBub3RlcywgW10sIGZhbHNlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYCAtLS0tLS0tLS0gbmV3VG9kby5nZXRJbmZvKCkgLS0tLS0tLS0tLSBgKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdUb2RvLmdldEluZm8oKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAgLS0tIHRhcmdldHByb2plY3QuZ2V0VG9kb0xpc3QoKSAtLS0gYClcbiAgICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0UHJvamVjdC5nZXRUb2RvTGlzdCgpKTtcbiAgICAgICAgdGFyZ2V0UHJvamVjdC5hZGRUb2RvT2JqKG5ld1RvZG8pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXRQcm9qZWN0LmdldFRvZG9MaXN0KCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRhcmdldFByb2plY3QuZ2V0VG9kb0xpc3QoKVswXS5nZXRJbmZvKClgKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0UHJvamVjdC5nZXRUb2RvTGlzdCgpWzBdLmdldEluZm8oKSk7XG5cblxuICAgICAgICAvLyBVcGRhdGUgdGFyZ2V0UHJvamVjdCdzIHByb2plY3QtdG9kby1saXN0IGRpdiBhcHByb3ByaWF0ZWx5XG4gICAgICAgIGNvbnN0IG5ld1RvZG9EaXYgPSBfZGlzcGxheUNvbnRyb2xsZXIuZ2VuZXJhdGVUb2RvRGl2KG5ld1RvZG8pO1xuICAgICAgICBjb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IHRhcmdldFByb2plY3QuZ2V0UHJvamVjdERpdigpLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzBdOyAvLyBUaGlzIGlzIHBvc2l0aXZlbHkgZmlsdGh5IGZvciBzdGFjay10cmFjaW5nLlxuICAgICAgICB0b2RvTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUb2RvRGl2KTtcbiAgICAgICAgXG4gICAgICAgIC8vIEF0dGFjaCBldmVudExpc3RlbmVycyB0byBuZXdseSBjcmVhdGVkIHRvRG9cbiAgICAgICAgX2V2ZW50Q29udHJvbGxlci5hdHRhY2hUb2RvTGlzdGVuZXJzKG5ld1RvZG8sIHRhcmdldFByb2plY3QpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBhZGRUb2RvTWVudSBmcm9tIHRhcmdldFByb2plY3QncyBwcm9qZWN0LXBhbmUgZGl2XG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50Q29udGFpbmVyID0gdGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0RGl2KCkuY2hpbGROb2Rlc1sxXTtcbiAgICAgICAgdG9kb0VsZW1lbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoYWRkVG9kb1BhbmUpO1xuICAgICAgICAvLyBUb2dnbGUgcHJvamVjdE1lbnVPcGVuIHRvIGZhbHNlXG4gICAgICAgIHRhcmdldFByb2plY3QudG9nZ2xlUHJvamVjdE1lbnVPcGVuKCk7XG5cbiAgICAgICAgLy8gU3RhY2sgdHJhY2luZyBleGFtcGxlIGZyb20gdGhlIHRvcCBvZiBsb2dpYyBjb250cm9sbGVyIHRvIGVhY2ggdG9kbyBjaGlsZFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhfcHJvamVjdENvbnRhaW5lci5nZXRQcm9qZWN0QXJyKClbMF0uZ2V0VG9kb0xpc3QoKVswXS5nZXRJbmZvKCkpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBMb2NhbCBTdG9yYWdlXG4gICAgICAgIF93cml0ZUxvY2FsU3RvcmFnZSgpO1xuXG4gICAgfVxuICAgIHRoaXMuX3Byb2plY3RBZGRUb2RvU2F2ZUJ1dHRvbiA9IF9wcm9qZWN0QWRkVG9kb1NhdmVCdXR0b247XG5cbiAgICBjb25zdCBfcHJvamVjdEFkZFRvZG9DYW5jZWxCdXR0b24gPSAodGFyZ2V0UHJvamVjdCwgYWRkVG9kb1BhbmUpID0+IHtcbiAgICAgICAgLy8gVGFyZ2V0IGRpdiBhbmQgZGVsZXRlIGl0XG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50Q29udGFpbmVyID0gdGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0RGl2KCkuY2hpbGROb2Rlc1sxXTtcbiAgICAgICAgdG9kb0VsZW1lbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoYWRkVG9kb1BhbmUpO1xuICAgICAgICAvLyBUb2dnbGUgcHJvamVjdE1lbnVPcGVuIHRvIGZhbHNlXG4gICAgICAgIHRhcmdldFByb2plY3QudG9nZ2xlUHJvamVjdE1lbnVPcGVuKCk7XG5cbiAgICB9XG4gICAgdGhpcy5fcHJvamVjdEFkZFRvZG9DYW5jZWxCdXR0b24gPSBfcHJvamVjdEFkZFRvZG9DYW5jZWxCdXR0b247XG5cbiAgICBjb25zdCBfcHJvamVjdERlbGV0ZVRvZG9CdXR0b24gPSAodGFyZ2V0UHJvamVjdCkgPT4ge1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBJJ20gaW4gbG9naWNDb250cm9sbGVyLCBkZWxldGUgdG9kbyBidXR0b25gKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgVGVzdCBpZiB0aGlzIHByb2plY3QgY2FuIG9wZW4gYSBtZW51LCB0aGVuIG9wZW4gdGhlIGRlbGV0ZSB0b2RvIG1lbnUgdGFyZ2V0aW5nIHRoaXMgcHJvamVjdGApXG5cbiAgICAgICAgaWYodGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0TWVudU9wZW4oKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFRhcmdldFByb2plY3QgaXMgTk9UIGluIGEgc3RhdGUgdG8gb3BlbiBhIG5ldyBtZW51LCByZXR1cm5pbmcgdG8gY2FuY2VsIGRlbGV0ZVRvZG9CdXR0b24gZnVuY3Rpb25gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGB0YXJnZXRQcm9qZWN0IGlzIGluIGEgc3RhdGUgdG8gb3BlbiBhIG1lbnUsIHRvZ2dsaW5nIGFuZCBvcGVuaW5nIGRlbGV0ZVRvZG9NZW51YCk7XG4gICAgICAgIHRhcmdldFByb2plY3QudG9nZ2xlUHJvamVjdE1lbnVPcGVuKCk7XG5cbiAgICAgICAgLy8gQWRkIHRvZG8gTWVudVxuICAgICAgICBjb25zdCBkZWxldGVUb2RvUGFuZVZhbHVlcyA9IF9kaXNwbGF5Q29udHJvbGxlci5nZW5lcmF0ZVByb2plY3REZWxldGVUb2RvUGFuZSh0YXJnZXRQcm9qZWN0KTtcbiAgICAgICAgY29uc3QgZGVsZXRlVG9kb1BhbmUgPSBkZWxldGVUb2RvUGFuZVZhbHVlc1swXTtcbiAgICAgICAgY29uc3QgZGVsZXRlU2VsZWN0ZWRCdXR0b24gPSBkZWxldGVUb2RvUGFuZVZhbHVlc1sxXTtcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZGVsZXRlVG9kb1BhbmVWYWx1ZXNbMl07XG4gICAgICAgIGNvbnN0IGRlbGV0ZUNvbXBsZXRlZEJ1dHRvbiA9IGRlbGV0ZVRvZG9QYW5lVmFsdWVzWzNdO1xuICAgICAgICBjb25zdCB0b2RvUGFuZUxpc3QgPSBkZWxldGVUb2RvUGFuZVZhbHVlc1s0XTtcblxuICAgICAgICAvLyBBcHBlbmQgQWRkIFRvZG8gTWVudSB0byBleGlzdGluZyBwcm9qZWN0UGFuZSBkaXZcbiAgICAgICAgY29uc3QgcHJvamVjdFBhbmUgPSB0YXJnZXRQcm9qZWN0LmdldFByb2plY3REaXYoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVDb250YWluZXIgPSBwcm9qZWN0UGFuZS5maXJzdENoaWxkO1xuICAgICAgICBjb25zdCBwcm9qZWN0VG9kb0VsZW1lbnRDb250YWluZXIgPSBwcm9qZWN0TmFtZUNvbnRhaW5lci5uZXh0U2libGluZztcbiAgICAgICAgcHJvamVjdFRvZG9FbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVRvZG9QYW5lKTtcblxuICAgICAgICAvLyBBdHRhY2ggZnVuY3Rpb25hbGl0eSB0byBidXR0b25zXG4gICAgICAgIF9ldmVudENvbnRyb2xsZXIuYXR0YWNoUHJvamVjdERlbGV0ZVNlbGVjdGVkQnV0dG9uKGRlbGV0ZVNlbGVjdGVkQnV0dG9uLCB0YXJnZXRQcm9qZWN0LCBkZWxldGVUb2RvUGFuZSx0b2RvUGFuZUxpc3QpO1xuICAgICAgICBfZXZlbnRDb250cm9sbGVyLmF0dGFjaFByb2plY3REZWxldGVDYW5jZWxCdXR0b24oY2FuY2VsQnV0dG9uLCB0YXJnZXRQcm9qZWN0LCBkZWxldGVUb2RvUGFuZSk7XG4gICAgICAgIF9ldmVudENvbnRyb2xsZXIuYXR0YWNoUHJvamVjdERlbGV0ZUNvbXBsZXRlZEJ1dHRvbihkZWxldGVDb21wbGV0ZWRCdXR0b24sIHRhcmdldFByb2plY3QsIGRlbGV0ZVRvZG9QYW5lLCB0b2RvUGFuZUxpc3QpO1xuXG4gICAgICAgIC8vIEF0dGFjaCBmdW5jdGlvbmFsaXR5IHRvIHRvZG9QYW5lTGlzdFxuICAgICAgICB0b2RvUGFuZUxpc3QuZm9yRWFjaCggZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBfZXZlbnRDb250cm9sbGVyLmF0dGFjaFNlbGVjdFRvZG9Gb3JEZWxldGlvbihlbGVtZW50LmdldFRvZG9EZWxldGlvbkRpdigpKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgdGhpcy5fcHJvamVjdERlbGV0ZVRvZG9CdXR0b24gPSBfcHJvamVjdERlbGV0ZVRvZG9CdXR0b247XG5cbiAgICBjb25zdCBfdG9nZ2xlU2VsZWN0ZWREaXZGb3JEZWxldGlvbiA9ICh0YXJnZXRUb2RvRGl2KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBZb3UgY2xpY2tlZCBhIGRpdiBlbGVtZW50IHRvIHRhcmdldCBmb3IgZGVsZXRpb24hIE1vZGlmeWluZyBpdHMgY2xhc3MgdG8gZGVub3RlIHNlbGVjdGlvbmApO1xuICAgICAgICB0YXJnZXRUb2RvRGl2LmNsYXNzTGlzdC50b2dnbGUoJ21hcmtlZC1mb3ItZGVsZXRpb24nKTtcbiAgICB9XG4gICAgdGhpcy5fdG9nZ2xlU2VsZWN0ZWREaXZGb3JEZWxldGlvbiA9IF90b2dnbGVTZWxlY3RlZERpdkZvckRlbGV0aW9uO1xuXG4gICAgY29uc3QgX3Byb2plY3REZWxldGVUb2RvU2VsZWN0ZWRCdXR0b24gPSAodGFyZ2V0UHJvamVjdCwgZGVsZXRlVG9kb1BhbmUsIHRvZG9QYW5lTGlzdCkgPT4ge1xuXG4gICAgICAgIGxldCBwcm9qZWN0VG9kb0VsZW1lbnRDb250YWluZXIgPSB0YXJnZXRQcm9qZWN0LmdldFByb2plY3REaXYoKS5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10b2RvLWVsZW1lbnQtY29udGFpbmVyJyk7XG4gICAgICAgIGxldCB0b2RvTGlzdCA9IHByb2plY3RUb2RvRWxlbWVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG4gICAgICAgIGxldCB0b2RvTGlzdENvbXBsZXRlZCA9IHByb2plY3RUb2RvRWxlbWVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0LWNvbXBsZXRlZCcpO1xuXG4gICAgICAgIGxldCBtYXJrZWRGb3JEZWxldGlvbiA9IFtdXG4gICAgICAgIHRvZG9QYW5lTGlzdC5mb3JFYWNoKCBlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGxldCB0b2RvQ2xhc3MgPSBlbGVtZW50LmdldFRvZG9EZWxldGlvbkRpdigpLmNsYXNzTGlzdC5jb250YWlucyhcIm1hcmtlZC1mb3ItZGVsZXRpb25cIik7XG4gICAgICAgICAgICBpZih0b2RvQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICBtYXJrZWRGb3JEZWxldGlvbi5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBUaGUgZm9sbG93IHRvLWRvIGVsZW1lbnRzIGFyZSBtYXJrZWQgZm9yIGRlbGV0aW9uOiBgKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobWFya2VkRm9yRGVsZXRpb24pO1xuICAgICAgICBtYXJrZWRGb3JEZWxldGlvbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYERlbGV0aW5nIHRoZSBmb2xsb3dpbmcgdG9kbzogJHtlbGVtZW50LmdldFRpdGxlKCl9XG4gICAgICAgICAgICAvLyBmcm9tIHRhcmdldFByb2plY3Q6ICR7dGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpfWApXG4gICAgICAgICAgICB0YXJnZXRQcm9qZWN0LnJlbW92ZVRhcmdldFRvZG8oZWxlbWVudCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCBlbGVtZW50LmdldENvbXBsZXRlKCkgKXtcbiAgICAgICAgICAgICAgICB0b2RvTGlzdENvbXBsZXRlZC5yZW1vdmVDaGlsZChlbGVtZW50LmdldFRvZG9EaXYoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvZG9MaXN0LnJlbW92ZUNoaWxkKGVsZW1lbnQuZ2V0VG9kb0RpdigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXRQcm9qZWN0LmdldFRvZG9MaXN0KCkpO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgZGVsZXRlVG9kb1BhbmUgZGl2IENoaWxkIGVsZW1lbnQgZnJvbSB0aGUgdGFyZ2V0UHJvamVjdFxuICAgICAgICBwcm9qZWN0VG9kb0VsZW1lbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoZGVsZXRlVG9kb1BhbmUpO1xuICAgICAgICAvLyBUb2dnbGUgcHJvamVjdE1lbnVPcGVuIHRvIGZhbHNlLCBzbyB0aGF0IHRoZSBlZGl0TWVudSBjYW4gYmUgcmUtb3BlbmVkXG4gICAgICAgIHRhcmdldFByb2plY3QudG9nZ2xlUHJvamVjdE1lbnVPcGVuKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIExvY2FsIFN0b3JhZ2VcbiAgICAgICAgX3dyaXRlTG9jYWxTdG9yYWdlKCk7XG5cbiAgICB9XG4gICAgdGhpcy5fcHJvamVjdERlbGV0ZVRvZG9TZWxlY3RlZEJ1dHRvbiA9IF9wcm9qZWN0RGVsZXRlVG9kb1NlbGVjdGVkQnV0dG9uO1xuXG4gICAgY29uc3QgX3Byb2plY3REZWxldGVUb2RvQ2FuY2VsQnV0dG9uID0gKHRhcmdldFByb2plY3QsIGRlbGV0ZVRvZG9QYW5lKSA9PiB7XG5cbiAgICAgICAgbGV0IHByb2plY3RUb2RvRWxlbWVudENvbnRhaW5lciA9IHRhcmdldFByb2plY3QuZ2V0UHJvamVjdERpdigpLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRvZG8tZWxlbWVudC1jb250YWluZXInKTtcblxuICAgICAgICAvLyBSZW1vdmUgdGhlIGRlbGV0ZVRvZG9QYW5lIGRpdiBDaGlsZCBlbGVtZW50IGZyb20gdGhlIHRhcmdldFByb2plY3RcbiAgICAgICAgcHJvamVjdFRvZG9FbGVtZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKGRlbGV0ZVRvZG9QYW5lKTtcbiAgICAgICAgLy8gVG9nZ2xlIHByb2plY3RNZW51T3BlbiB0byBmYWxzZSwgc28gdGhhdCB0aGUgZWRpdE1lbnUgY2FuIGJlIHJlLW9wZW5lZFxuICAgICAgICB0YXJnZXRQcm9qZWN0LnRvZ2dsZVByb2plY3RNZW51T3BlbigpO1xuXG4gICAgfVxuICAgIHRoaXMuX3Byb2plY3REZWxldGVUb2RvQ2FuY2VsQnV0dG9uID0gX3Byb2plY3REZWxldGVUb2RvQ2FuY2VsQnV0dG9uO1xuICAgIFxuICAgIGNvbnN0IF9wcm9qZWN0RGVsZXRlVG9kb0NvbXBsZXRlZEJ1dHRvbiA9ICh0YXJnZXRQcm9qZWN0LCBkZWxldGVUb2RvUGFuZSwgdG9kb1BhbmVMaXN0KSA9PiB7XG5cbiAgICAgICAgbGV0IHByb2plY3RUb2RvRWxlbWVudENvbnRhaW5lciA9IHRhcmdldFByb2plY3QuZ2V0UHJvamVjdERpdigpLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRvZG8tZWxlbWVudC1jb250YWluZXInKTtcbiAgICAgICAgbGV0IHRvZG9MaXN0Q29tcGxldGVkID0gcHJvamVjdFRvZG9FbGVtZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QtY29tcGxldGVkJyk7XG5cbiAgICAgICAgbGV0IG1hcmtlZEZvckRlbGV0aW9uID0gW11cbiAgICAgICAgdG9kb1BhbmVMaXN0LmZvckVhY2goIGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgbGV0IHRvZG9DbGFzcyA9IGVsZW1lbnQuZ2V0VG9kb0RlbGV0aW9uRGl2KCkuY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9kby1jb21wbGV0ZWRcIik7XG4gICAgICAgICAgICBpZih0b2RvQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICBtYXJrZWRGb3JEZWxldGlvbi5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBUaGUgZm9sbG93IHRvLWRvIGVsZW1lbnRzIGFyZSBtYXJrZWQgZm9yIGRlbGV0aW9uOiBgKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobWFya2VkRm9yRGVsZXRpb24pO1xuICAgICAgICBtYXJrZWRGb3JEZWxldGlvbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYERlbGV0aW5nIHRoZSBmb2xsb3dpbmcgdG9kbzogJHtlbGVtZW50LmdldFRpdGxlKCl9XG4gICAgICAgICAgICAvLyBmcm9tIHRhcmdldFByb2plY3Q6ICR7dGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpfWApXG4gICAgICAgICAgICB0YXJnZXRQcm9qZWN0LnJlbW92ZVRhcmdldFRvZG8oZWxlbWVudCk7XG4gICAgICAgICAgICB0b2RvTGlzdENvbXBsZXRlZC5yZW1vdmVDaGlsZChlbGVtZW50LmdldFRvZG9EaXYoKSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0UHJvamVjdC5nZXRUb2RvTGlzdCgpKTtcblxuXG5cblxuXG5cblxuICAgICAgICAvLyBSZW1vdmUgdGhlIGRlbGV0ZVRvZG9QYW5lIGRpdiBDaGlsZCBlbGVtZW50IGZyb20gdGhlIHRhcmdldFByb2plY3RcbiAgICAgICAgcHJvamVjdFRvZG9FbGVtZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKGRlbGV0ZVRvZG9QYW5lKTtcbiAgICAgICAgLy8gVG9nZ2xlIHByb2plY3RNZW51T3BlbiB0byBmYWxzZSwgc28gdGhhdCB0aGUgZWRpdE1lbnUgY2FuIGJlIHJlLW9wZW5lZFxuICAgICAgICB0YXJnZXRQcm9qZWN0LnRvZ2dsZVByb2plY3RNZW51T3BlbigpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBMb2NhbCBTdG9yYWdlXG4gICAgICAgIF93cml0ZUxvY2FsU3RvcmFnZSgpO1xuXG5cbiAgICB9XG4gICAgdGhpcy5fcHJvamVjdERlbGV0ZVRvZG9Db21wbGV0ZWRCdXR0b24gPSBfcHJvamVjdERlbGV0ZVRvZG9Db21wbGV0ZWRCdXR0b247XG5cblxuICAgIGNvbnN0IF90b2dnbGVDb21wbGV0ZWRUb2RvID0gKHRhcmdldFRvZG8pID0+IHtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgWW91IGNsaWNrZWQgdG9nZ2xlU2VsZWN0ZWRUb2RvIHRhcmdldGluZzogJHt0YXJnZXRUb2RvfWApO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldFRvZG9EaXYgPSB0YXJnZXRUb2RvLmdldFRvZG9EaXYoKTtcbiAgICAgICAgdGFyZ2V0VG9kb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKCd0b2RvLWNvbXBsZXRlZCcpO1xuICAgICAgICB0YXJnZXRUb2RvRGl2LmNsYXNzTGlzdC50b2dnbGUoJ3RvZG8taW5jb21wbGV0ZScpO1xuXG4gICAgICAgIC8vIEdlbmVyYXRpbmcgZGl2IHJlZmVyZW5jZXMgZm9yIGVhc3kgZG9jaW5nIG9mIG5leHQgaWYgc3RhdGVtZW50IGRlY2lkaW5nIGZ1bmN0aW9uYWxpdHlcbiAgICAgICAgY29uc3QgcHJvamVjdFRvZG9MaXN0ID0gdGFyZ2V0VG9kb0Rpdi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gcHJvamVjdFRvZG9MaXN0LmZpcnN0Q2hpbGQ7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0Q29tcGxldGVkID0gcHJvamVjdFRvZG9MaXN0LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QtY29tcGxldGVkJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgaXNDb21wbGV0ZSA9IHRhcmdldFRvZG8uZ2V0Q29tcGxldGUoKTtcbiAgICAgICAgaWYoIGlzQ29tcGxldGUgKSB7XG4gICAgICAgICAgICB0YXJnZXRUb2RvRGl2LmZpcnN0Q2hpbGQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGFyZ2V0VG9kby5zZXRDb21wbGV0ZShmYWxzZSk7XG4gICAgICAgICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0YXJnZXRUb2RvRGl2KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFRvZG9EaXYuZmlyc3RDaGlsZC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRhcmdldFRvZG8uc2V0Q29tcGxldGUodHJ1ZSk7XG4gICAgICAgICAgICB0b2RvTGlzdENvbXBsZXRlZC5hcHBlbmRDaGlsZCh0YXJnZXRUb2RvRGl2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBMb2NhbCBTdG9yYWdlXG4gICAgICAgIF93cml0ZUxvY2FsU3RvcmFnZSgpO1xuICAgIH1cbiAgICB0aGlzLl90b2dnbGVDb21wbGV0ZWRUb2RvID0gX3RvZ2dsZUNvbXBsZXRlZFRvZG87XG5cbiAgICBjb25zdCBfZWRpdFRvZG9QYW5lID0gKHRhcmdldFRvZG8sIHRhcmdldFByb2plY3QpID0+IHtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgWW91IGNsaWNrZWQgdGhlIGVkaXQgYnV0dG9uIHRhcmdldCB0b2RvOiAke3RhcmdldFRvZG8uZ2V0VGl0bGUoKX1gKTtcblxuICAgICAgICAvLyBUb2dnbGUgcHJvamVjdE1lbnVPcGVuLCBnZW5lcmF0ZSBlZGl0VG9kb1BhbmUsIGFwcGVuZEVkaXRUb2RvUGFuZSwgYXR0YWNoIGV2ZW50TGlzdGVuZXJzIHRvIGFwcHJvcHJpYXRlIGZpZWxkcyBhbmQgYnV0dG9uc1xuXG4gICAgICAgIGlmKHRhcmdldFByb2plY3QuZ2V0UHJvamVjdE1lbnVPcGVuKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUYXJnZXRQcm9qZWN0IGlzIE5PVCBpbiBhIHN0YXRlIHRvIG9wZW4gYSBuZXcgbWVudSwgcmV0dXJuaW5nIHRvIGNhbmNlbCBhZGRUb2RvQnV0dG9uIGZ1bmN0aW9uYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coYHRhcmdldFByb2plY3QgaXMgaW4gYSBzdGF0ZSB0byBvcGVuIGEgbWVudSwgdG9nZ2xpbmcgYW5kIG9wZW5pbmcgYWRkIHRvZG8gbWVudWApO1xuICAgICAgICB0YXJnZXRQcm9qZWN0LnRvZ2dsZVByb2plY3RNZW51T3BlbigpO1xuXG4gICAgICAgIGxldCBlZGl0VG9kb1BhbmVWYWx1ZXMgPSBfZGlzcGxheUNvbnRyb2xsZXIuZ2VuZXJhdGVFZGl0VG9kb1BhbmUodGFyZ2V0VG9kbyk7XG4gICAgICAgIGNvbnN0IGVkaXRUb2RvUGFuZURpdiA9IGVkaXRUb2RvUGFuZVZhbHVlc1swXTtcbiAgICAgICAgY29uc3QgZWRpdFRvZG9UaXRsZUlucHV0ID0gZWRpdFRvZG9QYW5lVmFsdWVzWzFdO1xuICAgICAgICBjb25zdCBlZGl0VG9kb0Rlc2NyaXB0aW9uSW5wdXQgPSBlZGl0VG9kb1BhbmVWYWx1ZXNbMl07XG4gICAgICAgIGNvbnN0IGVkaXRUb2RvUHJpb3JpdHlMYWJlbCA9IGVkaXRUb2RvUGFuZVZhbHVlc1szXTtcbiAgICAgICAgY29uc3QgZWRpdFRvZG9Qcmlvcml0eUlucHV0ID0gZWRpdFRvZG9QYW5lVmFsdWVzWzRdO1xuICAgICAgICBjb25zdCBlZGl0VG9kb05vdGVzSW5wdXQgPSBlZGl0VG9kb1BhbmVWYWx1ZXNbNV07XG4gICAgICAgIGNvbnN0IGVkaXRUb2RvRHVlRGF0ZUlucHV0ID0gZWRpdFRvZG9QYW5lVmFsdWVzWzZdO1xuICAgICAgICBjb25zdCBlZGl0VG9kb0NyZWF0aW9uRGF0ZUlucHV0ID0gZWRpdFRvZG9QYW5lVmFsdWVzWzddO1xuICAgICAgICBjb25zdCBlZGl0VG9kb1NhdmVCdXR0b24gPSBlZGl0VG9kb1BhbmVWYWx1ZXNbOF07XG4gICAgICAgIGNvbnN0IGVkaXRUb2RvQ2FuY2VsQnV0dG9uID0gZWRpdFRvZG9QYW5lVmFsdWVzWzldO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBhbmQgYXR0YWNoIHByaW9yaXR5IHNsaWRlciBmdW5jdGlvbmFsaXR5XG4gICAgICAgIF91cGRhdGVQcmlvcml0eUNvbG9yKGVkaXRUb2RvUHJpb3JpdHlMYWJlbCwgZWRpdFRvZG9Qcmlvcml0eUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIC8vIEF0dGFjaCBQcmlvcml0eSBTbGlkZXIgZnVuY3Rpb25hbGl0eVxuICAgICAgICBfZXZlbnRDb250cm9sbGVyLmF0dGFjaEFkZFByb2plY3RQcmlvcml0eVNsaWRlcihlZGl0VG9kb1ByaW9yaXR5SW5wdXQsIGVkaXRUb2RvUHJpb3JpdHlMYWJlbCk7XG4gICAgICAgIFxuICAgICAgICAvLyBBdHRhY2ggZnVuY3Rpb25hbGl0eSB0byBTYXZlIGFuZCBDYW5jZWwgQnV0dG9uc1xuICAgICAgICBsZXQgc2F2ZWRWYWx1ZXMgPSBbZWRpdFRvZG9UaXRsZUlucHV0LCBlZGl0VG9kb0Rlc2NyaXB0aW9uSW5wdXQsIGVkaXRUb2RvUHJpb3JpdHlJbnB1dCwgZWRpdFRvZG9Ob3Rlc0lucHV0LCBlZGl0VG9kb0R1ZURhdGVJbnB1dCwgZWRpdFRvZG9DcmVhdGlvbkRhdGVJbnB1dF1cbiAgICAgICAgX2V2ZW50Q29udHJvbGxlci5hdHRhY2hFZGl0VG9kb1NhdmVCdXR0b24oZWRpdFRvZG9TYXZlQnV0dG9uLCB0YXJnZXRQcm9qZWN0LCB0YXJnZXRUb2RvLCBlZGl0VG9kb1BhbmVEaXYsIHNhdmVkVmFsdWVzKTtcbiAgICAgICAgX2V2ZW50Q29udHJvbGxlci5hdHRhY2hFZGl0VG9kb0NhbmNlbEJ1dHRvbihlZGl0VG9kb0NhbmNlbEJ1dHRvbiwgdGFyZ2V0UHJvamVjdCwgZWRpdFRvZG9QYW5lRGl2KTtcbiAgICAgICBcblxuICAgICAgICAvLyBBcHBlbmQgZWRpdFRvZG9QYW5lIHRvIHRoZSBET01cbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSB0YXJnZXRUb2RvLmdldFRvZG9EaXYoKS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBwcm9qZWN0VG9kb0xpc3QgPSB0b2RvTGlzdC5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBwcm9qZWN0VG9kb0VsZW1lbnRDb250YWluZXIgPSBwcm9qZWN0VG9kb0xpc3QucGFyZW50Tm9kZTtcbiAgICAgICAgcHJvamVjdFRvZG9FbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRUb2RvUGFuZURpdik7XG5cblxuXG4gICAgfVxuICAgIHRoaXMuX2VkaXRUb2RvUGFuZSA9IF9lZGl0VG9kb1BhbmU7XG5cbiAgICBjb25zdCBfcHJvamVjdEVkaXRUb2RvU2F2ZUJ1dHRvbiA9ICh0YXJnZXRQcm9qZWN0LCB0YXJnZXRUb2RvLCBlZGl0VG9kb1BhbmVEaXYsIHNhdmVkVmFsdWVzKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBJIGFtIF9wcm9qZWN0RWRpdFRvZG9TYXZlQnV0dG9uLiBIZXJlIGFyZSBteSB0b2RvIGluaXRpYWwgdmFsdWVzYCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldFRvZG8uZ2V0SW5mbygpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJylcbiAgICAgICAgXG4vLyAgICAgICAgIGxldCBzYXZlZFZhbHVlcyA9IFtlZGl0VG9kb1RpdGxlSW5wdXQsIGVkaXRUb2RvRGVzY3JpcHRpb25JbnB1dCwgZWRpdFRvZG9Qcmlvcml0eUlucHV0LCBlZGl0VG9kb05vdGVzSW5wdXQsIGVkaXRUb2RvRHVlRGF0ZUlucHV0LCBlZGl0VG9kb0NyZWF0aW9uRGF0ZUlucHV0XVxuXG5cbiAgICAgICAgLy8gU2F2ZSB0aGUgbmV3IHZhbHVlcyB0byB0YXJnZXRUb2RvXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBzYXZlZFZhbHVlcyBhcmUgYXMgZm9sbG93czpcbiAgICAgICAgLy8gdGl0bGVJbnB1dDogJHtzYXZlZFZhbHVlc1swXS52YWx1ZX1cbiAgICAgICAgLy8gZGVzY3JpcHRpb25JbnB1dDogJHtzYXZlZFZhbHVlc1sxXS52YWx1ZX1cbiAgICAgICAgLy8gcHJpb3JpdHlJbnB1dDogJHtzYXZlZFZhbHVlc1syXS52YWx1ZX1cbiAgICAgICAgLy8gbm90ZXNJbnB1dDogJHtzYXZlZFZhbHVlc1szXS52YWx1ZX1cbiAgICAgICAgLy8gZHVlRGF0ZUlucHV0OiAke3NhdmVkVmFsdWVzWzRdLnZhbHVlQXNEYXRlfVxuICAgICAgICAvLyBjcmVhdGlvbkRhdGVJbnB1dDogJHtzYXZlZFZhbHVlc1s0XS52YWx1ZUFzRGF0ZX1gKTtcblxuICAgICAgICB0YXJnZXRUb2RvLnNldFRpdGxlKHNhdmVkVmFsdWVzWzBdLnZhbHVlKTtcbiAgICAgICAgdGFyZ2V0VG9kby5zZXREZXNjcmlwdGlvbihzYXZlZFZhbHVlc1sxXS52YWx1ZSk7XG4gICAgICAgIHRhcmdldFRvZG8uc2V0UHJpb3JpdHkoc2F2ZWRWYWx1ZXNbMl0udmFsdWVBc051bWJlcik7XG4gICAgICAgIHRhcmdldFRvZG8uc2V0Tm90ZXMoc2F2ZWRWYWx1ZXNbM10udmFsdWUpO1xuXG4gICAgICAgICAgICAvLyBXcml0ZSBuZXcgZHVlRGF0ZSBpZiBuZXcgZHVlRGF0ZSAhPT0gb2xkRHVlRGF0ZSB2YWx1ZXNcbiAgICAgICAgICAgIGxldCBuZXdEdWVEYXRlID0gc2F2ZWRWYWx1ZXNbNF0udmFsdWU7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgbmV3RHVlRGF0ZTogJHtuZXdEdWVEYXRlfWApOyAvLyBmb3JtYXQgXCIyMDIyLTAzLTIxXCJcbiAgICAgICAgICAgIGxldCBvbGREdWVEYXRlID0gdGFyZ2V0VG9kby5nZXREdWVEYXRlKCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgb2xkRHVlRGF0ZTogJHtvbGREdWVEYXRlfWApO1xuICAgICAgICAgICAgbGV0IG9sZER1ZURhdGVTdHJpbmcgPSBgJHtvbGREdWVEYXRlLmdldEZ1bGxZZWFyKCl9LWBcbiAgICAgICAgICAgIGlmKG9sZER1ZURhdGUuZ2V0TW9udGgoKSArIDEgPCAxMCkge1xuICAgICAgICAgICAgICAgIG9sZER1ZURhdGVTdHJpbmcgKz0gYDAke29sZER1ZURhdGUuZ2V0TW9udGgoKSArIDF9LWBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2xkRHVlRGF0ZVN0cmluZyArPSBgJHtvbGREdWVEYXRlLmdldE1vbnRoKCkgKyAxfS1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihvbGREdWVEYXRlLmdldERhdGUoKSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgb2xkRHVlRGF0ZVN0cmluZyArPSBgMCR7b2xkRHVlRGF0ZS5nZXREYXRlKCl9YFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvbGREdWVEYXRlU3RyaW5nICs9IGAke29sZER1ZURhdGUuZ2V0RGF0ZSgpfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBvbGREdWVEYXRlU3RyaW5nOiAke29sZER1ZURhdGVTdHJpbmd9YCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgbmV3RHVlRGF0ZTogJHtuZXdEdWVEYXRlfSB2cyAke29sZER1ZURhdGVTdHJpbmd9OiBvbGREdWVEYXRlU3RyaW5nYCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggbmV3RHVlRGF0ZSAhPSBvbGREdWVEYXRlU3RyaW5nKTtcbiAgICAgICAgICAgIGlmIChuZXdEdWVEYXRlICE9PSBvbGREdWVEYXRlU3RyaW5nICkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBuZXdEdWVEYXRlICE9PSBvbGREdWVEYXRlU3RyaW5nIWApO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBTZXQgbmV3IGR1ZSBkYXRlIHRvICR7bmV3RHVlRGF0ZX0gd2l0aCBjdXJyZW50IHRpbWUgZmlsbGVkIGluIWApO1xuICAgICAgICAgICAgICAgIHRhcmdldFRvZG8uc2V0RHVlRGF0ZShuZXcgRGF0ZShuZXdEdWVEYXRlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdyaXRlIG5ldyBjcmVhdGlvbkRhdGUgaWYgbmV3IGNyZWF0aW9uRGF0ZSAhPT0gb2xkQ3JlYXRpb25EYXRlIHZhbHVlc1xuICAgICAgICAgICAgbGV0IG5ld0NyZWF0aW9uRGF0ZSA9IHNhdmVkVmFsdWVzWzVdLnZhbHVlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYG5ld0NyZWF0aW9uRGF0ZTogJHtuZXdDcmVhdGlvbkRhdGV9YCk7IC8vIGZvcm1hdCBcIjIwMjItMDMtMjFcIlxuICAgICAgICAgICAgbGV0IG9sZENyZWF0aW9uRGF0ZSA9IHRhcmdldFRvZG8uZ2V0Q3JlYXRpb25EYXRlKCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgb2xkQ3JlYXRpb25EYXRlOiAke29sZENyZWF0aW9uRGF0ZX1gKTtcbiAgICAgICAgICAgIGxldCBvbGRDcmVhdGlvbkRhdGVTdHJpbmcgPSBgJHtvbGRDcmVhdGlvbkRhdGUuZ2V0RnVsbFllYXIoKX0tYFxuICAgICAgICAgICAgaWYob2xkQ3JlYXRpb25EYXRlLmdldE1vbnRoKCkgKyAxIDwgMTApIHtcbiAgICAgICAgICAgICAgICBvbGRDcmVhdGlvbkRhdGVTdHJpbmcgKz0gYDAke29sZENyZWF0aW9uRGF0ZS5nZXRNb250aCgpICsgMX0tYFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvbGRDcmVhdGlvbkRhdGVTdHJpbmcgKz0gYCR7b2xkQ3JlYXRpb25EYXRlLmdldE1vbnRoKCkgKyAxfS1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihvbGRDcmVhdGlvbkRhdGUuZ2V0RGF0ZSgpIDwgMTApIHtcbiAgICAgICAgICAgICAgICBvbGRDcmVhdGlvbkRhdGVTdHJpbmcgKz0gYDAke29sZENyZWF0aW9uRGF0ZS5nZXREYXRlKCl9YFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvbGRDcmVhdGlvbkRhdGVTdHJpbmcgKz0gYCR7b2xkQ3JlYXRpb25EYXRlLmdldERhdGUoKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgb2xkQ3JlYXRpb25EYXRlU3RyaW5nOiAke29sZENyZWF0aW9uRGF0ZVN0cmluZ31gKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBuZXdDcmVhdGlvbkRhdGU6ICR7bmV3Q3JlYXRpb25EYXRlfSB2cyAke29sZENyZWF0aW9uRGF0ZVN0cmluZ306IG9sZENyZWF0aW9uRGF0ZVN0cmluZ2ApO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coIG5ld0NyZWF0aW9uRGF0ZSAhPSBvbGRDcmVhdGlvbkRhdGVTdHJpbmcpO1xuICAgICAgICAgICAgaWYgKG5ld0NyZWF0aW9uRGF0ZSAhPT0gb2xkQ3JlYXRpb25EYXRlU3RyaW5nICkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBuZXdDcmVhdGlvbkRhdGUgIT09IG9sZENyZWF0aW9uRGF0ZVN0cmluZyFgKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgU2V0IG5ldyBkdWUgZGF0ZSB0byAke25ld0NyZWF0aW9uRGF0ZX0gd2l0aCBjdXJyZW50IHRpbWUgZmlsbGVkIGluIWApO1xuICAgICAgICAgICAgICAgIHRhcmdldFRvZG8uc2V0Q3JlYXRpb25EYXRlKG5ldyBEYXRlKG5ld0NyZWF0aW9uRGF0ZSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdG9kbyBET00gZWxlbWVudHMgdG8gcmVmbGVjdCB0aGUgdXBkYXRlZCB2YWx1ZXNcbiAgICAgICAgbGV0IG5ld1RpdGxlID0gXCJcIjtcbiAgICAgICAgaWYgKHNhdmVkVmFsdWVzWzBdLnZhbHVlLmxlbmd0aCA+IDMyKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzYXZlZFZhbHVlc1swXS52YWx1ZSlcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IDM0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBuZXdUaXRsZSArPSBzYXZlZFZhbHVlc1swXS52YWx1ZS5jaGFyQXQoaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdUaXRsZSArPSBcIi4uLlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VGl0bGUgPSBzYXZlZFZhbHVlc1swXS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXRUb2RvLmdldFRvZG9EaXYoKS5maXJzdENoaWxkLm5leHRTaWJsaW5nLmlubmVyVGV4dCA9IG5ld1RpdGxlO1xuXG5cblxuICAgICAgICAvLyBUYXJnZXQgZGl2IGFuZCBkZWxldGUgaXRcbiAgICAgICAgY29uc3QgdG9kb0VsZW1lbnRDb250YWluZXIgPSB0YXJnZXRQcm9qZWN0LmdldFByb2plY3REaXYoKS5jaGlsZE5vZGVzWzFdO1xuICAgICAgICB0b2RvRWxlbWVudENvbnRhaW5lci5yZW1vdmVDaGlsZChlZGl0VG9kb1BhbmVEaXYpO1xuICAgICAgICAvLyBUb2dnbGUgcHJvamVjdE1lbnVPcGVuIHRvIGZhbHNlXG4gICAgICAgIHRhcmdldFByb2plY3QudG9nZ2xlUHJvamVjdE1lbnVPcGVuKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIExvY2FsIFN0b3JhZ2VcbiAgICAgICAgX3dyaXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIFxuICAgIH1cbiAgICB0aGlzLl9wcm9qZWN0RWRpdFRvZG9TYXZlQnV0dG9uID0gX3Byb2plY3RFZGl0VG9kb1NhdmVCdXR0b247XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbG9jYWxTdG9yYWdlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gZnVuY3Rpb24gdGhhdCBkZXRlY3RzIHdoZXRoZXIgbG9jYWxTdG9yYWdlIGlzIGJvdGggc3VwcG9ydGVkIGFuZCBhdmFpbGFibGU6XG4gICAgLy8gUHVsbGVkIGZyb20gbGluayAtIFxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XZWJfU3RvcmFnZV9BUEkvVXNpbmdfdGhlX1dlYl9TdG9yYWdlX0FQSVxuICAgIGZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgICAgICB2YXIgc3RvcmFnZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICAgICAgICB2YXIgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICAgICAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICAgICAgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fFxuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXG4gICAgICAgICAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgICAgICAgICAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gaXNMb2NhbFN0b3JhZ2VFbXB0eSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJIGFtIGlzTG9jYWxTdG9yYWdlRW1wdHksIEkgc3RpbGwgbmVlZCBmdW5jdGlvbmFsaXR5IGltcGxlbWVudGVkIGhlcmVcIik7XG4gICAgICAgIFxuICAgICAgICBpZihsb2NhbFN0b3JhZ2Uua2V5KDApID09PSBudWxsICl7XG4gICAgICAgICAgICAvLyB5ZXMsIGluc3RlcnQgZnVuY3Rpb25hbGl0eSBoZXJlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvY2FsU3RvcmFnZSBpcyBlbXB0eVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vLCBpbnNlcnQgZnVuY3Rpb25hbGl0eSBoZXJlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvY2FsU3RvcmFnZSBoYXMgdmFsdWVzLCBoZXJlIHRoZXkgYXJlXCIpIFxuICAgICAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgbG9jYWxTdG9yYWdlLmtleShpKSAhPSBudWxsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7bG9jYWxTdG9yYWdlLmtleShpKX0gOiAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgY29uc3QgX3dyaXRlTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuXG4gICAgICAgIGlmKCAhX3VzZUxvY2FsU3RvcmFnZSkgcmV0dXJuO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBfd3JpdGVMb2NhbFN0b3JhZ2UoKSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIGxldCByZXN1bHQgPSBfcHJvamVjdENvbnRhaW5lci53cml0ZVByb2pBcnJMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIH1cbiAgICB0aGlzLl93cml0ZUxvY2FsU3RvcmFnZSA9IF93cml0ZUxvY2FsU3RvcmFnZTtcblxuICAgIGNvbnN0IF9yZWFkTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuXG4gICAgICAgIGlmKCAhX3VzZUxvY2FsU3RvcmFnZSkgcmV0dXJuO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBfcmVhZExvY2FsU3RvcmFnZSgpIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuXG4gICAgICAgIGxldCBuZXdQcm9qZWN0QXJyID0gX3Byb2plY3RDb250YWluZXIucmVhZFByb2plY3RBcnJMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmV3UHJvamVjdEFyclswXSk7XG4gICAgICAgIGlmKCBuZXdQcm9qZWN0QXJyICkge1xuICAgICAgICAgICAgZm9yICggbGV0IGluZGV4ID0gMDsgaW5kZXggPCBuZXdQcm9qZWN0QXJyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIF9nZW5lcmF0ZVByb2plY3QobmV3UHJvamVjdEFycltpbmRleF1bMF0sIG5ld1Byb2plY3RBcnJbaW5kZXhdWzFdLCBuZXdQcm9qZWN0QXJyW2luZGV4XVsyXSwgbmV3UHJvamVjdEFycltpbmRleF1bM10sIG5ld1Byb2plY3RBcnJbaW5kZXhdWzRdIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cblxuICAgIH1cbiAgICB0aGlzLl9yZWFkTG9jYWxTdG9yYWdlID0gX3JlYWRMb2NhbFN0b3JhZ2U7XG5cblxuXG5cbiAgICAvLyBfcmVhZExvY2FsU3RvcmFnZSgpO1xuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRJbmZvLCBpbml0LFxuICAgICAgICBnZXRQcm9qZWN0Q29udGFpbmVyLCBzZXRQcm9qZWN0Q29udGFpbmVyLFxuICAgICAgICBnZW5lcmF0ZVByb2plY3RDb250YWluZXJPYmosXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2ljQ29udHJvbGxlcjsiLCJcbmltcG9ydCB7Zm9ybWF0LCB0b0RhdGUsIGlzRGF0ZX0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgZm9ybWF0UmVsYXRpdmVXaXRoT3B0aW9ucyB9IGZyb20gJ2RhdGUtZm5zL2ZwJztcbmltcG9ydCB0b2RvT2JqIGZyb20gJy4vdG9kb09iaic7XG5cbmNvbnN0IHByb2plY3RPYmogPSAoKSA9PiB7XG4gXG4gICAgbGV0IF9wcm9qZWN0TmFtZTtcbiAgICBsZXQgX3RvZG9MaXN0ID0gW107XG4gICAgbGV0IF9wcm9qZWN0Q3JlYXRpb25EYXRlO1xuICAgIGxldCBfZHVlRGF0ZTtcbiAgICBsZXQgX3Byb2plY3RQcmlvcml0eTtcbiAgICBsZXQgX3Byb2plY3REaXY7XG4gICAgbGV0IF9wcm9qZWN0TWVudU9wZW4gPSBmYWxzZTtcblxuICAgIGNvbnN0IGdldEluZm8gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgICAgICAgICBfcHJvamVjdE5hbWU6ICR7X3Byb2plY3ROYW1lfVxuICAgICAgICBfdG9kb0xpc3Q6ICR7X3RvZG9MaXN0fVxuICAgICAgICBfcHJvamVjdENyZWF0aW9uRGF0ZURhdGU6ICR7X3Byb2plY3RDcmVhdGlvbkRhdGV9XG4gICAgICAgIF9kdWVEYXRlOiAke19kdWVEYXRlfVxuICAgICAgICBfcHJvamVjdFByaW9yaXR5OiAke19wcm9qZWN0UHJpb3JpdHl9XG4gICAgICAgIF9wcm9qZWN0RGl2OiAke19wcm9qZWN0RGl2fVxuICAgICAgICBfcHJvamVjdE1lbnVPcGVuOiAke19wcm9qZWN0TWVudU9wZW59YFxuICAgIH1cblxuICAgIGNvbnN0IGluaXQgPSAocHJvamVjdE5hbWUsIHRvZG9MaXN0LCBjcmVhdGlvbkRhdGUsIGR1ZURhdGUsIHByb2plY3RQcmlvcml0eSwgcHJvamVjdERpdiwgcHJvamVjdE1lbnVPcGVuKSA9PiB7XG4gICAgICAgIF9wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgICAgICBfdG9kb0xpc3QgPSB0b2RvTGlzdDtcbiAgICAgICAgX3Byb2plY3RDcmVhdGlvbkRhdGUgPSBjcmVhdGlvbkRhdGU7XG4gICAgICAgIF9kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgX3Byb2plY3RQcmlvcml0eSA9IHByb2plY3RQcmlvcml0eTtcbiAgICAgICAgX3Byb2plY3REaXYgPSBwcm9qZWN0RGl2O1xuICAgICAgICBfcHJvamVjdE1lbnVPcGVuID0gcHJvamVjdE1lbnVPcGVuO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0TmFtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9wcm9qZWN0TmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQcm9qZWN0TmFtZSA9IChuZXdOYW1lKSA9PiB7XG4gICAgICAgIGlmKCB0eXBlb2YgbmV3TmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgX3Byb2plY3ROYW1lID0gbmV3TmFtZTsgXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0T2JqLnNldFByb2plY3ROYW1lIEVycm9yISB0cmllZCB0byBwYXNzIGEgbm9uLXN0cmluZyBpbnRvIHRoZSBfbmFtZSBmaWVsZCEnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFByb2plY3RDcmVhdGlvbkRhdGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfcHJvamVjdENyZWF0aW9uRGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQcm9qZWN0Q3JlYXRpb25EYXRlID0gKG5ld0NyZWF0aW9uRGF0ZSkgPT4ge1xuICAgICAgICBpZiggaXNEYXRlKG5ld0NyZWF0aW9uRGF0ZSkpIHtcbiAgICAgICAgICAgIF9wcm9qZWN0Q3JlYXRpb25EYXRlID0gbmV3Q3JlYXRpb25EYXRlOyBcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3RPYmouc2V0UHJvamVjdENyZWF0aW9uRGF0ZSBFcnJvciEgdHJpZWQgdG8gcGFzcyBhIG5vbi1kYXRlIGludG8gdGhlIF9wcm9qZWN0Q3JlYXRpb25EYXRlIGZpZWxkIScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGdldFByb2plY3REdWVEYXRlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gX2R1ZURhdGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UHJvamVjdER1ZURhdGUgPSAobmV3RHVlRGF0ZSkgPT4ge1xuICAgICAgICBpZiggaXNEYXRlKG5ld0R1ZURhdGUpKSB7XG4gICAgICAgICAgICBfZHVlRGF0ZSA9IG5ld0R1ZURhdGU7IFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHJvamVjdE9iai5zZXRDcmVhdGlvbkR1ZURhdGUgRXJyb3IhIHRyaWVkIHRvIHBhc3MgYSBub24tZGF0ZSBpbnRvIHRoZSBfZHVlRGF0ZSBmaWVsZCEnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBnZXRQcm9qZWN0UHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfcHJvamVjdFByaW9yaXR5O1xuICAgIH1cblxuICAgIGNvbnN0IHNldFByb2plY3RQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4ge1xuICAgICAgICAvLyBUaGlzIGlzIGEgYml0IGZpbHRoeS4gU2hvdWxkIHRha2UgbnVtYmVycywgMSwyLDMsNCw1LCBvciBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlc2Ugc2FtZSBudW1iZXJzLiBYWFhVUERBVEVYWFggQ2xlYW4gdGhpcy5cbiAgICAgICAgaWYoIHR5cGVvZiBuZXdQcmlvcml0eSA9PT0gXCJudW1iZXJcIiB8fCB0eXBlb2YgbmV3UHJpb3JpdHkgPT09IFwic3RyaW5nXCIgKSB7XG4gICAgICAgICAgICBfcHJvamVjdFByaW9yaXR5ID0gbmV3UHJpb3JpdHk7IFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHJvamVjdE9iai5zZXRQcm9qZWN0UHJpb3J0eSBFcnJvciEgdHJpZWQgdG8gcGFzcyBhIG5vbi1udW1iZXIgaW50byB0aGUgX3Byb2plY3RQcmlvcml0eSBmaWVsZCEnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFByb2plY3REaXYgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfcHJvamVjdERpdjtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQcm9qZWN0RGl2ID0gKG5ld0RpdikgPT4ge1xuICAgICAgICBfcHJvamVjdERpdiA9IG5ld0RpdjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvamVjdE1lbnVPcGVuID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gX3Byb2plY3RNZW51T3BlbjtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQcm9qZWN0TWVudU9wZW4gPSAobWVudU9wZW4pID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBtZW51T3BlbiA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIF9wcm9qZWN0TWVudU9wZW4gPSBtZW51T3BlbjtcbiAgICAgICAgICAgIHJldHVybiBfcHJvamVjdE1lbnVPcGVuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUiBpbiBzZXRQcm9qZWN0TWVudU9wZW4hIFRyaWVkIHRvIHBhc3MgYSBub24tYm9vbGVhbiFcIilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZVByb2plY3RNZW51T3BlbiA9ICgpID0+IHtcbiAgICAgICAgaWYgKF9wcm9qZWN0TWVudU9wZW4pIHtcbiAgICAgICAgICAgIF9wcm9qZWN0TWVudU9wZW4gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9wcm9qZWN0TWVudU9wZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfdG9kb0xpc3Q7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VG9kb0xpc3QgPSAobmV3VG9kb0xpc3QpID0+IHtcbiAgICAgICAgaWYoIHR5cGVvZiBuZXdUb2RvTGlzdCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgLy8gSSBjYW4gcmV3cml0ZSB0aGlzIHdpdGggYSBsb29wIGFuZCB0aGUgYXJnc1tdIHRvIHRha2UgbXVsdGlwbGUgbmV3IG9iamVjdHMsIGJ1dCBmb3IgbXkgcHVycG9zZXMsIEkgd2lsbCBvbmx5IGV2ZXIgYmUgc2V0dGluZyB0aGlzIHRvZG9MaXN0IG9uZSBhcnJheSBhdCBhIHRpbWVcbiAgICAgICAgICAgIF90b2RvTGlzdCA9IG5ldyBBcnJheShuZXdUb2RvTGlzdCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0T2JqLnNldFRvZG9MaXN0IGVycm9yISB0cmllZCB0byBwYXNzIGEgbm9uLW9iamVjdCBpbnRvIHRoZSBfdG9kb0xpc3QgZmllbGQhJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhZGRUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgY3JlYXRpb25EYXRlLCBwcmlvcml0eSwgbm90ZXMsIGNoZWNrbGlzdCwgY29tcGxldGUpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VG9kbyA9IHRvZG9PYmooKTtcbiAgICAgICAgbmV3VG9kby5pbml0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgY3JlYXRpb25EYXRlLCBwcmlvcml0eSwgbm90ZXMsIGNoZWNrbGlzdCwgY29tcGxldGUpO1xuICAgICAgICBfdG9kb0xpc3QucHVzaChuZXdUb2RvKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRUb2RvT2JqID0gKG5ld1RvZG8pID0+IHtcblxuICAgICAgICBpZih0eXBlb2YgbmV3VG9kbyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgX3RvZG9MaXN0LnB1c2gobmV3VG9kbyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0T2JqLmFkZFRvZG9PYmogZXJyb3IhIHRyaWVkIHRvIHBhc3MgYSBub24tb2JqZWN0IHRvIHRoZSBfdG9kb0xpc3QhJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSAgICAgICAgICAgXG5cbiAgICB9XG5cbiAgICAvLyBUYWtlcyBhbiBpbnRlZ2VyICd0YXJnZXQnXG4gICAgY29uc3QgcmVtb3ZlVG9kbyA9ICh0YXJnZXQpID0+IHtcbiAgICAgICAgaWYoX3RvZG9MaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF90b2RvTGlzdC5zcGxpY2UodGFyZ2V0LCAxKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3RPYmoucmVtb3ZlVG9kbyBFcnJvciEgdHJpZWQgdG8gcmVtb3ZlIGFuIGVsZW1lbnQgZnJvbSBhbiBlbXB0eSBfdG9kb0xpc3QhJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhnZXRUb2RvTGlzdCgpKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVRhcmdldFRvZG8gPSAodGFyZ2V0VG9kbykgPT4ge1xuICAgICAgICBpZihfdG9kb0xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IF9uZXdMaXN0ID0gX3RvZG9MaXN0LmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT0gdGFyZ2V0VG9kbyk7XG4gICAgICAgICAgICBfdG9kb0xpc3QgPSBfbmV3TGlzdDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3RPYmoucmVtb3ZlVGFyZ2V0VG9kbyBFcnJvciEgdHJpZWQgdG8gcmVtb3ZlIGFuIGVsZW1lbnQgZnJvbSBhbiBlbXB0eSBfdG9kb0xpc3QhJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW9yZGVyVG9kbyA9ICh0YXJnZXQsIGRlc3RpbmF0aW9uKSA9PiB7XG4gICAgICAgIGlmKHRhcmdldCA8IF90b2RvTGlzdC5sZW5ndGggJiYgZGVzdGluYXRpb24gPCBfdG9kb0xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnRm9yIERlYnVnZ2luZzogQ29uc29sZSBsb2cgb2YgT0xEIF90b2RvTGlzdDogJyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhnZXRUb2RvTGlzdCgpKTtcbiAgICAgICAgICAgIF90b2RvTGlzdC5zcGxpY2UoZGVzdGluYXRpb24sIDAsIChfdG9kb0xpc3Quc3BsaWNlKHRhcmdldCwgMSlbMF0pKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdGb3IgRGVidWdnaW5nOiBDb25zb2xlIGxvZyBvZiBORVcgX3RvZG9MaXN0OiAnKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGdldFRvZG9MaXN0KCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHJvamVjdE9iai5yZW9yZGVyVG9kbyBFcnJvciEgVHJpZWQgdG8gcGFzcyBhIHZhbHVlIGdyZWF0ZXIgdGhhbiBfdG9kb0xpc3QubGVuZ3RoIGZvciB0YXJnZXQgb3IgZGVzdGluYXRpb24hJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB3cml0ZVByb2plY3RMb2NhbFN0b3JhZ2UgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYEkgYW0gd3JpdGVQcm9qZWN0TG9jYWwgU3RvcmFnZSwgdGFraW5nIGluZGV4OiAke2luZGV4fSwgdGFyZ2V0aW5nIHByb2plY3Q6ICR7Z2V0UHJvamVjdE5hbWUoKX1gKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFdyaXRpbmcgbXkgdmFsdWVzIHRvIGxvY2FsU3RvcmFnZWApO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBNeSB2YWx1ZXMgYXJlIGFzIGZvbGxvd3M6IFxuICAgICAgICAvLyBuYW1lOiAke2dldFByb2plY3ROYW1lKCl9XG4gICAgICAgIC8vIHByaW9yaXR5OiAke2dldFByb2plY3RQcmlvcml0eSgpfVxuICAgICAgICAvLyBkdWVEYXRlOiAke2dldFByb2plY3REdWVEYXRlKCl9XG4gICAgICAgIC8vIGNyZWF0aW9uRGF0ZTogJHtnZXRQcm9qZWN0Q3JlYXRpb25EYXRlKCl9XG4gICAgICAgIC8vIHRvZG9MaXN0OiAke2dldFRvZG9MaXN0KCl9XG4gICAgICAgIC8vIHRvZG9MaXN0Lmxlbmd0aDogJHtnZXRUb2RvTGlzdCgpLmxlbmd0aH1gKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcHJvamVjdCR7aW5kZXh9TmFtZWAsIGAke2dldFByb2plY3ROYW1lKCl9YCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBwcm9qZWN0JHtpbmRleH1Qcmlvcml0eWAsIGAke2dldFByb2plY3RQcmlvcml0eSgpfWApO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcHJvamVjdCR7aW5kZXh9RHVlRGF0ZWAsIGAke2dldFByb2plY3REdWVEYXRlKCl9YCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBwcm9qZWN0JHtpbmRleH1DcmVhdGlvbkRhdGVgLCBgJHtnZXRQcm9qZWN0Q3JlYXRpb25EYXRlKCl9YCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBwcm9qZWN0JHtpbmRleH1Ub2RvTGlzdExlbmd0aGAsIGAke2dldFRvZG9MaXN0KCkubGVuZ3RofWApO1xuXG4gICAgICAgIC8vIFNldCB0aGUgZm9sbG93IHRvIGJlIGEgbG9vcCB0aGF0IHJ1bnMgb3ZlciB0b2RvTGlzdCBhbmQgcnVucyB3cml0ZVRvZG9Mb2NhbFN0b3JhZ2UoKSBmb3IgZWFjaCBvZiB0aGVtLCB0YWtpbmcgcHJvamVjdEluZGV4IGFuZCB0b2RvSW5kZXggYXMgYSB2YWx1ZVxuICAgICAgICBmb3IoIGxldCB0b2RvSW5kZXggPSAwOyB0b2RvSW5kZXggPCBnZXRUb2RvTGlzdCgpLmxlbmd0aDsgdG9kb0luZGV4KysgKSB7XG4gICAgICAgICAgICAvLyBfcHJvamVjdEFycltpXS53cml0ZVByb2plY3RMb2NhbFN0b3JhZ2UoaSk7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZ2V0VG9kb0xpc3QoKVt0b2RvSW5kZXhdLndyaXRlVG9kb0xvY2FsU3RvcmFnZShpbmRleCwgdG9kb0luZGV4KTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHByb2plY3Qke2luZGV4fVRvZG9MaXN0YCwgYCR7Z2V0VG9kb0xpc3QoKX1gKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cblxuICAgICByZXR1cm4ge1xuICAgICAgICBnZXRJbmZvLFxuICAgICAgICBpbml0LFxuICAgICAgICBnZXRQcm9qZWN0TmFtZSwgc2V0UHJvamVjdE5hbWUsXG4gICAgICAgIGdldFByb2plY3RDcmVhdGlvbkRhdGUsIHNldFByb2plY3RDcmVhdGlvbkRhdGUsXG4gICAgICAgIGdldFByb2plY3REdWVEYXRlLCBzZXRQcm9qZWN0RHVlRGF0ZSxcbiAgICAgICAgZ2V0UHJvamVjdFByaW9yaXR5LCBzZXRQcm9qZWN0UHJpb3JpdHksXG4gICAgICAgIGdldFByb2plY3REaXYsIHNldFByb2plY3REaXYsXG4gICAgICAgIGdldFByb2plY3RNZW51T3Blbiwgc2V0UHJvamVjdE1lbnVPcGVuLCB0b2dnbGVQcm9qZWN0TWVudU9wZW4sXG4gICAgICAgIGdldFRvZG9MaXN0LCBzZXRUb2RvTGlzdCwgYWRkVG9kbywgYWRkVG9kb09iaiwgcmVtb3ZlVG9kbywgcmVtb3ZlVGFyZ2V0VG9kbywgcmVvcmRlclRvZG8sXG4gICAgICAgIHdyaXRlUHJvamVjdExvY2FsU3RvcmFnZSxcbiAgICAgICAgXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RPYmo7IiwiXG5pbXBvcnQgcHJvamVjdE9iaiBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IHRvZG9PYmogZnJvbSAnLi90b2RvT2JqJztcblxuXG4vLyBJIGFtIHByb2plY3RDb250YWluZXJPYmouIEkgaG91c2UgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIG9mIHByb2plY3RPYnMgYW5kIGFsc28gY29udGFpbiB0aGUgPGRpdj4gcmVmZXJlbmNlIHRvIHJlbGV2YW50IERPTSBlbGVtZW50cyBmb3IgbGF0ZXIgbWFuaXB1bGF0aW9uIGJ5IGxvZ2ljQ29udHJvbGxlclxuXG5jb25zdCBwcm9qZWN0Q29udGFpbmVyT2JqID0gKCkgPT4ge1xuXG4gICAgbGV0IF9wcm9qZWN0QXJyID0gW107XG4gICAgbGV0IF9wcm9qZWN0Q29udGFpbmVyRGl2O1xuICAgIGxldCBfYWRkQnV0dG9uO1xuICAgIGxldCBfYWRkQnV0dG9uTWVudSA9IGZhbHNlO1xuXG5cbiAgICBjb25zdCBnZXRJbmZvID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYEkgYW0gcHJvamVjdENvbnRhaW5lck9iai5nZXRJbmZvKClcbiAgICAgICAgX3Byb2plY3RBcnI6ICR7X3Byb2plY3RBcnJ9XG4gICAgICAgIF9wcm9qZWN0Q29udGFpbmVyRGl2OiAke19wcm9qZWN0Q29udGFpbmVyRGl2fVxuICAgICAgICBfYWRkQnV0dG9uOiAke19hZGRCdXR0b259XG4gICAgICAgIF9hZGRCdXR0b25NZW51OiAke19hZGRCdXR0b25NZW51fWBcbiAgICB9XG5cbiAgICBjb25zdCBpbml0ID0gKG5ld1Byb2plY3RBcnIsIG5ld1Byb2plY3RDb250YWluZXJEaXYsIG5ld0FkZEJ1dHRvbiwgbmV3QWRkQnV0dG9uTWVudSkgPT4ge1xuICAgICAgICBfcHJvamVjdEFyciA9IG5ld1Byb2plY3RBcnI7XG4gICAgICAgIF9wcm9qZWN0Q29udGFpbmVyRGl2ID0gbmV3UHJvamVjdENvbnRhaW5lckRpdlxuICAgICAgICBfYWRkQnV0dG9uID0gbmV3QWRkQnV0dG9uO1xuICAgICAgICBfYWRkQnV0dG9uTWVudSA9IG5ld0FkZEJ1dHRvbk1lbnU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvamVjdEFyciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9wcm9qZWN0QXJyO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFByb2plY3RBcnIgPSAobmV3UHJvamVjdEFycikgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIG5ld1Byb2plY3RBcnIgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIF9wcm9qZWN0QXJyID0gbmV3UHJvamVjdEFycjtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3RDb250YWluZXJPYmouX3NldFByb2plY3RBcnIgRXJyb3IhIHRyaWVkIHRvIHBhc3MgYSBub24tb2JqZWN0IGludG8gdGhlIF9wcm9qZWN0QXJyIGZpZWxkIScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChuZXdQcm9qZWN0T2JqKSA9PiB7XG4gICAgICAgIGlmKHR5cGVvZiBuZXdQcm9qZWN0T2JqID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBfcHJvamVjdEFyci5wdXNoKG5ld1Byb2plY3RPYmopO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHJvamVjdENvbnRhaW5lck9iai5fYWRkUHJvamVjdEFyciBFcnJvciEgdHJpZWQgdG8gcGFzcyBhIG5vbi1vYmplY3QgdG8gcHVzaCBpbnRvIF9wcm9qZWN0QXJyIScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgICAgICBpZih0eXBlb2YgaW5kZXggPT09IFwibnVtYmVyXCIgJiYgaW5kZXggPCBfcHJvamVjdEFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIF9wcm9qZWN0QXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0Q29udGFpbmVyT2JqLmRlbGV0ZVByb2plY3QgRXJyb3IhIHRyaWVkIHRvIHBhc3MgYSBub24tbnVtYmVyIHRvIGluZGV4IGZvciBfcHJvamVjdEFyci5zcGxpY2UgT1IgaW5kZXggPj0gX3Byb2plY3RBcnIubGVuZ3RoOiAnICsgaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvamVjdENvbnRhaW5lckRpdiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9wcm9qZWN0Q29udGFpbmVyRGl2O1xuICAgIH1cblxuICAgIC8vIEluIGFuIGlkZWFsIHdvcmxkLCB0aGlzIHR5cGUgY2hlY2tzIHRvIHNlZSB0aGF0IG5ld1Byb2plY3RDb250YWluZXJEaXYgaXMgYSBOb2RlLlxuICAgIGNvbnN0IHNldFByb2plY3RDb250YWluZXJEaXYgPSAobmV3UHJvamVjdENvbnRhaW5lckRpdikgPT4ge1xuICAgICAgICAvLyBpZiAodHlwZW9mIG5ld1Byb2plY3RDb250YWluZXJEaXYgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIF9wcm9qZWN0Q29udGFpbmVyRGl2ID0gbmV3UHJvamVjdENvbnRhaW5lckRpdjtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Byb2plY3RDb250YWluZXJPYmouX3NldFByb2plY3RBcnIgRXJyb3IhIHRyaWVkIHRvIHBhc3MgYSBub24tb2JqZWN0IGludG8gdGhlIF9wcm9qZWN0QXJyIGZpZWxkIScpO1xuICAgICAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBnZXRBZGRCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfYWRkQnV0dG9uO1xuICAgIH1cblxuICAgIC8vIFNlZSB0eXBlIGNoZWNraW5nIGNvbW1lbnQgZm9yIHNldFByb2plY3RDb250YWluZXJEaXZcbiAgICBjb25zdCBzZXRBZGRCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIF9wcm9qZWN0Q29udGFpbmVyRGl2ID0gbmV3UHJvamVjdENvbnRhaW5lckRpdjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0QWRkQnV0dG9uTWVudSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9hZGRCdXR0b25NZW51O1xuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZUFkZEJ1dHRvbk1lbnUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChfYWRkQnV0dG9uTWVudSkge1xuICAgICAgICAgICAgX2FkZEJ1dHRvbk1lbnUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9hZGRCdXR0b25NZW51ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAocHJvamVjdE5hbWVJbnB1dCwgY3JlYXRpb25EYXRlSW5wdXQsIGR1ZURhdGVJbnB1dCwgcHJvamVjdFByaW9yaXR5SW5wdXQsIHByb2plY3REaXZJbnB1dCwgdG9kb0xpc3RJbnB1dCkgPT4ge1xuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IHByb2plY3RPYmooKTtcblxuICAgICAgICAvLyBPcHRpb25hbCBzd2l0Y2ggaGVyZSwgYSBwcm9qZWN0IGNhbiBiZSBjcmVhdGVkIHdpdGhvdXQgYW4gYWN0aXZlIHRvZG9MaXN0LCB3aGljaCBpbnN0ZWFkIGdlbmVyYXRlcyBhbiBlbXB0eSBhcnJheVxuICAgICAgICBpZiggdG9kb0xpc3RJbnB1dCApIHtcbiAgICAgICAgICAgIG5ld1Byb2plY3QuaW5pdChwcm9qZWN0TmFtZUlucHV0LCB0b2RvTGlzdElucHV0LCBjcmVhdGlvbkRhdGVJbnB1dCwgZHVlRGF0ZUlucHV0LCBwcm9qZWN0UHJpb3JpdHlJbnB1dCwgcHJvamVjdERpdklucHV0LCBmYWxzZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdQcm9qZWN0LmdldEluZm8oKSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3UHJvamVjdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1Byb2plY3QuaW5pdChwcm9qZWN0TmFtZUlucHV0LCBbXSwgY3JlYXRpb25EYXRlSW5wdXQsIGR1ZURhdGVJbnB1dCwgcHJvamVjdFByaW9yaXR5SW5wdXQsIHByb2plY3REaXZJbnB1dCwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3UHJvamVjdC5nZXRJbmZvKCkpO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1Byb2plY3Q7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IHdyaXRlUHJvakFyckxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYEkgYW0gd3JpdGVQcm9qQXJyTG9jYWxTdG9yYWdlKCkuIF9wcm9qQXJyW106ICR7X3Byb2plY3RBcnJ9XG4gICAgICAgIC8vIF9wcm9qQXJyLmxlbmd0aDogJHtfcHJvamVjdEFyci5sZW5ndGh9YCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiV3JpdGluZyBfcHJvakFycltdIHRvIGxvY2FsU3RvcmFnZS5cIik7XG5cbiAgICAgICAgX3Byb2plY3RBcnI7XG5cbiAgICAgICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBfcHJvamVjdEFyci5sZW5ndGg7IGkrKyApIHtcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHByb2pBcnJMZW5ndGhgLCBgJHtfcHJvamVjdEFyci5sZW5ndGh9YCk7XG5cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBfcHJvamVjdEFycltpXS53cml0ZVByb2plY3RMb2NhbFN0b3JhZ2UoaSk7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgcmVhZFByb2plY3RBcnJMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgIGxldCBudW1Qcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qQXJyTGVuZ3RoJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgbmV3UHJvakFyciA9IFtdXG4gICAgICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICAgICAgaWYobnVtUHJvamVjdHMgPiAwKSB7XG4gICAgICAgICAgICBmb3IoIGluZGV4OyBpbmRleCA8IG51bVByb2plY3RzOyBpbmRleCsrICl7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3ROYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHByb2plY3Qke2luZGV4fU5hbWVgKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdFByaW9yaXR5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHByb2plY3Qke2luZGV4fVByaW9yaXR5YCk7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3REdWVEYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHByb2plY3Qke2luZGV4fUR1ZURhdGVgKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdENyZWF0aW9uRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBwcm9qZWN0JHtpbmRleH1DcmVhdGlvbkRhdGVgKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdFRvZG9MaXN0TGVuZ3RoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHByb2plY3Qke2luZGV4fVRvZG9MaXN0TGVuZ3RoYCk7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RUb2RvTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0VG9kb0xpc3RMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJldHJpZXZlIHRvZG9MaXN0XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHRvZG9JbmRleCA9IDA7IHRvZG9JbmRleCA8IHByb2plY3RUb2RvTGlzdExlbmd0aDsgdG9kb0luZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2RvTmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBwcm9qZWN0JHtpbmRleH10b2RvJHt0b2RvSW5kZXh9TmFtZWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9EZXNjcmlwdGlvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBwcm9qZWN0JHtpbmRleH10b2RvJHt0b2RvSW5kZXh9RGVzY3JpcHRpb25gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2RvUHJpb3JpdHkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgcHJvamVjdCR7aW5kZXh9dG9kbyR7dG9kb0luZGV4fVByaW9yaXR5YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb05vdGVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHByb2plY3Qke2luZGV4fXRvZG8ke3RvZG9JbmRleH1Ob3Rlc2ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9EdWVEYXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHByb2plY3Qke2luZGV4fXRvZG8ke3RvZG9JbmRleH1EdWVEYXRlYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb0NyZWF0aW9uRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBwcm9qZWN0JHtpbmRleH10b2RvJHt0b2RvSW5kZXh9Q3JlYXRpb25EYXRlYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb0NvbXBsZXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYHByb2plY3Qke2luZGV4fXRvZG8ke3RvZG9JbmRleH1Db21wbGV0ZWApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb0NvbXBsZXRlID09PSBcImZhbHNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1RvZG8gPSB0b2RvT2JqKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUb2RvLmluaXQodG9kb05hbWUsIHRvZG9EZXNjcmlwdGlvbiwgbmV3IERhdGUodG9kb0R1ZURhdGUpLCBuZXcgRGF0ZSh0b2RvQ3JlYXRpb25EYXRlKSwgTnVtYmVyKHRvZG9Qcmlvcml0eSksIHRvZG9Ob3RlcywgW10sIHRvZG9Db21wbGV0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUb2RvTGlzdC5wdXNoKG5ld1RvZG8pO1xuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbmV3UHJvamVjdCA9IFtwcm9qZWN0TmFtZSwgcHJvamVjdENyZWF0aW9uRGF0ZSwgcHJvamVjdER1ZURhdGUsIHByb2plY3RQcmlvcml0eSwgcHJvamVjdFRvZG9MaXN0XVxuICAgICAgICAgICAgICAgIG5ld1Byb2pBcnIucHVzaChuZXdQcm9qZWN0KTtcblxuXG5cbiAgICAgICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcHJvamVjdCR7aW5kZXh9Q3JlYXRpb25EYXRlYCwgYCR7Z2V0UHJvamVjdENyZWF0aW9uRGF0ZSgpfWApO1xuICAgICAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBwcm9qZWN0JHtpbmRleH1Ub2RvTGlzdExlbmd0aGAsIGAke2dldFRvZG9MaXN0KCkubGVuZ3RofWApO1xuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXG5cblxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3UHJvakFycjtcbiAgICB9XG5cblxuXG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIGdldEluZm8sIGluaXQsXG4gICAgICAgIGdldFByb2plY3RBcnIsIHNldFByb2plY3RBcnIsIGFkZFByb2plY3QsIGRlbGV0ZVByb2plY3QsXG4gICAgICAgIGdldFByb2plY3RDb250YWluZXJEaXYsIHNldFByb2plY3RDb250YWluZXJEaXYsXG4gICAgICAgIGdldEFkZEJ1dHRvbiwgc2V0QWRkQnV0dG9uLCBcbiAgICAgICAgZ2V0QWRkQnV0dG9uTWVudSwgdG9nZ2xlQWRkQnV0dG9uTWVudSxcbiAgICAgICAgY3JlYXRlUHJvamVjdCxcbiAgICAgICAgd3JpdGVQcm9qQXJyTG9jYWxTdG9yYWdlLFxuICAgICAgICByZWFkUHJvamVjdEFyckxvY2FsU3RvcmFnZSxcblxuXG5cblxuXG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdENvbnRhaW5lck9iajsiLCJcbmltcG9ydCB7Zm9ybWF0LCB0b0RhdGUsIGlzRGF0ZX0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5jb25zdCB0b2RvT2JqID0gKCkgPT4ge1xuXG4gICAgbGV0IF90aXRsZTtcbiAgICBsZXQgX2Rlc2NyaXB0aW9uO1xuICAgIGxldCBfZHVlRGF0ZTtcbiAgICBsZXQgX2NyZWF0aW9uRGF0ZTtcbiAgICBsZXQgX3ByaW9yaXR5O1xuICAgIGxldCBfbm90ZXM7XG4gICAgbGV0IF9jaGVja2xpc3Q7XG4gICAgbGV0IF9jb21wbGV0ZTtcbiAgICBsZXQgX3RvZG9EaXY7XG4gICAgbGV0IF90b2RvRGVsZXRpb25EaXY7XG5cbiAgICBjb25zdCBnZXRJbmZvID0gKCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnX2NoZWNrbGlzdCBjb250ZW50czogJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGdldENoZWNrbGlzdCgpKTtcbiAgICAgICAgcmV0dXJuIGAgICAgICAgICAgICAgICAgX3RpdGxlOiAke190aXRsZX1cbiAgICAgICAgICAgICAgICBfZGVzY3JpcHRpb246ICR7X2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIF9kdWVEYXRlOiAke19kdWVEYXRlfVxuICAgICAgICAgICAgICAgIF9jcmVhdGlvbkRhdGU6ICR7X2NyZWF0aW9uRGF0ZX1cbiAgICAgICAgICAgICAgICBfcHJpb3JpdHk6ICR7X3ByaW9yaXR5fVxuICAgICAgICAgICAgICAgIF9ub3RlczogJHtfbm90ZXN9XG4gICAgICAgICAgICAgICAgX2NoZWNrbGlzdDogJHtfY2hlY2tsaXN0fVxuICAgICAgICAgICAgICAgIF9jb21wbGV0ZTogJHtfY29tcGxldGV9XG4gICAgICAgICAgICAgICAgX3RvZG9EaXY6ICR7X3RvZG9EaXZ9YFxuXG4gICAgfVxuXG4gICAgLy8gSW4gYSBwZXJmZWN0IHdvcmxkLCBpbml0IGFzc2lnbnMgdGhlc2UgcHJvcGVydGllcyB0aHJvdWdoIHRoZWlyIHJlbGV2YW50IHNldHRlcnMgZm9yIHR5cGUtY2hlY2tpbmdcbiAgICBjb25zdCBpbml0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgY3JlYXRpb25EYXRlLCBwcmlvcml0eSwgbm90ZXMsIGNoZWNrbGlzdCwgY29tcGxldGUsIHRvZG9EaXYpID0+IHtcbiAgICAgICAgX3RpdGxlID0gdGl0bGU7XG4gICAgICAgIF9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBfZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIF9jcmVhdGlvbkRhdGUgPSBjcmVhdGlvbkRhdGU7XG4gICAgICAgIF9wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICBfbm90ZXMgPSBub3RlcztcbiAgICAgICAgX2NoZWNrbGlzdCA9IGNoZWNrbGlzdDtcbiAgICAgICAgX2NvbXBsZXRlID0gY29tcGxldGU7XG4gICAgICAgIF90b2RvRGl2ID0gdG9kb0RpdjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF90aXRsZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IChfbmV3VGl0bGUpID0+IHtcbiAgICAgICAgaWYoIHR5cGVvZiBfbmV3VGl0bGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIF90aXRsZSA9IF9uZXdUaXRsZTsgXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2RvT2JqLl9zZXRUaXRsZSBFcnJvciEgdHJpZWQgdG8gcGFzcyBhIG5vbi1zdHJpbmcgaW50byB0aGUgX3RpdGxlIGZpZWxkIScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzYykgPT4ge1xuICAgICAgICBpZiggdHlwZW9mIG5ld0Rlc2MgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIF9kZXNjcmlwdGlvbiA9IG5ld0Rlc2M7IFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndG9kb09iai5zZXREZXNjcmlwdGlvbiBFcnJvciEgdHJpZWQgdG8gcGFzcyBhIG5vbi1zdHJpbmcgaW50byB0aGUgX2Rlc2NyaXB0aW9uIGZpZWxkIScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9kdWVEYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldER1ZURhdGUgPSAobmV3RHVlRGF0ZSkgPT4ge1xuICAgICAgICBpZiggaXNEYXRlKG5ld0R1ZURhdGUpKSB7XG4gICAgICAgICAgICBfZHVlRGF0ZSA9IG5ld0R1ZURhdGU7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvZG9PYmouc2V0RHVlRGF0ZSBFcnJvciEgdHJpZWQgdG8gcGFzcyBhIG5vbi1zdHJpbmcgaW50byB0aGUgX2R1ZURhdGUgZmllbGQhJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldENyZWF0aW9uRGF0ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9jcmVhdGlvbkRhdGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Q3JlYXRpb25EYXRlID0gKG5ld0NyZWF0aW9uRGF0ZSkgPT4ge1xuICAgICAgICBpZiggaXNEYXRlKG5ld0NyZWF0aW9uRGF0ZSkpIHtcbiAgICAgICAgICAgIF9jcmVhdGlvbkRhdGUgPSBuZXdDcmVhdGlvbkRhdGU7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvZG9PYmouc2V0Q3JlYXRpb25EYXRlIEVycm9yISB0cmllZCB0byBwYXNzIGEgbm9uLWRhdGUgaW50byB0aGUgX2NyZWF0aW9uRGF0ZSBmaWVsZCEnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IHtcbiAgICAgICAgaWYoIHR5cGVvZiBuZXdQcmlvcml0eSA9PT0gXCJudW1iZXJcIiApIHtcbiAgICAgICAgICAgIF9wcmlvcml0eSA9IG5ld1ByaW9yaXR5OyBcbiAgICAgICAgfSBlbHNlIFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvZG9PYmouc2V0UHJpb3J0eSBFcnJvciEgdHJpZWQgdG8gcGFzcyBhIG5vbi1udW1iZXIgaW50byB0aGUgX3ByaW9yaXR5IGZpZWxkIScpXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGdldE5vdGVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gX25vdGVzO1xuICAgIH1cblxuICAgIGNvbnN0IHNldE5vdGVzID0gKG5ld05vdGVzKSA9PiB7XG4gICAgICAgIGlmKCB0eXBlb2YgbmV3Tm90ZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIF9ub3RlcyA9IG5ld05vdGVzOyBcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvZG9PYmouc2V0Tm90ZXMgRXJyb3IhIHRyaWVkIHRvIHBhc3MgYSBub24tc3RyaW5nIGludG8gdGhlIF9ub3RlcyBmaWVsZCEnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldENoZWNrbGlzdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9jaGVja2xpc3Q7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Q2hlY2tsaXN0ID0gKG5ld0NoZWNrbGlzdCkgPT4ge1xuICAgICAgICBpZiggdHlwZW9mIG5ld0NoZWNrbGlzdCA9PT0gXCJvYmplY3RcIiApIHtcbiAgICAgICAgICAgIF9jaGVja2xpc3QgPSBuZXdDaGVja2xpc3Q7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2RvT2JqLnNldENoZWNrbGlzdCBFcnJvciEgdHJpZWQgdG8gcGFzcyBhIG5vbi1vYmplY3QgaW50byB0aGUgX2NoZWNrbGlzdCBmaWVsZCEnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFkZEl0ZW1Ub0NoZWNrbGlzdCA9IChuZXdJdGVtLCBjaGVjaykgPT4ge1xuICAgICAgICBpZiggdHlwZW9mIG5ld0l0ZW0gPT09IFwic3RyaW5nXCIpIHtcblxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9jaGVja2xpc3QsIG5ld0l0ZW0sIHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBjaGVja1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvZG9PYmouYWRkSXRlbVRvQ2hlY2tsaXN0IEVycm9yISB0cmllZCB0byBwYXNzIGEgbm9uLXN0cmluZyBhcyBhIG5ld0l0ZW0gZm9yIF9jaGVja2xpc3QhJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVJdGVtT2ZmQ2hlY2tsaXN0ID0gKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSBcInN0cmluZ1wiKSB7XG5cbiAgICAgICAgICAgIGlmKF9jaGVja2xpc3QuaGFzT3duUHJvcGVydHkoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgX2NoZWNrbGlzdFtpdGVtXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHRvZG9PYmouZGVsZXRlSXRlbU9mZkNoZWNrbGlzdCBFcnJvciEgX2NoZWNrbGlzdC4ke2l0ZW19IG5vdCBmb3VuZCBhcyBhIHByb3BlcnR5IGluIF9jaGVja2xpc3QhYClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2RvT2JqLmRlbGV0ZUl0ZW1PZmZDaGVja2xpc3QgRXJyb3IhIFRyaWVkIHRvIHBhc3MgYSBub24tc3RyaW5nIGludG8gcHJvcGVydHlzIGhhc093blByb3BlcnR5IScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlSXRlbUluQ2hlY2tsaXN0ID0gKHByb3BlcnR5KSA9PiB7XG4gICAgICAgIGlmKF9jaGVja2xpc3QuaGFzT3duUHJvcGVydHkocHJvcGVydHkpICkge1xuICAgICAgICAgICAgaWYoIF9jaGVja2xpc3RbcHJvcGVydHldICkge1xuICAgICAgICAgICAgICAgIF9jaGVja2xpc3RbcHJvcGVydHldID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9jaGVja2xpc3RbcHJvcGVydHldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2RvT2JqLnRvZ2dsZUl0ZW1JbkNoZWNrbGlzdCBFcnJvciEgX2NoZWNrbGlzdCBkb2VzIG5vdCBoYXZlIHByb3BlcnR5OiAnICsgcHJvcGVydHkpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfY29tcGxldGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Q29tcGxldGUgPSAobmV3Q29tcGxldGUpID0+IHtcbiAgICAgICAgaWYoIHR5cGVvZiBuZXdDb21wbGV0ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIF9jb21wbGV0ZSA9IG5ld0NvbXBsZXRlOyBcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvZG9PYmouX3NldENvbXBsZXRlIEVycm9yISB0cmllZCB0byBwYXNzIGEgbm9uLWJvb2VsYW4gaW50byB0aGUgX2NvbXBsZXRlIGZpZWxkIScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VG9kb0RpdiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF90b2RvRGl2O1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRvZG9EaXYgPSAobmV3RGl2KSA9PiB7XG4gICAgICAgIF90b2RvRGl2ID0gbmV3RGl2O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUb2RvRGVsZXRpb25EaXYgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfdG9kb0RlbGV0aW9uRGl2O1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRvZG9EZWxldGlvbkRpdiA9IChuZXdEaXYpID0+IHtcbiAgICAgICAgX3RvZG9EZWxldGlvbkRpdiA9IG5ld0RpdjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3Qgd3JpdGVUb2RvTG9jYWxTdG9yYWdlID0gKHByb2plY3RJbmRleCwgdG9kb0luZGV4KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBJIGFtIHdyaXRlVG9kb0xvY2FsIFN0b3JhZ2UsIHRha2luZyBwcm9qZWN0SW5kZXg6ICR7cHJvamVjdEluZGV4fSBhbmQgdG9kb0luZGV4OiAke3RvZG9JbmRleH0sIHRhcmdldGluZyB0b2RvOiAke2dldFRpdGxlKCl9YCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBXcml0aW5nIG15IHZhbHVlcyB0byBsb2NhbFN0b3JhZ2VgKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgTXkgdmFsdWVzIGFyZSBhcyBmb2xsb3dzOiBcbiAgICAgICAgLy8gbmFtZTogJHtnZXRUaXRsZSgpfVxuICAgICAgICAvLyBkZXNjcmlwdGlvbjogJHtnZXREZXNjcmlwdGlvbigpfVxuICAgICAgICAvLyBwcmlvcml0eTogJHtnZXRQcmlvcml0eSgpfVxuICAgICAgICAvLyBub3RlczogJHtnZXROb3RlcygpfVxuICAgICAgICAvLyBkdWVEYXRlOiAke2dldER1ZURhdGUoKX1cbiAgICAgICAgLy8gY3JlYXRpb25EYXRlOiAke2dldENyZWF0aW9uRGF0ZSgpfVxuICAgICAgICAvLyBjb21wbGV0ZWQ6ICR7Z2V0Q29tcGxldGUoKX1gKTtcblxuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBwcm9qZWN0JHtwcm9qZWN0SW5kZXh9dG9kbyR7dG9kb0luZGV4fU5hbWVgLCBgJHtnZXRUaXRsZSgpfWApO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcHJvamVjdCR7cHJvamVjdEluZGV4fXRvZG8ke3RvZG9JbmRleH1EZXNjcmlwdGlvbmAsIGAke2dldERlc2NyaXB0aW9uKCl9YCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBwcm9qZWN0JHtwcm9qZWN0SW5kZXh9dG9kbyR7dG9kb0luZGV4fVByaW9yaXR5YCwgYCR7Z2V0UHJpb3JpdHkoKX1gKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHByb2plY3Qke3Byb2plY3RJbmRleH10b2RvJHt0b2RvSW5kZXh9Tm90ZXNgLCBgJHtnZXROb3RlcygpfWApO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcHJvamVjdCR7cHJvamVjdEluZGV4fXRvZG8ke3RvZG9JbmRleH1EdWVEYXRlYCwgYCR7Z2V0RHVlRGF0ZSgpfWApO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcHJvamVjdCR7cHJvamVjdEluZGV4fXRvZG8ke3RvZG9JbmRleH1DcmVhdGlvbkRhdGVgLCBgJHtnZXRDcmVhdGlvbkRhdGUoKX1gKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHByb2plY3Qke3Byb2plY3RJbmRleH10b2RvJHt0b2RvSW5kZXh9Q29tcGxldGVgLCBgJHtnZXRDb21wbGV0ZSgpfWApO1xuXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0SW5mbyxcbiAgICAgICAgaW5pdCxcbiAgICAgICAgZ2V0VGl0bGUsIHNldFRpdGxlLFxuICAgICAgICBnZXREZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb24sXG4gICAgICAgIGdldER1ZURhdGUsIHNldER1ZURhdGUsXG4gICAgICAgIGdldENyZWF0aW9uRGF0ZSwgc2V0Q3JlYXRpb25EYXRlLFxuICAgICAgICBnZXRQcmlvcml0eSwgc2V0UHJpb3JpdHksXG4gICAgICAgIGdldE5vdGVzLCBzZXROb3RlcyxcbiAgICAgICAgZ2V0Q2hlY2tsaXN0LCBzZXRDaGVja2xpc3QsIGFkZEl0ZW1Ub0NoZWNrbGlzdCwgZGVsZXRlSXRlbU9mZkNoZWNrbGlzdCwgdG9nZ2xlSXRlbUluQ2hlY2tsaXN0LFxuICAgICAgICBnZXRDb21wbGV0ZSwgc2V0Q29tcGxldGUsXG4gICAgICAgIGdldFRvZG9EaXYsIHNldFRvZG9EaXYsXG4gICAgICAgIGdldFRvZG9EZWxldGlvbkRpdiwgc2V0VG9kb0RlbGV0aW9uRGl2LFxuICAgICAgICB3cml0ZVRvZG9Mb2NhbFN0b3JhZ2UsXG5cblxuICAgICAgICBcbiAgICB9XG5cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kb09iajsiLCJcblxuZnVuY3Rpb24gaGVhZGVyTmF2KCkge1xuXG4gICAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG5hdi5pbm5lckhUTUwgPSAnRCBSb2VtZXInO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnbmF2LXRpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJUby1Eb1wiO1xuICAgIG5hdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgXG4gICAgbGV0IGxpc3RPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0T3B0aW9ucy5jbGFzc0xpc3QuYWRkKCduYXZCdXR0b25Ub2dnbGUnLCAnb3B0aW9uc1RvZ2dsZScpO1xuICAgIGxpc3RPcHRpb25zLmlubmVySFRNTCA9ICdPcHRpb25zJztcblxuICAgIGxldCBsaXN0QWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3RBYm91dC5jbGFzc0xpc3QuYWRkKCduYXZCdXR0b25Ub2dnbGUnLCAnYWJvdXRUb2dnbGUnKTtcbiAgICBsaXN0QWJvdXQuaW5uZXJIVE1MID0gJ0Fib3V0JztcblxuICAgIGxldCBsaXN0UG9ydGZvbGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0UG9ydGZvbGlvLmNsYXNzTGlzdC5hZGQoJ25hdkJ1dHRvblRvZ2dsZScsICdwb3J0Zm9saW9Ub2dnbGUnKTtcblxuICAgIGxldCBwb3J0Zm9saW9MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHBvcnRmb2xpb0xpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2RvbWluaWNyb2VtZXJcIjtcbiAgICBwb3J0Zm9saW9MaW5rLmlubmVySFRNTCA9ICdQb3J0Zm9saW8nO1xuXG4gICAgbGlzdFBvcnRmb2xpby5hcHBlbmRDaGlsZChwb3J0Zm9saW9MaW5rKTtcblxuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdE9wdGlvbnMpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGlzdEFib3V0KTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RQb3J0Zm9saW8pO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKGxpc3QpO1xuXG5cbiAgICByZXR1cm4gbmF2O1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlck5hdjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbi8vIGltcG9ydCBUb2RvT2JqIGZyb20gJy4vdG9kb09iai5qcyc7XG4vLyBpbXBvcnQgdG9kb1Rlc3QgZnJvbSAnLi90ZXN0cy90b2RvVGVzdC5qcyc7XG4vLyBpbXBvcnQgcHJvamVjdE9ialRlc3QgZnJvbSAnLi90ZXN0cy9wcm9qZWN0T2JqVGVzdC5qcyc7XG5pbXBvcnQgaGVhZGVyTmF2IGZyb20gXCIuL3V0aWxzL2hlYWRlci1uYXYuanNcIjtcblxuaW1wb3J0IGxvZ2ljQ29udHJvbGxlck9iaiBmcm9tICcuL2xvZ2ljQ29udHJvbGxlci5qcyc7XG5cblxuLy8gZnVuY3Rpb24gY29tcG9uZW50KCkge1xuLy8gICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICBlbGVtZW50LmlubmVySFRNTCA9IGBTYW1wbGUgc3RyaW5nIGdvZXMgaGVyZSBjc3MgdGVzdGA7XG4vLyAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWxsbycpO1xuLy8gICAgIHJldHVybiBlbGVtZW50O1xuLy8gfVxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG5cblxuLy8gY29uc29sZS5sb2coJ3Rlc3QnKVxuY29uc3QgbmF2ID0gaGVhZGVyTmF2KCk7XG5kb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShuYXYsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykpO1xuXG5cbmxldCBsb2dpY0NvbnRyb2xsZXIgPSBuZXcgbG9naWNDb250cm9sbGVyT2JqKCk7XG5sb2dpY0NvbnRyb2xsZXIuZ2VuZXJhdGVQcm9qZWN0Q29udGFpbmVyT2JqKCk7XG5cblxuXG5cblxuLy8gICAgICAgICAgICAgICAgICAgICAgICBUZXN0aW5nIG9iamVjdCBmdW5jdGlvbmFsaXR5XG4vLyAgICAgICAgQmUgc3VyZSB0byB1bmNvbW1lbnQgb3V0IHRoZSBjb3JyZXNwb25kaW5nIGltcG9ydHMgZm9yIHRlc3QgcHVycG9zZXNcbi8vIGNvbnNvbGUubG9nKCcoYC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tZmluaXNoZWQgc3RhdGUgb2YgdG9kb1Rlc3QoKTogJyArIHRvZG9UZXN0KCkpO1xuLy8gY29uc29sZS5sb2coYC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZpbmlzaGVkIHN0YXRlIG9mIHByb2plY3RPYmpUZXN0KCk6IGAgKyBwcm9qZWN0T2JqVGVzdCgpKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==