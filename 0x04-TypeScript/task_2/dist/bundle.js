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

eval("\r\n// Classes\r\nclass Director {\r\n    workFromHome() {\r\n        return \"Working from home\";\r\n    }\r\n    getCoffeeBreak() {\r\n        return \"Getting a coffee break\";\r\n    }\r\n    workDirectorTasks() {\r\n        return \"Getting to director tasks\";\r\n    }\r\n}\r\nclass Teacher {\r\n    workFromHome() {\r\n        return \"Cannot work from home\";\r\n    }\r\n    getCoffeeBreak() {\r\n        return \"Cannot have a break\";\r\n    }\r\n    workTeacherTasks() {\r\n        return \"Getting to work\";\r\n    }\r\n}\r\n// Function to create employee\r\nfunction createEmployee(salary) {\r\n    if (typeof salary === \"number\" && salary < 500) {\r\n        return new Teacher();\r\n    }\r\n    return new Director();\r\n}\r\n// Type predicate\r\nfunction isDirector(employee) {\r\n    return employee instanceof Director;\r\n}\r\n// Execute appropriate method\r\nfunction executeWork(employee) {\r\n    if (isDirector(employee)) {\r\n        return employee.workDirectorTasks();\r\n    }\r\n    return employee.workTeacherTasks();\r\n}\r\n// Test output\r\nconsole.log(executeWork(createEmployee(200))); // Getting to work\r\nconsole.log(executeWork(createEmployee(1000))); // Getting to director tasks\r\n\n\n//# sourceURL=webpack://task_1/./js/main.ts?");

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