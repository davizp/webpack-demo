// Deps =========================================
import React from 'react';
import ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
import '../sass/master.scss';

// Setting Global Vars ==========================
Object.assign(window, { React, ReactDOM });

// _bind Helper =================================
React.Component.prototype._bind = function _bind(...methods) {

    methods.forEach((method) => {

        this[method] = this[method].bind(this);
    });
};
