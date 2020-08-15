import React from 'react';
import MenuCom from "../../components/Menu/menu.js";
import Header from '../../components/Header/header.js';
import ListCard from "../../components/ListCard/listCard.js";
// import styles from "./Homepage.module.css";
import { Row, Col } from 'antd';
function homepage(props) {
    return (
        <div>
            <Header/>
            <Row>
                <Col span={4}>
                    <MenuCom/>
                </Col>
                <Col span={19}>
                    <ListCard/>
                </Col>
            </Row>
        </div>
    )
}



export default homepage;

