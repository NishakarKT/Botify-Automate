import React from 'react';
import { Bar } from 'react-chartjs-2';
import "./BarChart.css";

function BarChart({ name, backgroundColor, borderColor, x_data, y_data, minY, maxY }) {
    const data = {
        labels: x_data,
        datasets: [{
            label: name,
            data: y_data,
            fill: true,
            backgroundColor: backgroundColor,
            borderColor: borderColor
        }]
    };
    const options = {
        scales: {
            y: {
                suggestedMin: minY,
                suggestedMax: maxY
            }
        },
        animation: { duration: 0 },
        responsiveAnimationDuration: 0
    }
    return (
        <div className="barChart">
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
