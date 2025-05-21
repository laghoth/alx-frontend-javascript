/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("\r\n// Example\r\nconst teacher3 = {\r\n    firstName: \"John\",\r\n    lastName: \"Doe\",\r\n    fullTimeEmployee: false,\r\n    location: \"London\",\r\n    contract: false, // extra property allowed\r\n};\r\nconst director1 = {\r\n    firstName: \"John\",\r\n    lastName: \"Doe\",\r\n    fullTimeEmployee: true,\r\n    location: \"London\",\r\n    contract: false,\r\n    numberOfReports: 17,\r\n};\r\nconsole.log(teacher3);\r\nconst printTeacher = (firstName, lastName) => {\r\n    return `${firstName.charAt(0)}. ${lastName}`;\r\n};\r\nconsole.log(printTeacher(\"John\", \"Doe\")); // J. Doe\r\n// The class implementation\r\nclass StudentClass {\r\n    constructor(firstName, lastName) {\r\n        this.firstName = firstName;\r\n        this.lastName = lastName;\r\n    }\r\n    workOnHomework() {\r\n        return \"Currently working\";\r\n    }\r\n    displayName() {\r\n        return this.firstName;\r\n    }\r\n}\r\n// Example usage\r\nconst student = new StudentClass(\"Karim\", \"Benzema\");\r\nconsole.log(student.displayName()); // Karim\r\nconsole.log(student.workOnHomework()); // Currently working\r\n// -------------------------------------\r\n\n\n//# sourceURL=webpack://task_1/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;