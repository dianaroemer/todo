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
        let readableCreationDateInput = creationDateInput.toDateString();
        creationDate.innerHTML = readableCreationDateInput;
        dateContainer.appendChild(creationDate);
        
        const age = document.createElement('div')
        age.classList.add('project-age');
        // functionality calculating age of project
        dateContainer.appendChild(age);

        const dueDate = document.createElement('div');
        dueDate.classList.add('project-due-date');
        // functionality converting dueDate to readable format
        let readableDueDateInput = dueDateInput.toDateString();
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
        console.log(targetTodo.getPriority());
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
            console.log(`You cliked the Delete Completed button from project: `)
            console.log(targetProject.getProjectName());
            
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

    


    const getInfo = () => {
        return `I am logicController.getInfo()
        These are my values:
        _projectContainer: ${_projectContainer};
        _contentDiv: ${_contentDiv};
        `;
    }
    this.getInfo = getInfo;



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
        todoListInput = todoListInput.concat(sampleTodoList);
        // XXXUPDATEXXX Appending sampleTodoList to todoListInput, remove this later

        // Generate projectPane Div
        let projectPaneDivValues = _displayController.generateProjectPane(nameInput, priorityInput, dueDateInput, creationDateInput, todoListInput);
        _projectContainer.getProjectContainerDiv().appendChild(projectPaneDivValues[0]);

        // updatePriority color of projectPane
        _updatePriorityColor(projectPaneDivValues[2], priorityInput);

       
        // Generate projectObj
        let newProject = _projectContainer.createProject( nameInput, creationDateInput, dueDateInput, priorityInput,projectPaneDivValues[0], todoListInput );

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

        console.log(`The follow to-do elements are marked for deletion: `);
        console.log(markedForDeletion);
        markedForDeletion.forEach(element => {
            console.log(`Deleting the following todo: ${element.getTitle()}
            from targetProject: ${targetProject.getProjectName()}`)
            targetProject.removeTargetTodo(element);
            
            if( element.getComplete() ){
                todoListCompleted.removeChild(element.getTodoDiv());
            } else {
                todoList.removeChild(element.getTodoDiv());
            }
        })

        console.log(targetProject.getTodoList());

        // Remove the deleteTodoPane div Child element from the targetProject
        projectTodoElementContainer.removeChild(deleteTodoPane);
        // Toggle projectMenuOpen to false, so that the editMenu can be re-opened
        targetProject.toggleProjectMenuOpen();

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

        console.log(`The follow to-do elements are marked for deletion: `);
        console.log(markedForDeletion);
        markedForDeletion.forEach(element => {
            console.log(`Deleting the following todo: ${element.getTitle()}
            from targetProject: ${targetProject.getProjectName()}`)
            targetProject.removeTargetTodo(element);
            todoListCompleted.removeChild(element.getTodoDiv());
        })

        console.log(targetProject.getTodoList());







        // Remove the deleteTodoPane div Child element from the targetProject
        projectTodoElementContainer.removeChild(deleteTodoPane);
        // Toggle projectMenuOpen to false, so that the editMenu can be re-opened
        targetProject.toggleProjectMenuOpen();


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
    }
    this._toggleCompletedTodo = _toggleCompletedTodo;

    const _editTodoPane = (targetTodo, targetProject) => {

        console.log(`You clicked the edit button target todo: ${targetTodo.getTitle()}`);

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
        console.log('-----------------------------------')
        console.log(`I am _projectEditTodoSaveButton. Here are my todo initial values`);
        console.log(targetTodo.getInfo());
        console.log('-----------------------------------')
        
//         let savedValues = [editTodoTitleInput, editTodoDescriptionInput, editTodoPriorityInput, editTodoNotesInput, editTodoDueDateInput, editTodoCreationDateInput]


        // Save the new values to targetTodo
        console.log(`savedValues are as follows:
        titleInput: ${savedValues[0].value}
        descriptionInput: ${savedValues[1].value}
        priorityInput: ${savedValues[2].value}
        notesInput: ${savedValues[3].value}
        dueDateInput: ${savedValues[4].valueAsDate}
        creationDateInput: ${savedValues[4].valueAsDate}`);

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
            console.log(savedValues[0].value)
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

        
    }
    this._projectEditTodoSaveButton = _projectEditTodoSaveButton;


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

