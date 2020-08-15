import React from 'react';
import MenuCom from "../../components/Menu/menu.js";
import Header from '../../components/Header/header.js';
import ListCard from "../../components/ListCard/listCard.js";
import styles from "./Homepage.module.css";

function homepage(props) {
    return (
        <div>
            <Header/>
            <div className={styles.body}>
                <MenuCom/>
                <ListCard/>
            </div>
        </div>
    )
}



export default homepage;

