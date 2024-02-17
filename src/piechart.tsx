import React, { useEffect } from 'react';
import Plotly from 'plotly.js-dist';

const MyPieChart: React.FC = () => {
  useEffect(() => {
    const data = [{
      type: "pie",
      values: [2, 3, 4, 4],
      labels: ["Chocolates", "Ketchup", "Jam", "Oregano"],
      textinfo: "label+percent",
      textposition: "outside",
      automargin: true
    }];

    const layout = {
      height: 400,
      width: 400,
      margin: {"t": 0, "b": 0, "l": 0, "r": 0},
      showlegend: false
    };

    Plotly.newPlot('myDiv2', data, layout);

    return () => {
      Plotly.purge('myDiv2');
    };
  }, []);

  return <div id="myDiv2" />;
};

export default MyPieChart;