// projectName, todoList, creationDate, dueDate, projectPriority, projectDiv

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

    const readProject = () => {

    }

    const updateProject = () => {

    }

    const destroyProject = () => {

    }

    return {

        getInfo, init,
        getProjectArr, setProjectArr, addProject, deleteProject,
        getProjectContainerDiv, setProjectContainerDiv,
        getAddButton, setAddButton, 
        getAddButtonMenu, toggleAddButtonMenu,
        createProject,





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLGNBQWMsYUFBYSxXQUFXLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFFBQVEsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssS0FBSyxN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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsNkJBQTZCLG1EQUFVO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7OztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLFVBQVU7QUFDL0M7QUFDQSxtQ0FBbUMsUUFBUTtBQUMzQztBQUNBLHdDQUF3QyxhQUFhO0FBQ3JELGdEQUFnRCx1QkFBdUI7QUFDdkU7QUFDQSxnQ0FBZ0MsS0FBSztBQUNyQyx3Q0FBd0MsZUFBZTtBQUN2RDtBQUNBLDRDQUE0QyxhQUFhO0FBQ3pELG9EQUFvRCx1QkFBdUI7QUFDM0U7QUFDQSxpQ0FBaUMsTUFBTTtBQUN2Qyx5Q0FBeUMsZ0JBQWdCO0FBQ3pEO0FBQ0EsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxRQUFRO0FBQzNDLHdDQUF3QyxhQUFhO0FBQ3JELGlDQUFpQyxNQUFNO0FBQ3ZDLGdDQUFnQyxLQUFLO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDRCQUE0Qjs7QUFFdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7Ozs7QUFLVDtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSw4QkFBOEIsdUJBQXVCLGVBQWUseUJBQXlCO0FBQzdGO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsaUJBQWlCOzs7Ozs7Ozs7Ozs7OztBQ3hzQmhDOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsY0FBYztBQUMzRTtBQUNBLFNBQVM7QUFDVDtBQUNBLDhEQUE4RCxjQUFjO0FBQzVFO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNERBQTRELGNBQWM7QUFDMUU7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7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QUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7OztBQ3JCcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUM4Qzs7QUFFUTs7O0FBR3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLFlBQVksZ0VBQVM7QUFDckI7OztBQUdBLDBCQUEwQiwyREFBa0I7QUFDNUM7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBLHlIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2V2ZW50Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0Q29udGFpbmVyT2JqLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kb09iai5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3V0aWxzL2hlYWRlci1uYXYuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9tb250c2VycmF0L01vbnRzZXJyYXQtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvbW9udHNlcnJhdC9Nb250c2VycmF0LUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICAgIHBhZGRpbmc6IDRweCAyMHB4IDRweCAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCBncmF5O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5kZWxldGUtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODksIDI4LCAyOCwgMC43KTtcXG59XFxuXFxubGFiZWwge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuXFxuLm9uZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnR3byB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLnRocmVlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMTQwLCAxNDApO1xcbn1cXG5cXG4uZm91ciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi5maXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcblxcbiAvKiBOYXYgU3R5bGluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuIG5hdiB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VCQkNCQztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI1cHgpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDtcXG4gICAgYm94LXNoYWRvdzogMCAwcHggN3B4IGJsYWNrO1xcblxcbn1cXG5cXG4ubmF2LXRpdGxlIHtcXG4gICAgZmxleDogMTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxubmF2IHVsIHtcXG4gICAgZmxleDogMTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICAgIGZsZXgtc2hyaW5rOiAzO1xcbn1cXG5cXG5uYXYgdWwgbGkge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMTBweCAyMHB4O1xcbn1cXG5cXG4gLyogTmF2IEJ1dHRvbiBBbmltYXRpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5uYXZCdXR0b25Ub2dnbGUge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuXFxuLm5hdkJ1dHRvblRvZ2dsZTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAtNXB4O1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgYmFja2dyb3VuZDogIzU1NTM1ODtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcXG59XFxuXFxuLm5hdkJ1dHRvblRvZ2dsZTpob3ZlcjphZnRlciB7XFxuICAgIHdpZHRoOjcwJTtcXG59XFxuXFxuLnBvcnRmb2xpb1RvZ2dsZSBhe1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLyogQWRkIEJ1dHRvbiBTdHlsaW5nIGFuZCBhbmltYXRpb25zICovXFxuXFxuLmFkZC1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDYycHg7XFxuICAgIHdpZHRoOiA2MnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGJvdHRvbTogMzVweDtcXG4gICAgcmlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQkJDQkM7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA0cHg7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4uYWRkLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNzljOWM7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZSgxODBkZWcpO1xcblxcbn1cXG5cXG4uYWRkLWJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYWZhO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMDtcXG59XFxuXFxuXFxuLnByb2plY3QtY29udGFpbmVyLWFkZC1tZW51IHtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG4gICAgbGVmdDogY2FsYyg1MCUgLSAyMDBweCk7XFxuICAgIHRvcDogY2FsYyg1MCUgLSA3NXB4KTtcXG5cXG4gICAgaGVpZ2h0OiAxNTA7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMTQwLCAxNDApO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDkyLCA3MiwgNzIpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2IoOTIsIDcyLCA3Mik7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lci1hZGQtbWVudTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcbiBcXG4ucHJvamVjdC1jb250YWluZXItYWRkLW1lbnUtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi8qXFxuLm5ldy1wcm9qZWN0LW5hbWUtY29udGFpbmVyIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn0gKi9cXG5cXG4ubmV3LXByb2plY3QtZm9ybS1jb250YWluZXIge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI25ldy1wcm9qZWN0LXByaW9yaXR5LWlucHV0IHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjpncmVlbjsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOTIsIDcyLCA3Mik7XFxuICAgIC8qIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYig5MiwgNzIsIDcyKTt9ICovXFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcblxcbi8qIC0tLS0tLS0tLS0tLS0tIFByb2plY3QgQ29udGFpbmVyIFN0eWxpbmcgLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tIFByb2plY3QgUGFuZSBTdHlsaW5nIC0tLS0tLS0tLS0tLS0tICovXFxuLnByb2plY3QtcGFuZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDE0MCwgMTQwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOTIsIDcyLCA3Mik7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYig5MiwgNzIsIDcyKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLnByb2plY3QtbmFtZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDBweCAwcHg7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1heC13aWR0aDogMzUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4ucHJvamVjdC1lZGl0LWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdC1lZGl0LWJ1dHRvbjpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXFxufVxcblxcbi5wcm9qZWN0LXRvZG8tZWxlbWVudC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNDAsIDIwNiwgMjA2KTtcXG4gICAgZmxleC1ncm93OjE7XFxuICAgIG1hcmdpbjogNXB4IDVweCA0cHggNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyNiwgMTA1LCAxMDUpO1xcbiAgICBtYXgtaGVpZ2h0OiA4MSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC13aWR0aDogOTQlO1xcbn1cXG5cXG4ucHJvamVjdC10b2RvLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnByb2plY3QtdG9kby1idXR0b24ge1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOSk7XFxufVxcblxcbi5wcm9qZWN0LXRvZG8tbGlzdCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kby1saXN0IHtcXG4gICAgZmxleC1ncm93OiA2O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5OyAqL1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICBtYXgtaGVpZ2h0OiAyMjNweDtcXG59XFxuXFxuXFxuXFxuLnRvZG8tZWxlbWVudC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5cXG5cXG5cXG4udG9kby1kaXYtbmFtZSB7XFxuICAgIG1heC13aWR0aDogMzQwcHg7ICAgIFxcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4udG9kby1lZGl0LWJ1dHRvbiB7XFxuICAgIGhlaWdodDogMTdweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xcbn1cXG5cXG5cXG4udG9kby1saXN0LWNvbXBsZXRlZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA0NXB4O1xcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xcbn1cXG5cXG4udG9kby1jb21wbGV0ZWQge1xcbiAgICBvcGFjaXR5OiA0MCU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4ucHJvamVjdC1kYXRlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDVweDtcXG59XFxuXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0gUHJvamVjdCBFZGl0IFBhbmUgU3R5bGluZyAtLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5wcm9qZWN0LWVkaXQtcGFuZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAxNDAsIDE0MCk7XFxuICAgIGhlaWdodDogMzgwcHg7XFxuICAgIHdpZHRoOiAzNzVweDtcXG4gICAgbWFyZ2luOiA4cHggMHB4IDVweCAxMHB4O1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5MiwgNzIsIDcyKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiKDkyLCA3MiwgNzIpO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0LXRpdGxlLXRleHQge1xcbiAgICBmb250LXNpemU6IDIycHg7XFxufVxcblxcbi5lZGl0LXByb2plY3QtcHJpb3JpdHktaW5wdXQge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5MiwgNzIsIDcyKTtcXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tIFByb2plY3QgQWRkIFRvZG8gUGFuZSBTdHlsaW5nIC0tLS0tLS0tLS0tLS0tICovXFxuXFxuLnByb2plY3QtYWRkLXRvZG8tcGFuZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDM2M3B4O1xcbiAgICBoZWlnaHQ6IDMxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMTgsIDE0MCwgMTQwKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOTIsIDcyLCA3Mik7XFxuXFxufVxcblxcbi5wcm9qZWN0LWFkZC10b2RvLW5hbWUtbGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgd2lkdGg6IDk4JTtcXG59XFxuXFxuLnByb2plY3QtYWRkLXRvZG8tbmFtZS1pbnB1dCB7XFxuICAgIHdpZHRoOiA4NSU7XFxufVxcblxcbi5wcm9qZWN0LWFkZC10b2RvLWRlc2NyaXB0aW9uLWxhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDk4JTtcXG59XFxuXFxuLnByb2plY3QtYWRkLXRvZG8tZGVzY3JpcHRpb24taW5wdXQge1xcbiAgICB3aWR0aDogODUlO1xcbn1cXG5cXG5cXG5cXG4jcHJvamVjdC1hZGQtdG9kby1wcmlvcml0eS1sYWJlbCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDkyLCA3MiwgNzIpO1xcbiAgICB3aWR0aDogMjMwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtYWRkLXRvZG8tbm90ZXMtbGFiZWwge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBoZWlnaHQ6IDMwMCU7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICAvKiBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0OyAqL1xcbn1cXG5cXG4ucHJvamVjdC1hZGQtdG9kby1ub3Rlcy1pbnB1dCB7XFxuICAgIHdpZHRoOiA5OCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWFkZC10b2RvLWRhdGUtbGFiZWwge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXJcXG59XFxuXFxuLnByb2plY3QtYWRkLXRvZG8tYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ubWFya2VkLWZvci1kZWxldGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxODksIDI4LCAyOCwgMC43KTtcXG59XFxuXFxuXFxuLnByb2plY3QtZGVsZXRlLXRvZG8tcGFuZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDM3M3B4O1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMTgsIDE0MCwgMTQwKTtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOTIsIDcyLCA3Mik7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZS10b2RvLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmNGY0O1xcbiAgICBoZWlnaHQ6IDc1JTtcXG4gICAgbWF4LWhlaWdodDogNzUlO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICB3aWR0aDogOTclO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuXFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDkyLCA3MiwgNzIpO1xcblxcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUtdG9kby1kaXYge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLXRvZG8tY29tcGxldGVkLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLSBQcm9qZWN0IEVkaXQgVG9kbyBQYW5lIFN0eWxpbmcgLS0tLS0tLS0tLS0tLS0gKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCOzhEQUMyRjs7SUFFM0YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7OztDQUdDLDhFQUE4RTtDQUM5RTtJQUNHLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5Qjs7SUFFekIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7O0lBRWxCLDBCQUEwQjtJQUMxQiwy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LFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7Ozs7QUFJQTtJQUNJLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1DQUFtQzs7SUFFbkMsa0JBQWtCO0lBQ2xCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixZQUFZOzs7SUFHWixrQkFBa0I7SUFDbEIsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBLGlFQUFpRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL21vbnRzZXJyYXQvTW9udHNlcnJhdC1WYXJpYWJsZUZvbnRfd2dodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIHVybCgnLi9hc3NldHMvZm9udHMvbW9udHNlcnJhdC9Nb250c2VycmF0LUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIFxcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xcbiAgICBtYXJnaW46IDAgMCAwIDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgcGFkZGluZzogNHB4IDIwcHggNHB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IGdyYXk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4OSwgMjgsIDI4LCAwLjcpO1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5cXG4ub25lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4udHdvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4udGhyZWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAxNDAsIDE0MCk7XFxufVxcblxcbi5mb3VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuXFxuLmZpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuXFxuIC8qIE5hdiBTdHlsaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4gbmF2IHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgbWluLWhlaWdodDogMTAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJCQ0JDO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA2cHggNnB4O1xcbiAgICBib3gtc2hhZG93OiAwIDBweCA3cHggYmxhY2s7XFxuXFxufVxcblxcbi5uYXYtdGl0bGUge1xcbiAgICBmbGV4OiAxO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgICBmbGV4OiAxO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gICAgZmxleC1zaHJpbms6IDM7XFxufVxcblxcbm5hdiB1bCBsaSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XFxufVxcblxcbiAvKiBOYXYgQnV0dG9uIEFuaW1hdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLm5hdkJ1dHRvblRvZ2dsZSB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbn1cXG5cXG4ubmF2QnV0dG9uVG9nZ2xlOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC01cHg7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kOiAjNTU1MzU4O1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xcbn1cXG5cXG4ubmF2QnV0dG9uVG9nZ2xlOmhvdmVyOmFmdGVyIHtcXG4gICAgd2lkdGg6NzAlO1xcbn1cXG5cXG4ucG9ydGZvbGlvVG9nZ2xlIGF7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4vKiBBZGQgQnV0dG9uIFN0eWxpbmcgYW5kIGFuaW1hdGlvbnMgKi9cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGhlaWdodDogNjJweDtcXG4gICAgd2lkdGg6IDYycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgYm90dG9tOiAzNXB4O1xcbiAgICByaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VCQkNCQztcXG4gICAgYm94LXNoYWRvdzogMCAwIDRweDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbi5hZGQtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M3OWM5YztcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlKDE4MGRlZyk7XFxuXFxufVxcblxcbi5hZGQtYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZhZmE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwO1xcbn1cXG5cXG5cXG4ucHJvamVjdC1jb250YWluZXItYWRkLW1lbnUge1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDIwMHB4KTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDc1cHgpO1xcblxcbiAgICBoZWlnaHQ6IDE1MDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAxNDAsIDE0MCk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOTIsIDcyLCA3Mik7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYig5MiwgNzIsIDcyKTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyLWFkZC1tZW51OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuIFxcbi5wcm9qZWN0LWNvbnRhaW5lci1hZGQtbWVudS1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLypcXG4ubmV3LXByb2plY3QtbmFtZS1jb250YWluZXIge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufSAqL1xcblxcbi5uZXctcHJvamVjdC1mb3JtLWNvbnRhaW5lciB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtcHJpb3JpdHktaW5wdXQge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5MiwgNzIsIDcyKTtcXG4gICAgLyogYm94LXNoYWRvdzogMCAwIDEwcHggcmdiKDkyLCA3MiwgNzIpO30gKi9cXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0gUHJvamVjdCBDb250YWluZXIgU3R5bGluZyAtLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0gUHJvamVjdCBQYW5lIFN0eWxpbmcgLS0tLS0tLS0tLS0tLS0gKi9cXG4ucHJvamVjdC1wYW5lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMTQwLCAxNDApO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5MiwgNzIsIDcyKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiKDkyLCA3MiwgNzIpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4ucHJvamVjdC1uYW1lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMHB4IDBweDtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5wcm9qZWN0LWVkaXQtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMXM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0LWVkaXQtYnV0dG9uOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjFzO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cXG59XFxuXFxuLnByb2plY3QtdG9kby1lbGVtZW50LWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI0MCwgMjA2LCAyMDYpO1xcbiAgICBmbGV4LWdyb3c6MTtcXG4gICAgbWFyZ2luOiA1cHggNXB4IDRweCA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTI2LCAxMDUsIDEwNSk7XFxuICAgIG1heC1oZWlnaHQ6IDgxJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWF4LXdpZHRoOiA5NCU7XFxufVxcblxcbi5wcm9qZWN0LXRvZG8tYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4ucHJvamVjdC10b2RvLWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC45KTtcXG59XFxuXFxuLnByb2plY3QtdG9kby1saXN0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgICBmbGV4LWdyb3c6IDY7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZXk7ICovXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgIG1heC1oZWlnaHQ6IDIyM3B4O1xcbn1cXG5cXG5cXG5cXG4udG9kby1lbGVtZW50LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcblxcblxcblxcbi50b2RvLWRpdi1uYW1lIHtcXG4gICAgbWF4LXdpZHRoOiAzNDBweDsgICAgXFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi50b2RvLWVkaXQtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAxN3B4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XFxufVxcblxcblxcbi50b2RvLWxpc3QtY29tcGxldGVkIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDQ1cHg7XFxuICAgIHBhZGRpbmctdG9wOiAwcHg7XFxufVxcblxcbi50b2RvLWNvbXBsZXRlZCB7XFxuICAgIG9wYWNpdHk6IDQwJTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5wcm9qZWN0LWRhdGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMHB4IDVweCAwcHggNXB4O1xcbn1cXG5cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLSBQcm9qZWN0IEVkaXQgUGFuZSBTdHlsaW5nIC0tLS0tLS0tLS0tLS0tICovXFxuXFxuLnByb2plY3QtZWRpdC1wYW5lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTgsIDE0MCwgMTQwKTtcXG4gICAgaGVpZ2h0OiAzODBweDtcXG4gICAgd2lkdGg6IDM3NXB4O1xcbiAgICBtYXJnaW46IDhweCAwcHggNXB4IDEwcHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDkyLCA3MiwgNzIpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2IoOTIsIDcyLCA3Mik7XFxufVxcblxcbi5lZGl0LXByb2plY3QtdGl0bGUtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuLmVkaXQtcHJvamVjdC1wcmlvcml0eS1pbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDkyLCA3MiwgNzIpO1xcbiAgICB3aWR0aDogMjMwcHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0gUHJvamVjdCBBZGQgVG9kbyBQYW5lIFN0eWxpbmcgLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4ucHJvamVjdC1hZGQtdG9kby1wYW5lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMzYzcHg7XFxuICAgIGhlaWdodDogMzEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIxOCwgMTQwLCAxNDApO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5MiwgNzIsIDcyKTtcXG5cXG59XFxuXFxuLnByb2plY3QtYWRkLXRvZG8tbmFtZS1sYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICB3aWR0aDogOTglO1xcbn1cXG5cXG4ucHJvamVjdC1hZGQtdG9kby1uYW1lLWlucHV0IHtcXG4gICAgd2lkdGg6IDg1JTtcXG59XFxuXFxuLnByb2plY3QtYWRkLXRvZG8tZGVzY3JpcHRpb24tbGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogOTglO1xcbn1cXG5cXG4ucHJvamVjdC1hZGQtdG9kby1kZXNjcmlwdGlvbi1pbnB1dCB7XFxuICAgIHdpZHRoOiA4NSU7XFxufVxcblxcblxcblxcbiNwcm9qZWN0LWFkZC10b2RvLXByaW9yaXR5LWxhYmVsIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOTIsIDcyLCA3Mik7XFxuICAgIHdpZHRoOiAyMzBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1hZGQtdG9kby1ub3Rlcy1sYWJlbCB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGhlaWdodDogMzAwJTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIC8qIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7ICovXFxufVxcblxcbi5wcm9qZWN0LWFkZC10b2RvLW5vdGVzLWlucHV0IHtcXG4gICAgd2lkdGg6IDk4JTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtYWRkLXRvZG8tZGF0ZS1sYWJlbCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlclxcbn1cXG5cXG4ucHJvamVjdC1hZGQtdG9kby1idXR0b24tY29udGFpbmVyIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5tYXJrZWQtZm9yLWRlbGV0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE4OSwgMjgsIDI4LCAwLjcpO1xcbn1cXG5cXG5cXG4ucHJvamVjdC1kZWxldGUtdG9kby1wYW5lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMzczcHg7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIxOCwgMTQwLCAxNDApO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5MiwgNzIsIDcyKTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLXRvZG8tbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY0ZjQ7XFxuICAgIGhlaWdodDogNzUlO1xcbiAgICBtYXgtaGVpZ2h0OiA3NSU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHdpZHRoOiA5NyU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG5cXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTIsIDcyLCA3Mik7XFxuXFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZS10b2RvLWRpdiB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUtdG9kby1jb21wbGV0ZWQtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tIFByb2plY3QgRWRpdCBUb2RvIFBhbmUgU3R5bGluZyAtLS0tLS0tLS0tLS0tLSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuaW1wb3J0IGVkaXRCdXR0b24gZnJvbSAnLi9hc3NldHMvZWRpdEJ1dHRvbi5wbmcnO1xuaW1wb3J0IHRvZG9PYmogZnJvbSAnLi90b2RvT2JqJztcblxuLy8gVGhpcyBpcyB0aGUgZGlzcGxheSBjb250cm9sbGVyLiBUaGVyZSBpcyBvbmx5IG9uZSBkaXNwbGF5Q29udHJvbGxlciwgYW5kIGl0IG1hbmFnZXMgdGhlIENSVUQgb2YgYWxsIGh0bWwgZWxlbWVudHMuIFRoaXMgY29udHJvbGxlciBzaG91bGQgb25seSByZWNlaXZlIGluZm9ybWF0aW9uIGZyb20gbG9naWNDb250cm9sbGVyICh3aGljaCBzZW5kcyBjb21tYW5kcyB0byBDUlVEIGJvdGggZGlzcGxheUNvbnRyb2xsZXIncyBodG1sIGVsZW1lbnRzIGFuZCB0aGUgcHJvamVjdE9iai90b2RvT2JqIGluZm9ybWF0aW9uKS4gZGlzcGxheUNvbnRyb2xsZXIgbmVlZHMgdG8gZ2VuZXJhdGUgYSBuZXcgZWxlbWVudCwgdGhlbiByZXR1cm4gdGhhdCBlbGVtZW50IGJhY2sgdXAgdG8gbG9naWNDb250cm9sbGVyLCB3aGljaCBzaG91bGQgcGFzcyB0aGF0IGVsZW1lbnQgYWxvbmcgdG8gZXZlbnRDb250cm9sbGVyIGZvciBhc3NpZ25pbmcgbmV3IEV2ZW50SGFuZGxlcidzIHRvIGRpdidzIHRoYXQgbmVlZCB0aGVtXG5cbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCkgPT4ge1xuXG4gICAgLy8gSSBnZW5lcmF0ZSBkaXZzXG5cbiAgICBjb25zdCBnZXRJbmZvID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYEkgYW0gZGlzcGxheUNvbnRyb2xsZXIuIE15IGZ1bmN0aW9ucyBhcmUgYXMgZm9sbG93czogXG5cbiAgICAgICAgYDsgXG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVQcm9qZWN0Q29udGFpbmVyRGl2ID0gKCkgPT4ge1xuXG4gICAgICAgIGxldCBmaW5pc2hlZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmaW5pc2hlZERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkQnV0dG9uLmlubmVySFRNTCA9IFwiICsgXCI7XG4gICAgICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtYnV0dG9uJylcbiAgICAgICAgZmluaXNoZWREaXYuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcblxuICAgICAgICByZXR1cm4gW2ZpbmlzaGVkRGl2LCBhZGRCdXR0b25dO1xuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlUHJvamVjdENvbnRhaW5lckFkZEJ1dHRvbk1lbnUgPSAoKSA9PiB7XG5cbiAgICAgICAgbGV0IGZpbmlzaGVkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZpbmlzaGVkRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyLWFkZC1tZW51Jyk7XG5cbiAgICAgICAgbGV0IGFkZEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhZGRCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXItYWRkLW1lbnUtY29udGFpbmVyJyk7XG4gICAgICAgIGFkZEJ1dHRvbkNvbnRhaW5lci5pbm5lckhUTUwgPSBgQWRkIE5ldyBQcm9qZWN0YDtcbiAgICAgICAgZmluaXNoZWREaXYuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uQ29udGFpbmVyKTtcblxuICAgICAgICAvLyBuYW1lLCBkdWUgZGF0ZSwgcHJpb3JpdHlcblxuXG4gICAgICAgIGxldCBuZXdQcm9qZWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgbmV3UHJvamVjdEZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtZm9ybS1jb250YWluZXInKTtcblxuICAgICAgICBsZXQgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbmFtZUxhYmVsLmlubmVySFRNTCA9IGBOYW1lOiBgO1xuICAgICAgICBuZXdQcm9qZWN0Rm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgICAgICBsZXQgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgbmFtZUlucHV0LnZhbHVlID0gJ05ldyBQcm9qZWN0IE5hbWUnO1xuICAgICAgICBuYW1lTGFiZWwuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICAgICAgICBsZXQgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHByaW9yaXR5TGFiZWwuaW5uZXJIVE1MID0gYFByaW9yaXR5OiBgO1xuICAgICAgICBwcmlvcml0eUxhYmVsLmlkID0gXCJuZXctcHJvamVjdC1wcmlvcml0eS1pbnB1dFwiO1xuICAgICAgICBuZXdQcm9qZWN0Rm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICAgICAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBwcmlvcml0eUlucHV0LnR5cGUgPSAncmFuZ2UnO1xuICAgICAgICBwcmlvcml0eUlucHV0Lm1heCA9IDU7XG4gICAgICAgIHByaW9yaXR5SW5wdXQubWluID0gMTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IDM7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgICAgICAgbGV0IHByaW9yaXR5T3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0Jyk7XG4gICAgICAgIHByaW9yaXR5T3V0cHV0LnZhbHVlID0gcHJpb3JpdHlJbnB1dC52YWx1ZTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5vbmlucHV0ID0gKCkgPT4ge3ByaW9yaXR5T3V0cHV0LnZhbHVlID0gcHJpb3JpdHlJbnB1dC52YWx1ZX07XG4gICAgICAgIHByaW9yaXR5TGFiZWwuYXBwZW5kQ2hpbGQocHJpb3JpdHlPdXRwdXQpO1xuXG4gICAgICAgIGxldCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkdWVEYXRlTGFiZWwuaW5uZXJIVE1MID0gYER1ZSBEYXRlOiBgO1xuICAgICAgICBuZXdQcm9qZWN0Rm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuICAgICAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIGR1ZURhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIGR1ZURhdGVMYWJlbC5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuXG4gICAgICAgIGxldCBjcmVhdGlvbkRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGNyZWF0aW9uRGF0ZUxhYmVsLmlubmVySFRNTCA9IGBDcmVhdGVkIE9uOiBgO1xuICAgICAgICBuZXdQcm9qZWN0Rm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGlvbkRhdGVMYWJlbCk7XG4gICAgICAgIGxldCBjcmVhdGlvbkRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICAgIGNyZWF0aW9uRGF0ZUxhYmVsLmlubmVySFRNTCArPSBgJHtjcmVhdGlvbkRhdGUudG9EYXRlU3RyaW5nKCl9YDtcblxuXG4gICAgICAgIGxldCBhZGRQcm9qZWN0QnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtYnV0dG9uLWNvbnRhaW5lcicpXG4gICAgICAgIGxldCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHNhdmVCdXR0b24uaW5uZXJIVE1MID0gYFNhdmVgO1xuICAgICAgICAvLyBjaGFuZ2luZyB0aGUgYnV0dG9uJ3MgdHlwZSBvdmVycmlkZXMgdGhlIGRlZmF1bHQgU2F2ZSBCdXR0b24gZnVuY3Rpb25hbGl0eSBvZiB0aGUgZm9ybSBlbGVtZW50IHRvIE5PVCBSRURJUkVDVCB3aXRoIHRoZSBmb3JtIGVsZW1lbnQsIGFrYSByZWxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgc2F2ZUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGxldCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLmlubmVySFRNTCA9IGBDYW5jZWxgO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgICAgICAgbmV3UHJvamVjdEZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gY3JlYXRpb25EYXRlTGFiZWwuYXBwZW5kQ2hpbGQoY3JlYXRpb25EYXRlSW5wdXQpO1xuICAgICAgICAvLyA8aW5wdXQgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIjIwMTctMDYtMDFcIj5cblxuICAgICAgICBhZGRCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm1Db250YWluZXIpO1xuXG5cbiAgICAgICAgcmV0dXJuIFtmaW5pc2hlZERpdiwgbmFtZUlucHV0LCBwcmlvcml0eUlucHV0LCBwcmlvcml0eUxhYmVsLCBkdWVEYXRlSW5wdXQsIGNyZWF0aW9uRGF0ZSwgc2F2ZUJ1dHRvbiwgY2FuY2VsQnV0dG9uXTtcbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZVByb2plY3RQYW5lID0gKG5hbWVJbnB1dCwgcHJpb3JpdHlJbnB1dCwgZHVlRGF0ZUlucHV0LCBjcmVhdGlvbkRhdGVJbnB1dCwgdG9kb0xpc3RJbnB1dCkgPT4ge1xuXG4gICAgICAgIGxldCBmaW5pc2hlZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmaW5pc2hlZERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXBhbmUnKTtcblxuICAgICAgICAvLyBmaW5pc2hlZERpdi5pbm5lckhUTUwgPSBgIEkgYW0gYSBuZXcgUHJvamVjdFBhbmUsIGhlcmUgYXJlIHRoZSB2YWx1ZXMgcGFzc2VkIHRvIG1lOlxuICAgICAgICAvLyBuYW1lSW5wdXQ6ICR7bmFtZUlucHV0fVxuICAgICAgICAvLyBwcmlvcml0eUlucHV0OiAke3ByaW9yaXR5SW5wdXR9XG4gICAgICAgIC8vIGR1ZURhdGVJbnB1dDogJHtkdWVEYXRlSW5wdXR9XG4gICAgICAgIC8vIGNyZWF0aW9uRGF0ZUlucHV0OiAke2NyZWF0aW9uRGF0ZUlucHV0fVxuICAgICAgICAvLyB0b2RvTGlzdElucHV0OiAke3RvZG9MaXN0SW5wdXR9YDtcblxuICAgICAgICBsZXQgbmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZS1jb250YWluZXInKTtcblxuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gICAgICAgIHByb2plY3ROYW1lLmlubmVySFRNTCA9IGAke25hbWVJbnB1dH1gO1xuICAgICAgICBuYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblxuICAgICAgICBsZXQgcHJvamVjdEVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgcHJvamVjdEVkaXRCdXR0b24uc3JjID0gZWRpdEJ1dHRvbjtcbiAgICAgICAgcHJvamVjdEVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1lZGl0LWJ1dHRvbicpO1xuICAgICAgICBuYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RFZGl0QnV0dG9uKTtcblxuICAgICAgICBmaW5pc2hlZERpdi5hcHBlbmRDaGlsZChuYW1lQ29udGFpbmVyKTtcblxuICAgICAgICAvLyB0b2RvTGlzdCBjb250YWluZXIgYW5kIEVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHRvZG9MaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9MaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdG9kby1lbGVtZW50LWNvbnRhaW5lcicpO1xuICAgICAgICBmaW5pc2hlZERpdi5hcHBlbmRDaGlsZCh0b2RvTGlzdENvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgdG9kb0xpc3RCdXR0b25Db250aWFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9MaXN0QnV0dG9uQ29udGlhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvZG8tYnV0dG9uLWNvbnRhaW5lcicpO1xuICAgICAgICB0b2RvTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvTGlzdEJ1dHRvbkNvbnRpYWluZXIpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUb2RvQWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHByb2plY3RUb2RvQWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdG9kby1idXR0b24nKTtcbiAgICAgICAgcHJvamVjdFRvZG9BZGRCdXR0b24uaW5uZXJIVE1MID0gYEFkZCBUby1Eb2A7XG4gICAgICAgIHRvZG9MaXN0QnV0dG9uQ29udGlhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0VG9kb0FkZEJ1dHRvbik7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRvZG9EZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJvamVjdFRvZG9EZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC10b2RvLWJ1dHRvbicpO1xuICAgICAgICBwcm9qZWN0VG9kb0RlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBgRGVsZXRlIFRvLURvYDtcbiAgICAgICAgdG9kb0xpc3RCdXR0b25Db250aWFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RUb2RvRGVsZXRlQnV0dG9uKTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSB0b2RvTGlzdERpdnMgZnJvbSB0b2RvTGlzdElucHV0IGFuZCBwb3B1bGF0ZSBhcHByb3ByaWF0ZWx5XG4gICAgICAgIGxldCBwcm9qZWN0VG9kb0xpc3QgPSBnZW5lcmF0ZVRvZG9MaXN0Q29udGFpbmVyKHRvZG9MaXN0SW5wdXQpO1xuICAgICAgICB0b2RvTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0VG9kb0xpc3RbMF0pO1xuICAgICAgICBjb25zdCB0b2RvTGlzdFVuY29tcGxldGVkID0gcHJvamVjdFRvZG9MaXN0WzFdO1xuICAgICAgICBjb25zdCB0b2RvTGlzdENvbXBsZXRlZCA9IHByb2plY3RUb2RvTGlzdFsyXTtcblxuICAgICAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kYXRlLWNvbnRhaW5lcicpO1xuICAgICAgICBmaW5pc2hlZERpdi5hcHBlbmRDaGlsZChkYXRlQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBjcmVhdGlvbkRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjcmVhdGlvbkRhdGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jcmVhdGlvbi1kYXRlJyk7XG4gICAgICAgIC8vIGZ1bmN0aW9uYWxpdHkgY29udmVydGluZyBjcmVhdGlvbkRhdGUgdG8gcmVhZGFibGUgZm9ybWF0XG4gICAgICAgIGxldCByZWFkYWJsZUNyZWF0aW9uRGF0ZUlucHV0ID0gY3JlYXRpb25EYXRlSW5wdXQudG9EYXRlU3RyaW5nKCk7XG4gICAgICAgIGNyZWF0aW9uRGF0ZS5pbm5lckhUTUwgPSByZWFkYWJsZUNyZWF0aW9uRGF0ZUlucHV0O1xuICAgICAgICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0aW9uRGF0ZSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBhZ2UuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZ2UnKTtcbiAgICAgICAgLy8gZnVuY3Rpb25hbGl0eSBjYWxjdWxhdGluZyBhZ2Ugb2YgcHJvamVjdFxuICAgICAgICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGFnZSk7XG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZHVlLWRhdGUnKTtcbiAgICAgICAgLy8gZnVuY3Rpb25hbGl0eSBjb252ZXJ0aW5nIGR1ZURhdGUgdG8gcmVhZGFibGUgZm9ybWF0XG4gICAgICAgIGxldCByZWFkYWJsZUR1ZURhdGVJbnB1dCA9IGR1ZURhdGVJbnB1dC50b0RhdGVTdHJpbmcoKTtcbiAgICAgICAgZHVlRGF0ZS5pbm5lckhUTUwgPSByZWFkYWJsZUR1ZURhdGVJbnB1dDtcbiAgICAgICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuXG4gICAgICAgIHJldHVybiBbZmluaXNoZWREaXYsIHByb2plY3RFZGl0QnV0dG9uLCBuYW1lQ29udGFpbmVyLCBwcm9qZWN0VG9kb0FkZEJ1dHRvbiwgcHJvamVjdFRvZG9EZWxldGVCdXR0b24sIHRvZG9MaXN0VW5jb21wbGV0ZWQsIHRvZG9MaXN0Q29tcGxldGVkXTtcblxuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlVG9kb0RpdiA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgndG9kby1lbGVtZW50LWNvbnRhaW5lcicpO1xuXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codG9kby5nZXRUaXRsZSgpKTtcblxuXG4gICAgICAgIGlmKHRvZG8uZ2V0Q29tcGxldGUoKSkge1xuICAgICAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbXBsZXRlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWluY29tcGxldGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRvZG8uY29tcGxldGVkID09IHRydWUsIHNldCBjbGFzc2xpc3Qgb2YgbmV3IGRpdiBlbGVtZW50XG4gICAgICAgIC8vIHNldCB0b2RvRGl2IG5hbWUgbGVuZ3RoIHRvIGNhcCBhdCBtYXhpbXVtIGxlbmd0aCBvZiB2aWV3cG9ydCBhcmVhXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgndG9kby1kaXYtY2hlY2tib3gnKTtcbiAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRvZG8uZ2V0Q29tcGxldGUoKSk7XG4gICAgICAgIGlmKHRvZG8uZ2V0Q29tcGxldGUoKSkge1xuICAgICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdjaGVja2VkJywgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICAgICAgY29uc3QgdG9kb0Rpdk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0b2RvRGl2TmFtZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWRpdi1uYW1lJyk7XG5cbiAgICAgICAgLy8gQ2hlY2tpbmcgdGl0bGUgbGVuZ3RoIGFuZCB0cmltbWluZyBkb3duLiBIYWQgc2lnbmlmaWNhbnQgZGlmZmljdWx0eSBnZXR0aW5nIG92ZXJmbG93LXg6IGhpZGRlbiB0byB3b3JrIGluIENTUywgc28gZGVjaWRlZCB0byBqdXN0IG1hbnVhbGx5IHRyaW0gdGl0bGUgZG93biBhbmQgYWRkIFwiLi4uXCIgdG8gZW5kIHRvIGluZGljYXRlIGEgbG9uZ2VyIHRpdGxlXG4gICAgICAgIGxldCB0aXRsZSA9IHRvZG8uZ2V0VGl0bGUoKTtcbiAgICAgICAgbGV0IG5ld1RpdGxlID0gXCJcIjtcbiAgICAgICAgaWYodGl0bGUubGVuZ3RoID4gMzQpe1xuICAgICAgICAgICAgbmV3VGl0bGUgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbmV3VGl0bGUgKz0gdGl0bGUuY2hhckF0KGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3VGl0bGUgKz0gXCIuLi5cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1RpdGxlID0gdGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgdG9kb0Rpdk5hbWUuaW5uZXJIVE1MID0gbmV3VGl0bGU7XG4gICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb0Rpdk5hbWUpO1xuXG5cbiAgICAgICAgbGV0IHRvZG9FZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHRvZG9FZGl0QnV0dG9uLnNyYyA9IGVkaXRCdXR0b247XG4gICAgICAgIHRvZG9FZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZWRpdC1idXR0b24nLCAndG9kby1lZGl0LWJ1dHRvbicpXG4gICAgICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb0VkaXRCdXR0b24pO1xuXG4gICAgICAgIC8vIEF0dGFjaCBhIHJlZmVyZW5jZSB0byBpdHMgY29tcGxldGVkIGRpdiB3aXRoaW4gZWFjaCB0b2RvT2JqIHRoYXQgZ2V0J3MgcGFyc2VkIGluIHRoaXMgbWV0aG9kICh3aGljaCBzaG91bGQgYmUgYWxsIG9mIHRoZW0pXG4gICAgICAgIHRvZG8uc2V0VG9kb0Rpdih0b2RvRGl2KTtcblxuXG4gICAgICAgIHJldHVybiB0b2RvRGl2O1xuICAgIH1cblxuICAgIC8vIFRha2VzIGEgdG9kb0xpc3RbXSBvZiB0b2RvT2JqJ3MgYW5kIGNyZWF0ZXMgYSBzdWl0YWJsZSwgZmluaXNoZWQsIHByb2plY3QtdG9kby1saXN0XG4gICAgY29uc3QgZ2VuZXJhdGVUb2RvTGlzdENvbnRhaW5lciA9ICh0b2RvTGlzdEFycmF5KSA9PiB7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRvZG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RUb2RvTGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvZG8tbGlzdCcpO1xuXG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9MaXN0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdCcpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdG9kb0xpc3RDb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0xpc3RDb21wbGV0ZWQuY2xhc3NMaXN0LmFkZCgndG9kby1saXN0JywgJ3RvZG8tbGlzdC1jb21wbGV0ZWQnKTtcblxuICAgICAgICBwcm9qZWN0VG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb0xpc3QpO1xuICAgICAgICBwcm9qZWN0VG9kb0xpc3QuaW5uZXJIVE1MICs9ICctLS0gQ29tcGxldGVkIC0tLSc7XG4gICAgICAgIHByb2plY3RUb2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvTGlzdENvbXBsZXRlZCk7XG5cbiAgICAgICAgLy8gUmVpbnN0YW50aWF0aW5nIHRoZSByZWZlcmVuY2UgdG8gdG9kb0xpc3QgdmlhIHF1ZXJ5U2VsZWN0b3IgLSB1c2luZyBpbm5lckhUTUwgZmx1c2hlcyB0aGUgcmVmZXJlbmNlcyBcbiAgICAgICAgY29uc3QgdG9kb0xpc3RSZWZlcmVuY2UgPSBwcm9qZWN0VG9kb0xpc3QucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCcpO1xuXG4gICAgICAgIC8vIExvZ2ljIGZvciBjcmVhdGluZyBhbmQgcGFyc2luZyB0b2RvTGlzdEFycmF5IGVsZW1lbnRzLCB1c2luZyBcbiAgICAgICAgaWYodG9kb0xpc3RBcnJheSkge1xuXG4gICAgICAgICAgICB0b2RvTGlzdEFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgdGVtcERpdiA9IGdlbmVyYXRlVG9kb0RpdihlbGVtZW50KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuZ2V0Q29tcGxldGUoKSl7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiRWxlbWVudCdzIGdldENvbXBsZXRlKCkgcmV0dXJuZWQgVHJ1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0xpc3RDb21wbGV0ZWQuYXBwZW5kQ2hpbGQodGVtcERpdik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJFbGVtZW50J3MgZ2V0Q29tcGxldGUgcmV0dXJuZWQgRmFsc2VcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codG9kb0xpc3RSZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvTGlzdFJlZmVyZW5jZS5hcHBlbmRDaGlsZCh0ZW1wRGl2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIFtwcm9qZWN0VG9kb0xpc3QsIHRvZG9MaXN0UmVmZXJlbmNlLCB0b2RvTGlzdENvbXBsZXRlZF07XG5cbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZVByb2plY3RFZGl0UGFuZSA9ICh0YXJnZXRQcm9qZWN0KSA9PiB7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coYFlvdSBjbGlja2VkIHRoZSBlZGl0UHJvamVjdCBidXR0b24gdGFyZ2V0aW5nIHRoZSBwcm9qZWN0OiBgKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0UHJvamVjdC5nZXRJbmZvKCkpO1xuXG4gICAgICAgIGNvbnN0IGVkaXRQYW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVkaXRQYW5lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZWRpdC1wYW5lJyk7XG5cbiAgICAgICAgLy8gZWRpdFBhbmUuaW5uZXJIVE1MID0gdGFyZ2V0UHJvamVjdC5nZXRJbmZvKCk7XG5cbiAgICAgICAgY29uc3QgZWRpdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBlZGl0VGl0bGUuY2xhc3NMaXN0LmFkZCgnZWRpdC1wcm9qZWN0LXRpdGxlLXRleHQnKTtcbiAgICAgICAgZWRpdFRpdGxlLmlubmVySFRNTCA9IGBFZGl0IFByb2plY3RgO1xuICAgICAgICBlZGl0UGFuZS5hcHBlbmRDaGlsZChlZGl0VGl0bGUpO1xuXG4gICAgICAgIC8vIEhlYWRlciBUZXh0XG4gICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlZGl0UHJvamVjdE5hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZWRpdC1wcm9qZWN0LW5hbWUtY29udGFpbmVyJyk7XG4gICAgICAgIGVkaXRQYW5lLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0TmFtZUNvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gTmFtZSBJbnB1dFxuICAgICAgICBsZXQgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgbmFtZUxhYmVsLmlubmVySFRNTCA9IGBOYW1lOiBgO1xuICAgICAgICBlZGl0UHJvamVjdE5hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICAgICAgbGV0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIG5hbWVJbnB1dC52YWx1ZSA9IHRhcmdldFByb2plY3QuZ2V0UHJvamVjdE5hbWUoKTtcbiAgICAgICAgbmFtZUxhYmVsLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgICAgICAgLy8gUHJpb3JpdHkgU2xpZGVyXG4gICAgICAgIGxldCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5pbm5lckhUTUwgPSBgUHJpb3JpdHk6IGA7XG4gICAgICAgIHByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCAoXCJlZGl0LXByb2plY3QtcHJpb3JpdHktaW5wdXRcIik7XG4gICAgICAgIGVkaXRQYW5lLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgICAgICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHByaW9yaXR5SW5wdXQudHlwZSA9ICdyYW5nZSc7XG4gICAgICAgIHByaW9yaXR5SW5wdXQubWF4ID0gNTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5taW4gPSAxO1xuICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gdGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0UHJpb3JpdHkoKTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgICAgICAgbGV0IHByaW9yaXR5T3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0Jyk7XG4gICAgICAgIHByaW9yaXR5T3V0cHV0LnZhbHVlID0gcHJpb3JpdHlJbnB1dC52YWx1ZTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5vbmlucHV0ID0gKCkgPT4ge3ByaW9yaXR5T3V0cHV0LnZhbHVlID0gcHJpb3JpdHlJbnB1dC52YWx1ZX07XG4gICAgICAgIHByaW9yaXR5TGFiZWwuYXBwZW5kQ2hpbGQocHJpb3JpdHlPdXRwdXQpO1xuXG4gICAgICAgIC8vIER1ZSBEYXRlXG4gICAgICAgIGxldCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkdWVEYXRlTGFiZWwuaW5uZXJIVE1MID0gYER1ZSBEYXRlOiBgO1xuICAgICAgICBlZGl0UGFuZS5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuICAgICAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIGR1ZURhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIC8vIGR1ZURhdGVJbnB1dC52YWx1ZSA9IFwiMjAyMS0wMi0wMlwiO1xuICAgICAgICBsZXQgdGVtcER1ZURhdGUgPSB0YXJnZXRQcm9qZWN0LmdldFByb2plY3REdWVEYXRlKClcbiAgICAgICAgLy8gdGVtcER1ZURhdGUuc2V0RGF0ZSh0ZW1wRHVlRGF0ZS5nZXREYXRlKCkgLSAxKTtcbiAgICAgICAgdGVtcER1ZURhdGUgPSB0ZW1wRHVlRGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZUFzTnVtYmVyID0gdGVtcER1ZURhdGU7XG4gICAgICAgIGR1ZURhdGVMYWJlbC5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuXG4gICAgICAgIC8vIENyZWF0aW9uIERhdGVcbiAgICAgICAgbGV0IGNyZWF0aW9uRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY3JlYXRpb25EYXRlTGFiZWwuaW5uZXJIVE1MID0gYENyZWF0ZWQgT246IGA7XG4gICAgICAgIGVkaXRQYW5lLmFwcGVuZENoaWxkKGNyZWF0aW9uRGF0ZUxhYmVsKTtcbiAgICAgICAgbGV0IGNyZWF0aW9uRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBjcmVhdGlvbkRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgICAgICBjcmVhdGlvbkRhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIGxldCB0ZW1wQ3JlYXRpb25EYXRlID0gdGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0Q3JlYXRpb25EYXRlKCk7XG4gICAgICAgIGNyZWF0aW9uRGF0ZUlucHV0LnZhbHVlQXNEYXRlID0gdGVtcENyZWF0aW9uRGF0ZTtcbiAgICAgICAgY3JlYXRpb25EYXRlTGFiZWwuYXBwZW5kQ2hpbGQoY3JlYXRpb25EYXRlSW5wdXQpO1xuXG4gICAgICAgIFxuICAgICAgICAvLyBBZ2VcbiAgICAgICAgbGV0IGFnZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgYWdlTGFiZWwuaW5uZXJIVE1MID0gYEFnZTogYDtcbiAgICAgICAgZWRpdFBhbmUuYXBwZW5kQ2hpbGQoYWdlTGFiZWwpXG5cbiAgICAgICAgY29uc3QgYWdlTWlsbGlzID0gKERhdGUubm93KCkgLSB0YXJnZXRQcm9qZWN0LmdldFByb2plY3RDcmVhdGlvbkRhdGUoKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBhZ2VNaWxsaXM6ICR7YWdlTWlsbGlzfWApO1xuICAgICAgICBjb25zdCBzZWNvbmRzID0gYWdlTWlsbGlzIC8gMTAwMDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFNlY29uZHM6ICR7c2Vjb25kc31gKTtcbiAgICAgICAgbGV0IHRvdGFsTWludXRlcyA9IHNlY29uZHMgLyA2MDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFRvdGFsTWludXRlczogJHt0b3RhbE1pbnV0ZXN9YClcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFRvdGFsTWludXRlcy50b0ZpeGVkOiAke3RvdGFsTWludXRlcy50b0ZpeGVkKCl9YCk7XG4gICAgICAgIGxldCBkYXlzID0gdG90YWxNaW51dGVzLnRvRml4ZWQoKSAvICg2MCoyNCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBEYXlzOiAke2RheXN9YCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBEYXlzLnRvRml4ZWQ6ICR7ZGF5cy50b0ZpeGVkKCl9YCk7XG4gICAgICAgIHRvdGFsTWludXRlcyAtPSAoKDYwKjI0KSAqIGRheXMudG9GaXhlZCgpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYG5ldyBUb3RhbE1pbnV0ZXM6ICR7dG90YWxNaW51dGVzfWApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgbmV3IFRvdGFsTWludXRlcy50b0ZpeGVkOiAke3RvdGFsTWludXRlcy50b0ZpeGVkKCl9YCk7XG4gICAgICAgIGxldCBob3VycyA9IHRvdGFsTWludXRlcyAvIDYwO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgSG91cnM6ICR7aG91cnN9YCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBIb3Vycy50b0ZpeGVkOiAke2hvdXJzLnRvRml4ZWQoKX1gKTtcbiAgICAgICAgdG90YWxNaW51dGVzIC09IChob3Vycy50b0ZpeGVkKCkgKiA2MCk7IFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgbmV3TkVXIFRvdGFsTWludXRlczogJHt0b3RhbE1pbnV0ZXN9YCk7XG4gICAgICAgIC8vIEFkanVzdGluZyB0byByZWFkYWJsZSBzdHJpbmdzXG4gICAgICAgIGRheXMgPSBkYXlzLnRvRml4ZWQoKTtcbiAgICAgICAgaG91cnMgPSBob3Vycy50b0ZpeGVkKCk7XG4gICAgICAgIHRvdGFsTWludXRlcyA9IHRvdGFsTWludXRlcy50b0ZpeGVkKCk7ICAgICAgIFxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAtLS0tLS0tLS0tLS0tLS0tYCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFnZU1pbGxpcyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBTZWNvbmRzOiAke3NlY29uZHN9YCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBUb3RhbE1pbnV0ZXM6ICR7dG90YWxNaW51dGVzfWApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgSG91cnM6ICR7aG91cnN9YCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBEYXlzOiAke2RheXN9YCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAtLS0tLS0tLS0tLS0tLS0tYClcblxuICAgICAgICBsZXQgYWdlO1xuICAgICAgICBpZiAoYWdlTWlsbGlzID4gODY0MDAwMDAgKSB7XG4gICAgICAgICAgICBhZ2UgPSAoZGF5cyAtIDEpICsgXCIgRGF5c1wiOyAvLyBEYXlzIC0gMSBiZWNhdXNlIHRoZSBhYm92ZSBsaW5lIGRheXMgPSBkYXlzLnRvRml4ZWQoKSByb3VuZHMgdXAuIFRoaXMgd2F5LCB5b3UgZG9uJ3QgY3JlYXRlIGEgcHJvamVjdCB5ZXN0ZXJkYXkgdGhhdCdzIGFscmVhZHkgMiBkYXlzIG9sZCB3aGVuIHZpZXdlZCB0b2RheVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWdlID0gaG91cnMgKyBcIiBIb3VycywgXCIgKyB0b3RhbE1pbnV0ZXMgKyBcIiBNaW51dGVzXCI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGFnZUxhYmVsLmlubmVySFRNTCArPSBhZ2U7XG5cbiAgICAgICAgLy8gU2F2ZSwgQ2FuY2VsLCBEZWxldGUgQnV0dG9uc1xuICAgICAgICBsZXQgZWRpdFByb2plY3RCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWRpdFByb2plY3RCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZWRpdC1wcm9qZWN0LWJ1dHRvbi1jb250YWluZXInKVxuICAgICAgICBsZXQgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzYXZlQnV0dG9uLmlubmVySFRNTCA9IGBTYXZlYDtcbiAgICAgICAgLy8gY2hhbmdpbmcgdGhlIGJ1dHRvbidzIHR5cGUgb3ZlcnJpZGVzIHRoZSBkZWZhdWx0IFNhdmUgQnV0dG9uIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIGZvcm0gZWxlbWVudCB0byBOT1QgUkVESVJFQ1Qgd2l0aCB0aGUgZm9ybSBlbGVtZW50LCBha2EgcmVsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgIHNhdmVCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICBsZXQgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5pbm5lckhUTUwgPSBgQ2FuY2VsYDtcbiAgICAgICAgZWRpdFByb2plY3RCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG4gICAgICAgIGVkaXRQcm9qZWN0QnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgICAgIGVkaXRQYW5lLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0QnV0dG9uQ29udGFpbmVyKTtcblxuICAgICAgICBsZXQgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmlubmVySFRNTCA9ICdEZWxldGUnO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idXR0b24nKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGVkaXRQYW5lLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuXG5cbiAgICAgICAgbGV0IHNhdmVkSW5wdXRzID0gW25hbWVJbnB1dCwgcHJpb3JpdHlJbnB1dCwgZHVlRGF0ZUlucHV0LCBjcmVhdGlvbkRhdGVJbnB1dF07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNhdmVkSW5wdXRzKTtcbiAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIFtlZGl0UGFuZSwgcHJpb3JpdHlJbnB1dCwgcHJpb3JpdHlMYWJlbCwgc2F2ZUJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBkZWxldGVQcm9qZWN0QnV0dG9uLCBzYXZlZElucHV0cyBdIDtcblxuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlUHJvamVjdEFkZFRvZG9QYW5lID0gKHRhcmdldFByb2plY3QpID0+IHtcblxuICAgICAgICBjb25zdCBhZGRUb2RvUGFuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhZGRUb2RvUGFuZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC10b2RvLXBhbmUnKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFRpdGxlXG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0aXRsZUxhYmVsLmlubmVySFRNTCA9ICdOYW1lOiAnO1xuICAgICAgICB0aXRsZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYWRkLXRvZG8tbmFtZS1sYWJlbCcpO1xuICAgICAgICBhZGRUb2RvUGFuZS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtdG9kby1uYW1lLWlucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQubWF4TGVuZ3RoID0gXCIzMFwiO1xuICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gXCJOZXcgVG8tRG9cIjtcbiAgICAgICAgdGl0bGVJbnB1dC5taW5MZW5ndGggPSBcIjFcIjtcbiAgICAgICAgdGl0bGVMYWJlbC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAgICAgICAvLyBEZXNjcmlwdGlvblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5pbm5lckhUTUwgPSBgRGVzY3JpcHRpb246IGA7XG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtdG9kby1kZXNjcmlwdGlvbi1sYWJlbCcpO1xuICAgICAgICBhZGRUb2RvUGFuZS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtdG9kby1kZXNjcmlwdGlvbi1pbnB1dCcpO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0Lm1heExlbmd0aCA9IFwiMjRcIjtcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgICAgICAgXG4gICAgICAgIC8vIFByaW9yaXR5XG4gICAgICAgIGxldCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSBgUHJpb3JpdHk6IGA7XG4gICAgICAgIHByaW9yaXR5TGFiZWwuaWQgPSBcInByb2plY3QtYWRkLXRvZG8tcHJpb3JpdHktbGFiZWxcIjtcbiAgICAgICAgYWRkVG9kb1BhbmUuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgICAgIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC50eXBlID0gJ3JhbmdlJztcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5tYXggPSA1O1xuICAgICAgICBwcmlvcml0eUlucHV0Lm1pbiA9IDE7XG4gICAgICAgIHByaW9yaXR5SW5wdXQudmFsdWUgPSAzO1xuICAgICAgICBwcmlvcml0eUxhYmVsLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuICAgICAgICBsZXQgcHJpb3JpdHlPdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvdXRwdXQnKTtcbiAgICAgICAgcHJpb3JpdHlPdXRwdXQudmFsdWUgPSBwcmlvcml0eUlucHV0LnZhbHVlO1xuICAgICAgICBwcmlvcml0eUlucHV0Lm9uaW5wdXQgPSAoKSA9PiB7cHJpb3JpdHlPdXRwdXQudmFsdWUgPSBwcmlvcml0eUlucHV0LnZhbHVlfTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5hcHBlbmRDaGlsZChwcmlvcml0eU91dHB1dCk7XG5cbiAgICAgICAgLy8gTm90ZXNcbiAgICAgICAgY29uc3Qgbm90ZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIG5vdGVzTGFiZWwuaW5uZXJUZXh0ID0gXCJOb3RlczogICAgICAgICAgICAgICAgICAgICBcIjtcbiAgICAgICAgbm90ZXNMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC10b2RvLW5vdGVzLWxhYmVsJyk7XG4gICAgICAgIGFkZFRvZG9QYW5lLmFwcGVuZENoaWxkKG5vdGVzTGFiZWwpO1xuICAgICAgICBjb25zdCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgbm90ZXNJbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC10b2RvLW5vdGVzLWlucHV0Jyk7XG4gICAgICAgIG5vdGVzTGFiZWwuYXBwZW5kQ2hpbGQobm90ZXNJbnB1dCk7XG5cbiAgICAgICAgLy8gRHVlIERhdGVcbiAgICAgICAgbGV0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGR1ZURhdGVMYWJlbC5pbm5lckhUTUwgPSBgRHVlIERhdGU6IGA7XG4gICAgICAgIGR1ZURhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC10b2RvLWRhdGUtbGFiZWwnKTtcbiAgICAgICAgYWRkVG9kb1BhbmUuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcbiAgICAgICAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgICAgICBkdWVEYXRlTGFiZWwuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcblxuXG4gICAgICAgIC8vIENyZWF0aW9uIERhdGVcbiAgICAgICAgbGV0IGNyZWF0aW9uRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgY3JlYXRpb25EYXRlTGFiZWwuaW5uZXJIVE1MID0gYENyZWF0ZWQgT246IGA7XG4gICAgICAgIGNyZWF0aW9uRGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYWRkLXRvZG8tZGF0ZS1sYWJlbCcpO1xuICAgICAgICBhZGRUb2RvUGFuZS5hcHBlbmRDaGlsZChjcmVhdGlvbkRhdGVMYWJlbCk7XG4gICAgICAgIGxldCBjcmVhdGlvbkRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICAgIGNyZWF0aW9uRGF0ZUxhYmVsLmlubmVyVGV4dCArPSBgJHtjcmVhdGlvbkRhdGUudG9EYXRlU3RyaW5nKCl9YDtcblxuICAgICAgICAvLyBCdXR0b25zXG4gICAgICAgIGNvbnN0IGFkZFRvZG9CdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkVG9kb0J1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC10b2RvLWJ1dHRvbi1jb250YWluZXInKTtcbiAgICAgICAgbGV0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc2F2ZUJ1dHRvbi5pbm5lckhUTUwgPSBgU2F2ZSBuZXcgVG8tRG9gO1xuICAgICAgICAvLyBjaGFuZ2luZyB0aGUgYnV0dG9uJ3MgdHlwZSBvdmVycmlkZXMgdGhlIGRlZmF1bHQgU2F2ZSBCdXR0b24gZnVuY3Rpb25hbGl0eSBvZiB0aGUgZm9ybSBlbGVtZW50IHRvIE5PVCBSRURJUkVDVCB3aXRoIHRoZSBmb3JtIGVsZW1lbnQsIGFrYSByZWxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgc2F2ZUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGxldCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLmlubmVySFRNTCA9IGBDYW5jZWwgbmV3IFRvLURvYDtcbiAgICAgICAgY2FuY2VsQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgYWRkVG9kb0J1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcbiAgICAgICAgYWRkVG9kb0J1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICAgICAgICBhZGRUb2RvUGFuZS5hcHBlbmRDaGlsZChhZGRUb2RvQnV0dG9uQ29udGFpbmVyKTtcblxuICAgICAgICByZXR1cm4gW2FkZFRvZG9QYW5lLCB0aXRsZUlucHV0LCBkZXNjcmlwdGlvbklucHV0LCBwcmlvcml0eUxhYmVsLCBwcmlvcml0eUlucHV0LCBub3Rlc0lucHV0LCBkdWVEYXRlSW5wdXQsIGNyZWF0aW9uRGF0ZSwgc2F2ZUJ1dHRvbiwgY2FuY2VsQnV0dG9uXTtcblxuICAgIH1cblxuICAgIGNvbnN0IGdlbmVyYXRlUHJvamVjdERlbGV0ZVRvZG9QYW5lID0gKHRhcmdldFByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgZGVsZXRlVG9kb1BhbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVsZXRlVG9kb1BhbmUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZWxldGUtdG9kby1wYW5lJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0b2RvUGFuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvUGFuZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZS10b2RvLWxpc3QnKTtcbiAgICAgICAgZGVsZXRlVG9kb1BhbmUuYXBwZW5kQ2hpbGQodG9kb1BhbmUpO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldFByb2plY3RUb2RvTGlzdCA9IHRhcmdldFByb2plY3QuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgXG4gICAgICAgIGxldCB0b2RvUGFuZUxpc3QgPSBbXTtcblxuICAgICAgICB0YXJnZXRQcm9qZWN0VG9kb0xpc3QuZm9yRWFjaCggZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBsZXQgdG9kb0VsZW1lbnREaXYgPSBnZW5lcmF0ZVByb2plY3REZWxldGVUb2RvRGl2KGVsZW1lbnQpO1xuICAgICAgICAgICAgdG9kb1BhbmUuYXBwZW5kQ2hpbGQodG9kb0VsZW1lbnREaXYpO1xuICAgICAgICAgICAgdG9kb1BhbmVMaXN0LnB1c2goZWxlbWVudCk7XG4gICAgICAgIH0pO1xuXG5cblxuXG4gICAgICAgIC8vIEV4YW1wbGUgb2YgdHJhY2luZyBmcm9tIHRhcmdldFByb2plY3QgdG8gYWxsIHRvZG8gZWxlbWVudHNcbiAgICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0UHJvamVjdC5nZXRUb2RvTGlzdCgpWzBdLmdldEluZm8oKSk7XG5cblxuXG4gICAgICAgIC8vIEJ1dHRvbnNcbiAgICAgICAgY29uc3QgZGVsZXRlVG9kb0J1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZWxldGVUb2RvQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVsZXRlLXRvZG8tYnV0dG9uLWNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgZGVsZXRlU2VsZWN0ZWRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlU2VsZWN0ZWRCdXR0b24uaW5uZXJIVE1MID0gYERlbGV0ZSBTZWxlY3RlZGA7XG4gICAgICAgIC8vIGNoYW5naW5nIHRoZSBidXR0b24ncyB0eXBlIG92ZXJyaWRlcyB0aGUgZGVmYXVsdCBTYXZlIEJ1dHRvbiBmdW5jdGlvbmFsaXR5IG9mIHRoZSBmb3JtIGVsZW1lbnQgdG8gTk9UIFJFRElSRUNUIHdpdGggdGhlIGZvcm0gZWxlbWVudCwgYWthIHJlbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICBkZWxldGVTZWxlY3RlZEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG5cbiAgICAgICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdXR0b24uaW5uZXJIVE1MID0gYENhbmNlbGA7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGRlbGV0ZVRvZG9CdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlU2VsZWN0ZWRCdXR0b24pO1xuICAgICAgICBkZWxldGVUb2RvQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgICAgIGRlbGV0ZVRvZG9QYW5lLmFwcGVuZENoaWxkKGRlbGV0ZVRvZG9CdXR0b25Db250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUNvbXBsZXRlZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVDb21wbGV0ZWRCdXR0b24uaW5uZXJIVE1MID0gYERlbGV0ZSBDb21wbGV0ZWQgVG8tZG8nc2A7XG4gICAgICAgIGRlbGV0ZUNvbXBsZXRlZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZS10b2RvLWNvbXBsZXRlZC1idXR0b24nKVxuICAgICAgICBkZWxldGVDb21wbGV0ZWRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICBkZWxldGVUb2RvQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUNvbXBsZXRlZEJ1dHRvbik7XG5cblxuICAgICAgICByZXR1cm4gW2RlbGV0ZVRvZG9QYW5lLCBkZWxldGVTZWxlY3RlZEJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBkZWxldGVDb21wbGV0ZWRCdXR0b24sIHRvZG9QYW5lTGlzdF07XG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVQcm9qZWN0RGVsZXRlVG9kb0RpdiA9ICh0b2RvT2JqZWN0KSA9PiB7XG5cbiAgICAgICAgY29uc3QgdG9kb1BhbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBpZiggdG9kb09iamVjdC5nZXRDb21wbGV0ZSgpICl7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHt0b2RvT2JqZWN0LmdldFRpdGxlKCl9IGlzIGNvbXBsZXRlOiAke3RvZG9PYmplY3QuZ2V0Q29tcGxldGUoKX1gKVxuICAgICAgICAgICAgdG9kb1BhbmUuY2xhc3NMaXN0LmFkZCgndG9kby1jb21wbGV0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICB0b2RvUGFuZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZS10b2RvLWRpdicpXG5cblxuICAgICAgICAvLyBUcmltbWluZyBkb3duIGxvbmcgdGl0bGUgc3RyaW5ncyB0aGF0IGVzY2FwZSBuYW1lLm1heExlbmd0aFxuICAgICAgICBjb25zdCB0aXRsZVRleHQgPSB0b2RvT2JqZWN0LmdldFRpdGxlKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRpdGxlVGV4dCk7XG4gICAgICAgIGxldCBuZXdUaXRsZSA9IFwiXCI7XG4gICAgICAgIGlmICh0aXRsZVRleHQubGVuZ3RoID4gMzIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzQ7IGkrKykge1xuICAgICAgICAgICAgICAgIG5ld1RpdGxlICs9IHRpdGxlVGV4dC5jaGFyQXQoaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdUaXRsZSArPSBcIi4uLlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VGl0bGUgPSB0aXRsZVRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2cobmV3VGl0bGUpO1xuICAgICAgICB0b2RvUGFuZS5pbm5lclRleHQgKz0gbmV3VGl0bGU7XG5cblxuICAgICAgICB0b2RvT2JqZWN0LnNldFRvZG9EZWxldGlvbkRpdih0b2RvUGFuZSk7XG4gICAgICAgIHJldHVybiB0b2RvUGFuZTtcblxuXG4gICAgfVxuXG4gICAgY29uc3QgZ2VuZXJhdGVFZGl0VG9kb1BhbmUgPSAodGFyZ2V0VG9kbykgPT4ge1xuXG4gICAgICAgIGNvbnN0IGFkZFRvZG9QYW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZFRvZG9QYW5lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYWRkLXRvZG8tcGFuZScpO1xuICAgICAgICBcbiAgICAgICAgLy8gVGl0bGVcbiAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRpdGxlTGFiZWwuaW5uZXJIVE1MID0gJ05hbWU6ICc7XG4gICAgICAgIHRpdGxlTGFiZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtdG9kby1uYW1lLWxhYmVsJyk7XG4gICAgICAgIGFkZFRvZG9QYW5lLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC10b2RvLW5hbWUtaW5wdXQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5tYXhMZW5ndGggPSBcIjMwXCI7XG4gICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0YXJnZXRUb2RvLmdldFRpdGxlKCk7XG4gICAgICAgIHRpdGxlSW5wdXQubWluTGVuZ3RoID0gXCIxXCI7XG4gICAgICAgIHRpdGxlTGFiZWwuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgICAgICAgLy8gRGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJIVE1MID0gYERlc2NyaXB0aW9uOiBgO1xuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYWRkLXRvZG8tZGVzY3JpcHRpb24tbGFiZWwnKTtcbiAgICAgICAgYWRkVG9kb1BhbmUuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYWRkLXRvZG8tZGVzY3JpcHRpb24taW5wdXQnKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5tYXhMZW5ndGggPSBcIjI0XCI7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0YXJnZXRUb2RvLmdldERlc2NyaXB0aW9uKCk7XG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgICAgIFxuICAgICAgICAvLyBQcmlvcml0eVxuICAgICAgICBsZXQgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gYFByaW9yaXR5OiBgO1xuICAgICAgICBwcmlvcml0eUxhYmVsLmlkID0gXCJwcm9qZWN0LWFkZC10b2RvLXByaW9yaXR5LWxhYmVsXCI7XG4gICAgICAgIGFkZFRvZG9QYW5lLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgICAgICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHByaW9yaXR5SW5wdXQudHlwZSA9ICdyYW5nZSc7XG4gICAgICAgIHByaW9yaXR5SW5wdXQubWF4ID0gNTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5taW4gPSAxO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXRUb2RvLmdldFByaW9yaXR5KCkpO1xuICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gdGFyZ2V0VG9kby5nZXRQcmlvcml0eSgpO1xuICAgICAgICBwcmlvcml0eUxhYmVsLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuICAgICAgICBsZXQgcHJpb3JpdHlPdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvdXRwdXQnKTtcbiAgICAgICAgcHJpb3JpdHlPdXRwdXQudmFsdWUgPSBwcmlvcml0eUlucHV0LnZhbHVlO1xuICAgICAgICBwcmlvcml0eUlucHV0Lm9uaW5wdXQgPSAoKSA9PiB7cHJpb3JpdHlPdXRwdXQudmFsdWUgPSBwcmlvcml0eUlucHV0LnZhbHVlfTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5hcHBlbmRDaGlsZChwcmlvcml0eU91dHB1dCk7XG5cbiAgICAgICAgLy8gTm90ZXNcbiAgICAgICAgY29uc3Qgbm90ZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIG5vdGVzTGFiZWwuaW5uZXJUZXh0ID0gXCJOb3RlczogICAgICAgICAgICAgICAgICAgICBcIjtcbiAgICAgICAgbm90ZXNMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC10b2RvLW5vdGVzLWxhYmVsJyk7XG4gICAgICAgIGFkZFRvZG9QYW5lLmFwcGVuZENoaWxkKG5vdGVzTGFiZWwpO1xuICAgICAgICBjb25zdCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgbm90ZXNJbnB1dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC10b2RvLW5vdGVzLWlucHV0Jyk7XG4gICAgICAgIG5vdGVzSW5wdXQudmFsdWUgPSB0YXJnZXRUb2RvLmdldE5vdGVzKCk7XG4gICAgICAgIG5vdGVzTGFiZWwuYXBwZW5kQ2hpbGQobm90ZXNJbnB1dCk7XG5cbiAgICAgICAgLy8gRHVlIERhdGVcbiAgICAgICAgbGV0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGR1ZURhdGVMYWJlbC5pbm5lckhUTUwgPSBgRHVlIERhdGU6IGA7XG4gICAgICAgIGR1ZURhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC10b2RvLWRhdGUtbGFiZWwnKTtcbiAgICAgICAgYWRkVG9kb1BhbmUuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcbiAgICAgICAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgICAgICBkdWVEYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBsZXQgdGVtcER1ZURhdGUgPSB0YXJnZXRUb2RvLmdldER1ZURhdGUoKVxuICAgICAgICB0ZW1wRHVlRGF0ZSA9IHRlbXBEdWVEYXRlLmdldFRpbWUoKTtcbiAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlQXNOdW1iZXIgPSB0ZW1wRHVlRGF0ZTtcbiAgICAgICAgZHVlRGF0ZUxhYmVsLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG5cbiAgICAgICAgLy8gQ3JlYXRpb24gRGF0ZVxuICAgICAgICBsZXQgY3JlYXRpb25EYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBjcmVhdGlvbkRhdGVMYWJlbC5pbm5lckhUTUwgPSBgQ3JlYXRlZCBPbjogYDtcbiAgICAgICAgY3JlYXRpb25EYXRlTGFiZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1hZGQtdG9kby1kYXRlLWxhYmVsJyk7XG4gICAgICAgIGFkZFRvZG9QYW5lLmFwcGVuZENoaWxkKGNyZWF0aW9uRGF0ZUxhYmVsKTtcbiAgICAgICAgbGV0IGNyZWF0aW9uRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY3JlYXRpb25EYXRlSW5wdXQudHlwZSA9ICdkYXRlJ1xuICAgICAgICBjcmVhdGlvbkRhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIGxldCB0ZW1wQ3JlYXRpb25EYXRlID0gdGFyZ2V0VG9kby5nZXRDcmVhdGlvbkRhdGUoKTtcbiAgICAgICAgY3JlYXRpb25EYXRlSW5wdXQudmFsdWVBc0RhdGUgPSB0ZW1wQ3JlYXRpb25EYXRlO1xuICAgICAgICBjcmVhdGlvbkRhdGVMYWJlbC5hcHBlbmRDaGlsZChjcmVhdGlvbkRhdGVJbnB1dCk7XG4gICAgICAgIFxuICAgICAgICAvLyBCdXR0b25zXG4gICAgICAgIGNvbnN0IGFkZFRvZG9CdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkVG9kb0J1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWFkZC10b2RvLWJ1dHRvbi1jb250YWluZXInKTtcbiAgICAgICAgbGV0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc2F2ZUJ1dHRvbi5pbm5lckhUTUwgPSBgU2F2ZSBUby1Eb2A7XG4gICAgICAgIC8vIGNoYW5naW5nIHRoZSBidXR0b24ncyB0eXBlIG92ZXJyaWRlcyB0aGUgZGVmYXVsdCBTYXZlIEJ1dHRvbiBmdW5jdGlvbmFsaXR5IG9mIHRoZSBmb3JtIGVsZW1lbnQgdG8gTk9UIFJFRElSRUNUIHdpdGggdGhlIGZvcm0gZWxlbWVudCwgYWthIHJlbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICBzYXZlQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgbGV0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdXR0b24uaW5uZXJIVE1MID0gYENhbmNlbCBFZGl0IFRvLURvYDtcbiAgICAgICAgY2FuY2VsQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgYWRkVG9kb0J1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcbiAgICAgICAgYWRkVG9kb0J1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICAgICAgICBhZGRUb2RvUGFuZS5hcHBlbmRDaGlsZChhZGRUb2RvQnV0dG9uQ29udGFpbmVyKTtcblxuICAgICAgICByZXR1cm4gW2FkZFRvZG9QYW5lLCB0aXRsZUlucHV0LCBkZXNjcmlwdGlvbklucHV0LCBwcmlvcml0eUxhYmVsLCBwcmlvcml0eUlucHV0LCBub3Rlc0lucHV0LCBkdWVEYXRlSW5wdXQsIGNyZWF0aW9uRGF0ZUlucHV0LCBzYXZlQnV0dG9uLCBjYW5jZWxCdXR0b25dO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0SW5mbyxcbiAgICAgICAgZ2VuZXJhdGVQcm9qZWN0Q29udGFpbmVyRGl2LFxuICAgICAgICBnZW5lcmF0ZVByb2plY3RDb250YWluZXJBZGRCdXR0b25NZW51LFxuICAgICAgICBnZW5lcmF0ZVByb2plY3RQYW5lLFxuICAgICAgICBnZW5lcmF0ZVRvZG9EaXYsXG4gICAgICAgIGdlbmVyYXRlVG9kb0xpc3RDb250YWluZXIsXG4gICAgICAgIGdlbmVyYXRlUHJvamVjdEVkaXRQYW5lLFxuICAgICAgICBnZW5lcmF0ZVByb2plY3RBZGRUb2RvUGFuZSxcbiAgICAgICAgZ2VuZXJhdGVQcm9qZWN0RGVsZXRlVG9kb1BhbmUsXG4gICAgICAgIGdlbmVyYXRlUHJvamVjdERlbGV0ZVRvZG9EaXYsXG4gICAgICAgIGdlbmVyYXRlRWRpdFRvZG9QYW5lLFxuICAgICAgICBcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUNvbnRyb2xsZXI7IiwiLy8gSSBhbSBldmVudENvbnRyb2xsZXIsIEkgYW0gYW4gb2JqZWN0IHRoYXQgYXNzaWducyBldmVudCBmdW5jdGlvbnMgdG8gZGl2J3MgdGhhdCBhcmUgcGFzc2VkIHRvIG1lIHZpYSBsb2dpY0NvbnRyb2xsZXIuXG5cbi8vIGltcG9ydCBsb2dpY0NvbnRyb2xsZXIgZnJvbSBcIi4vbG9naWNDb250cm9sbGVyLmpzXCI7XG5cbmNvbnN0IGV2ZW50Q29udHJvbGxlciA9ICggbG9naWNDb250cm9sbGVyUmVmZXJlbmNlICkgPT4ge1xuXG4gICAgLy8gY29uc29sZS5sb2cobG9naWNDb250cm9sbGVyUmVmZXJlbmNlKTtcblxuICAgIGxldCBfbWVudU9wZW4gPSBmYWxzZTtcbiAgICBjb25zdCBfbG9naWNDb250cm9sbGVyID0gbG9naWNDb250cm9sbGVyUmVmZXJlbmNlO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiSSBhbSBfbG9naWNDb250cm9sbGVyOiBcIiArIF9sb2dpY0NvbnRyb2xsZXIpO1xuICAgIC8vIGNvbnNvbGUubG9nKF9sb2dpY0NvbnRyb2xsZXIpO1xuXG5cbiAgICBjb25zdCBfdG9nZ2xlTWVudU9wZW4gPSAoKSA9PiB7XG4gICAgICAgIGlmKG1lbnVPcGVuKSB7XG4gICAgICAgICAgICBfbWVudU9wZW4gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9tZW51T3BlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2hQcm9qZWN0Q29udGFpbmVyQWRkQnV0dG9uTGlzdGVuZXIgPSAoZGl2KSA9PiB7XG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIF9sb2dpY0NvbnRyb2xsZXIuX3RvZ2dsZVByb2plY3RDb250YWluZXJBZGRCdXR0b25NZW51KCk7XG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIGNvbnN0IGF0dGFjaEFkZFByb2plY3RQcmlvcml0eVNsaWRlciA9IChpbnB1dERpdlZhbHVlLCB0YXJnZXREaXYpID0+IHtcbiAgICAgICAgaW5wdXREaXZWYWx1ZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIF9sb2dpY0NvbnRyb2xsZXIuX3VwZGF0ZVByaW9yaXR5Q29sb3IodGFyZ2V0RGl2LCBpbnB1dERpdlZhbHVlLnZhbHVlKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2hQcm9qZWN0VG9kb1ByaW9yaXR5U2xpZGVyID0gKGlucHV0RGl2VmFsdWUsIHRhcmdldERpdikgPT4ge1xuICAgICAgICBpbnB1dERpdlZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgX2xvZ2ljQ29udHJvbGxlci5fdXBkYXRlVG9kb1ByaW9yaXR5Q29sb3IodGFyZ2V0RGl2LCBpbnB1dERpdlZhbHVlLnZhbHVlKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2hBZGRQcm9qZWN0U2F2ZSA9ICh0YXJnZXREaXYsIHZhbHVlcykgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZXMpO1xuICAgICAgICB0YXJnZXREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygneW91IGNsaWNrZWQgc2F2ZScpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWVzKTtcbiAgICAgICAgICAgIF9sb2dpY0NvbnRyb2xsZXIuX2FkZFByb2plY3RTYXZlQnV0dG9uKHZhbHVlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGF0dGFjaEFkZFByb2plY3RDYW5jZWwgPSAoZGl2LCBwYXJlbnRNZW51RGl2KSA9PiB7XG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIF9sb2dpY0NvbnRyb2xsZXIuX2FkZFByb2plY3RDYW5jZWxCdXR0b24ocGFyZW50TWVudURpdik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgYXR0YWNoUHJvamVjdEVkaXRCdXR0b24gPSAodGFyZ2V0RGl2LCB0YXJnZXRPYmplY3QpID0+IHtcbiAgICAgICAgdGFyZ2V0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgX2xvZ2ljQ29udHJvbGxlci5fZWRpdFByb2plY3QodGFyZ2V0T2JqZWN0KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2hQcm9qZWN0RWRpdFNhdmVCdXR0b24gPSAodGFyZ2V0RGl2LCB0YXJnZXRQcm9qZWN0LCBzYXZlZElucHV0cykgPT4ge1xuICAgICAgICB0YXJnZXREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBfbG9naWNDb250cm9sbGVyLl9lZGl0UHJvamVjdFNhdmVCdXR0b24odGFyZ2V0UHJvamVjdCwgc2F2ZWRJbnB1dHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2hQcm9qZWN0RWRpdENhbmNlbEJ1dHRvbiA9ICh0YXJnZXREaXYsIHRhcmdldFByb2plY3QpID0+IHtcbiAgICAgICAgdGFyZ2V0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgX2xvZ2ljQ29udHJvbGxlci5fZWRpdFByb2plY3RDYW5jZWxCdXR0b24odGFyZ2V0UHJvamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGF0dGFjaFByb2plY3RFZGl0RGVsZXRlQnV0dG9uID0gKHRhcmdldERpdiwgdGFyZ2V0UHJvamVjdCkgPT4ge1xuICAgICAgICB0YXJnZXREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBfbG9naWNDb250cm9sbGVyLl9lZGl0UHJvamVjdERlbGV0ZUJ1dHRvbih0YXJnZXRQcm9qZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYXR0YWNoUHJvamVjdFRvZG9BZGRCdXR0b24gPSAodGFyZ2V0RGl2LCB0YXJnZXRQcm9qZWN0ICkgPT4ge1xuICAgICAgICB0YXJnZXREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBfbG9naWNDb250cm9sbGVyLl9wcm9qZWN0QWRkVG9kb0J1dHRvbih0YXJnZXRQcm9qZWN0KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2hQcm9qZWN0VG9kb0RlbGV0ZUJ1dHRvbiA9ICh0YXJnZXREaXYsIHRhcmdldFByb2plY3QgKSA9PiB7XG4gICAgICAgIHRhcmdldERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIF9sb2dpY0NvbnRyb2xsZXIuX3Byb2plY3REZWxldGVUb2RvQnV0dG9uKHRhcmdldFByb2plY3QpO1xuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgYXR0YWNoUHJvamVjdEFkZFRvZG9TYXZlQnV0dG9uID0gKHRhcmdldFNhdmVCdXR0b24sIHRhcmdldFByb2plY3QsIGFkZFRvZG9QYW5lLCBzYXZlZFZhbHVlcykgPT4ge1xuICAgICAgICB0YXJnZXRTYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgX2xvZ2ljQ29udHJvbGxlci5fcHJvamVjdEFkZFRvZG9TYXZlQnV0dG9uKHRhcmdldFByb2plY3QsIGFkZFRvZG9QYW5lLCBzYXZlZFZhbHVlcyk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgYXR0YWNoUHJvamVjdEFkZFRvZG9DYW5jZWxCdXR0b24gPSAodGFyZ2V0Q2FuY2VsQnV0dG9uLCB0YXJnZXRQcm9qZWN0LCBhZGRUb2RvUGFuZSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnaGVyZScpO1xuICAgICAgICB0YXJnZXRDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBfbG9naWNDb250cm9sbGVyLl9wcm9qZWN0QWRkVG9kb0NhbmNlbEJ1dHRvbih0YXJnZXRQcm9qZWN0LCBhZGRUb2RvUGFuZSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgYXR0YWNoU2VsZWN0VG9kb0ZvckRlbGV0aW9uID0gKHRhcmdldFRvZG9EaXYpID0+IHtcbiAgICAgICAgdGFyZ2V0VG9kb0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdZb3UgY2xpY2tlZCBhIHRvZG8gRGl2IGluIHRoZSBkZWxldGUgcGFuZSEnKTtcbiAgICAgICAgICAgIF9sb2dpY0NvbnRyb2xsZXIuX3RvZ2dsZVNlbGVjdGVkRGl2Rm9yRGVsZXRpb24odGFyZ2V0VG9kb0RpdilcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2hQcm9qZWN0RGVsZXRlU2VsZWN0ZWRCdXR0b24gPSAodGFyZ2V0RGVsZXRlU2VsZWN0ZWRCdXR0b24sIHRhcmdldFByb2plY3QsIGRlbGV0ZVRvZG9QYW5lLCB0b2RvUGFuZUxpc3QpID0+IHtcbiAgICAgICAgdGFyZ2V0RGVsZXRlU2VsZWN0ZWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBfbG9naWNDb250cm9sbGVyLl9wcm9qZWN0RGVsZXRlVG9kb1NlbGVjdGVkQnV0dG9uKHRhcmdldFByb2plY3QsIGRlbGV0ZVRvZG9QYW5lLCB0b2RvUGFuZUxpc3QpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGF0dGFjaFByb2plY3REZWxldGVDYW5jZWxCdXR0b24gPSAodGFyZ2V0RGVsZXRlQ2FuY2VsLCB0YXJnZXRQcm9qZWN0LCBkZWxldGVUb2RvUGFuZSkgPT4ge1xuICAgICAgICB0YXJnZXREZWxldGVDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgX2xvZ2ljQ29udHJvbGxlci5fcHJvamVjdERlbGV0ZVRvZG9DYW5jZWxCdXR0b24odGFyZ2V0UHJvamVjdCwgZGVsZXRlVG9kb1BhbmUpO1xuXG4gICAgICAgICAgICAvLyBfbG9naWNDb250cm9sbGVyLl9wcm9qZWN0QWRkVG9kb0NhbmNlbEJ1dHRvbih0YXJnZXRQcm9qZWN0LCBhZGRUb2RvUGFuZSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgYXR0YWNoUHJvamVjdERlbGV0ZUNvbXBsZXRlZEJ1dHRvbiA9ICh0YXJnZXREZWxldGVDb21wbGV0ZWRCdXR0b24sIHRhcmdldFByb2plY3QsIGRlbGV0ZVRvZG9QYW5lLCB0b2RvUGFuZUxpc3QpID0+IHtcbiAgICAgICAgdGFyZ2V0RGVsZXRlQ29tcGxldGVkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFlvdSBjbGlrZWQgdGhlIERlbGV0ZSBDb21wbGV0ZWQgYnV0dG9uIGZyb20gcHJvamVjdDogYClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldFByb2plY3QuZ2V0UHJvamVjdE5hbWUoKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIF9sb2dpY0NvbnRyb2xsZXIuX3Byb2plY3REZWxldGVUb2RvQ29tcGxldGVkQnV0dG9uKHRhcmdldFByb2plY3QsIGRlbGV0ZVRvZG9QYW5lLCB0b2RvUGFuZUxpc3QpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGF0dGFjaFRvZG9MaXN0ZW5lcnMgPSAodGFyZ2V0VG9kbywgdGFyZ2V0UHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRUb2RvRGl2ID0gdGFyZ2V0VG9kby5nZXRUb2RvRGl2KCk7XG4gICAgICAgIHRhcmdldFRvZG9EaXYuZmlyc3RDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBZb3UgY2xpY2tlZCB0aGUgZmlyc3QgY2hpbGQgb2YgJHt0YXJnZXRUb2RvRGl2fWApXG4gICAgICAgICAgICBfbG9naWNDb250cm9sbGVyLl90b2dnbGVDb21wbGV0ZWRUb2RvKHRhcmdldFRvZG8pO1xuICAgICAgICB9KVxuICAgICAgICB0YXJnZXRUb2RvRGl2LmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgWW91IGNsaWNrZWQgdGhlIHNlY29uZCBjaGlsZCBvZiAke3RhcmdldFRvZG9EaXZ9YClcbiAgICAgICAgICAgIF9sb2dpY0NvbnRyb2xsZXIuX3RvZ2dsZUNvbXBsZXRlZFRvZG8odGFyZ2V0VG9kbyk7XG4gICAgICAgIH0pXG4gICAgICAgIHRhcmdldFRvZG9EaXYubGFzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFlvdSBjbGlja2VkIHRoZSBsYXN0IGNoaWxkIG9mICR7dGFyZ2V0VG9kb0Rpdn1gKVxuICAgICAgICAgICAgX2xvZ2ljQ29udHJvbGxlci5fZWRpdFRvZG9QYW5lKHRhcmdldFRvZG8sIHRhcmdldFByb2plY3QpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGF0dGFjaEVkaXRUb2RvU2F2ZUJ1dHRvbiA9ICh0YXJnZXRTYXZlQnV0dG9uLCB0YXJnZXRQcm9qZWN0LCB0YXJnZXRUb2RvLCBlZGl0VG9kb1BhbmVEaXYsIHNhdmVkVmFsdWVzKSA9PiB7XG4gICAgICAgIHRhcmdldFNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBfbG9naWNDb250cm9sbGVyLl9wcm9qZWN0RWRpdFRvZG9TYXZlQnV0dG9uKHRhcmdldFByb2plY3QsIHRhcmdldFRvZG8sIGVkaXRUb2RvUGFuZURpdiwgc2F2ZWRWYWx1ZXMpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGF0dGFjaEVkaXRUb2RvQ2FuY2VsQnV0dG9uID0gKHRhcmdldENhbmNlbEJ1dHRvbiwgdGFyZ2V0UHJvamVjdCwgZWRpdFRvZG9QYW5lRGl2KSA9PiB7XG4gICAgICAgIHRhcmdldENhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIF9sb2dpY0NvbnRyb2xsZXIuX3Byb2plY3RBZGRUb2RvQ2FuY2VsQnV0dG9uKHRhcmdldFByb2plY3QsIGVkaXRUb2RvUGFuZURpdik7XG5cbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIF90b2dnbGVNZW51T3BlbixcbiAgICAgICAgYXR0YWNoUHJvamVjdENvbnRhaW5lckFkZEJ1dHRvbkxpc3RlbmVyLFxuICAgICAgICBhdHRhY2hBZGRQcm9qZWN0Q2FuY2VsLFxuICAgICAgICBhdHRhY2hBZGRQcm9qZWN0UHJpb3JpdHlTbGlkZXIsXG4gICAgICAgIGF0dGFjaFByb2plY3RUb2RvUHJpb3JpdHlTbGlkZXIsXG4gICAgICAgIGF0dGFjaEFkZFByb2plY3RTYXZlLFxuICAgICAgICBhdHRhY2hQcm9qZWN0RWRpdEJ1dHRvbixcbiAgICAgICAgYXR0YWNoUHJvamVjdEVkaXRTYXZlQnV0dG9uLFxuICAgICAgICBhdHRhY2hQcm9qZWN0RWRpdENhbmNlbEJ1dHRvbixcbiAgICAgICAgYXR0YWNoUHJvamVjdEVkaXREZWxldGVCdXR0b24sXG4gICAgICAgIGF0dGFjaFByb2plY3RUb2RvQWRkQnV0dG9uLFxuICAgICAgICBhdHRhY2hQcm9qZWN0VG9kb0RlbGV0ZUJ1dHRvbixcbiAgICAgICAgYXR0YWNoUHJvamVjdEFkZFRvZG9TYXZlQnV0dG9uLFxuICAgICAgICBhdHRhY2hQcm9qZWN0QWRkVG9kb0NhbmNlbEJ1dHRvbixcbiAgICAgICAgYXR0YWNoU2VsZWN0VG9kb0ZvckRlbGV0aW9uLFxuICAgICAgICBhdHRhY2hQcm9qZWN0RGVsZXRlU2VsZWN0ZWRCdXR0b24sXG4gICAgICAgIGF0dGFjaFByb2plY3REZWxldGVDYW5jZWxCdXR0b24sXG4gICAgICAgIGF0dGFjaFByb2plY3REZWxldGVDb21wbGV0ZWRCdXR0b24sXG4gICAgICAgIGF0dGFjaFRvZG9MaXN0ZW5lcnMsXG4gICAgICAgIGF0dGFjaEVkaXRUb2RvU2F2ZUJ1dHRvbixcbiAgICAgICAgYXR0YWNoRWRpdFRvZG9DYW5jZWxCdXR0b24sXG5cblxuXG4gICAgfVxuXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBldmVudENvbnRyb2xsZXI7IiwiLy8gSSBhbSB0aGUgbG9naWNDb250cm9sbGVyLCBJIGRlY2lkZSBsb2dpYyB3aGVuZXZlciBldmVudHMgYXJlIGZpcmVkIGJ5IHRoZWlyIGV2ZW50SGFuZGxlclxuXG4vLyBMZXNzb25zIGxlYXJuZWQgZnJvbSB1c2luZyBEYXRlcyBpbiBteSBwcm9qZWN0XG4vLyAxLiBEb24ndCB1c2UgRGF0ZXNcbi8vIDIuIElmIHlvdSBoYXZlIHRvIHVzZSBkYXRlcywgZG9uJ3QgdXNlIHRoZW0gaW4gaW5wdXQgZm9ybXNcbi8vIDMuIElmIHlvdSBoYXZlIHRvIHVzZSB0aGVtIGluIGlucHV0IGZvcm1zLCB1c2UgZXZlcnl0aGluZyBpbiBtaWxsaXNlY29uZHMgYW5kIG9ubHkgY29udmVydCB0byB5ZWFyL21vbnRoL2RheSBmb3IgZGlzcGxheSBwdXJwb3Nlc1xuLy8gNC4gRG8geW91IHJlYWxseSBoYXZlIHRvIHVzZSBEYXRlcz8gUmVhbGx5PyBDYW4gd2UganVzdC4uLiBub3Q/XG4vLyA1LiBGb3IgdGltZXpvbmUgaW5jb25zaXN0ZW5jaWVzIHdoZW4gY29uc3RydWN0aW5nIERhdGVzIHdpdGhvdXQgc3BlY2lmaWMgdGltZXMsIHRyeSB0byB1c2UgZ2V0VGltZSgpIGZvciBtaWxsaXNlY29uZHMgYmFzZWxpbmUsIGFuZCBhZGp1c3QgZm9yIGdldFRpbWV6b25lT2Zmc2V0KCkgd2hlbiBuZWNlc3NhcnlcblxuaW1wb3J0IHByb2plY3RDb250YWluZXJPYmogZnJvbSAnLi9wcm9qZWN0Q29udGFpbmVyT2JqLmpzJztcbmltcG9ydCBkaXNwbGF5Q29udHJvbGxlciBmcm9tICcuL2Rpc3BsYXlDb250cm9sbGVyLmpzJztcbi8vIGltcG9ydCB7ZXZlbnRDb250cm9sbGVyLCBhdHRhY2hBZGRCdXR0b25MaXN0ZW5lciB9IGZyb20gJy4vZXZlbnRDb250cm9sbGVyLmpzJztcbmltcG9ydCBldmVudENvbnRyb2xsZXIgZnJvbSAnLi9ldmVudENvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHsgdGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnO1xuaW1wb3J0IHRvZG9PYmogZnJvbSAnLi90b2RvT2JqLmpzJztcbi8vIGltcG9ydCBwcm9qZWN0T2JqIGZyb20gJy4vcHJvamVjdC5qcyc7XG5cblxuZnVuY3Rpb24gbG9naWNDb250cm9sbGVyKCkge1xuXG4gICAgbGV0IF9wcm9qZWN0Q29udGFpbmVyID0gcHJvamVjdENvbnRhaW5lck9iaigpO1xuICAgIGxldCBfZGlzcGxheUNvbnRyb2xsZXIgPSBkaXNwbGF5Q29udHJvbGxlcigpO1xuICAgIGxldCBfY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7IC8vX2NvbnRlbnREaXYgc2hvdWxkIGhhdmUgaXRzIG93biBnZXR0ZXJzIGFuZCBzZXR0ZXJzIGZvciB0eXBlY2hlY2tpbmcgYW5kIHNhZmV0eSwgYnV0IGlzIG9ubHkgaW52b2tlZCBhbmQgaW5zdGFudGlhdGVkIG9uY2Ugb24gcGFnZSBpbml0IHRvIGJlIHBvcHVsYXRlZCB3aXRoIGdlbmVyYXRlUHJvamVjdENvbnRhaW5lcigpLCBzbyBpdCBnZXRzIGEgcGFzcyBoZXJlXG4gICAgbGV0IF9ldmVudENvbnRyb2xsZXIgPSBldmVudENvbnRyb2xsZXIodGhpcyk7XG5cbiAgICBcblxuXG4gICAgY29uc3QgZ2V0SW5mbyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGBJIGFtIGxvZ2ljQ29udHJvbGxlci5nZXRJbmZvKClcbiAgICAgICAgVGhlc2UgYXJlIG15IHZhbHVlczpcbiAgICAgICAgX3Byb2plY3RDb250YWluZXI6ICR7X3Byb2plY3RDb250YWluZXJ9O1xuICAgICAgICBfY29udGVudERpdjogJHtfY29udGVudERpdn07XG4gICAgICAgIGA7XG4gICAgfVxuICAgIHRoaXMuZ2V0SW5mbyA9IGdldEluZm87XG5cblxuXG4gICAgY29uc3QgaW5pdCA9IChuZXdQcm9qZWN0Q29udGFpbmVyT2JqKSA9PiB7XG4gICAgICAgIF9wcm9qZWN0Q29udGFpbmVyID0gbmV3UHJvamVjdENvbnRhaW5lck9iajtcbiAgICB9XG5cbiAgICBjb25zdCBnZW5lcmF0ZVByb2plY3RDb250YWluZXJPYmogPSAoKSA9PiB7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlY29uZCB0ZXN0JylcblxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyRGl2QXJyID0gX2Rpc3BsYXlDb250cm9sbGVyLmdlbmVyYXRlUHJvamVjdENvbnRhaW5lckRpdigpOyBcblxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyRGl2ID0gcHJvamVjdENvbnRhaW5lckRpdkFyclswXVxuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBwcm9qZWN0Q29udGFpbmVyRGl2QXJyWzFdO1xuICAgICAgICBfcHJvamVjdENvbnRhaW5lci5pbml0KFtdLCBwcm9qZWN0Q29udGFpbmVyRGl2LCBhZGRCdXR0b24sIGZhbHNlKTs7XG4gICAgICAgIF9ldmVudENvbnRyb2xsZXIuYXR0YWNoUHJvamVjdENvbnRhaW5lckFkZEJ1dHRvbkxpc3RlbmVyKGFkZEJ1dHRvbik7XG5cbiAgICAgICAgX2NvbnRlbnREaXYuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lckRpdik7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvamVjdENvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9wcm9qZWN0Q29udGFpbmVyO1xuICAgIH1cbiAgICB0aGlzLmdldFByb2plY3RDb250YWluZXIgPSBnZXRQcm9qZWN0Q29udGFpbmVyO1xuXG4gICAgLy8gSW4gYSBwZXJmZWN0IHdvcmxkLCB0aGlzIHNldHRlciBmdW5jdGlvbiB0eXBlY2hlY2tzIG5ld1Byb2plY3RDb250YWluZXIgdG8gYWx3YXlzIHJlY2VpdmUgYSBwcm9qZWN0Q29udGFpbmVyT2JqIGZyb20gcHJvamVjdENvbnRhaW5lck9iai4gRm9yIHRoZSBwdXJwb3NlIG9mIHRoaXMgcHJvamVjdCwgaXQgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCBvbmNlIHdoZW4gdGhlIHBhZ2UgaXMgZmlyc3QgbG9hZGVkIGFuZCBub3QgY2hhbmdlZCBmcm9tIHRoYXQgaW5pdGlhbCBjb250YWluZXIgLSBldmVuIGlmIG5vIHByb2plY3RzIGV4aXN0LCB0aGUgY29udGFpbmVyIHNob3VsZCBzdGlsbCBiZSBwcmVzZW50LiBcbiAgICBjb25zdCBzZXRQcm9qZWN0Q29udGFpbmVyID0gKG5ld1Byb2plY3RDb250YWluZXIpID0+IHtcbiAgICAgICAgX3Byb2plY3RDb250YWluZXIgPSBuZXdQcm9qZWN0Q29udGFpbmVyO1xuICAgIH1cbiAgICB0aGlzLnNldFByb2plY3RDb250YWluZXIgPSBzZXRQcm9qZWN0Q29udGFpbmVyO1xuXG4gICAgY29uc3QgX3RvZ2dsZVByb2plY3RDb250YWluZXJBZGRCdXR0b25NZW51ID0gKCkgPT4ge1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGB0b2dnbGUgcHJvamVjdENvbnRhaW5lck9iaidzIGFkZEJ1dHRvbk1lbnVgKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnQ2hlY2sgaWYgdGhlIG1lbnUgaXMgaW4gYSBzdGF0ZSB0byBiZSBvcGVuZWQnKTtcbiAgICAgICAgaWYoICFfcHJvamVjdENvbnRhaW5lci5nZXRBZGRCdXR0b25NZW51KCkpIHtcbiAgICAgICAgICAgIF9wcm9qZWN0Q29udGFpbmVyLnRvZ2dsZUFkZEJ1dHRvbk1lbnUoKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKF9wcm9qZWN0Q29udGFpbmVyLmdldEFkZEJ1dHRvbk1lbnUoKSk7XG5cbiAgICAgICAgICAgIGxldCBfYWRkTWVudSA9IF9kaXNwbGF5Q29udHJvbGxlci5nZW5lcmF0ZVByb2plY3RDb250YWluZXJBZGRCdXR0b25NZW51KCk7XG4gICAgICAgICAgICBfcHJvamVjdENvbnRhaW5lci5nZXRQcm9qZWN0Q29udGFpbmVyRGl2KCkuYXBwZW5kQ2hpbGQoX2FkZE1lbnVbMF0pO1xuXG4gICAgICAgICAgICAvLyBBZGQgZXZlbnQgaGFuZGxlcnMgdG8gcHJpb3JpdHkgY29sb3Igc2xpZGVyLCBhbmQgYnV0dG9ucywga2VlcCByZWZlcmVuY2Ugb2YgZGl2IG9iamVjdHMgcmVmZXJyaW5nIHRvIGlucHV0LnZhbHVlXG5cblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZEJ1dHRvbk1lbnUgaXMgaW4gYSBzdGF0ZSB0byBiZSBvcGVuZWQsIGdvIHRvIGRpc3BsYXlDb250cm9sbGVyIGFuZCBidWlsZCB0aGUgZGl2IG5lY2Vzc2FyeSB0byBwb3B1bGF0ZSB0aGUgbWVudScpO1xuXG4gICAgICAgICAgICAvLyBBZGRpbmcgRXZlbnQgbGlzdGVuZXJzIHRvIGFwcHJvcHJpYXRlIG9iamVjdHMgaW4gYWRkQnV0dG9uTWVudVxuICAgICAgICAgICAgLy8gcmV0dXJuIFtmaW5pc2hlZERpdiwgbmFtZUlucHV0LCBwcmlvcml0eUlucHV0LCBwcmlvcml0eUxhYmVsLCBkdWVEYXRlSW5wdXQsIGNyZWF0aW9uRGF0ZSwgc2F2ZUJ1dHRvbiwgY2FuY2VsQnV0dG9uXVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQWRkaW5nIGV2ZW50bGlzdGVuZXIgdG8gY2FuY2VsIGJ1dHRvbicpO1xuICAgICAgICAgICAgX2V2ZW50Q29udHJvbGxlci5hdHRhY2hBZGRQcm9qZWN0Q2FuY2VsKF9hZGRNZW51WzddLCBfYWRkTWVudVswXSk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdBZGRpbmcgZXZlbnRMaXN0ZW5lciB0byBwcmlvcml0eSBzbGlkZXInKTtcbiAgICAgICAgICAgIF9ldmVudENvbnRyb2xsZXIuYXR0YWNoQWRkUHJvamVjdFByaW9yaXR5U2xpZGVyKF9hZGRNZW51WzJdLCBfYWRkTWVudVszXSk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdBZGRpbmcgZnVuY3Rpb25hbGl0eSB0byBzYXZlIGJ1dHRvbicpO1xuICAgICAgICAgICAgX2V2ZW50Q29udHJvbGxlci5hdHRhY2hBZGRQcm9qZWN0U2F2ZShfYWRkTWVudVs2XSwgX2FkZE1lbnUpO1xuXG5cblxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnX3Byb2plY3RDb250YWluZXJNZW51IGlzIHRydWUsIGFuZCBpcyBhbHJlYWR5IG9wZW46IF9wcm9qZWN0Q29udGFpbmVyLl9hZGRCdXR0b25NZW51OiAnICsgX3Byb2plY3RDb250YWluZXIuZ2V0QWRkQnV0dG9uTWVudSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5fdG9nZ2xlUHJvamVjdENvbnRhaW5lckFkZEJ1dHRvbk1lbnUgPSBfdG9nZ2xlUHJvamVjdENvbnRhaW5lckFkZEJ1dHRvbk1lbnU7XG5cbiAgICBjb25zdCBfYWRkUHJvamVjdFNhdmVCdXR0b24gPSAodmFsdWVzKSA9PiB7XG4gICAgICAgIC8vIHZhbHVlcyBpcyB0aGUgX2FkZE1lbnUgYXJyYXkgY3JlYXRlZCBpbiBfdG9nZ2xlUHJvamVjdENvbnRhaW5lckFkZEJ1dHRvbk1lbnVcbiAgICAgICAgXG4gICAgICAgIC8vIGdldCB2YWx1ZXMgZnJvbSBhcHByb3ByaWF0ZSBpbnB1dCBmaWVsZHNcbiAgICAgICAgLy8gRG8gdGhpbmcgdG8gdmFsdWVzXG4gICAgICAgIC8vIGNsb3NlIG1lbnVcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZXMpO1xuXG4gICAgICAgIC8vIGxldCBzYW1wbGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy8gc2FtcGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtcGFuZScpO1xuICAgICAgICAvLyBfcHJvamVjdENvbnRhaW5lci5nZXRQcm9qZWN0Q29udGFpbmVyRGl2KCkuYXBwZW5kQ2hpbGQoc2FtcGxlRGl2KTtcblxuICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSB2YWx1ZXNbMV0udmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSB2YWx1ZXNbMl0udmFsdWU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlc1s0XS52YWx1ZSlcbiAgICAgICAgbGV0IGR1ZURhdGVJbnB1dDtcbiAgICAgICAgaWYgKCB2YWx1ZXNbNF0udmFsdWUgKSB7XG4gICAgICAgICAgICBkdWVEYXRlSW5wdXQgPSBuZXcgRGF0ZSh2YWx1ZXNbNF0udmFsdWVBc0RhdGUpO1xuICAgICAgICAgICAgLy8gQ29tcGVuc2F0aW5nIGZvciB0aW1lem9uZU9mZnNldCBpbiBkaXNwbGF5XG4gICAgICAgICAgICBsZXQgdGltZXpvbmVPZmZzZXQgPSBkdWVEYXRlSW5wdXQuZ2V0VGltZXpvbmVPZmZzZXQoKVxuICAgICAgICAgICAgbGV0IG5ld0xvY2FsaXplZER1ZURhdGVJbnB1dCA9IGR1ZURhdGVJbnB1dC5nZXRUaW1lKCkgKyAodGltZXpvbmVPZmZzZXQgKiA2MDAwMCk7XG4gICAgICAgICAgICBkdWVEYXRlSW5wdXQgPSBuZXcgRGF0ZShuZXdMb2NhbGl6ZWREdWVEYXRlSW5wdXQpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkdWVEYXRlSW5wdXQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGR1ZURhdGVJbnB1dCk7XG4gICAgICAgIGNvbnN0IGNyZWF0aW9uRGF0ZUlucHV0ID0gdmFsdWVzWzVdO1xuICAgICAgICAvLyBjb25zdCBwcm9qZWN0RGl2SW5wdXQgPSBzYW1wbGVEaXY7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coYEkgYW0gU2F2ZSBidXR0b24sIHlvdSBjbGlja2VkIG1lLiBIZXJlJ3Mgd2hhdCBJIGFtIHJldHVybmluZzogXG4gICAgICAgIC8vIG5hbWVJbnB1dDogJHtuYW1lSW5wdXR9XG4gICAgICAgIC8vIHByaW9yaXR5SW5wdXQ6ICR7cHJpb3JpdHlJbnB1dH1cbiAgICAgICAgLy8gZHVlRGF0ZUlucHV0OiAke2R1ZURhdGVJbnB1dH1cbiAgICAgICAgLy8gY3JlYXRpb25EYXRlOiAke2NyZWF0aW9uRGF0ZUlucHV0fWApXG4gICAgICAgIFxuICAgICAgICBfZ2VuZXJhdGVQcm9qZWN0KG5hbWVJbnB1dCwgY3JlYXRpb25EYXRlSW5wdXQsIGR1ZURhdGVJbnB1dCwgcHJpb3JpdHlJbnB1dCwgW10pO1xuXG5cbiAgICAgICAgLy8gRG8gdGhlIHRoaW5nIHRvIGluc3RhbnRpYXRlIGEgbmV3IHByb2plY3QgaGVyZVxuXG4gICAgICAgIC8vIC8vIEdlbmVyYXRlIGFwcHJvcHJpYXRlIHByb2plY3RQYW5lIGRpdiBoZXJlXG4gICAgICAgIC8vIC8vICAtLS0tLS0tIFhYWFVQREFURVhYWCAtLS0tLS0tXG4gICAgICAgICAgICAgICBcbiAgICAgICAgLy8gbGV0IHRvZG9MaXN0SW5wdXQgPSBbXTtcbiAgICAgICAgLy8gbGV0IHByb2plY3RQYW5lVmFsdWVzID0gX2Rpc3BsYXlDb250cm9sbGVyLmdlbmVyYXRlUHJvamVjdFBhbmUobmFtZUlucHV0LCBwcmlvcml0eUlucHV0LCBkdWVEYXRlSW5wdXQsIGNyZWF0aW9uRGF0ZUlucHV0LCB0b2RvTGlzdElucHV0KTtcblxuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyhfcHJvamVjdENvbnRhaW5lci5nZXRJbmZvKCkpO1xuICAgICAgICAvLyBfcHJvamVjdENvbnRhaW5lci5jcmVhdGVQcm9qZWN0KCBuYW1lSW5wdXQsIGNyZWF0aW9uRGF0ZUlucHV0LCBkdWVEYXRlSW5wdXQsIHByaW9yaXR5SW5wdXQsIHByb2plY3REaXZJbnB1dCApO1xuXG5cbi8vIHByb2plY3ROYW1lSW5wdXQsIGNyZWF0aW9uRGF0ZUlucHV0LCBkdWVEYXRlSW5wdXQsIHByb2plY3RQcmlvcml0eUlucHV0LCBwcm9qZWN0RGl2SW5wdXQsIHRvZG9MaXN0SW5wdXRcblxuICAgICAgICAvLyBDbG9zaW5nIHRoZSBhZGRQcm9qZWN0IE1lbnVcbiAgICAgICAgX3Byb2plY3RDb250YWluZXIudG9nZ2xlQWRkQnV0dG9uTWVudSgpO1xuICAgICAgICBfcHJvamVjdENvbnRhaW5lci5nZXRQcm9qZWN0Q29udGFpbmVyRGl2KCkucmVtb3ZlQ2hpbGQodmFsdWVzWzBdKTtcblxuICAgIH1cbiAgICB0aGlzLl9hZGRQcm9qZWN0U2F2ZUJ1dHRvbiA9IF9hZGRQcm9qZWN0U2F2ZUJ1dHRvbjtcblxuICAgIGNvbnN0IF9hZGRQcm9qZWN0Q2FuY2VsQnV0dG9uID0gKGRpdikgPT4ge1xuICAgICAgICAvLyBUb2dnbGUgbWVudSBib29sIHRvIGNsb3NlZFxuICAgICAgICAvLyBDbG9zZSBtZW51XG4gICAgICAgIGlmKCBfcHJvamVjdENvbnRhaW5lci5nZXRBZGRCdXR0b25NZW51KCkgKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgQ3VycmVudCBzdGF0ZSBvZiAke19wcm9qZWN0Q29udGFpbmVyLmdldEFkZEJ1dHRvbk1lbnUoKX1gKTtcbiAgICAgICAgICAgIF9wcm9qZWN0Q29udGFpbmVyLnRvZ2dsZUFkZEJ1dHRvbk1lbnUoKTtcbiAgICAgICAgICAgIF9wcm9qZWN0Q29udGFpbmVyLmdldFByb2plY3RDb250YWluZXJEaXYoKS5yZW1vdmVDaGlsZChkaXYpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fYWRkUHJvamVjdENhbmNlbEJ1dHRvbiA9IF9hZGRQcm9qZWN0Q2FuY2VsQnV0dG9uO1xuICAgIFxuICAgIGNvbnN0IF91cGRhdGVQcmlvcml0eUNvbG9yID0gKHRhcmdldERpdiwgbmV3VmFsdWUpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmV3VmFsdWUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgSSBhbSBfdXBkYXRlUHJpb3JpdHlDb2xvciEgSSBoYXZlIGJlZW4gY2FsbGVkIG9uIHRhcmdldERpdjogJHt0YXJnZXREaXZ9IHdpdGggbmV3VmFsdWU6ICR7bmV3VmFsdWV9YClcbiAgICAgICAgLy8gY29uc29sZS5sb2codHlwZW9mIG5ld1ZhbHVlKTtcblxuICAgICAgICAvLyBUeXBlY2hhbmdpbmcgbmV3VmFsdWUgdG8gYSBzdHJpbmcgdG8gaGl0IHRoZSBzd2l0Y2ggc3RhdGVtZW50J3Mgc3RyaWN0IHR5cGUgY2hlY2tpbmdcbiAgICAgICAgLy8gbGV0IG5ld1ZhbHVlU3RyaW5nID0gJyc7XG4gICAgICAgIC8vIG5ld1ZhbHVlU3RyaW5nID0gbmV3VmFsdWVTdHJpbmcgKyBuZXdWYWx1ZTtcblxuICAgICAgICB0YXJnZXREaXYuY2xhc3NMaXN0LnJlbW92ZShcIm9uZVwiKTtcbiAgICAgICAgdGFyZ2V0RGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJ0d29cIik7XG4gICAgICAgIHRhcmdldERpdi5jbGFzc0xpc3QucmVtb3ZlKFwidGhyZWVcIik7XG4gICAgICAgIHRhcmdldERpdi5jbGFzc0xpc3QucmVtb3ZlKFwiZm91clwiKTtcbiAgICAgICAgdGFyZ2V0RGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJmaXZlXCIpO1xuXG4gICAgICAgIHN3aXRjaChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgdGFyZ2V0RGl2LmNsYXNzTGlzdC5hZGQoXCJvbmVcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcyJzpcbiAgICAgICAgICAgICAgICB0YXJnZXREaXYuY2xhc3NMaXN0LmFkZChcInR3b1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzMnOlxuICAgICAgICAgICAgICAgIHRhcmdldERpdi5jbGFzc0xpc3QuYWRkKFwidGhyZWVcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc0JzpcbiAgICAgICAgICAgICAgICB0YXJnZXREaXYuY2xhc3NMaXN0LmFkZChcImZvdXJcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc1JzpcbiAgICAgICAgICAgICAgICB0YXJnZXREaXYuY2xhc3NMaXN0LmFkZChcImZpdmVcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICB0aGlzLl91cGRhdGVQcmlvcml0eUNvbG9yID0gX3VwZGF0ZVByaW9yaXR5Q29sb3I7XG5cbiAgICBjb25zdCBfdXBkYXRlVG9kb1ByaW9yaXR5Q29sb3IgPSAodGFyZ2V0RGl2LCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdWYWx1ZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBJIGFtIF91cGRhdGVQcmlvcml0eUNvbG9yISBJIGhhdmUgYmVlbiBjYWxsZWQgb24gdGFyZ2V0RGl2OiAke3RhcmdldERpdn0gd2l0aCBuZXdWYWx1ZTogJHtuZXdWYWx1ZX1gKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgbmV3VmFsdWUpO1xuXG4gICAgICAgIC8vIFR5cGVjaGFuZ2luZyBuZXdWYWx1ZSB0byBhIHN0cmluZyB0byBoaXQgdGhlIHN3aXRjaCBzdGF0ZW1lbnQncyBzdHJpY3QgdHlwZSBjaGVja2luZ1xuICAgICAgICAvLyBsZXQgbmV3VmFsdWVTdHJpbmcgPSAnJztcbiAgICAgICAgLy8gbmV3VmFsdWVTdHJpbmcgPSBuZXdWYWx1ZVN0cmluZyArIG5ld1ZhbHVlO1xuXG4gICAgICAgIHRhcmdldERpdi5jbGFzc0xpc3QucmVtb3ZlKFwib25lLXRvZG9cIik7XG4gICAgICAgIHRhcmdldERpdi5jbGFzc0xpc3QucmVtb3ZlKFwidHdvLXRvZG9cIik7XG4gICAgICAgIHRhcmdldERpdi5jbGFzc0xpc3QucmVtb3ZlKFwidGhyZWUtdG9kb1wiKTtcbiAgICAgICAgdGFyZ2V0RGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJmb3VyLXRvZG9cIik7XG4gICAgICAgIHRhcmdldERpdi5jbGFzc0xpc3QucmVtb3ZlKFwiZml2ZS10b2RvXCIpO1xuXG4gICAgICAgIHN3aXRjaChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgdGFyZ2V0RGl2LmNsYXNzTGlzdC5hZGQoXCJvbmUtdG9kb1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgICAgICAgIHRhcmdldERpdi5jbGFzc0xpc3QuYWRkKFwidHdvLXRvZG9cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICczJzpcbiAgICAgICAgICAgICAgICB0YXJnZXREaXYuY2xhc3NMaXN0LmFkZChcInRocmVlLXRvZG9cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc0JzpcbiAgICAgICAgICAgICAgICB0YXJnZXREaXYuY2xhc3NMaXN0LmFkZChcImZvdXItdG9kb1wiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzUnOlxuICAgICAgICAgICAgICAgIHRhcmdldERpdi5jbGFzc0xpc3QuYWRkKFwiZml2ZS10b2RvXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgdGhpcy5fdXBkYXRlVG9kb1ByaW9yaXR5Q29sb3IgPSBfdXBkYXRlVG9kb1ByaW9yaXR5Q29sb3I7XG5cbiAgICBjb25zdCBfZ2VuZXJhdGVQcm9qZWN0ID0gKG5hbWVJbnB1dCwgY3JlYXRpb25EYXRlSW5wdXQsIGR1ZURhdGVJbnB1dCwgcHJpb3JpdHlJbnB1dCwgdG9kb0xpc3RJbnB1dCkgPT4ge1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIHByb2plY3RQYW5lIERpdlxuICAgICAgICAvLyBHZW5lcmF0ZSBwcm9qZWN0T2JqXG4gICAgICAgIC8vIEF0dGFjaCBmdW5jdGlvbmFsaXR5IHRvIGFwcHJvcHJpYXRlIERpdiBlbGVtZW50cywgdHlpbmcgdGhlbSB0byBwcm9qZWN0T2JqIHZhbHVlc1xuXG4gICAgICAgIC8vIFNhbXBsZSB0b2RvTGlzdCBmb3IgdXNlIGluIHRlc3QgLSBYWFhVUERBVEVYWFhcbiAgICAgICAgbGV0IHNhbXBsZVRvZG8gPSB0b2RvT2JqKCk7XG4gICAgICAgIHNhbXBsZVRvZG8uaW5pdCgnc2FtcGxlVHJ1ZSB3aXRoIGEgcmVhbGx5IGxvbmcgbmFtZSB0aGF0IGlzIHN1cHBvc2VkIHRvIG92ZXJmbG93IG9udG8gdGhlIG5leHQgbGluZSwgSSByZWFsbHkgaG9wZSB0aGF0IGV2ZXJ5dGhpbmcgd29ya3Mgb3V0IG9rYXksIHRyaW0gaXQgY29ycmVjdGx5IHBsZWFzZSEnLCAnZGVzY3JpcHRpb24nLCBuZXcgRGF0ZSgpLCBuZXcgRGF0ZSgpLCA1LCAnbm90ZXMnLCBbXSwgdHJ1ZSk7XG4gICAgICAgIGxldCBzYW1wbGVUb2RvMiA9IHRvZG9PYmooKTtcbiAgICAgICAgc2FtcGxlVG9kbzIuaW5pdCgnc2FtcGxlRmFsc2Ugd2l0aCBhIHJlYWxseSBsb25nIG5hbWUgdGhhdCBpcyBzdXBwb3NlZCB0byBvdmVyZmxvdyBvbnRvIHRoZSBuZXh0IGxpbmUsIEkgcmVhbGx5IGhvcGUgdGhhdCBldmVyeXRoaW5nIHdvcmtzIG91dCBva2F5LCB0cmltIGl0IGNvcnJlY3RseSBwbGVhc2UhJywgJ2Rlc2NyaXB0aW9uJywgbmV3IERhdGUoKSwgbmV3IERhdGUoKSwgNCwgJ25vdGVzJywgW10sIGZhbHNlKTtcbiAgICAgICAgbGV0IHNhbXBsZVRvZG8zID0gdG9kb09iaigpO1xuICAgICAgICBzYW1wbGVUb2RvMy5pbml0KCdGYWxzZTEyMzQ1Njc4OTAxMjM0NTY3ODkwMTI0NTY3ODkwMTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTc4OTAxMjM0NTY3ODkwJywgJ2Rlc2NyaXB0aW9uJywgbmV3IERhdGUoKSwgbmV3IERhdGUoKSwgMiwgJ25vdGVzJywgW10sIGZhbHNlKTtcbiAgICAgICAgbGV0IHNhbXBsZVRvZG80ID0gdG9kb09iaigpO1xuICAgICAgICBzYW1wbGVUb2RvNC5pbml0KCdUcnVlMTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjQ1Njc4OTAxMjM0NTY3ODkwMTIzNDU2Nzg5MDEyMzQ1Nzg5MDEyMzQ1Njc4OTAnLCAnZGVzY3JpcHRpb24nLCBuZXcgRGF0ZSgpLCBuZXcgRGF0ZSgpLCAxLCAnbm90ZXMnLCBbXSwgdHJ1ZSk7XG5cblxuICAgICAgICBsZXQgc2FtcGxlVG9kb0xpc3QgPSBbc2FtcGxlVG9kbyxzYW1wbGVUb2RvMiwgc2FtcGxlVG9kbzMsIHNhbXBsZVRvZG80XTtcblxuXG4gICAgICAgIC8vIFhYWFVQREFURVhYWCBSZW1vdmUgdGhpcyBsaW5lIHdoZW4gYXBwcm9wcmlhdGVcbiAgICAgICAgdG9kb0xpc3RJbnB1dCA9IHRvZG9MaXN0SW5wdXQuY29uY2F0KHNhbXBsZVRvZG9MaXN0KTtcbiAgICAgICAgLy8gWFhYVVBEQVRFWFhYIEFwcGVuZGluZyBzYW1wbGVUb2RvTGlzdCB0byB0b2RvTGlzdElucHV0LCByZW1vdmUgdGhpcyBsYXRlclxuXG4gICAgICAgIC8vIEdlbmVyYXRlIHByb2plY3RQYW5lIERpdlxuICAgICAgICBsZXQgcHJvamVjdFBhbmVEaXZWYWx1ZXMgPSBfZGlzcGxheUNvbnRyb2xsZXIuZ2VuZXJhdGVQcm9qZWN0UGFuZShuYW1lSW5wdXQsIHByaW9yaXR5SW5wdXQsIGR1ZURhdGVJbnB1dCwgY3JlYXRpb25EYXRlSW5wdXQsIHRvZG9MaXN0SW5wdXQpO1xuICAgICAgICBfcHJvamVjdENvbnRhaW5lci5nZXRQcm9qZWN0Q29udGFpbmVyRGl2KCkuYXBwZW5kQ2hpbGQocHJvamVjdFBhbmVEaXZWYWx1ZXNbMF0pO1xuXG4gICAgICAgIC8vIHVwZGF0ZVByaW9yaXR5IGNvbG9yIG9mIHByb2plY3RQYW5lXG4gICAgICAgIF91cGRhdGVQcmlvcml0eUNvbG9yKHByb2plY3RQYW5lRGl2VmFsdWVzWzJdLCBwcmlvcml0eUlucHV0KTtcblxuICAgICAgIFxuICAgICAgICAvLyBHZW5lcmF0ZSBwcm9qZWN0T2JqXG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gX3Byb2plY3RDb250YWluZXIuY3JlYXRlUHJvamVjdCggbmFtZUlucHV0LCBjcmVhdGlvbkRhdGVJbnB1dCwgZHVlRGF0ZUlucHV0LCBwcmlvcml0eUlucHV0LHByb2plY3RQYW5lRGl2VmFsdWVzWzBdLCB0b2RvTGlzdElucHV0ICk7XG5cbiAgICAgICAgLy8gQXR0YWNoIHByb2plY3RPYmogdG8gX3Byb2plY3RDb250YWluZXIuX3Byb2plY3RBcnJbXVxuICAgICAgICBfcHJvamVjdENvbnRhaW5lci5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuXG5cbiAgICAgICAgLy8gQXR0YWNoIGZ1bmN0aW9uYWxpdHkgdG8gYXBwcm9wcmlhdGUgRGl2IGVsZW1lbnRzLCB0eWluZyB0aGVtIHRvIHByb2plY3RPYmogdmFsdWVzXG4gICAgICAgIG5ld1Byb2plY3Quc2V0UHJvamVjdERpdihwcm9qZWN0UGFuZURpdlZhbHVlc1swXSk7XG5cbiAgICAgICAgLy8gYXR0YWNoIHByb2plY3RFZGl0QnV0dG9uIGZ1bmN0aW9uYWxpdHlcbiAgICAgICAgX2V2ZW50Q29udHJvbGxlci5hdHRhY2hQcm9qZWN0RWRpdEJ1dHRvbihwcm9qZWN0UGFuZURpdlZhbHVlc1sxXSwgbmV3UHJvamVjdClcblxuICAgICAgICAvLyBBdHRhY2ggdG9kb0J1dHRvbiBmdW5jdGlvbmFsaXR5XG4gICAgICAgIF9ldmVudENvbnRyb2xsZXIuYXR0YWNoUHJvamVjdFRvZG9BZGRCdXR0b24ocHJvamVjdFBhbmVEaXZWYWx1ZXNbM10sIG5ld1Byb2plY3QpO1xuICAgICAgICBfZXZlbnRDb250cm9sbGVyLmF0dGFjaFByb2plY3RUb2RvRGVsZXRlQnV0dG9uKHByb2plY3RQYW5lRGl2VmFsdWVzWzRdLCBuZXdQcm9qZWN0KTtcblxuICAgICAgICAvLyBBdHRhY2ggdG9kb0RpdiBGdW5jdGlvbmFsaXR5XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1Byb2plY3QuZ2V0VG9kb0xpc3QoKSk7XG4gICAgICAgIG5ld1Byb2plY3QuZ2V0VG9kb0xpc3QoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgX2V2ZW50Q29udHJvbGxlci5hdHRhY2hUb2RvTGlzdGVuZXJzKGVsZW1lbnQsIG5ld1Byb2plY3QpO1xuICAgICAgICB9KVxuICAgICAgICAvLyBYWFhVUERBVEVYWFggUmVwbGFjZSB0aGUgYWJvdmUgZnVuY3Rpb24gdG8gdGFrZSB0b0RvIGVsZW1lbnRzIGZyb20gYmVsb3dcbiAgICAgICAgLy8gdG9kb0xpc3RJbnB1dC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAvLyAgICAgX2V2ZW50Q29udHJvbGxlci5hdHRhY2hUb2RvTGlzdGVuZXJzKGVsZW1lbnQsIG5ld1Byb2plY3QpO1xuICAgICAgICAvLyB9KVxuXG5cblxuXG4gICAgfVxuICAgIHRoaXMuX2dlbmVyYXRlUHJvamVjdCA9IF9nZW5lcmF0ZVByb2plY3Q7XG5cbiAgICBjb25zdCBfZWRpdFByb2plY3QgPSAodGFyZ2V0UHJvamVjdCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgWW91IGNsaWNrZWQgdGhlIF9lZGl0UHJvamVjdCBidXR0b24gdGFyZ2V0aW5nIHRoZSBwcm9qZWN0OiBgKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0UHJvamVjdC5nZXRJbmZvKCkpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBtZW51T3BlblxuICAgICAgICBpZih0YXJnZXRQcm9qZWN0LmdldFByb2plY3RNZW51T3BlbigpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yISBFZGl0IFByb2plY3QgbWVudSBpcyByZXR1cm5pbmcgdHJ1ZSwgYW5kIGlzIGFscmVhZHkgb3BlbiFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRQcm9qZWN0LnRvZ2dsZVByb2plY3RNZW51T3BlbigpO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIC8vIEdlbmVyYXRlIGVkaXRQcm9qZWN0UGFuZVxuICAgICAgICBjb25zdCBlZGl0UGFuZSA9IF9kaXNwbGF5Q29udHJvbGxlci5nZW5lcmF0ZVByb2plY3RFZGl0UGFuZSh0YXJnZXRQcm9qZWN0KTtcblxuXG5cbiAgICAgICAgdGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0RGl2KCkuYXBwZW5kQ2hpbGQoZWRpdFBhbmVbMF0pO1xuXG4gICAgICAgIC8vIEFzc2lnbiBpbml0aWFsIFByaW9yaXR5IFNsaWRlciBDb2xvclxuICAgICAgICBfdXBkYXRlUHJpb3JpdHlDb2xvcihlZGl0UGFuZVsyXSwgdGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0UHJpb3JpdHkoKSk7XG5cbiAgICAgICAgLy8gQXR0YWNoIFByaW9yaXR5IFNsaWRlciBmdW5jdGlvbmFsaXR5XG4gICAgICAgIF9ldmVudENvbnRyb2xsZXIuYXR0YWNoQWRkUHJvamVjdFByaW9yaXR5U2xpZGVyKGVkaXRQYW5lWzFdLCBlZGl0UGFuZVsyXSk7XG4gICAgICAgIC8vIF91cGRhdGVQcmlvcml0eUNvbG9yKGVkaXRQYW5lWzBdLCB0YXJnZXRQcm9qZWN0LmdldFByb2plY3RQcmlvcml0eSgpKTtcblxuXG4gICAgICAgIC8vIEF0dGFjaCBldmVudExpc3RlbmVycyB0byBTYXZlLCBDYW5jZWwgYW5kIERlbGV0ZSBidXR0b25zXG4gICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0U2F2ZUJ1dHRvbiA9IGVkaXRQYW5lWzNdO1xuICAgICAgICBjb25zdCBlZGl0UHJvamVjdENhbmNlbEJ1dHRvbiA9IGVkaXRQYW5lWzRdO1xuICAgICAgICBjb25zdCBlZGl0UHJvamVjdERlbGV0ZUJ1dHRvbiA9IGVkaXRQYW5lWzVdO1xuICAgICAgICBjb25zdCBzYXZlZElucHV0cyA9IGVkaXRQYW5lWzZdO1xuICAgICAgICBfZXZlbnRDb250cm9sbGVyLmF0dGFjaFByb2plY3RFZGl0U2F2ZUJ1dHRvbihlZGl0UHJvamVjdFNhdmVCdXR0b24sIHRhcmdldFByb2plY3QsIHNhdmVkSW5wdXRzKTtcbiAgICAgICAgX2V2ZW50Q29udHJvbGxlci5hdHRhY2hQcm9qZWN0RWRpdENhbmNlbEJ1dHRvbihlZGl0UHJvamVjdENhbmNlbEJ1dHRvbiwgdGFyZ2V0UHJvamVjdCk7XG4gICAgICAgIF9ldmVudENvbnRyb2xsZXIuYXR0YWNoUHJvamVjdEVkaXREZWxldGVCdXR0b24oZWRpdFByb2plY3REZWxldGVCdXR0b24sIHRhcmdldFByb2plY3QpO1xuXG5cblxuXG4gICAgfVxuICAgIHRoaXMuX2VkaXRQcm9qZWN0ID0gX2VkaXRQcm9qZWN0O1xuXG4gICAgY29uc3QgX2VkaXRQcm9qZWN0U2F2ZUJ1dHRvbiA9ICh0YXJnZXRQcm9qZWN0LCBzYXZlZFZhbHVlcykgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgWW91IGNsaWNrZWQgdGhlIFNhdmUgYnV0dG9uIG9uIHRoZSBFRElUIHBhZ2Ugb2YgdGhlIGZvbGxvd2luZyBwcm9qZWN0OiBgKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0UHJvamVjdC5nZXRJbmZvKCkpO1xuXG4gICAgICAgIC8vIE9uIHByb2plY3Qgc2F2ZSwgY2xvc2UgZWRpdFBhbmUsIHdyaXRlIG5ldyB2YWx1ZXMgdG8gcHJvamVjdE9iaiwgdXBkYXRlIERPTSB2YWx1ZXMgdG8gbWF0Y2ggbmV3IHByb2plY3RPYmogdmFsdWVzLCB0b2dnbGVQcm9qZWN0TWVudU9wZW4oKVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBJIGhhdmUgc2F2ZWRWYWx1ZXMhIFRob3NlIGFyZSA6IGApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgTmFtZTogJHtzYXZlZFZhbHVlc1swXS52YWx1ZX1gKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFByaW9yaXR5OiAke3RvU3RyaW5nKHNhdmVkVmFsdWVzWzFdLnZhbHVlKX1gKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYER1ZSBEYXRlOiAke3NhdmVkVmFsdWVzWzJdLnZhbHVlQXNEYXRlfWApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgQ3JlYXRpb24gRGF0ZTogJHtzYXZlZFZhbHVlc1szXS52YWx1ZUFzRGF0ZX1gKTtcblxuXG4gICAgICAgIC8vIFdyaXRlIG5ldyB2YWx1ZXMgXG4gICAgICAgIHRhcmdldFByb2plY3Quc2V0UHJvamVjdE5hbWUoc2F2ZWRWYWx1ZXNbMF0udmFsdWUpO1xuICAgICAgICB0YXJnZXRQcm9qZWN0LnNldFByb2plY3RQcmlvcml0eShzYXZlZFZhbHVlc1sxXS52YWx1ZSk7XG5cblxuICAgICAgICAgICAgLy8gV3JpdGUgbmV3IGR1ZURhdGUgaWYgbmV3IGR1ZURhdGUgIT09IG9sZER1ZURhdGUgdmFsdWVzXG4gICAgICAgICAgICBsZXQgbmV3RHVlRGF0ZSA9IHNhdmVkVmFsdWVzWzJdLnZhbHVlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYG5ld0R1ZURhdGU6ICR7bmV3RHVlRGF0ZX1gKTsgLy8gZm9ybWF0IFwiMjAyMi0wMy0yMVwiXG4gICAgICAgICAgICBsZXQgb2xkRHVlRGF0ZSA9IHRhcmdldFByb2plY3QuZ2V0UHJvamVjdER1ZURhdGUoKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBvbGREdWVEYXRlOiAke29sZER1ZURhdGV9YCk7XG4gICAgICAgICAgICBsZXQgb2xkRHVlRGF0ZVN0cmluZyA9IGAke29sZER1ZURhdGUuZ2V0RnVsbFllYXIoKX0tYFxuICAgICAgICAgICAgaWYob2xkRHVlRGF0ZS5nZXRNb250aCgpICsgMSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgb2xkRHVlRGF0ZVN0cmluZyArPSBgMCR7b2xkRHVlRGF0ZS5nZXRNb250aCgpICsgMX0tYFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvbGREdWVEYXRlU3RyaW5nICs9IGAke29sZER1ZURhdGUuZ2V0TW9udGgoKSArIDF9LWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKG9sZER1ZURhdGUuZ2V0RGF0ZSgpIDwgMTApIHtcbiAgICAgICAgICAgICAgICBvbGREdWVEYXRlU3RyaW5nICs9IGAwJHtvbGREdWVEYXRlLmdldERhdGUoKX1gXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9sZER1ZURhdGVTdHJpbmcgKz0gYCR7b2xkRHVlRGF0ZS5nZXREYXRlKCl9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYG9sZER1ZURhdGVTdHJpbmc6ICR7b2xkRHVlRGF0ZVN0cmluZ31gKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBuZXdEdWVEYXRlOiAke25ld0R1ZURhdGV9IHZzICR7b2xkRHVlRGF0ZVN0cmluZ306IG9sZER1ZURhdGVTdHJpbmdgKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCBuZXdEdWVEYXRlICE9IG9sZER1ZURhdGVTdHJpbmcpO1xuICAgICAgICAgICAgaWYgKG5ld0R1ZURhdGUgIT09IG9sZER1ZURhdGVTdHJpbmcgKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYG5ld0R1ZURhdGUgIT09IG9sZER1ZURhdGVTdHJpbmchYCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFNldCBuZXcgZHVlIGRhdGUgdG8gJHtuZXdEdWVEYXRlfSB3aXRoIGN1cnJlbnQgdGltZSBmaWxsZWQgaW4hYCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0UHJvamVjdC5zZXRQcm9qZWN0RHVlRGF0ZShuZXcgRGF0ZShuZXdEdWVEYXRlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdyaXRlIG5ldyBjcmVhdGlvbkRhdGUgaWYgbmV3IGNyZWF0aW9uRGF0ZSAhPT0gb2xkQ3JlYXRpb25EYXRlIHZhbHVlc1xuICAgICAgICAgICAgbGV0IG5ld0NyZWF0aW9uRGF0ZSA9IHNhdmVkVmFsdWVzWzNdLnZhbHVlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYG5ld0NyZWF0aW9uRGF0ZTogJHtuZXdDcmVhdGlvbkRhdGV9YCk7IC8vIGZvcm1hdCBcIjIwMjItMDMtMjFcIlxuICAgICAgICAgICAgbGV0IG9sZENyZWF0aW9uRGF0ZSA9IHRhcmdldFByb2plY3QuZ2V0UHJvamVjdENyZWF0aW9uRGF0ZSgpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYG9sZENyZWF0aW9uRGF0ZTogJHtvbGRDcmVhdGlvbkRhdGV9YCk7XG4gICAgICAgICAgICBsZXQgb2xkQ3JlYXRpb25EYXRlU3RyaW5nID0gYCR7b2xkQ3JlYXRpb25EYXRlLmdldEZ1bGxZZWFyKCl9LWBcbiAgICAgICAgICAgIGlmKG9sZENyZWF0aW9uRGF0ZS5nZXRNb250aCgpICsgMSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgb2xkQ3JlYXRpb25EYXRlU3RyaW5nICs9IGAwJHtvbGRDcmVhdGlvbkRhdGUuZ2V0TW9udGgoKSArIDF9LWBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2xkQ3JlYXRpb25EYXRlU3RyaW5nICs9IGAke29sZENyZWF0aW9uRGF0ZS5nZXRNb250aCgpICsgMX0tYFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYob2xkQ3JlYXRpb25EYXRlLmdldERhdGUoKSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgb2xkQ3JlYXRpb25EYXRlU3RyaW5nICs9IGAwJHtvbGRDcmVhdGlvbkRhdGUuZ2V0RGF0ZSgpfWBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2xkQ3JlYXRpb25EYXRlU3RyaW5nICs9IGAke29sZENyZWF0aW9uRGF0ZS5nZXREYXRlKCl9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYG9sZENyZWF0aW9uRGF0ZVN0cmluZzogJHtvbGRDcmVhdGlvbkRhdGVTdHJpbmd9YCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgbmV3Q3JlYXRpb25EYXRlOiAke25ld0NyZWF0aW9uRGF0ZX0gdnMgJHtvbGRDcmVhdGlvbkRhdGVTdHJpbmd9OiBvbGRDcmVhdGlvbkRhdGVTdHJpbmdgKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCBuZXdDcmVhdGlvbkRhdGUgIT0gb2xkQ3JlYXRpb25EYXRlU3RyaW5nKTtcbiAgICAgICAgICAgIGlmIChuZXdDcmVhdGlvbkRhdGUgIT09IG9sZENyZWF0aW9uRGF0ZVN0cmluZyApIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgbmV3Q3JlYXRpb25EYXRlICE9PSBvbGRDcmVhdGlvbkRhdGVTdHJpbmchYCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFNldCBuZXcgZHVlIGRhdGUgdG8gJHtuZXdDcmVhdGlvbkRhdGV9IHdpdGggY3VycmVudCB0aW1lIGZpbGxlZCBpbiFgKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRQcm9qZWN0LnNldFByb2plY3RDcmVhdGlvbkRhdGUobmV3IERhdGUobmV3Q3JlYXRpb25EYXRlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAgLS0tLS0tLS0tLS0gdGFyZ2V0UHJvamVjdCdzIG5ldyBEYXRhIGlzOiAtLS0tLS0tLS0tLS0tYClcbiAgICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0UHJvamVjdC5nZXRJbmZvKCkpO1xuXG5cblxuICAgICAgICAvLyBVcGRhdGUgRE9NIHZhbHVlcyB0byBtYXRjaCBuZXcgcHJvamVjdE9iaiB2YWx1ZXNcbiAgICAgICAgbGV0IHRhcmdldFByb2plY3REaXYgPSB0YXJnZXRQcm9qZWN0LmdldFByb2plY3REaXYoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0UHJvamVjdERpdik7XG4gICAgICAgICAgICAvLyBUYXJnZXRpbmcgbmFtZSBwbGF0ZSBhbmQgYWRqdXN0aW5nIG5hbWVwbGF0ZSBwcmlvcml0eVxuICAgICAgICAgICAgbGV0IG5hbWVQbGF0ZURpdiA9IHRhcmdldFByb2plY3REaXYuZmlyc3RDaGlsZFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmFtZVBsYXRlRGl2KTtcbiAgICAgICAgICAgIF91cGRhdGVQcmlvcml0eUNvbG9yKG5hbWVQbGF0ZURpdiwgdGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0UHJpb3JpdHkoKSk7XG4gICAgICAgICAgICBsZXQgbmFtZVBsYXRlQ29udGVudERpdiA9IG5hbWVQbGF0ZURpdi5maXJzdENoaWxkO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmFtZVBsYXRlQ29udGVudERpdik7XG4gICAgICAgICAgICBuYW1lUGxhdGVDb250ZW50RGl2LmlubmVyVGV4dCA9IHRhcmdldFByb2plY3QuZ2V0UHJvamVjdE5hbWUoKTtcblxuICAgICAgICAgICAgLy8gVGFyZ2V0aW5nIFByb2plY3QgRGF0ZSBjb250YWluZXIgXG4gICAgICAgICAgICBsZXQgcHJvamVjdERhdGVDb250YWluZXJEaXYgPSBuYW1lUGxhdGVEaXYubmV4dFNpYmxpbmcubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0RGF0ZUNvbnRhaW5lckRpdik7XG4gICAgICAgICAgICBsZXQgcHJvamVjdENyZWF0aW9uRGF0ZURpdiA9IHByb2plY3REYXRlQ29udGFpbmVyRGl2LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAvLyBPbmx5IGNoYW5nZSBkaXNwbGF5ZWQgZGF0ZSBpZiB0aGUgZGF0ZXMgYWN0dWFsbHkgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKG5ld0NyZWF0aW9uRGF0ZSAhPT0gb2xkQ3JlYXRpb25EYXRlU3RyaW5nICkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBsb2NhbGl6ZWRDcmVhdGlvbkRhdGUgPSB0YXJnZXRQcm9qZWN0LmdldFByb2plY3RDcmVhdGlvbkRhdGUoKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2NhbGl6ZWREdWVEYXRlKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2NhbGl6ZWREdWVEYXRlLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgbGV0IHRpbWV6b25lT2Zmc2V0ID0gbG9jYWxpemVkQ3JlYXRpb25EYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGltZXpvbmVPZmZzZXQpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRpbWV6b25lT2Zmc2V0ICogNjAwMDApO1xuICAgICAgICAgICAgICAgIGxldCBuZXdMb2NhbGl6ZWRDcmVhdGlvbkRhdGUgPSBsb2NhbGl6ZWRDcmVhdGlvbkRhdGUuZ2V0VGltZSgpICsgKHRpbWV6b25lT2Zmc2V0ICogNjAwMDApO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdENyZWF0aW9uRGF0ZURpdi5pbm5lclRleHQgPSAobmV3IERhdGUobmV3TG9jYWxpemVkQ3JlYXRpb25EYXRlKSkudG9EYXRlU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcHJvamVjdER1ZURhdGVEaXYgPSBwcm9qZWN0RGF0ZUNvbnRhaW5lckRpdi5sYXN0Q2hpbGQ7XG4gICAgICAgICAgICAvLyBPbmx5IGNoYW5nZSBkaXNwbGF5ZWQgZGF0ZSBpZiB0aGUgZGF0ZXMgYWN0dWFsbHkgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKG5ld0R1ZURhdGUgIT09IG9sZER1ZURhdGVTdHJpbmcgKSB7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBsb2NhbGl6ZWREdWVEYXRlID0gdGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0RHVlRGF0ZSgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2FsaXplZER1ZURhdGUpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2FsaXplZER1ZURhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICBsZXQgdGltZXpvbmVPZmZzZXQgPSBsb2NhbGl6ZWREdWVEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGltZXpvbmVPZmZzZXQpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRpbWV6b25lT2Zmc2V0ICogNjAwMDApO1xuICAgICAgICAgICAgICAgIGxldCBuZXdMb2NhbGl6ZWREdWVEYXRlID0gbG9jYWxpemVkRHVlRGF0ZS5nZXRUaW1lKCkgKyAodGltZXpvbmVPZmZzZXQgKiA2MDAwMCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3TG9jYWxpemVkRHVlRGF0ZSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3IERhdGUobmV3TG9jYWxpemVkRHVlRGF0ZSkpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdER1ZURhdGVEaXYuaW5uZXJUZXh0ID0gKG5ldyBEYXRlKG5ld0xvY2FsaXplZER1ZURhdGUpKS50b0RhdGVTdHJpbmcoKTtcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gQ2xvc2UgZWRpdFBhbmUgYW5kIHRvZ2dsZVByb2plY3RNZW51T3BlbigpXG4gICAgICAgIGxldCBlZGl0UGFuZSA9IHRhcmdldFByb2plY3QuZ2V0UHJvamVjdERpdigpLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWVkaXQtcGFuZScpO1xuICAgICAgICB0YXJnZXRQcm9qZWN0LmdldFByb2plY3REaXYoKS5yZW1vdmVDaGlsZChlZGl0UGFuZSk7XG4gICAgICAgIHRhcmdldFByb2plY3QudG9nZ2xlUHJvamVjdE1lbnVPcGVuKCk7XG5cblxuXG4gICAgfVxuICAgIHRoaXMuX2VkaXRQcm9qZWN0U2F2ZUJ1dHRvbiA9IF9lZGl0UHJvamVjdFNhdmVCdXR0b25cblxuICAgIGNvbnN0IF9lZGl0UHJvamVjdENhbmNlbEJ1dHRvbiA9ICh0YXJnZXRQcm9qZWN0KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBZb3UgY2xpY2tlZCB0aGUgQ2FuY2VsIGJ1dHRvbiBvbiB0aGUgRURJVCBwYWdlIG9mIHRoZSBmb2xsb3dpbmcgcHJvamVjdDogYCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldFByb2plY3QuZ2V0SW5mbygpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0RGl2KCkpO1xuXG4gICAgICAgIGxldCBlZGl0UGFuZSA9IHRhcmdldFByb2plY3QuZ2V0UHJvamVjdERpdigpLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWVkaXQtcGFuZScpO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgZWRpdFBhbmUgZGl2IENoaWxkIGVsZW1lbnQgZnJvbSB0aGUgdGFyZ2V0UHJvamVjdFxuICAgICAgICB0YXJnZXRQcm9qZWN0LmdldFByb2plY3REaXYoKS5yZW1vdmVDaGlsZChlZGl0UGFuZSk7XG4gICAgICAgIC8vIFRvZ2dsZSBwcm9qZWN0TWVudU9wZW4gdG8gZmFsc2UsIHNvIHRoYXQgdGhlIGVkaXRNZW51IGNhbiBiZSByZS1vcGVuZWRcbiAgICAgICAgdGFyZ2V0UHJvamVjdC50b2dnbGVQcm9qZWN0TWVudU9wZW4oKTtcblxuICAgIH1cbiAgICB0aGlzLl9lZGl0UHJvamVjdENhbmNlbEJ1dHRvbiA9IF9lZGl0UHJvamVjdENhbmNlbEJ1dHRvbjtcblxuXG4gICAgY29uc3QgX2VkaXRQcm9qZWN0RGVsZXRlQnV0dG9uID0gKHRhcmdldFByb2plY3QpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFlvdSBjbGlja2VkIHRoZSBEZWxldGUgYnV0dG9uIG9uIHRoZSBFRElUIHBhZ2Ugb2YgdGhlIGZvbGxvd2luZyBwcm9qZWN0OiBgKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0UHJvamVjdC5nZXRJbmZvKCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhfcHJvamVjdENvbnRhaW5lci5nZXRQcm9qZWN0QXJyKClbMF0uZ2V0SW5mbygpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coX3Byb2plY3RDb250YWluZXIuZ2V0SW5mbygpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coX3Byb2plY3RDb250YWluZXIuZ2V0UHJvamVjdEFycigpKTtcbiAgICAgICAgXG5cbiAgICAgICAgLy8gVGFyZ2V0IFByb2plY3QgQ29udGFpbmVyIGFuZCBmaW5kIGl0J3MgaW5kZXggcmVmZXJlbmNlIGZvciB0YXJnZXRQcm9qZWN0XG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXJBcnIgPSBfcHJvamVjdENvbnRhaW5lci5nZXRQcm9qZWN0QXJyKCk7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGZvciAoaW5kZXg7IGluZGV4IDwgcHJvamVjdENvbnRhaW5lckFyci5sZW5ndGg7IGluZGV4KysgKXtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBTZWFyY2hpbmcgZm9yIHRhcmdldFByb2plY3QgKCR7dGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpfSkgYXQgaW5kZXggJHtpbmRleH1gKTtcbiAgICAgICAgICAgIGlmKHByb2plY3RDb250YWluZXJBcnJbaW5kZXhdID09PSB0YXJnZXRQcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFlvdSd2ZSBmb3VuZCB0aGUgcHJvamVjdCBhdCBpbmRleDogJHtpbmRleH0uIERvIHRoZSB0aGluZyB0byBkZWxldGUgdGFyZ2V0UHJvamVjdCBmcm9tIF9wcm9qZWN0Q29udGFpbmVyLl9wcm9qZWN0QXJyW11gKTtcbiAgICAgICAgICAgICAgICBfcHJvamVjdENvbnRhaW5lci5kZWxldGVQcm9qZWN0KGluZGV4KTtcbiAgICAgICAgICAgICAgICBfcHJvamVjdENvbnRhaW5lci5nZXRQcm9qZWN0Q29udGFpbmVyRGl2KCkucmVtb3ZlQ2hpbGQodGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0RGl2KCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHRoaXMuX2VkaXRQcm9qZWN0RGVsZXRlQnV0dG9uID0gX2VkaXRQcm9qZWN0RGVsZXRlQnV0dG9uO1xuXG4gICAgY29uc3QgX3Byb2plY3RBZGRUb2RvQnV0dG9uID0gKHRhcmdldFByb2plY3QpID0+IHtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgSSdtIGluIGxvZ2ljQ29udHJvbGxlciwgYWRkIHRvZG8gYnV0dG9uYCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coYHRlc3QgaWYgdGhpcyBwcm9qZWN0IGNhbiBvcGVuIGEgbWVudSwgdGhlbiBvcGVuIHRoZSBBZGQgdG90byBtZW51IHRhcmdldGluZyB0aGlzIHByb2plY3RgKTtcblxuICAgICAgICBcbiAgICAgICAgaWYodGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0TWVudU9wZW4oKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFRhcmdldFByb2plY3QgaXMgTk9UIGluIGEgc3RhdGUgdG8gb3BlbiBhIG5ldyBtZW51LCByZXR1cm5pbmcgdG8gY2FuY2VsIGFkZFRvZG9CdXR0b24gZnVuY3Rpb25gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgdGFyZ2V0UHJvamVjdCBpcyBpbiBhIHN0YXRlIHRvIG9wZW4gYSBtZW51LCB0b2dnbGluZyBhbmQgb3BlbmluZyBhZGQgdG9kbyBtZW51YCk7XG4gICAgICAgIHRhcmdldFByb2plY3QudG9nZ2xlUHJvamVjdE1lbnVPcGVuKCk7XG5cbiAgICAgICAgLy8gQWRkIHRvZG8gTWVudVxuICAgICAgICBjb25zdCBhZGRUb2RvUGFuZVZhbHVlcyA9IF9kaXNwbGF5Q29udHJvbGxlci5nZW5lcmF0ZVByb2plY3RBZGRUb2RvUGFuZSh0YXJnZXRQcm9qZWN0KTtcbiAgICAgICAgY29uc3QgYWRkVG9kb1BhbmUgPSBhZGRUb2RvUGFuZVZhbHVlc1swXTtcbiAgICAgICAgY29uc3QgYWRkVG9kb1RpdGxlID0gYWRkVG9kb1BhbmVWYWx1ZXNbMV07XG4gICAgICAgIGNvbnN0IGFkZFRvZG9EZXNjcmlwdGlvbiA9IGFkZFRvZG9QYW5lVmFsdWVzWzJdO1xuICAgICAgICBjb25zdCBhZGRUb2RvUHJpb3JpdHlMYWJlbCA9IGFkZFRvZG9QYW5lVmFsdWVzWzNdO1xuICAgICAgICBjb25zdCBhZGRUb2RvUHJpb3JpdHlWYWx1ZSA9IGFkZFRvZG9QYW5lVmFsdWVzWzRdO1xuICAgICAgICBjb25zdCBhZGRUb2RvTm90ZXNJbnB1dCA9IGFkZFRvZG9QYW5lVmFsdWVzWzVdO1xuICAgICAgICBjb25zdCBhZGRUb2RvRHVlRGF0ZUlucHV0ID0gYWRkVG9kb1BhbmVWYWx1ZXNbNl07XG4gICAgICAgIGNvbnN0IGFkZFRvZG9DcmVhdGlvbkRhdGVJbnB1dCA9IGFkZFRvZG9QYW5lVmFsdWVzWzddO1xuICAgICAgICAvLyBTYXZlIGFuZCBjYW5jZWwgYnV0dG9uc1xuICAgICAgICBjb25zdCBhZGRUb2RvU2F2ZUJ1dHRvbiA9IGFkZFRvZG9QYW5lVmFsdWVzWzhdO1xuICAgICAgICBjb25zdCBhZGRUb2RvQ2FuY2VsQnV0dG9uID0gYWRkVG9kb1BhbmVWYWx1ZXNbOV07XG5cbiAgICAgICAgLy8gQXBwZW5kIEFkZCBUb2RvIE1lbnUgdG8gZXhpc3RpbmcgcHJvamVjdFBhbmUgZGl2XG4gICAgICAgIGNvbnN0IHByb2plY3RQYW5lID0gdGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0RGl2KCk7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lQ29udGFpbmVyID0gcHJvamVjdFBhbmUuZmlyc3RDaGlsZDtcbiAgICAgICAgY29uc3QgcHJvamVjdFRvZG9FbGVtZW50Q29udGFpbmVyID0gcHJvamVjdE5hbWVDb250YWluZXIubmV4dFNpYmxpbmc7XG4gICAgICAgIHByb2plY3RUb2RvRWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUb2RvUGFuZSk7XG5cbiAgICAgICAgLy8gQXR0YWNoIHByaW9yaXR5IHNsaWRlciBmdW5jdGlvbmFsaXR5XG4gICAgICAgIF9ldmVudENvbnRyb2xsZXIuYXR0YWNoQWRkUHJvamVjdFByaW9yaXR5U2xpZGVyKGFkZFRvZG9Qcmlvcml0eVZhbHVlLCBhZGRUb2RvUHJpb3JpdHlMYWJlbCk7XG4gICAgICAgIFxuICAgICAgICAvLyBBdHRhY2ggc2F2ZUJ1dHRvbiBhbmQgY2FuY2VsQnV0dG9uIGZ1bmN0aW9uYWxpdHkgICAgIFxuICAgICAgICBsZXQgc2F2ZWRWYWx1ZXMgPSBbYWRkVG9kb1RpdGxlLCBhZGRUb2RvRGVzY3JpcHRpb24sIGFkZFRvZG9Qcmlvcml0eVZhbHVlLCBhZGRUb2RvTm90ZXNJbnB1dCwgYWRkVG9kb0R1ZURhdGVJbnB1dCwgYWRkVG9kb0NyZWF0aW9uRGF0ZUlucHV0XTtcbiAgICAgICAgX2V2ZW50Q29udHJvbGxlci5hdHRhY2hQcm9qZWN0QWRkVG9kb1NhdmVCdXR0b24oYWRkVG9kb1NhdmVCdXR0b24sIHRhcmdldFByb2plY3QsIGFkZFRvZG9QYW5lLCBzYXZlZFZhbHVlcyk7XG4gICAgICAgIF9ldmVudENvbnRyb2xsZXIuYXR0YWNoUHJvamVjdEFkZFRvZG9DYW5jZWxCdXR0b24oYWRkVG9kb0NhbmNlbEJ1dHRvbiwgdGFyZ2V0UHJvamVjdCwgYWRkVG9kb1BhbmUpO1xuXG5cblxuICAgIH1cbiAgICB0aGlzLl9wcm9qZWN0QWRkVG9kb0J1dHRvbiA9IF9wcm9qZWN0QWRkVG9kb0J1dHRvbjtcblxuICAgIGNvbnN0IF9wcm9qZWN0QWRkVG9kb1NhdmVCdXR0b24gPSAodGFyZ2V0UHJvamVjdCwgYWRkVG9kb1BhbmUsIHNhdmVkVmFsdWVzKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBZb3UndmUgY2xpY2sgdGhlIHNhdmUgYnV0dG9uIG9uIHRoZSBhZGQgVG9kbyBQYW5lYClcblxuICAgICAgICAvLyBTYXZlIHZhbHVlcyBvZiBuZXcgdG9kb09iaiB0byB0YXJnZXRQcm9qZWN0XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNhdmVkVmFsdWVzKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2F2ZWRWYWx1ZXNbMF0udmFsdWUpO1xuICAgICAgICBsZXQgdGl0bGUgPSBzYXZlZFZhbHVlc1swXS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBzYXZlZFZhbHVlc1sxXS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBzYXZlZFZhbHVlc1syXS52YWx1ZTtcbiAgICAgICAgY29uc3Qgbm90ZXMgPSBzYXZlZFZhbHVlc1szXS52YWx1ZTtcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBzYXZlZFZhbHVlc1s0XS52YWx1ZTtcbiAgICAgICAgY29uc3QgY3JlYXRpb25EYXRlID0gc2F2ZWRWYWx1ZXNbNV07XG5cbiAgICAgICAgaWYoIGR1ZURhdGUgPT0gXCJcIikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGRlZmF1bHQgZHVlRGF0ZSwgb3ZlcndyaXRpbmcgd2l0aCBjdXJyZW50IGRhdGVgKTtcbiAgICAgICAgICAgIGR1ZURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aXRsZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICB0aXRsZSA9IFwiTmV3IFRvLURvXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgdGl0bGU6ICR7dGl0bGV9XG4gICAgICAgIC8vIGRlc2NyaXB0aW9uOiAke2Rlc2NyaXB0aW9ufVxuICAgICAgICAvLyBwcmlvcml0eTogJHtwcmlvcml0eX1cbiAgICAgICAgLy8gbm90ZXM6ICR7bm90ZXN9XG4gICAgICAgIC8vIGR1ZURhdGU6ICR7ZHVlRGF0ZX1cbiAgICAgICAgLy8gY3JlYXRpb25EYXRlOiAke2NyZWF0aW9uRGF0ZX1gKVxuXG4gICAgICAgIGxldCBuZXdUb2RvID0gdG9kb09iaigpO1xuICAgICAgICBuZXdUb2RvLmluaXQodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBjcmVhdGlvbkRhdGUsIHByaW9yaXR5LCBub3RlcywgW10sIGZhbHNlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYCAtLS0tLS0tLS0gbmV3VG9kby5nZXRJbmZvKCkgLS0tLS0tLS0tLSBgKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdUb2RvLmdldEluZm8oKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGAgLS0tIHRhcmdldHByb2plY3QuZ2V0VG9kb0xpc3QoKSAtLS0gYClcbiAgICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0UHJvamVjdC5nZXRUb2RvTGlzdCgpKTtcbiAgICAgICAgdGFyZ2V0UHJvamVjdC5hZGRUb2RvT2JqKG5ld1RvZG8pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXRQcm9qZWN0LmdldFRvZG9MaXN0KCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRhcmdldFByb2plY3QuZ2V0VG9kb0xpc3QoKVswXS5nZXRJbmZvKClgKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0UHJvamVjdC5nZXRUb2RvTGlzdCgpWzBdLmdldEluZm8oKSk7XG5cblxuICAgICAgICAvLyBVcGRhdGUgdGFyZ2V0UHJvamVjdCdzIHByb2plY3QtdG9kby1saXN0IGRpdiBhcHByb3ByaWF0ZWx5XG4gICAgICAgIGNvbnN0IG5ld1RvZG9EaXYgPSBfZGlzcGxheUNvbnRyb2xsZXIuZ2VuZXJhdGVUb2RvRGl2KG5ld1RvZG8pO1xuICAgICAgICBjb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IHRhcmdldFByb2plY3QuZ2V0UHJvamVjdERpdigpLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzBdOyAvLyBUaGlzIGlzIHBvc2l0aXZlbHkgZmlsdGh5IGZvciBzdGFjay10cmFjaW5nLlxuICAgICAgICB0b2RvTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUb2RvRGl2KTtcbiAgICAgICAgXG4gICAgICAgIC8vIEF0dGFjaCBldmVudExpc3RlbmVycyB0byBuZXdseSBjcmVhdGVkIHRvRG9cbiAgICAgICAgX2V2ZW50Q29udHJvbGxlci5hdHRhY2hUb2RvTGlzdGVuZXJzKG5ld1RvZG8sIHRhcmdldFByb2plY3QpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBhZGRUb2RvTWVudSBmcm9tIHRhcmdldFByb2plY3QncyBwcm9qZWN0LXBhbmUgZGl2XG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50Q29udGFpbmVyID0gdGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0RGl2KCkuY2hpbGROb2Rlc1sxXTtcbiAgICAgICAgdG9kb0VsZW1lbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoYWRkVG9kb1BhbmUpO1xuICAgICAgICAvLyBUb2dnbGUgcHJvamVjdE1lbnVPcGVuIHRvIGZhbHNlXG4gICAgICAgIHRhcmdldFByb2plY3QudG9nZ2xlUHJvamVjdE1lbnVPcGVuKCk7XG5cbiAgICAgICAgLy8gU3RhY2sgdHJhY2luZyBleGFtcGxlIGZyb20gdGhlIHRvcCBvZiBsb2dpYyBjb250cm9sbGVyIHRvIGVhY2ggdG9kbyBjaGlsZFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhfcHJvamVjdENvbnRhaW5lci5nZXRQcm9qZWN0QXJyKClbMF0uZ2V0VG9kb0xpc3QoKVswXS5nZXRJbmZvKCkpO1xuXG4gICAgfVxuICAgIHRoaXMuX3Byb2plY3RBZGRUb2RvU2F2ZUJ1dHRvbiA9IF9wcm9qZWN0QWRkVG9kb1NhdmVCdXR0b247XG5cbiAgICBjb25zdCBfcHJvamVjdEFkZFRvZG9DYW5jZWxCdXR0b24gPSAodGFyZ2V0UHJvamVjdCwgYWRkVG9kb1BhbmUpID0+IHtcbiAgICAgICAgLy8gVGFyZ2V0IGRpdiBhbmQgZGVsZXRlIGl0XG4gICAgICAgIGNvbnN0IHRvZG9FbGVtZW50Q29udGFpbmVyID0gdGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0RGl2KCkuY2hpbGROb2Rlc1sxXTtcbiAgICAgICAgdG9kb0VsZW1lbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoYWRkVG9kb1BhbmUpO1xuICAgICAgICAvLyBUb2dnbGUgcHJvamVjdE1lbnVPcGVuIHRvIGZhbHNlXG4gICAgICAgIHRhcmdldFByb2plY3QudG9nZ2xlUHJvamVjdE1lbnVPcGVuKCk7XG5cbiAgICB9XG4gICAgdGhpcy5fcHJvamVjdEFkZFRvZG9DYW5jZWxCdXR0b24gPSBfcHJvamVjdEFkZFRvZG9DYW5jZWxCdXR0b247XG5cbiAgICBjb25zdCBfcHJvamVjdERlbGV0ZVRvZG9CdXR0b24gPSAodGFyZ2V0UHJvamVjdCkgPT4ge1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBJJ20gaW4gbG9naWNDb250cm9sbGVyLCBkZWxldGUgdG9kbyBidXR0b25gKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgVGVzdCBpZiB0aGlzIHByb2plY3QgY2FuIG9wZW4gYSBtZW51LCB0aGVuIG9wZW4gdGhlIGRlbGV0ZSB0b2RvIG1lbnUgdGFyZ2V0aW5nIHRoaXMgcHJvamVjdGApXG5cbiAgICAgICAgaWYodGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0TWVudU9wZW4oKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFRhcmdldFByb2plY3QgaXMgTk9UIGluIGEgc3RhdGUgdG8gb3BlbiBhIG5ldyBtZW51LCByZXR1cm5pbmcgdG8gY2FuY2VsIGRlbGV0ZVRvZG9CdXR0b24gZnVuY3Rpb25gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGB0YXJnZXRQcm9qZWN0IGlzIGluIGEgc3RhdGUgdG8gb3BlbiBhIG1lbnUsIHRvZ2dsaW5nIGFuZCBvcGVuaW5nIGRlbGV0ZVRvZG9NZW51YCk7XG4gICAgICAgIHRhcmdldFByb2plY3QudG9nZ2xlUHJvamVjdE1lbnVPcGVuKCk7XG5cbiAgICAgICAgLy8gQWRkIHRvZG8gTWVudVxuICAgICAgICBjb25zdCBkZWxldGVUb2RvUGFuZVZhbHVlcyA9IF9kaXNwbGF5Q29udHJvbGxlci5nZW5lcmF0ZVByb2plY3REZWxldGVUb2RvUGFuZSh0YXJnZXRQcm9qZWN0KTtcbiAgICAgICAgY29uc3QgZGVsZXRlVG9kb1BhbmUgPSBkZWxldGVUb2RvUGFuZVZhbHVlc1swXTtcbiAgICAgICAgY29uc3QgZGVsZXRlU2VsZWN0ZWRCdXR0b24gPSBkZWxldGVUb2RvUGFuZVZhbHVlc1sxXTtcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZGVsZXRlVG9kb1BhbmVWYWx1ZXNbMl07XG4gICAgICAgIGNvbnN0IGRlbGV0ZUNvbXBsZXRlZEJ1dHRvbiA9IGRlbGV0ZVRvZG9QYW5lVmFsdWVzWzNdO1xuICAgICAgICBjb25zdCB0b2RvUGFuZUxpc3QgPSBkZWxldGVUb2RvUGFuZVZhbHVlc1s0XTtcblxuICAgICAgICAvLyBBcHBlbmQgQWRkIFRvZG8gTWVudSB0byBleGlzdGluZyBwcm9qZWN0UGFuZSBkaXZcbiAgICAgICAgY29uc3QgcHJvamVjdFBhbmUgPSB0YXJnZXRQcm9qZWN0LmdldFByb2plY3REaXYoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVDb250YWluZXIgPSBwcm9qZWN0UGFuZS5maXJzdENoaWxkO1xuICAgICAgICBjb25zdCBwcm9qZWN0VG9kb0VsZW1lbnRDb250YWluZXIgPSBwcm9qZWN0TmFtZUNvbnRhaW5lci5uZXh0U2libGluZztcbiAgICAgICAgcHJvamVjdFRvZG9FbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVRvZG9QYW5lKTtcblxuICAgICAgICAvLyBBdHRhY2ggZnVuY3Rpb25hbGl0eSB0byBidXR0b25zXG4gICAgICAgIF9ldmVudENvbnRyb2xsZXIuYXR0YWNoUHJvamVjdERlbGV0ZVNlbGVjdGVkQnV0dG9uKGRlbGV0ZVNlbGVjdGVkQnV0dG9uLCB0YXJnZXRQcm9qZWN0LCBkZWxldGVUb2RvUGFuZSx0b2RvUGFuZUxpc3QpO1xuICAgICAgICBfZXZlbnRDb250cm9sbGVyLmF0dGFjaFByb2plY3REZWxldGVDYW5jZWxCdXR0b24oY2FuY2VsQnV0dG9uLCB0YXJnZXRQcm9qZWN0LCBkZWxldGVUb2RvUGFuZSk7XG4gICAgICAgIF9ldmVudENvbnRyb2xsZXIuYXR0YWNoUHJvamVjdERlbGV0ZUNvbXBsZXRlZEJ1dHRvbihkZWxldGVDb21wbGV0ZWRCdXR0b24sIHRhcmdldFByb2plY3QsIGRlbGV0ZVRvZG9QYW5lLCB0b2RvUGFuZUxpc3QpO1xuXG4gICAgICAgIC8vIEF0dGFjaCBmdW5jdGlvbmFsaXR5IHRvIHRvZG9QYW5lTGlzdFxuICAgICAgICB0b2RvUGFuZUxpc3QuZm9yRWFjaCggZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBfZXZlbnRDb250cm9sbGVyLmF0dGFjaFNlbGVjdFRvZG9Gb3JEZWxldGlvbihlbGVtZW50LmdldFRvZG9EZWxldGlvbkRpdigpKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgdGhpcy5fcHJvamVjdERlbGV0ZVRvZG9CdXR0b24gPSBfcHJvamVjdERlbGV0ZVRvZG9CdXR0b247XG5cbiAgICBjb25zdCBfdG9nZ2xlU2VsZWN0ZWREaXZGb3JEZWxldGlvbiA9ICh0YXJnZXRUb2RvRGl2KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBZb3UgY2xpY2tlZCBhIGRpdiBlbGVtZW50IHRvIHRhcmdldCBmb3IgZGVsZXRpb24hIE1vZGlmeWluZyBpdHMgY2xhc3MgdG8gZGVub3RlIHNlbGVjdGlvbmApO1xuICAgICAgICB0YXJnZXRUb2RvRGl2LmNsYXNzTGlzdC50b2dnbGUoJ21hcmtlZC1mb3ItZGVsZXRpb24nKTtcbiAgICB9XG4gICAgdGhpcy5fdG9nZ2xlU2VsZWN0ZWREaXZGb3JEZWxldGlvbiA9IF90b2dnbGVTZWxlY3RlZERpdkZvckRlbGV0aW9uO1xuXG4gICAgY29uc3QgX3Byb2plY3REZWxldGVUb2RvU2VsZWN0ZWRCdXR0b24gPSAodGFyZ2V0UHJvamVjdCwgZGVsZXRlVG9kb1BhbmUsIHRvZG9QYW5lTGlzdCkgPT4ge1xuXG4gICAgICAgIGxldCBwcm9qZWN0VG9kb0VsZW1lbnRDb250YWluZXIgPSB0YXJnZXRQcm9qZWN0LmdldFByb2plY3REaXYoKS5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10b2RvLWVsZW1lbnQtY29udGFpbmVyJyk7XG4gICAgICAgIGxldCB0b2RvTGlzdCA9IHByb2plY3RUb2RvRWxlbWVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0Jyk7XG4gICAgICAgIGxldCB0b2RvTGlzdENvbXBsZXRlZCA9IHByb2plY3RUb2RvRWxlbWVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0LWNvbXBsZXRlZCcpO1xuXG4gICAgICAgIGxldCBtYXJrZWRGb3JEZWxldGlvbiA9IFtdXG4gICAgICAgIHRvZG9QYW5lTGlzdC5mb3JFYWNoKCBlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGxldCB0b2RvQ2xhc3MgPSBlbGVtZW50LmdldFRvZG9EZWxldGlvbkRpdigpLmNsYXNzTGlzdC5jb250YWlucyhcIm1hcmtlZC1mb3ItZGVsZXRpb25cIik7XG4gICAgICAgICAgICBpZih0b2RvQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICBtYXJrZWRGb3JEZWxldGlvbi5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBUaGUgZm9sbG93IHRvLWRvIGVsZW1lbnRzIGFyZSBtYXJrZWQgZm9yIGRlbGV0aW9uOiBgKTtcbiAgICAgICAgY29uc29sZS5sb2cobWFya2VkRm9yRGVsZXRpb24pO1xuICAgICAgICBtYXJrZWRGb3JEZWxldGlvbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYERlbGV0aW5nIHRoZSBmb2xsb3dpbmcgdG9kbzogJHtlbGVtZW50LmdldFRpdGxlKCl9XG4gICAgICAgICAgICBmcm9tIHRhcmdldFByb2plY3Q6ICR7dGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpfWApXG4gICAgICAgICAgICB0YXJnZXRQcm9qZWN0LnJlbW92ZVRhcmdldFRvZG8oZWxlbWVudCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKCBlbGVtZW50LmdldENvbXBsZXRlKCkgKXtcbiAgICAgICAgICAgICAgICB0b2RvTGlzdENvbXBsZXRlZC5yZW1vdmVDaGlsZChlbGVtZW50LmdldFRvZG9EaXYoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvZG9MaXN0LnJlbW92ZUNoaWxkKGVsZW1lbnQuZ2V0VG9kb0RpdigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXRQcm9qZWN0LmdldFRvZG9MaXN0KCkpO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgZGVsZXRlVG9kb1BhbmUgZGl2IENoaWxkIGVsZW1lbnQgZnJvbSB0aGUgdGFyZ2V0UHJvamVjdFxuICAgICAgICBwcm9qZWN0VG9kb0VsZW1lbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoZGVsZXRlVG9kb1BhbmUpO1xuICAgICAgICAvLyBUb2dnbGUgcHJvamVjdE1lbnVPcGVuIHRvIGZhbHNlLCBzbyB0aGF0IHRoZSBlZGl0TWVudSBjYW4gYmUgcmUtb3BlbmVkXG4gICAgICAgIHRhcmdldFByb2plY3QudG9nZ2xlUHJvamVjdE1lbnVPcGVuKCk7XG5cbiAgICB9XG4gICAgdGhpcy5fcHJvamVjdERlbGV0ZVRvZG9TZWxlY3RlZEJ1dHRvbiA9IF9wcm9qZWN0RGVsZXRlVG9kb1NlbGVjdGVkQnV0dG9uO1xuXG4gICAgY29uc3QgX3Byb2plY3REZWxldGVUb2RvQ2FuY2VsQnV0dG9uID0gKHRhcmdldFByb2plY3QsIGRlbGV0ZVRvZG9QYW5lKSA9PiB7XG5cbiAgICAgICAgbGV0IHByb2plY3RUb2RvRWxlbWVudENvbnRhaW5lciA9IHRhcmdldFByb2plY3QuZ2V0UHJvamVjdERpdigpLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRvZG8tZWxlbWVudC1jb250YWluZXInKTtcblxuICAgICAgICAvLyBSZW1vdmUgdGhlIGRlbGV0ZVRvZG9QYW5lIGRpdiBDaGlsZCBlbGVtZW50IGZyb20gdGhlIHRhcmdldFByb2plY3RcbiAgICAgICAgcHJvamVjdFRvZG9FbGVtZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKGRlbGV0ZVRvZG9QYW5lKTtcbiAgICAgICAgLy8gVG9nZ2xlIHByb2plY3RNZW51T3BlbiB0byBmYWxzZSwgc28gdGhhdCB0aGUgZWRpdE1lbnUgY2FuIGJlIHJlLW9wZW5lZFxuICAgICAgICB0YXJnZXRQcm9qZWN0LnRvZ2dsZVByb2plY3RNZW51T3BlbigpO1xuXG4gICAgfVxuICAgIHRoaXMuX3Byb2plY3REZWxldGVUb2RvQ2FuY2VsQnV0dG9uID0gX3Byb2plY3REZWxldGVUb2RvQ2FuY2VsQnV0dG9uO1xuICAgIFxuICAgIGNvbnN0IF9wcm9qZWN0RGVsZXRlVG9kb0NvbXBsZXRlZEJ1dHRvbiA9ICh0YXJnZXRQcm9qZWN0LCBkZWxldGVUb2RvUGFuZSwgdG9kb1BhbmVMaXN0KSA9PiB7XG5cbiAgICAgICAgbGV0IHByb2plY3RUb2RvRWxlbWVudENvbnRhaW5lciA9IHRhcmdldFByb2plY3QuZ2V0UHJvamVjdERpdigpLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRvZG8tZWxlbWVudC1jb250YWluZXInKTtcbiAgICAgICAgbGV0IHRvZG9MaXN0Q29tcGxldGVkID0gcHJvamVjdFRvZG9FbGVtZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QtY29tcGxldGVkJyk7XG5cbiAgICAgICAgbGV0IG1hcmtlZEZvckRlbGV0aW9uID0gW11cbiAgICAgICAgdG9kb1BhbmVMaXN0LmZvckVhY2goIGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgbGV0IHRvZG9DbGFzcyA9IGVsZW1lbnQuZ2V0VG9kb0RlbGV0aW9uRGl2KCkuY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9kby1jb21wbGV0ZWRcIik7XG4gICAgICAgICAgICBpZih0b2RvQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICBtYXJrZWRGb3JEZWxldGlvbi5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBUaGUgZm9sbG93IHRvLWRvIGVsZW1lbnRzIGFyZSBtYXJrZWQgZm9yIGRlbGV0aW9uOiBgKTtcbiAgICAgICAgY29uc29sZS5sb2cobWFya2VkRm9yRGVsZXRpb24pO1xuICAgICAgICBtYXJrZWRGb3JEZWxldGlvbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYERlbGV0aW5nIHRoZSBmb2xsb3dpbmcgdG9kbzogJHtlbGVtZW50LmdldFRpdGxlKCl9XG4gICAgICAgICAgICBmcm9tIHRhcmdldFByb2plY3Q6ICR7dGFyZ2V0UHJvamVjdC5nZXRQcm9qZWN0TmFtZSgpfWApXG4gICAgICAgICAgICB0YXJnZXRQcm9qZWN0LnJlbW92ZVRhcmdldFRvZG8oZWxlbWVudCk7XG4gICAgICAgICAgICB0b2RvTGlzdENvbXBsZXRlZC5yZW1vdmVDaGlsZChlbGVtZW50LmdldFRvZG9EaXYoKSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc29sZS5sb2codGFyZ2V0UHJvamVjdC5nZXRUb2RvTGlzdCgpKTtcblxuXG5cblxuXG5cblxuICAgICAgICAvLyBSZW1vdmUgdGhlIGRlbGV0ZVRvZG9QYW5lIGRpdiBDaGlsZCBlbGVtZW50IGZyb20gdGhlIHRhcmdldFByb2plY3RcbiAgICAgICAgcHJvamVjdFRvZG9FbGVtZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKGRlbGV0ZVRvZG9QYW5lKTtcbiAgICAgICAgLy8gVG9nZ2xlIHByb2plY3RNZW51T3BlbiB0byBmYWxzZSwgc28gdGhhdCB0aGUgZWRpdE1lbnUgY2FuIGJlIHJlLW9wZW5lZFxuICAgICAgICB0YXJnZXRQcm9qZWN0LnRvZ2dsZVByb2plY3RNZW51T3BlbigpO1xuXG5cbiAgICB9XG4gICAgdGhpcy5fcHJvamVjdERlbGV0ZVRvZG9Db21wbGV0ZWRCdXR0b24gPSBfcHJvamVjdERlbGV0ZVRvZG9Db21wbGV0ZWRCdXR0b247XG5cblxuICAgIGNvbnN0IF90b2dnbGVDb21wbGV0ZWRUb2RvID0gKHRhcmdldFRvZG8pID0+IHtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgWW91IGNsaWNrZWQgdG9nZ2xlU2VsZWN0ZWRUb2RvIHRhcmdldGluZzogJHt0YXJnZXRUb2RvfWApO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldFRvZG9EaXYgPSB0YXJnZXRUb2RvLmdldFRvZG9EaXYoKTtcbiAgICAgICAgdGFyZ2V0VG9kb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKCd0b2RvLWNvbXBsZXRlZCcpO1xuICAgICAgICB0YXJnZXRUb2RvRGl2LmNsYXNzTGlzdC50b2dnbGUoJ3RvZG8taW5jb21wbGV0ZScpO1xuXG4gICAgICAgIC8vIEdlbmVyYXRpbmcgZGl2IHJlZmVyZW5jZXMgZm9yIGVhc3kgZG9jaW5nIG9mIG5leHQgaWYgc3RhdGVtZW50IGRlY2lkaW5nIGZ1bmN0aW9uYWxpdHlcbiAgICAgICAgY29uc3QgcHJvamVjdFRvZG9MaXN0ID0gdGFyZ2V0VG9kb0Rpdi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gcHJvamVjdFRvZG9MaXN0LmZpcnN0Q2hpbGQ7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0Q29tcGxldGVkID0gcHJvamVjdFRvZG9MaXN0LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QtY29tcGxldGVkJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgaXNDb21wbGV0ZSA9IHRhcmdldFRvZG8uZ2V0Q29tcGxldGUoKTtcbiAgICAgICAgaWYoIGlzQ29tcGxldGUgKSB7XG4gICAgICAgICAgICB0YXJnZXRUb2RvRGl2LmZpcnN0Q2hpbGQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGFyZ2V0VG9kby5zZXRDb21wbGV0ZShmYWxzZSk7XG4gICAgICAgICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0YXJnZXRUb2RvRGl2KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFRvZG9EaXYuZmlyc3RDaGlsZC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRhcmdldFRvZG8uc2V0Q29tcGxldGUodHJ1ZSk7XG4gICAgICAgICAgICB0b2RvTGlzdENvbXBsZXRlZC5hcHBlbmRDaGlsZCh0YXJnZXRUb2RvRGl2KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl90b2dnbGVDb21wbGV0ZWRUb2RvID0gX3RvZ2dsZUNvbXBsZXRlZFRvZG87XG5cbiAgICBjb25zdCBfZWRpdFRvZG9QYW5lID0gKHRhcmdldFRvZG8sIHRhcmdldFByb2plY3QpID0+IHtcblxuICAgICAgICBjb25zb2xlLmxvZyhgWW91IGNsaWNrZWQgdGhlIGVkaXQgYnV0dG9uIHRhcmdldCB0b2RvOiAke3RhcmdldFRvZG8uZ2V0VGl0bGUoKX1gKTtcblxuICAgICAgICAvLyBUb2dnbGUgcHJvamVjdE1lbnVPcGVuLCBnZW5lcmF0ZSBlZGl0VG9kb1BhbmUsIGFwcGVuZEVkaXRUb2RvUGFuZSwgYXR0YWNoIGV2ZW50TGlzdGVuZXJzIHRvIGFwcHJvcHJpYXRlIGZpZWxkcyBhbmQgYnV0dG9uc1xuXG4gICAgICAgIGlmKHRhcmdldFByb2plY3QuZ2V0UHJvamVjdE1lbnVPcGVuKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBUYXJnZXRQcm9qZWN0IGlzIE5PVCBpbiBhIHN0YXRlIHRvIG9wZW4gYSBuZXcgbWVudSwgcmV0dXJuaW5nIHRvIGNhbmNlbCBhZGRUb2RvQnV0dG9uIGZ1bmN0aW9uYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coYHRhcmdldFByb2plY3QgaXMgaW4gYSBzdGF0ZSB0byBvcGVuIGEgbWVudSwgdG9nZ2xpbmcgYW5kIG9wZW5pbmcgYWRkIHRvZG8gbWVudWApO1xuICAgICAgICB0YXJnZXRQcm9qZWN0LnRvZ2dsZVByb2plY3RNZW51T3BlbigpO1xuXG4gICAgICAgIGxldCBlZGl0VG9kb1BhbmVWYWx1ZXMgPSBfZGlzcGxheUNvbnRyb2xsZXIuZ2VuZXJhdGVFZGl0VG9kb1BhbmUodGFyZ2V0VG9kbyk7XG4gICAgICAgIGNvbnN0IGVkaXRUb2RvUGFuZURpdiA9IGVkaXRUb2RvUGFuZVZhbHVlc1swXTtcbiAgICAgICAgY29uc3QgZWRpdFRvZG9UaXRsZUlucHV0ID0gZWRpdFRvZG9QYW5lVmFsdWVzWzFdO1xuICAgICAgICBjb25zdCBlZGl0VG9kb0Rlc2NyaXB0aW9uSW5wdXQgPSBlZGl0VG9kb1BhbmVWYWx1ZXNbMl07XG4gICAgICAgIGNvbnN0IGVkaXRUb2RvUHJpb3JpdHlMYWJlbCA9IGVkaXRUb2RvUGFuZVZhbHVlc1szXTtcbiAgICAgICAgY29uc3QgZWRpdFRvZG9Qcmlvcml0eUlucHV0ID0gZWRpdFRvZG9QYW5lVmFsdWVzWzRdO1xuICAgICAgICBjb25zdCBlZGl0VG9kb05vdGVzSW5wdXQgPSBlZGl0VG9kb1BhbmVWYWx1ZXNbNV07XG4gICAgICAgIGNvbnN0IGVkaXRUb2RvRHVlRGF0ZUlucHV0ID0gZWRpdFRvZG9QYW5lVmFsdWVzWzZdO1xuICAgICAgICBjb25zdCBlZGl0VG9kb0NyZWF0aW9uRGF0ZUlucHV0ID0gZWRpdFRvZG9QYW5lVmFsdWVzWzddO1xuICAgICAgICBjb25zdCBlZGl0VG9kb1NhdmVCdXR0b24gPSBlZGl0VG9kb1BhbmVWYWx1ZXNbOF07XG4gICAgICAgIGNvbnN0IGVkaXRUb2RvQ2FuY2VsQnV0dG9uID0gZWRpdFRvZG9QYW5lVmFsdWVzWzldO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBhbmQgYXR0YWNoIHByaW9yaXR5IHNsaWRlciBmdW5jdGlvbmFsaXR5XG4gICAgICAgIF91cGRhdGVQcmlvcml0eUNvbG9yKGVkaXRUb2RvUHJpb3JpdHlMYWJlbCwgZWRpdFRvZG9Qcmlvcml0eUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIC8vIEF0dGFjaCBQcmlvcml0eSBTbGlkZXIgZnVuY3Rpb25hbGl0eVxuICAgICAgICBfZXZlbnRDb250cm9sbGVyLmF0dGFjaEFkZFByb2plY3RQcmlvcml0eVNsaWRlcihlZGl0VG9kb1ByaW9yaXR5SW5wdXQsIGVkaXRUb2RvUHJpb3JpdHlMYWJlbCk7XG4gICAgICAgIFxuICAgICAgICAvLyBBdHRhY2ggZnVuY3Rpb25hbGl0eSB0byBTYXZlIGFuZCBDYW5jZWwgQnV0dG9uc1xuICAgICAgICBsZXQgc2F2ZWRWYWx1ZXMgPSBbZWRpdFRvZG9UaXRsZUlucHV0LCBlZGl0VG9kb0Rlc2NyaXB0aW9uSW5wdXQsIGVkaXRUb2RvUHJpb3JpdHlJbnB1dCwgZWRpdFRvZG9Ob3Rlc0lucHV0LCBlZGl0VG9kb0R1ZURhdGVJbnB1dCwgZWRpdFRvZG9DcmVhdGlvbkRhdGVJbnB1dF1cbiAgICAgICAgX2V2ZW50Q29udHJvbGxlci5hdHRhY2hFZGl0VG9kb1NhdmVCdXR0b24oZWRpdFRvZG9TYXZlQnV0dG9uLCB0YXJnZXRQcm9qZWN0LCB0YXJnZXRUb2RvLCBlZGl0VG9kb1BhbmVEaXYsIHNhdmVkVmFsdWVzKTtcbiAgICAgICAgX2V2ZW50Q29udHJvbGxlci5hdHRhY2hFZGl0VG9kb0NhbmNlbEJ1dHRvbihlZGl0VG9kb0NhbmNlbEJ1dHRvbiwgdGFyZ2V0UHJvamVjdCwgZWRpdFRvZG9QYW5lRGl2KTtcbiAgICAgICBcblxuICAgICAgICAvLyBBcHBlbmQgZWRpdFRvZG9QYW5lIHRvIHRoZSBET01cbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSB0YXJnZXRUb2RvLmdldFRvZG9EaXYoKS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBwcm9qZWN0VG9kb0xpc3QgPSB0b2RvTGlzdC5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBwcm9qZWN0VG9kb0VsZW1lbnRDb250YWluZXIgPSBwcm9qZWN0VG9kb0xpc3QucGFyZW50Tm9kZTtcbiAgICAgICAgcHJvamVjdFRvZG9FbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRUb2RvUGFuZURpdik7XG5cblxuXG4gICAgfVxuICAgIHRoaXMuX2VkaXRUb2RvUGFuZSA9IF9lZGl0VG9kb1BhbmU7XG5cbiAgICBjb25zdCBfcHJvamVjdEVkaXRUb2RvU2F2ZUJ1dHRvbiA9ICh0YXJnZXRQcm9qZWN0LCB0YXJnZXRUb2RvLCBlZGl0VG9kb1BhbmVEaXYsIHNhdmVkVmFsdWVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpXG4gICAgICAgIGNvbnNvbGUubG9nKGBJIGFtIF9wcm9qZWN0RWRpdFRvZG9TYXZlQnV0dG9uLiBIZXJlIGFyZSBteSB0b2RvIGluaXRpYWwgdmFsdWVzYCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhcmdldFRvZG8uZ2V0SW5mbygpKTtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJylcbiAgICAgICAgXG4vLyAgICAgICAgIGxldCBzYXZlZFZhbHVlcyA9IFtlZGl0VG9kb1RpdGxlSW5wdXQsIGVkaXRUb2RvRGVzY3JpcHRpb25JbnB1dCwgZWRpdFRvZG9Qcmlvcml0eUlucHV0LCBlZGl0VG9kb05vdGVzSW5wdXQsIGVkaXRUb2RvRHVlRGF0ZUlucHV0LCBlZGl0VG9kb0NyZWF0aW9uRGF0ZUlucHV0XVxuXG5cbiAgICAgICAgLy8gU2F2ZSB0aGUgbmV3IHZhbHVlcyB0byB0YXJnZXRUb2RvXG4gICAgICAgIGNvbnNvbGUubG9nKGBzYXZlZFZhbHVlcyBhcmUgYXMgZm9sbG93czpcbiAgICAgICAgdGl0bGVJbnB1dDogJHtzYXZlZFZhbHVlc1swXS52YWx1ZX1cbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dDogJHtzYXZlZFZhbHVlc1sxXS52YWx1ZX1cbiAgICAgICAgcHJpb3JpdHlJbnB1dDogJHtzYXZlZFZhbHVlc1syXS52YWx1ZX1cbiAgICAgICAgbm90ZXNJbnB1dDogJHtzYXZlZFZhbHVlc1szXS52YWx1ZX1cbiAgICAgICAgZHVlRGF0ZUlucHV0OiAke3NhdmVkVmFsdWVzWzRdLnZhbHVlQXNEYXRlfVxuICAgICAgICBjcmVhdGlvbkRhdGVJbnB1dDogJHtzYXZlZFZhbHVlc1s0XS52YWx1ZUFzRGF0ZX1gKTtcblxuICAgICAgICB0YXJnZXRUb2RvLnNldFRpdGxlKHNhdmVkVmFsdWVzWzBdLnZhbHVlKTtcbiAgICAgICAgdGFyZ2V0VG9kby5zZXREZXNjcmlwdGlvbihzYXZlZFZhbHVlc1sxXS52YWx1ZSk7XG4gICAgICAgIHRhcmdldFRvZG8uc2V0UHJpb3JpdHkoc2F2ZWRWYWx1ZXNbMl0udmFsdWVBc051bWJlcik7XG4gICAgICAgIHRhcmdldFRvZG8uc2V0Tm90ZXMoc2F2ZWRWYWx1ZXNbM10udmFsdWUpO1xuXG4gICAgICAgICAgICAvLyBXcml0ZSBuZXcgZHVlRGF0ZSBpZiBuZXcgZHVlRGF0ZSAhPT0gb2xkRHVlRGF0ZSB2YWx1ZXNcbiAgICAgICAgICAgIGxldCBuZXdEdWVEYXRlID0gc2F2ZWRWYWx1ZXNbNF0udmFsdWU7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgbmV3RHVlRGF0ZTogJHtuZXdEdWVEYXRlfWApOyAvLyBmb3JtYXQgXCIyMDIyLTAzLTIxXCJcbiAgICAgICAgICAgIGxldCBvbGREdWVEYXRlID0gdGFyZ2V0VG9kby5nZXREdWVEYXRlKCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgb2xkRHVlRGF0ZTogJHtvbGREdWVEYXRlfWApO1xuICAgICAgICAgICAgbGV0IG9sZER1ZURhdGVTdHJpbmcgPSBgJHtvbGREdWVEYXRlLmdldEZ1bGxZZWFyKCl9LWBcbiAgICAgICAgICAgIGlmKG9sZER1ZURhdGUuZ2V0TW9udGgoKSArIDEgPCAxMCkge1xuICAgICAgICAgICAgICAgIG9sZER1ZURhdGVTdHJpbmcgKz0gYDAke29sZER1ZURhdGUuZ2V0TW9udGgoKSArIDF9LWBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2xkRHVlRGF0ZVN0cmluZyArPSBgJHtvbGREdWVEYXRlLmdldE1vbnRoKCkgKyAxfS1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihvbGREdWVEYXRlLmdldERhdGUoKSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgb2xkRHVlRGF0ZVN0cmluZyArPSBgMCR7b2xkRHVlRGF0ZS5nZXREYXRlKCl9YFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvbGREdWVEYXRlU3RyaW5nICs9IGAke29sZER1ZURhdGUuZ2V0RGF0ZSgpfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBvbGREdWVEYXRlU3RyaW5nOiAke29sZER1ZURhdGVTdHJpbmd9YCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgbmV3RHVlRGF0ZTogJHtuZXdEdWVEYXRlfSB2cyAke29sZER1ZURhdGVTdHJpbmd9OiBvbGREdWVEYXRlU3RyaW5nYCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggbmV3RHVlRGF0ZSAhPSBvbGREdWVEYXRlU3RyaW5nKTtcbiAgICAgICAgICAgIGlmIChuZXdEdWVEYXRlICE9PSBvbGREdWVEYXRlU3RyaW5nICkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBuZXdEdWVEYXRlICE9PSBvbGREdWVEYXRlU3RyaW5nIWApO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBTZXQgbmV3IGR1ZSBkYXRlIHRvICR7bmV3RHVlRGF0ZX0gd2l0aCBjdXJyZW50IHRpbWUgZmlsbGVkIGluIWApO1xuICAgICAgICAgICAgICAgIHRhcmdldFRvZG8uc2V0RHVlRGF0ZShuZXcgRGF0ZShuZXdEdWVEYXRlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdyaXRlIG5ldyBjcmVhdGlvbkRhdGUgaWYgbmV3IGNyZWF0aW9uRGF0ZSAhPT0gb2xkQ3JlYXRpb25EYXRlIHZhbHVlc1xuICAgICAgICAgICAgbGV0IG5ld0NyZWF0aW9uRGF0ZSA9IHNhdmVkVmFsdWVzWzVdLnZhbHVlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYG5ld0NyZWF0aW9uRGF0ZTogJHtuZXdDcmVhdGlvbkRhdGV9YCk7IC8vIGZvcm1hdCBcIjIwMjItMDMtMjFcIlxuICAgICAgICAgICAgbGV0IG9sZENyZWF0aW9uRGF0ZSA9IHRhcmdldFRvZG8uZ2V0Q3JlYXRpb25EYXRlKCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgb2xkQ3JlYXRpb25EYXRlOiAke29sZENyZWF0aW9uRGF0ZX1gKTtcbiAgICAgICAgICAgIGxldCBvbGRDcmVhdGlvbkRhdGVTdHJpbmcgPSBgJHtvbGRDcmVhdGlvbkRhdGUuZ2V0RnVsbFllYXIoKX0tYFxuICAgICAgICAgICAgaWYob2xkQ3JlYXRpb25EYXRlLmdldE1vbnRoKCkgKyAxIDwgMTApIHtcbiAgICAgICAgICAgICAgICBvbGRDcmVhdGlvbkRhdGVTdHJpbmcgKz0gYDAke29sZENyZWF0aW9uRGF0ZS5nZXRNb250aCgpICsgMX0tYFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvbGRDcmVhdGlvbkRhdGVTdHJpbmcgKz0gYCR7b2xkQ3JlYXRpb25EYXRlLmdldE1vbnRoKCkgKyAxfS1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihvbGRDcmVhdGlvbkRhdGUuZ2V0RGF0ZSgpIDwgMTApIHtcbiAgICAgICAgICAgICAgICBvbGRDcmVhdGlvbkRhdGVTdHJpbmcgKz0gYDAke29sZENyZWF0aW9uRGF0ZS5nZXREYXRlKCl9YFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvbGRDcmVhdGlvbkRhdGVTdHJpbmcgKz0gYCR7b2xkQ3JlYXRpb25EYXRlLmdldERhdGUoKX1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgb2xkQ3JlYXRpb25EYXRlU3RyaW5nOiAke29sZENyZWF0aW9uRGF0ZVN0cmluZ31gKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBuZXdDcmVhdGlvbkRhdGU6ICR7bmV3Q3JlYXRpb25EYXRlfSB2cyAke29sZENyZWF0aW9uRGF0ZVN0cmluZ306IG9sZENyZWF0aW9uRGF0ZVN0cmluZ2ApO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coIG5ld0NyZWF0aW9uRGF0ZSAhPSBvbGRDcmVhdGlvbkRhdGVTdHJpbmcpO1xuICAgICAgICAgICAgaWYgKG5ld0NyZWF0aW9uRGF0ZSAhPT0gb2xkQ3JlYXRpb25EYXRlU3RyaW5nICkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBuZXdDcmVhdGlvbkRhdGUgIT09IG9sZENyZWF0aW9uRGF0ZVN0cmluZyFgKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgU2V0IG5ldyBkdWUgZGF0ZSB0byAke25ld0NyZWF0aW9uRGF0ZX0gd2l0aCBjdXJyZW50IHRpbWUgZmlsbGVkIGluIWApO1xuICAgICAgICAgICAgICAgIHRhcmdldFRvZG8uc2V0Q3JlYXRpb25EYXRlKG5ldyBEYXRlKG5ld0NyZWF0aW9uRGF0ZSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdG9kbyBET00gZWxlbWVudHMgdG8gcmVmbGVjdCB0aGUgdXBkYXRlZCB2YWx1ZXNcbiAgICAgICAgbGV0IG5ld1RpdGxlID0gXCJcIjtcbiAgICAgICAgaWYgKHNhdmVkVmFsdWVzWzBdLnZhbHVlLmxlbmd0aCA+IDMyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzYXZlZFZhbHVlc1swXS52YWx1ZSlcbiAgICAgICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IDM0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBuZXdUaXRsZSArPSBzYXZlZFZhbHVlc1swXS52YWx1ZS5jaGFyQXQoaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdUaXRsZSArPSBcIi4uLlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VGl0bGUgPSBzYXZlZFZhbHVlc1swXS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXRUb2RvLmdldFRvZG9EaXYoKS5maXJzdENoaWxkLm5leHRTaWJsaW5nLmlubmVyVGV4dCA9IG5ld1RpdGxlO1xuXG5cblxuICAgICAgICAvLyBUYXJnZXQgZGl2IGFuZCBkZWxldGUgaXRcbiAgICAgICAgY29uc3QgdG9kb0VsZW1lbnRDb250YWluZXIgPSB0YXJnZXRQcm9qZWN0LmdldFByb2plY3REaXYoKS5jaGlsZE5vZGVzWzFdO1xuICAgICAgICB0b2RvRWxlbWVudENvbnRhaW5lci5yZW1vdmVDaGlsZChlZGl0VG9kb1BhbmVEaXYpO1xuICAgICAgICAvLyBUb2dnbGUgcHJvamVjdE1lbnVPcGVuIHRvIGZhbHNlXG4gICAgICAgIHRhcmdldFByb2plY3QudG9nZ2xlUHJvamVjdE1lbnVPcGVuKCk7XG5cbiAgICAgICAgXG4gICAgfVxuICAgIHRoaXMuX3Byb2plY3RFZGl0VG9kb1NhdmVCdXR0b24gPSBfcHJvamVjdEVkaXRUb2RvU2F2ZUJ1dHRvbjtcblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0SW5mbywgaW5pdCxcbiAgICAgICAgZ2V0UHJvamVjdENvbnRhaW5lciwgc2V0UHJvamVjdENvbnRhaW5lcixcbiAgICAgICAgZ2VuZXJhdGVQcm9qZWN0Q29udGFpbmVyT2JqLFxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dpY0NvbnRyb2xsZXI7IiwiXG5pbXBvcnQge2Zvcm1hdCwgdG9EYXRlLCBpc0RhdGV9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IGZvcm1hdFJlbGF0aXZlV2l0aE9wdGlvbnMgfSBmcm9tICdkYXRlLWZucy9mcCc7XG5pbXBvcnQgdG9kb09iaiBmcm9tICcuL3RvZG9PYmonO1xuXG5jb25zdCBwcm9qZWN0T2JqID0gKCkgPT4ge1xuIFxuICAgIGxldCBfcHJvamVjdE5hbWU7XG4gICAgbGV0IF90b2RvTGlzdCA9IFtdO1xuICAgIGxldCBfcHJvamVjdENyZWF0aW9uRGF0ZTtcbiAgICBsZXQgX2R1ZURhdGU7XG4gICAgbGV0IF9wcm9qZWN0UHJpb3JpdHk7XG4gICAgbGV0IF9wcm9qZWN0RGl2O1xuICAgIGxldCBfcHJvamVjdE1lbnVPcGVuID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZXRJbmZvID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYCAgICAgICAgX3Byb2plY3ROYW1lOiAke19wcm9qZWN0TmFtZX1cbiAgICAgICAgX3RvZG9MaXN0OiAke190b2RvTGlzdH1cbiAgICAgICAgX3Byb2plY3RDcmVhdGlvbkRhdGVEYXRlOiAke19wcm9qZWN0Q3JlYXRpb25EYXRlfVxuICAgICAgICBfZHVlRGF0ZTogJHtfZHVlRGF0ZX1cbiAgICAgICAgX3Byb2plY3RQcmlvcml0eTogJHtfcHJvamVjdFByaW9yaXR5fVxuICAgICAgICBfcHJvamVjdERpdjogJHtfcHJvamVjdERpdn1cbiAgICAgICAgX3Byb2plY3RNZW51T3BlbjogJHtfcHJvamVjdE1lbnVPcGVufWBcbiAgICB9XG5cbiAgICBjb25zdCBpbml0ID0gKHByb2plY3ROYW1lLCB0b2RvTGlzdCwgY3JlYXRpb25EYXRlLCBkdWVEYXRlLCBwcm9qZWN0UHJpb3JpdHksIHByb2plY3REaXYsIHByb2plY3RNZW51T3BlbikgPT4ge1xuICAgICAgICBfcHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgX3RvZG9MaXN0ID0gdG9kb0xpc3Q7XG4gICAgICAgIF9wcm9qZWN0Q3JlYXRpb25EYXRlID0gY3JlYXRpb25EYXRlO1xuICAgICAgICBfZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIF9wcm9qZWN0UHJpb3JpdHkgPSBwcm9qZWN0UHJpb3JpdHk7XG4gICAgICAgIF9wcm9qZWN0RGl2ID0gcHJvamVjdERpdjtcbiAgICAgICAgX3Byb2plY3RNZW51T3BlbiA9IHByb2plY3RNZW51T3BlbjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvamVjdE5hbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfcHJvamVjdE5hbWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UHJvamVjdE5hbWUgPSAobmV3TmFtZSkgPT4ge1xuICAgICAgICBpZiggdHlwZW9mIG5ld05hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIF9wcm9qZWN0TmFtZSA9IG5ld05hbWU7IFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHJvamVjdE9iai5zZXRQcm9qZWN0TmFtZSBFcnJvciEgdHJpZWQgdG8gcGFzcyBhIG5vbi1zdHJpbmcgaW50byB0aGUgX25hbWUgZmllbGQhJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0Q3JlYXRpb25EYXRlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gX3Byb2plY3RDcmVhdGlvbkRhdGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UHJvamVjdENyZWF0aW9uRGF0ZSA9IChuZXdDcmVhdGlvbkRhdGUpID0+IHtcbiAgICAgICAgaWYoIGlzRGF0ZShuZXdDcmVhdGlvbkRhdGUpKSB7XG4gICAgICAgICAgICBfcHJvamVjdENyZWF0aW9uRGF0ZSA9IG5ld0NyZWF0aW9uRGF0ZTsgXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0T2JqLnNldFByb2plY3RDcmVhdGlvbkRhdGUgRXJyb3IhIHRyaWVkIHRvIHBhc3MgYSBub24tZGF0ZSBpbnRvIHRoZSBfcHJvamVjdENyZWF0aW9uRGF0ZSBmaWVsZCEnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBnZXRQcm9qZWN0RHVlRGF0ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9kdWVEYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFByb2plY3REdWVEYXRlID0gKG5ld0R1ZURhdGUpID0+IHtcbiAgICAgICAgaWYoIGlzRGF0ZShuZXdEdWVEYXRlKSkge1xuICAgICAgICAgICAgX2R1ZURhdGUgPSBuZXdEdWVEYXRlOyBcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3RPYmouc2V0Q3JlYXRpb25EdWVEYXRlIEVycm9yISB0cmllZCB0byBwYXNzIGEgbm9uLWRhdGUgaW50byB0aGUgX2R1ZURhdGUgZmllbGQhJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgZ2V0UHJvamVjdFByaW9yaXR5ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gX3Byb2plY3RQcmlvcml0eTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQcm9qZWN0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IHtcbiAgICAgICAgLy8gVGhpcyBpcyBhIGJpdCBmaWx0aHkuIFNob3VsZCB0YWtlIG51bWJlcnMsIDEsMiwzLDQsNSwgb3Igc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZXNlIHNhbWUgbnVtYmVycy4gWFhYVVBEQVRFWFhYIENsZWFuIHRoaXMuXG4gICAgICAgIGlmKCB0eXBlb2YgbmV3UHJpb3JpdHkgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIG5ld1ByaW9yaXR5ID09PSBcInN0cmluZ1wiICkge1xuICAgICAgICAgICAgX3Byb2plY3RQcmlvcml0eSA9IG5ld1ByaW9yaXR5OyBcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3RPYmouc2V0UHJvamVjdFByaW9ydHkgRXJyb3IhIHRyaWVkIHRvIHBhc3MgYSBub24tbnVtYmVyIGludG8gdGhlIF9wcm9qZWN0UHJpb3JpdHkgZmllbGQhJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0RGl2ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gX3Byb2plY3REaXY7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UHJvamVjdERpdiA9IChuZXdEaXYpID0+IHtcbiAgICAgICAgX3Byb2plY3REaXYgPSBuZXdEaXY7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFByb2plY3RNZW51T3BlbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9wcm9qZWN0TWVudU9wZW47XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UHJvamVjdE1lbnVPcGVuID0gKG1lbnVPcGVuKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbWVudU9wZW4gPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICBfcHJvamVjdE1lbnVPcGVuID0gbWVudU9wZW47XG4gICAgICAgICAgICByZXR1cm4gX3Byb2plY3RNZW51T3BlbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1IgaW4gc2V0UHJvamVjdE1lbnVPcGVuISBUcmllZCB0byBwYXNzIGEgbm9uLWJvb2xlYW4hXCIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVQcm9qZWN0TWVudU9wZW4gPSAoKSA9PiB7XG4gICAgICAgIGlmIChfcHJvamVjdE1lbnVPcGVuKSB7XG4gICAgICAgICAgICBfcHJvamVjdE1lbnVPcGVuID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfcHJvamVjdE1lbnVPcGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFRvZG9MaXN0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gX3RvZG9MaXN0O1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRvZG9MaXN0ID0gKG5ld1RvZG9MaXN0KSA9PiB7XG4gICAgICAgIGlmKCB0eXBlb2YgbmV3VG9kb0xpc3QgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIC8vIEkgY2FuIHJld3JpdGUgdGhpcyB3aXRoIGEgbG9vcCBhbmQgdGhlIGFyZ3NbXSB0byB0YWtlIG11bHRpcGxlIG5ldyBvYmplY3RzLCBidXQgZm9yIG15IHB1cnBvc2VzLCBJIHdpbGwgb25seSBldmVyIGJlIHNldHRpbmcgdGhpcyB0b2RvTGlzdCBvbmUgYXJyYXkgYXQgYSB0aW1lXG4gICAgICAgICAgICBfdG9kb0xpc3QgPSBuZXcgQXJyYXkobmV3VG9kb0xpc3QpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHJvamVjdE9iai5zZXRUb2RvTGlzdCBlcnJvciEgdHJpZWQgdG8gcGFzcyBhIG5vbi1vYmplY3QgaW50byB0aGUgX3RvZG9MaXN0IGZpZWxkIScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGNyZWF0aW9uRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjaGVja2xpc3QsIGNvbXBsZXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvT2JqKCk7XG4gICAgICAgIG5ld1RvZG8uaW5pdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGNyZWF0aW9uRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjaGVja2xpc3QsIGNvbXBsZXRlKTtcbiAgICAgICAgX3RvZG9MaXN0LnB1c2gobmV3VG9kbyk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVG9kb09iaiA9IChuZXdUb2RvKSA9PiB7XG5cbiAgICAgICAgaWYodHlwZW9mIG5ld1RvZG8gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIF90b2RvTGlzdC5wdXNoKG5ld1RvZG8pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHJvamVjdE9iai5hZGRUb2RvT2JqIGVycm9yISB0cmllZCB0byBwYXNzIGEgbm9uLW9iamVjdCB0byB0aGUgX3RvZG9MaXN0IScpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gICAgICAgICAgIFxuXG4gICAgfVxuXG4gICAgLy8gVGFrZXMgYW4gaW50ZWdlciAndGFyZ2V0J1xuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSAodGFyZ2V0KSA9PiB7XG4gICAgICAgIGlmKF90b2RvTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfdG9kb0xpc3Quc3BsaWNlKHRhcmdldCwgMSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0T2JqLnJlbW92ZVRvZG8gRXJyb3IhIHRyaWVkIHRvIHJlbW92ZSBhbiBlbGVtZW50IGZyb20gYW4gZW1wdHkgX3RvZG9MaXN0IScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZ2V0VG9kb0xpc3QoKSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVUYXJnZXRUb2RvID0gKHRhcmdldFRvZG8pID0+IHtcbiAgICAgICAgaWYoX3RvZG9MaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBfbmV3TGlzdCA9IF90b2RvTGlzdC5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50ICE9IHRhcmdldFRvZG8pO1xuICAgICAgICAgICAgX3RvZG9MaXN0ID0gX25ld0xpc3Q7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0T2JqLnJlbW92ZVRhcmdldFRvZG8gRXJyb3IhIHRyaWVkIHRvIHJlbW92ZSBhbiBlbGVtZW50IGZyb20gYW4gZW1wdHkgX3RvZG9MaXN0IScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVvcmRlclRvZG8gPSAodGFyZ2V0LCBkZXN0aW5hdGlvbikgPT4ge1xuICAgICAgICBpZih0YXJnZXQgPCBfdG9kb0xpc3QubGVuZ3RoICYmIGRlc3RpbmF0aW9uIDwgX3RvZG9MaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0ZvciBEZWJ1Z2dpbmc6IENvbnNvbGUgbG9nIG9mIE9MRCBfdG9kb0xpc3Q6ICcpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZ2V0VG9kb0xpc3QoKSk7XG4gICAgICAgICAgICBfdG9kb0xpc3Quc3BsaWNlKGRlc3RpbmF0aW9uLCAwLCAoX3RvZG9MaXN0LnNwbGljZSh0YXJnZXQsIDEpWzBdKSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnRm9yIERlYnVnZ2luZzogQ29uc29sZSBsb2cgb2YgTkVXIF90b2RvTGlzdDogJyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhnZXRUb2RvTGlzdCgpKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3RPYmoucmVvcmRlclRvZG8gRXJyb3IhIFRyaWVkIHRvIHBhc3MgYSB2YWx1ZSBncmVhdGVyIHRoYW4gX3RvZG9MaXN0Lmxlbmd0aCBmb3IgdGFyZ2V0IG9yIGRlc3RpbmF0aW9uIScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0SW5mbyxcbiAgICAgICAgaW5pdCxcbiAgICAgICAgZ2V0UHJvamVjdE5hbWUsIHNldFByb2plY3ROYW1lLFxuICAgICAgICBnZXRQcm9qZWN0Q3JlYXRpb25EYXRlLCBzZXRQcm9qZWN0Q3JlYXRpb25EYXRlLFxuICAgICAgICBnZXRQcm9qZWN0RHVlRGF0ZSwgc2V0UHJvamVjdER1ZURhdGUsXG4gICAgICAgIGdldFByb2plY3RQcmlvcml0eSwgc2V0UHJvamVjdFByaW9yaXR5LFxuICAgICAgICBnZXRQcm9qZWN0RGl2LCBzZXRQcm9qZWN0RGl2LFxuICAgICAgICBnZXRQcm9qZWN0TWVudU9wZW4sIHNldFByb2plY3RNZW51T3BlbiwgdG9nZ2xlUHJvamVjdE1lbnVPcGVuLFxuICAgICAgICBnZXRUb2RvTGlzdCwgc2V0VG9kb0xpc3QsIGFkZFRvZG8sIGFkZFRvZG9PYmosIHJlbW92ZVRvZG8sIHJlbW92ZVRhcmdldFRvZG8sIHJlb3JkZXJUb2RvLFxuICAgICAgICBcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdE9iajsiLCJcbmltcG9ydCBwcm9qZWN0T2JqIGZyb20gJy4vcHJvamVjdC5qcyc7XG5cbi8vIEkgYW0gcHJvamVjdENvbnRhaW5lck9iai4gSSBob3VzZSBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgb2YgcHJvamVjdE9icyBhbmQgYWxzbyBjb250YWluIHRoZSA8ZGl2PiByZWZlcmVuY2UgdG8gcmVsZXZhbnQgRE9NIGVsZW1lbnRzIGZvciBsYXRlciBtYW5pcHVsYXRpb24gYnkgbG9naWNDb250cm9sbGVyXG5cbmNvbnN0IHByb2plY3RDb250YWluZXJPYmogPSAoKSA9PiB7XG5cbiAgICBsZXQgX3Byb2plY3RBcnIgPSBbXTtcbiAgICBsZXQgX3Byb2plY3RDb250YWluZXJEaXY7XG4gICAgbGV0IF9hZGRCdXR0b247XG4gICAgbGV0IF9hZGRCdXR0b25NZW51ID0gZmFsc2U7XG5cblxuICAgIGNvbnN0IGdldEluZm8gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgSSBhbSBwcm9qZWN0Q29udGFpbmVyT2JqLmdldEluZm8oKVxuICAgICAgICBfcHJvamVjdEFycjogJHtfcHJvamVjdEFycn1cbiAgICAgICAgX3Byb2plY3RDb250YWluZXJEaXY6ICR7X3Byb2plY3RDb250YWluZXJEaXZ9XG4gICAgICAgIF9hZGRCdXR0b246ICR7X2FkZEJ1dHRvbn1cbiAgICAgICAgX2FkZEJ1dHRvbk1lbnU6ICR7X2FkZEJ1dHRvbk1lbnV9YFxuICAgIH1cblxuICAgIGNvbnN0IGluaXQgPSAobmV3UHJvamVjdEFyciwgbmV3UHJvamVjdENvbnRhaW5lckRpdiwgbmV3QWRkQnV0dG9uLCBuZXdBZGRCdXR0b25NZW51KSA9PiB7XG4gICAgICAgIF9wcm9qZWN0QXJyID0gbmV3UHJvamVjdEFycjtcbiAgICAgICAgX3Byb2plY3RDb250YWluZXJEaXYgPSBuZXdQcm9qZWN0Q29udGFpbmVyRGl2XG4gICAgICAgIF9hZGRCdXR0b24gPSBuZXdBZGRCdXR0b247XG4gICAgICAgIF9hZGRCdXR0b25NZW51ID0gbmV3QWRkQnV0dG9uTWVudTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0QXJyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gX3Byb2plY3RBcnI7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UHJvamVjdEFyciA9IChuZXdQcm9qZWN0QXJyKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbmV3UHJvamVjdEFyciA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgX3Byb2plY3RBcnIgPSBuZXdQcm9qZWN0QXJyO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHJvamVjdENvbnRhaW5lck9iai5fc2V0UHJvamVjdEFyciBFcnJvciEgdHJpZWQgdG8gcGFzcyBhIG5vbi1vYmplY3QgaW50byB0aGUgX3Byb2plY3RBcnIgZmllbGQhJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKG5ld1Byb2plY3RPYmopID0+IHtcbiAgICAgICAgaWYodHlwZW9mIG5ld1Byb2plY3RPYmogPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIF9wcm9qZWN0QXJyLnB1c2gobmV3UHJvamVjdE9iaik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0Q29udGFpbmVyT2JqLl9hZGRQcm9qZWN0QXJyIEVycm9yISB0cmllZCB0byBwYXNzIGEgbm9uLW9iamVjdCB0byBwdXNoIGludG8gX3Byb2plY3RBcnIhJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIGlmKHR5cGVvZiBpbmRleCA9PT0gXCJudW1iZXJcIiAmJiBpbmRleCA8IF9wcm9qZWN0QXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgX3Byb2plY3RBcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3RDb250YWluZXJPYmouZGVsZXRlUHJvamVjdCBFcnJvciEgdHJpZWQgdG8gcGFzcyBhIG5vbi1udW1iZXIgdG8gaW5kZXggZm9yIF9wcm9qZWN0QXJyLnNwbGljZSBPUiBpbmRleCA+PSBfcHJvamVjdEFyci5sZW5ndGg6ICcgKyBpbmRleCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0Q29udGFpbmVyRGl2ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gX3Byb2plY3RDb250YWluZXJEaXY7XG4gICAgfVxuXG4gICAgLy8gSW4gYW4gaWRlYWwgd29ybGQsIHRoaXMgdHlwZSBjaGVja3MgdG8gc2VlIHRoYXQgbmV3UHJvamVjdENvbnRhaW5lckRpdiBpcyBhIE5vZGUuXG4gICAgY29uc3Qgc2V0UHJvamVjdENvbnRhaW5lckRpdiA9IChuZXdQcm9qZWN0Q29udGFpbmVyRGl2KSA9PiB7XG4gICAgICAgIC8vIGlmICh0eXBlb2YgbmV3UHJvamVjdENvbnRhaW5lckRpdiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgX3Byb2plY3RDb250YWluZXJEaXYgPSBuZXdQcm9qZWN0Q29udGFpbmVyRGl2O1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncHJvamVjdENvbnRhaW5lck9iai5fc2V0UHJvamVjdEFyciBFcnJvciEgdHJpZWQgdG8gcGFzcyBhIG5vbi1vYmplY3QgaW50byB0aGUgX3Byb2plY3RBcnIgZmllbGQhJyk7XG4gICAgICAgICAgICAvLyByZXR1cm4gZmFsc2U7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IGdldEFkZEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9hZGRCdXR0b247XG4gICAgfVxuXG4gICAgLy8gU2VlIHR5cGUgY2hlY2tpbmcgY29tbWVudCBmb3Igc2V0UHJvamVjdENvbnRhaW5lckRpdlxuICAgIGNvbnN0IHNldEFkZEJ1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgX3Byb2plY3RDb250YWluZXJEaXYgPSBuZXdQcm9qZWN0Q29udGFpbmVyRGl2O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRBZGRCdXR0b25NZW51ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gX2FkZEJ1dHRvbk1lbnU7XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlQWRkQnV0dG9uTWVudSA9ICgpID0+IHtcbiAgICAgICAgaWYgKF9hZGRCdXR0b25NZW51KSB7XG4gICAgICAgICAgICBfYWRkQnV0dG9uTWVudSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2FkZEJ1dHRvbk1lbnUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4vLyBwcm9qZWN0TmFtZSwgdG9kb0xpc3QsIGNyZWF0aW9uRGF0ZSwgZHVlRGF0ZSwgcHJvamVjdFByaW9yaXR5LCBwcm9qZWN0RGl2XG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3ROYW1lSW5wdXQsIGNyZWF0aW9uRGF0ZUlucHV0LCBkdWVEYXRlSW5wdXQsIHByb2plY3RQcmlvcml0eUlucHV0LCBwcm9qZWN0RGl2SW5wdXQsIHRvZG9MaXN0SW5wdXQpID0+IHtcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBwcm9qZWN0T2JqKCk7XG5cbiAgICAgICAgLy8gT3B0aW9uYWwgc3dpdGNoIGhlcmUsIGEgcHJvamVjdCBjYW4gYmUgY3JlYXRlZCB3aXRob3V0IGFuIGFjdGl2ZSB0b2RvTGlzdCwgd2hpY2ggaW5zdGVhZCBnZW5lcmF0ZXMgYW4gZW1wdHkgYXJyYXlcbiAgICAgICAgaWYoIHRvZG9MaXN0SW5wdXQgKSB7XG4gICAgICAgICAgICBuZXdQcm9qZWN0LmluaXQocHJvamVjdE5hbWVJbnB1dCwgdG9kb0xpc3RJbnB1dCwgY3JlYXRpb25EYXRlSW5wdXQsIGR1ZURhdGVJbnB1dCwgcHJvamVjdFByaW9yaXR5SW5wdXQsIHByb2plY3REaXZJbnB1dCwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3UHJvamVjdC5nZXRJbmZvKCkpO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1Byb2plY3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdQcm9qZWN0LmluaXQocHJvamVjdE5hbWVJbnB1dCwgW10sIGNyZWF0aW9uRGF0ZUlucHV0LCBkdWVEYXRlSW5wdXQsIHByb2plY3RQcmlvcml0eUlucHV0LCBwcm9qZWN0RGl2SW5wdXQsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1Byb2plY3QuZ2V0SW5mbygpKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdQcm9qZWN0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVhZFByb2plY3QgPSAoKSA9PiB7XG5cbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVQcm9qZWN0ID0gKCkgPT4ge1xuXG4gICAgfVxuXG4gICAgY29uc3QgZGVzdHJveVByb2plY3QgPSAoKSA9PiB7XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIGdldEluZm8sIGluaXQsXG4gICAgICAgIGdldFByb2plY3RBcnIsIHNldFByb2plY3RBcnIsIGFkZFByb2plY3QsIGRlbGV0ZVByb2plY3QsXG4gICAgICAgIGdldFByb2plY3RDb250YWluZXJEaXYsIHNldFByb2plY3RDb250YWluZXJEaXYsXG4gICAgICAgIGdldEFkZEJ1dHRvbiwgc2V0QWRkQnV0dG9uLCBcbiAgICAgICAgZ2V0QWRkQnV0dG9uTWVudSwgdG9nZ2xlQWRkQnV0dG9uTWVudSxcbiAgICAgICAgY3JlYXRlUHJvamVjdCxcblxuXG5cblxuXG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdENvbnRhaW5lck9iajsiLCJcbmltcG9ydCB7Zm9ybWF0LCB0b0RhdGUsIGlzRGF0ZX0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5jb25zdCB0b2RvT2JqID0gKCkgPT4ge1xuXG4gICAgbGV0IF90aXRsZTtcbiAgICBsZXQgX2Rlc2NyaXB0aW9uO1xuICAgIGxldCBfZHVlRGF0ZTtcbiAgICBsZXQgX2NyZWF0aW9uRGF0ZTtcbiAgICBsZXQgX3ByaW9yaXR5O1xuICAgIGxldCBfbm90ZXM7XG4gICAgbGV0IF9jaGVja2xpc3Q7XG4gICAgbGV0IF9jb21wbGV0ZTtcbiAgICBsZXQgX3RvZG9EaXY7XG4gICAgbGV0IF90b2RvRGVsZXRpb25EaXY7XG5cbiAgICBjb25zdCBnZXRJbmZvID0gKCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnX2NoZWNrbGlzdCBjb250ZW50czogJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGdldENoZWNrbGlzdCgpKTtcbiAgICAgICAgcmV0dXJuIGAgICAgICAgICAgICAgICAgX3RpdGxlOiAke190aXRsZX1cbiAgICAgICAgICAgICAgICBfZGVzY3JpcHRpb246ICR7X2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIF9kdWVEYXRlOiAke19kdWVEYXRlfVxuICAgICAgICAgICAgICAgIF9jcmVhdGlvbkRhdGU6ICR7X2NyZWF0aW9uRGF0ZX1cbiAgICAgICAgICAgICAgICBfcHJpb3JpdHk6ICR7X3ByaW9yaXR5fVxuICAgICAgICAgICAgICAgIF9ub3RlczogJHtfbm90ZXN9XG4gICAgICAgICAgICAgICAgX2NoZWNrbGlzdDogJHtfY2hlY2tsaXN0fVxuICAgICAgICAgICAgICAgIF9jb21wbGV0ZTogJHtfY29tcGxldGV9XG4gICAgICAgICAgICAgICAgX3RvZG9EaXY6ICR7X3RvZG9EaXZ9YFxuXG4gICAgfVxuXG4gICAgLy8gSW4gYSBwZXJmZWN0IHdvcmxkLCBpbml0IGFzc2lnbnMgdGhlc2UgcHJvcGVydGllcyB0aHJvdWdoIHRoZWlyIHJlbGV2YW50IHNldHRlcnMgZm9yIHR5cGUtY2hlY2tpbmdcbiAgICBjb25zdCBpbml0ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgY3JlYXRpb25EYXRlLCBwcmlvcml0eSwgbm90ZXMsIGNoZWNrbGlzdCwgY29tcGxldGUsIHRvZG9EaXYpID0+IHtcbiAgICAgICAgX3RpdGxlID0gdGl0bGU7XG4gICAgICAgIF9kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBfZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIF9jcmVhdGlvbkRhdGUgPSBjcmVhdGlvbkRhdGU7XG4gICAgICAgIF9wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICBfbm90ZXMgPSBub3RlcztcbiAgICAgICAgX2NoZWNrbGlzdCA9IGNoZWNrbGlzdDtcbiAgICAgICAgX2NvbXBsZXRlID0gY29tcGxldGU7XG4gICAgICAgIF90b2RvRGl2ID0gdG9kb0RpdjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF90aXRsZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IChfbmV3VGl0bGUpID0+IHtcbiAgICAgICAgaWYoIHR5cGVvZiBfbmV3VGl0bGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIF90aXRsZSA9IF9uZXdUaXRsZTsgXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2RvT2JqLl9zZXRUaXRsZSBFcnJvciEgdHJpZWQgdG8gcGFzcyBhIG5vbi1zdHJpbmcgaW50byB0aGUgX3RpdGxlIGZpZWxkIScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzYykgPT4ge1xuICAgICAgICBpZiggdHlwZW9mIG5ld0Rlc2MgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIF9kZXNjcmlwdGlvbiA9IG5ld0Rlc2M7IFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndG9kb09iai5zZXREZXNjcmlwdGlvbiBFcnJvciEgdHJpZWQgdG8gcGFzcyBhIG5vbi1zdHJpbmcgaW50byB0aGUgX2Rlc2NyaXB0aW9uIGZpZWxkIScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9kdWVEYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldER1ZURhdGUgPSAobmV3RHVlRGF0ZSkgPT4ge1xuICAgICAgICBpZiggaXNEYXRlKG5ld0R1ZURhdGUpKSB7XG4gICAgICAgICAgICBfZHVlRGF0ZSA9IG5ld0R1ZURhdGU7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvZG9PYmouc2V0RHVlRGF0ZSBFcnJvciEgdHJpZWQgdG8gcGFzcyBhIG5vbi1zdHJpbmcgaW50byB0aGUgX2R1ZURhdGUgZmllbGQhJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldENyZWF0aW9uRGF0ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9jcmVhdGlvbkRhdGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Q3JlYXRpb25EYXRlID0gKG5ld0NyZWF0aW9uRGF0ZSkgPT4ge1xuICAgICAgICBpZiggaXNEYXRlKG5ld0NyZWF0aW9uRGF0ZSkpIHtcbiAgICAgICAgICAgIF9jcmVhdGlvbkRhdGUgPSBuZXdDcmVhdGlvbkRhdGU7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvZG9PYmouc2V0Q3JlYXRpb25EYXRlIEVycm9yISB0cmllZCB0byBwYXNzIGEgbm9uLWRhdGUgaW50byB0aGUgX2NyZWF0aW9uRGF0ZSBmaWVsZCEnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IHtcbiAgICAgICAgaWYoIHR5cGVvZiBuZXdQcmlvcml0eSA9PT0gXCJudW1iZXJcIiApIHtcbiAgICAgICAgICAgIF9wcmlvcml0eSA9IG5ld1ByaW9yaXR5OyBcbiAgICAgICAgfSBlbHNlIFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvZG9PYmouc2V0UHJpb3J0eSBFcnJvciEgdHJpZWQgdG8gcGFzcyBhIG5vbi1udW1iZXIgaW50byB0aGUgX3ByaW9yaXR5IGZpZWxkIScpXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGdldE5vdGVzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gX25vdGVzO1xuICAgIH1cblxuICAgIGNvbnN0IHNldE5vdGVzID0gKG5ld05vdGVzKSA9PiB7XG4gICAgICAgIGlmKCB0eXBlb2YgbmV3Tm90ZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIF9ub3RlcyA9IG5ld05vdGVzOyBcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvZG9PYmouc2V0Tm90ZXMgRXJyb3IhIHRyaWVkIHRvIHBhc3MgYSBub24tc3RyaW5nIGludG8gdGhlIF9ub3RlcyBmaWVsZCEnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldENoZWNrbGlzdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9jaGVja2xpc3Q7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Q2hlY2tsaXN0ID0gKG5ld0NoZWNrbGlzdCkgPT4ge1xuICAgICAgICBpZiggdHlwZW9mIG5ld0NoZWNrbGlzdCA9PT0gXCJvYmplY3RcIiApIHtcbiAgICAgICAgICAgIF9jaGVja2xpc3QgPSBuZXdDaGVja2xpc3Q7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2RvT2JqLnNldENoZWNrbGlzdCBFcnJvciEgdHJpZWQgdG8gcGFzcyBhIG5vbi1vYmplY3QgaW50byB0aGUgX2NoZWNrbGlzdCBmaWVsZCEnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFkZEl0ZW1Ub0NoZWNrbGlzdCA9IChuZXdJdGVtLCBjaGVjaykgPT4ge1xuICAgICAgICBpZiggdHlwZW9mIG5ld0l0ZW0gPT09IFwic3RyaW5nXCIpIHtcblxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9jaGVja2xpc3QsIG5ld0l0ZW0sIHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBjaGVja1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvZG9PYmouYWRkSXRlbVRvQ2hlY2tsaXN0IEVycm9yISB0cmllZCB0byBwYXNzIGEgbm9uLXN0cmluZyBhcyBhIG5ld0l0ZW0gZm9yIF9jaGVja2xpc3QhJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVJdGVtT2ZmQ2hlY2tsaXN0ID0gKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSBcInN0cmluZ1wiKSB7XG5cbiAgICAgICAgICAgIGlmKF9jaGVja2xpc3QuaGFzT3duUHJvcGVydHkoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgX2NoZWNrbGlzdFtpdGVtXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHRvZG9PYmouZGVsZXRlSXRlbU9mZkNoZWNrbGlzdCBFcnJvciEgX2NoZWNrbGlzdC4ke2l0ZW19IG5vdCBmb3VuZCBhcyBhIHByb3BlcnR5IGluIF9jaGVja2xpc3QhYClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2RvT2JqLmRlbGV0ZUl0ZW1PZmZDaGVja2xpc3QgRXJyb3IhIFRyaWVkIHRvIHBhc3MgYSBub24tc3RyaW5nIGludG8gcHJvcGVydHlzIGhhc093blByb3BlcnR5IScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlSXRlbUluQ2hlY2tsaXN0ID0gKHByb3BlcnR5KSA9PiB7XG4gICAgICAgIGlmKF9jaGVja2xpc3QuaGFzT3duUHJvcGVydHkocHJvcGVydHkpICkge1xuICAgICAgICAgICAgaWYoIF9jaGVja2xpc3RbcHJvcGVydHldICkge1xuICAgICAgICAgICAgICAgIF9jaGVja2xpc3RbcHJvcGVydHldID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9jaGVja2xpc3RbcHJvcGVydHldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2RvT2JqLnRvZ2dsZUl0ZW1JbkNoZWNrbGlzdCBFcnJvciEgX2NoZWNrbGlzdCBkb2VzIG5vdCBoYXZlIHByb3BlcnR5OiAnICsgcHJvcGVydHkpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0Q29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfY29tcGxldGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Q29tcGxldGUgPSAobmV3Q29tcGxldGUpID0+IHtcbiAgICAgICAgaWYoIHR5cGVvZiBuZXdDb21wbGV0ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIF9jb21wbGV0ZSA9IG5ld0NvbXBsZXRlOyBcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvZG9PYmouX3NldENvbXBsZXRlIEVycm9yISB0cmllZCB0byBwYXNzIGEgbm9uLWJvb2VsYW4gaW50byB0aGUgX2NvbXBsZXRlIGZpZWxkIScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VG9kb0RpdiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF90b2RvRGl2O1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRvZG9EaXYgPSAobmV3RGl2KSA9PiB7XG4gICAgICAgIF90b2RvRGl2ID0gbmV3RGl2O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRUb2RvRGVsZXRpb25EaXYgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBfdG9kb0RlbGV0aW9uRGl2O1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRvZG9EZWxldGlvbkRpdiA9IChuZXdEaXYpID0+IHtcbiAgICAgICAgX3RvZG9EZWxldGlvbkRpdiA9IG5ld0RpdjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0SW5mbyxcbiAgICAgICAgaW5pdCxcbiAgICAgICAgZ2V0VGl0bGUsIHNldFRpdGxlLFxuICAgICAgICBnZXREZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb24sXG4gICAgICAgIGdldER1ZURhdGUsIHNldER1ZURhdGUsXG4gICAgICAgIGdldENyZWF0aW9uRGF0ZSwgc2V0Q3JlYXRpb25EYXRlLFxuICAgICAgICBnZXRQcmlvcml0eSwgc2V0UHJpb3JpdHksXG4gICAgICAgIGdldE5vdGVzLCBzZXROb3RlcyxcbiAgICAgICAgZ2V0Q2hlY2tsaXN0LCBzZXRDaGVja2xpc3QsIGFkZEl0ZW1Ub0NoZWNrbGlzdCwgZGVsZXRlSXRlbU9mZkNoZWNrbGlzdCwgdG9nZ2xlSXRlbUluQ2hlY2tsaXN0LFxuICAgICAgICBnZXRDb21wbGV0ZSwgc2V0Q29tcGxldGUsXG4gICAgICAgIGdldFRvZG9EaXYsIHNldFRvZG9EaXYsXG4gICAgICAgIGdldFRvZG9EZWxldGlvbkRpdiwgc2V0VG9kb0RlbGV0aW9uRGl2LFxuXG5cbiAgICAgICAgXG4gICAgfVxuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9PYmo7IiwiXG5cbmZ1bmN0aW9uIGhlYWRlck5hdigpIHtcblxuICAgIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXYuaW5uZXJIVE1MID0gJ0QgUm9lbWVyJztcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ25hdi10aXRsZScpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiVG8tRG9cIjtcbiAgICBuYXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIFxuICAgIGxldCBsaXN0T3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdE9wdGlvbnMuY2xhc3NMaXN0LmFkZCgnbmF2QnV0dG9uVG9nZ2xlJywgJ29wdGlvbnNUb2dnbGUnKTtcbiAgICBsaXN0T3B0aW9ucy5pbm5lckhUTUwgPSAnT3B0aW9ucyc7XG5cbiAgICBsZXQgbGlzdEFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0QWJvdXQuY2xhc3NMaXN0LmFkZCgnbmF2QnV0dG9uVG9nZ2xlJywgJ2Fib3V0VG9nZ2xlJyk7XG4gICAgbGlzdEFib3V0LmlubmVySFRNTCA9ICdBYm91dCc7XG5cbiAgICBsZXQgbGlzdFBvcnRmb2xpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdFBvcnRmb2xpby5jbGFzc0xpc3QuYWRkKCduYXZCdXR0b25Ub2dnbGUnLCAncG9ydGZvbGlvVG9nZ2xlJyk7XG5cbiAgICBsZXQgcG9ydGZvbGlvTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBwb3J0Zm9saW9MaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9kb21pbmljcm9lbWVyXCI7XG4gICAgcG9ydGZvbGlvTGluay5pbm5lckhUTUwgPSAnUG9ydGZvbGlvJztcblxuICAgIGxpc3RQb3J0Zm9saW8uYXBwZW5kQ2hpbGQocG9ydGZvbGlvTGluayk7XG5cbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RPcHRpb25zKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpc3RBYm91dCk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChsaXN0UG9ydGZvbGlvKTtcblxuICAgIG5hdi5hcHBlbmRDaGlsZChsaXN0KTtcblxuXG4gICAgcmV0dXJuIG5hdjtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJOYXY7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBpbXBvcnQgVG9kb09iaiBmcm9tICcuL3RvZG9PYmouanMnO1xuLy8gaW1wb3J0IHRvZG9UZXN0IGZyb20gJy4vdGVzdHMvdG9kb1Rlc3QuanMnO1xuLy8gaW1wb3J0IHByb2plY3RPYmpUZXN0IGZyb20gJy4vdGVzdHMvcHJvamVjdE9ialRlc3QuanMnO1xuaW1wb3J0IGhlYWRlck5hdiBmcm9tIFwiLi91dGlscy9oZWFkZXItbmF2LmpzXCI7XG5cbmltcG9ydCBsb2dpY0NvbnRyb2xsZXJPYmogZnJvbSAnLi9sb2dpY0NvbnRyb2xsZXIuanMnO1xuXG5cbi8vIGZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbi8vICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBgU2FtcGxlIHN0cmluZyBnb2VzIGhlcmUgY3NzIHRlc3RgO1xuLy8gICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGVsbG8nKTtcbi8vICAgICByZXR1cm4gZWxlbWVudDtcbi8vIH1cbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuXG5cbi8vIGNvbnNvbGUubG9nKCd0ZXN0JylcbmNvbnN0IG5hdiA9IGhlYWRlck5hdigpO1xuZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUobmF2LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpKTtcblxuXG5sZXQgbG9naWNDb250cm9sbGVyID0gbmV3IGxvZ2ljQ29udHJvbGxlck9iaigpO1xubG9naWNDb250cm9sbGVyLmdlbmVyYXRlUHJvamVjdENvbnRhaW5lck9iaigpO1xuXG5cblxuXG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgVGVzdGluZyBvYmplY3QgZnVuY3Rpb25hbGl0eVxuLy8gICAgICAgIEJlIHN1cmUgdG8gdW5jb21tZW50IG91dCB0aGUgY29ycmVzcG9uZGluZyBpbXBvcnRzIGZvciB0ZXN0IHB1cnBvc2VzXG4vLyBjb25zb2xlLmxvZygnKGAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWZpbmlzaGVkIHN0YXRlIG9mIHRvZG9UZXN0KCk6ICcgKyB0b2RvVGVzdCgpKTtcbi8vIGNvbnNvbGUubG9nKGAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmaW5pc2hlZCBzdGF0ZSBvZiBwcm9qZWN0T2JqVGVzdCgpOiBgICsgcHJvamVjdE9ialRlc3QoKSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=