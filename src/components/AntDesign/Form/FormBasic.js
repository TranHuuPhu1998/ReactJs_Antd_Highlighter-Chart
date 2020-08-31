import React, { useState } from 'react';
import { Form, Input, Button, Radio, Row, Col } from 'antd';
import TabPaneHighLigh from "../TabPaneHighLigh/TabPaneHighLigh.js";

const FormBasic = () => {
  const [form] = Form.useForm();
  const [formLayout,] = useState('Inline');

  // const onFormLayoutChange = ({ layout }) => {
  //   setFormLayout(layout);
  // };

  const codeHear = `
  import React, { useState } from 'react';
  import { Form, Input, Button, Radio } from 'antd';

  const FormLayoutDemo = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;

  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: { span: 14, offset: 4 },
        }
      : null;

  return (
    <>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{ layout: formLayout }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="Form Layout" name="layout">
          <Radio.Group value={formLayout}>
            <Radio.Button value="horizontal">Horizontal</Radio.Button>
            <Radio.Button value="vertical">Vertical</Radio.Button>
            <Radio.Button value="inline">Inline</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Field A">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Field B">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};

  `
  return (
    <>
      <Row>
        <h2 className="form__title">AntDesign Form Inline</h2> 
          <Form
            layout={formLayout}
            form={form}
            initialValues={{
              layout: formLayout,
            }}
          >
            <Form.Item label="Form Layout" name="layout">
              <Radio.Group value={formLayout}>
                <Radio.Button value="inline">Inline</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Field A">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Field B">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Submit</Button>
            </Form.Item>
          </Form>
      </Row>
      <Row>
        <Col span={20} >
          <TabPaneHighLigh type="There are three layout for form: horizontal, vertical, inline." codeString={codeHear} />
        </Col>
      </Row>

    </>
  );
};

export default FormBasic;