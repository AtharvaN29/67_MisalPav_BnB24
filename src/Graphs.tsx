import React, { useEffect } from 'react';
import Plotly from 'plotly.js-dist';

const MyComponent: React.FC = () => {
  useEffect(() => {
    const xValue = ['Chocolate', 'Jams', 'Butter','Watches','Matches','Bowls'];
    const yValue = [20, 14,22,10,50,12];

    const trace1 = {
      x: xValue,
      y: yValue,
      type: 'bar',
      text: yValue.map(String),
      textposition: 'auto',
      hoverinfo: 'none',
      marker: {
        color: 'rgb(97, 187, 97)',
        opacity: 0.6,
        line: {
          color: 'rgb(60, 100, 60) ',
          width: 1.5
        }
      }
    };

    const data = [trace1];

    const layout = {
      title: 'January 2013 Sales Report',
      barmode: 'stack'
    };

    Plotly.newPlot('myDiv', data, layout);

    return () => {
      Plotly.purge('myDiv');
    };
  }, []);

  return <div id="myDiv" />;
};

export default MyComponent;
