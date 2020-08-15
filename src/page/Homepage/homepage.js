import React from 'react';
import MenuCom from "../../components/Menu/menu.js";
import Header from '../../components/Header/header.js';
import ListCard from "../../components/ListCard/listCard.js";


function homepage(props) {
    return (
        <div>
            <Header/>
            <MenuCom/>
            <ListCard/>
        </div>
    )
}



export default homepage;

