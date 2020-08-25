import React from 'react'
import { Button, Tooltip, Row, Col, Card, Space, Tabs } from 'antd';
import { SearchOutlined, EditOutlined } from '@ant-design/icons';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark , okaidia} from 'react-syntax-highlighter/dist/esm/styles/prism';

const { TabPane } = Tabs;
function TabPaneHighLigh(props) {
    return (
        <Card style={{ marginTop: 30 }}>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Type" key="1" >
                <h2>Type<EditOutlined /> </h2>
                {/* There are primary button, default button, dashed button, text button and link button in antd. */}
                <span>{props.type}</span>
                </TabPane>
                  <TabPane tab="Tab 2" key="2">
                    <SyntaxHighlighter 
                      language="javascript" 
                      style={okaidia} 
                      wrapLines={true}
                      showLineNumbers={false}
                      lineProps={lineNumber => ({
                        style: { display: 'block', cursor: 'pointer' }
                      })}
                    >
                      {props.codeString}
                    </SyntaxHighlighter>
            </TabPane>
        </Tabs>
    </Card>
    )
}

export default TabPaneHighLigh

