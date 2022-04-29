import React from 'react';
import { Pie } from 'react-chartjs-2';
import "./PieChart.css";

function PieChart({ name, backgroundColors, borderColor, full, empty }) {
    const data = {
        labels: ["Full", "Empty"],
        datasets: [{
            label: name,
            data: [full, empty],
            fill: true,
            backgroundColor: backgroundColors,
            borderColor: borderColor
        }]
    };
    const options = {
        animation: { duration: 0 },
        responsiveAnimationDuration: 0
    }
    return (
        <div className="pieChart" >
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChart;
