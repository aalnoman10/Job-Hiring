import React from "react";
import { Chart } from "react-google-charts";


const data = [
    ["Task", "Hours per Day"],
    ["Assignment : 1", 57],
    ["Assignment : 2", 48],
    ["Assignment : 3", 58],
    ["Assignment : 4", 53],
    ["Assignment : 5", 58],
    ["Assignment : 6", 58],
    ["Assignment : 7", 60],
];

const options = {
    title: `Assignment Analytics`,
    
};

const Statistics = () => {
    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
        />
    );
};

export default Statistics;
