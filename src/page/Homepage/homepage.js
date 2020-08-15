import React from './node_modules/react';
import './node_modules/antd/dist/antd.css';
import MenuCom from "../../components/Menu/menu.js";
import Header from '../../components/Header/header.js';


function homepage(props) {
    return (
        <div>
            <Header/>
            <MenuCom/>
        </div>
    )
}



export default homepage;

