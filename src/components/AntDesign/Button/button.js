import React from "react";
import { Button, Tooltip, Row, Col, Card, Space, Tabs } from 'antd';
import { SearchOutlined, EditOutlined } from '@ant-design/icons';
import highlight from 'highlight.js'
import styles from './button.module.css';

const { TabPane } = Tabs;
const codeString = [
  '<Button type="primary">Primary Button</Button>',
  '<Button>Default Button</Button>',
  ' <Button type="dashed">Dashed Button</Button>',
  '<Button type="text">Text Button</Button>',
  '<Button type="link">Link Button</Button>'
];

const code_string_1 = [
  '<Tooltip title="search">',
  '   <Button type="primary" shape="circle" icon={<SearchOutlined />} />',
  '</Tooltip>',
  '<Button type="primary" shape="circle">',
  '   A',
  '</Button>',
  '<Button type="primary" icon={<SearchOutlined />}>',
  '   Search',
  '</Button>',
  '<Tooltip title="search">',
  '   <Button shape="circle" icon={<SearchOutlined />} />',
  '</Tooltip>',
  '<Button icon={<SearchOutlined />}>Search</Button>',
  '<br />',
  '<Tooltip title="search">',
  '   <Button shape="circle" icon={<SearchOutlined />} />',
  '</Tooltip>',
  '<Button icon={<SearchOutlined />}>Search</Button>',
  '<Tooltip title="search">',
  '   <Button type="dashed" shape="circle" icon={<SearchOutlined />} />',
  '</Tooltip>',
  '<Button type="dashed" icon={<SearchOutlined />}>',
  '   Search',
  '</Button>',
]
export default (props) => {
  
  function renderCode(value){
    var data = [];
    value.map((Element,index)=>{
      data.push(
        <pre key={index} className={styles.code_string}>
          {Element}
         </pre>
      )   
    });
    console.log("renderCode -> data", data)
    return data;
  }

  return (
    <>
      <Row>
        <Col span={10} offset={1}>
          <Card title="Examples Button">
            <Space size="middle" align="center" style={{ display: 'flex', flexWrap: "wrap" }}>
              <Button type="primary">Primary Button</Button>
              <Button>Default Button</Button>
              <Button type="dashed">Dashed Button</Button>
              <br />
              <Button type="text">Text Button</Button>
              <Button type="link">Link Button</Button>
              <Card style={{ marginTop: 30 }}>
                <Tabs defaultActiveKey="1">
                  <TabPane tab="Type" key="1" >
                  <h2>Type<EditOutlined /> </h2>
                    <span>There are primary button, default button, dashed button, text button and link button in antd.</span>
                  </TabPane>
                  <TabPane tab="Tab 2" key="2">
                    <code>
                    {renderCode(codeString)}
                    </code>
                    
                  </TabPane>
                </Tabs>
              </Card>
            </Space>
          </Card>

        </Col>
        <Col span={10} offset={1}>
          <Card title="Examples Button">
            <Space size="middle" align="center" style={{ display: 'flex', flexWrap: "wrap",overflowX:"scroll" }}>
              <Tooltip title="search">
                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
              <Button type="primary" shape="circle">
                A
        </Button>
              <Button type="primary" icon={<SearchOutlined />}>
                Search
           </Button>
              <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
              <Button icon={<SearchOutlined />}>Search</Button>
              <br />
              <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
              <Button icon={<SearchOutlined />}>Search</Button>
              <Tooltip title="search">
                <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
              <Button type="dashed" icon={<SearchOutlined />}>
                Search
            </Button>
              <Card style={{ marginTop: 30 }}>
        
                <Tabs defaultActiveKey="2">
                  <TabPane tab="Type" key="1">
                  <h2>Type<EditOutlined /> </h2>
                    <span>Button components can contain an Icon. This is done by setting the icon property or placing an Icon component within the Button.

                    If you want specific control over the positioning and placement of the Icon, then that should be done by placing the Icon component within the Button rather than using the icon property.</span>
                  </TabPane>
                  <TabPane tab="Tab 2" key="2" >
                    <code>
                    {renderCode(code_string_1)}
                    </code>
                  </TabPane>
                </Tabs>
              </Card>

            </Space>
          </Card>
        </Col>

      </Row>
    </>
  );
}
