import React, { useState } from 'react';
import { Form, Input, Button, Radio, Row, Col } from 'antd';
import FormBasic from "./FormBasic.js";
import RegistrationForm from "./RegistrationForm.js";
const FormLayout = () => {
  const [form] = Form.useForm();
  const [formLayout,] = useState('Inline');

  // const onFormLayoutChange = ({ layout }) => {
  //   setFormLayout(layout);
  // };
  
  return (
    <>
      <Row>
        <Col span={20} offset={2}>
        <FormBasic/>
        </Col>
      </Row>

      <Row>
        <Col span={20} offset={2}>
        <RegistrationForm/>
        </Col>
      </Row>
      
    </>
  );
};

export default FormLayout;