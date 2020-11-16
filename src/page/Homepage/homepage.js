import React from 'react';

import Header from '../../components/Header/header.js';
import HeaderRight from '../../components/Header/headerRight.js';
import { Row, Col } from 'antd';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "../../routes/routerlayout"
// import styles from "./Homepage.module.css";
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
            
            <Row style={{height:'100vh'}}>
                <Col span={4} style={{height: '100vh',position: 'fixed', width:' 100%',zIndex: 1,backgroundColor: "#001529"}}>
                    <Header/>
                </Col>
                <Col span={20} style={{marginLeft:'auto'}}>
                    <HeaderRight/>
                    <div style={{marginTop:'100px'}}>
                        <Switch>
                            {showRouterPage(routes)}
                        </Switch>
                    </div>
                </Col>
            </Row>
        </Router>
    )
}



export default homepage;

