// Deps =========================================
import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/master.scss';


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

