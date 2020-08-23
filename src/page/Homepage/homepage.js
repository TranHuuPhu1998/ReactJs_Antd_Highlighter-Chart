import React from 'react';
import MenuCom from "../../components/Menu/menu.js";
import Header from '../../components/Header/header.js';
import ListCard from "../../components/ListCard/listCard.js";
import styles from "./Homepage.module.css";
import { Row, Col } from 'antd';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "../../routes/routerlayout"

function homepage(props) {
    const showRouterPage = routes => {
        var rs = null;
        if (routes.length > 0) {
            rs = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{rs}</Switch>;
    };
    return (
        <Router>
            <Header/>
            <Row>
                <Col span={4}>
                    <MenuCom/>
                </Col>
                <Col span={20} style={{position:"relative",top:150}}>
                    <Switch>
                        {showRouterPage(routes)}
                    </Switch>
                </Col>
            </Row>
        </Router>
    )
}



export default homepage;

