import React, { Component } from "react";
import './styleApp.scss';


const App = () => (
        <div>
            <h1>Теплицы Почтой!</h1>
            <div>
                <img src={require('./images/1.jpg').default} alt="" />
            </div>
        </div>
    );

export {App};