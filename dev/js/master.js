// Deps =========================================
import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/master.scss';

// Setting Global Vars ==========================
Object.assign(window, { React, ReactDOM });

// _bind Helper =================================
React.Component.prototype._bind = function _bind(...methods) {

  methods.forEach((method) => {

    this[method] = this[method].bind(this);
  });
};

// // Modules ======================================
// import runGlobal from './modules/global';

// // Kickstart app ================================
// (() => {

//   runGlobal();
// })();

// 	console.log(module.hot, 'module.hot');

// if (module.hot) {
// 	console.log('hola a todos');
// }

if (module.hot) {
	module.hot.accept()
}