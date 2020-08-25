import React , {useState} from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Select,Col,Row } from 'antd';

const { Option } = Select;

function HighLight(props) {
    const [systaxValue , setSystaxValue ] = useState("dark");

    const _systax = [
        "dark",
        "a11yDark",
        "atomDark",
        "base16AteliersulphurpoolLight",
        "duotoneSpace"
    ]
    const codeString = `
    function createStyleObject(classNames, style) {
        return classNames.reduce((styleObject, className) => {
        return {...styleObject, ...style[className]};
        }, {});
    }
    
    function createClassNameString(classNames) {
        return classNames.join(' ');
    }
    
    function createChildren(style, useInlineStyles) {
        let childrenCount = 0;
        return children => {
        childrenCount += 1;
        return children.map((child, i) => createElement({
            node: child,
            style,
            useInlineStyles,
            key:'code-segment-$'{childrenCount}-$'{i}'
        }));
        }
    }
    
    function createElement({ node, style, useInlineStyles, key }) {
        const { properties, type, tagName, value } = node;
        if (type === "text") {
        return value;
        } else if (tagName) {
        const TagName = tagName;
        const childrenCreator = createChildren(style, useInlineStyles);
        const props = (
            useInlineStyles
            ?
            { style: createStyleObject(properties.className, style) }
            :
            { className: createClassNameString(properties.className) }
        );
        const children = childrenCreator(node.children);
        return <TagName key={key} {...props}>{children}</TagName>;
        }
    }
    `;
    const rederSelect = (_systax)=>{
        return (
            _systax.map((item,index)=>{
                return(
                    <Option value={item} key={index}>{item}</Option>
                )
            })
        )
    }
    const handleChange=(value)=>{
        setSystaxValue(value);
    }
    console.log("HighLight -> systaxValue", systaxValue);
    return (
        <>
        <Select defaultValue={systaxValue} style={{ width: 120 }} onChange={handleChange}>
           {rederSelect(_systax)}
        </Select>
        <Row>
            <Col span={20} offset={2}>
            <SyntaxHighlighter language="javascript" style={atomDark} showLineNumbers={true}>
                {codeString}

            </SyntaxHighlighter>
            </Col>
        </Row>
        </>
    );
}


export default HighLight

