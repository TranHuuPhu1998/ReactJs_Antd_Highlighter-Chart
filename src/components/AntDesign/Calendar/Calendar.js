import React , {useState} from 'react'
import { Calendar, Alert,Row ,Col } from 'antd';
import moment from 'moment';
import TabPaneHighLigh from '../TabPaneHighLigh/TabPaneHighLigh.js';

function  _Calendar(){
  const [value,setValue] = useState(moment('2017-01-25'));
  const [selectedValue , setSelectedValue] = useState(moment('2017-01-25'))

  const onSelect = value => {
    setValue(value);
    setSelectedValue(value);
  };

  const onPanelChange = value => {
    setValue(value);
  };

  const code = `
      import { Calendar } from 'antd';
    
      function onPanelChange(value, mode) {
        console.log(value.format('YYYY-MM-DD'), mode);
      }
    
      ReactDOM.render(<Calendar onPanelChange={onPanelChange} />, mountNode);
    `
    return (
      <Row>
        <h1>AntDesign Calendar</h1>
        <Col span={20} offset={2}>
          <Alert
            message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
          />
          <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
          <TabPaneHighLigh codeString={code}/>
        </Col>
      </Row>
    );
  
}

export default _Calendar;