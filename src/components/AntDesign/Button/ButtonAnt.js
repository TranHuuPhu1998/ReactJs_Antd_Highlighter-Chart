import React from "react";
import { Button, Tooltip, Row, Col, Card, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
// import styles from './Button.module.css';


import TabPaneHighLigh from "../TabPaneHighLigh/TabPaneHighLigh.js";
const codeString = 
`
import { Button } from 'antd';
ReactDOM.render(
  <>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </>,
  mountNode,
);
`
const code_string_1 = 
`
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
ReactDOM.render(
  <>
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
  </>,
  mountNode,
);
`;

function ButtonAnt(){
  return (
    <>
      <Row>
        <Col span={10} offset={2}>
          <Card title="Examples Button">
            <Space size="middle" align="center" style={{ display: 'flex', flexWrap: "wrap" }}>
              <Button type="primary">Primary Button</Button>
              <Button>Default Button</Button>
              <Button type="dashed">Dashed Button</Button>
              <br />
              <Button type="text">Text Button</Button>

              <TabPaneHighLigh type={"There are primary button, default button, dashed button, text button and link button in antd."}
              codeString = {codeString}
              />
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
              <TabPaneHighLigh type="Button components can contain an Icon. This is done by setting the icon property or placing an Icon component within the Button.If you want specific control over the positioning and placement of the Icon, then that should be done by placing the Icon component within the Button rather than using the icon property."
                                codeString = {code_string_1}
              />
            </Space>
          </Card>
        </Col>

      </Row>
    </>
  );
}
export default ButtonAnt;