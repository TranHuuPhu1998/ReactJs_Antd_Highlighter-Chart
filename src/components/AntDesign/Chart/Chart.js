import React, { useRef , useEffect , useState } from 'react';
import { Line } from '@ant-design/charts';

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

    const config_tow = {
        title: {
            visible: true,
            text: '2000 ~ 2018',
          },
          description: {
            visible: true,
            text: 'GDP',
          },
          padding: [20, 100, 30, 80],
          forceFit: true,
          data,
          xField: 'year',
          yField: 'gdp',
          seriesField: 'name',
          xAxis: {
            type: 'dateTime',
            label: {
              visible: true,
              autoHide: true,
            },
          },
          yAxis: {
            formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
          },
          legend: {
            visible: false,
          },
          label: {
            visible: true,
            type: 'line',
          },
          animation: {
            appear: {
              animation: 'clipingWithData',
            },
          },
          smooth: true,
        
    }
    
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
        <div>
            <button type="button" onClick={downloadImage} style={{ marginRight: 24 }}>
            Export picture
            </button>
            <button type="button" onClick={toDataURL}>
            Get chart information
            </button>
            <Line {...config} chartRef={ref} />
            {/* <Line {...config_tow} chartRef={ref} /> */}
        </div>
    );
}

export default Chart


