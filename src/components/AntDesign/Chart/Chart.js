import React, { useRef } from 'react';
import { Line } from '@ant-design/charts';
import { Row, Col } from 'antd';
function Chart(props) {

    // const [dataGDP , setDataGDP] = useState([]);
    // console.log("Chart -> dataGDP", dataGDP)

    // useEffect(()=>{
    //     fetch('https:/g2plot.antv.vision/en/examples/data/GDP.json')
    //     .then((res)=> res.json())
    //     .then((data)=> setDataGDP(data));

    // },[])

    const data = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
    ];
      
    const config = {
        data,
        title: {
          visible: true,
          text: 'LindChart',
        },
        xField: 'year',
        yField: 'value',
    };

    const ref = useRef();
    
    const downloadImage = () => {
        // ref.current?.downloadImage();
        return 0;
    };
    
    const toDataURL = () => {
        // console.log(ref.current?.toDataURL());
        return 0;
    };
    return (
        <Row>
            <Col span={20} offset={2}>
            <button type="button" onClick={downloadImage} style={{ marginRight: 24 }}>
            Export picture
            </button>
            <button type="button" onClick={toDataURL}>
            Get chart information
            </button>
            <Line {...config} chartRef={ref} />
            </Col>
        </Row>
    );
}

export default Chart


