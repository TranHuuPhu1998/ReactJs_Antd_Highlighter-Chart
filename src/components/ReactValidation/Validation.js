import React from 'react'
import ReactValidation from './ReactValidation.js';
import FormikYup from './FormikYup.js';
import { Row, Col} from 'antd';

function Validation(props) {
    return (
        <Row>
            <Col span={10} offset={2}>
                <ReactValidation/>
            </Col>
            <Col span={10}>
                <FormikYup/>
            </Col>
        </Row>
    )
}


export default Validation

