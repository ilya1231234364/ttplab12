import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import randomColor from 'randomcolor';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function ChartItem({ dataSource }: any) {

    const options = {
        color: 'white',
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                color: 'white',
                text: 'Count of Wins',
            },
        },
    };
    const labels = dataSource.map((el: any) => el.name + ' ' + el.surname)
    const data = {
        labels: labels,

        datasets: [
            {
                label: "Count of Wins",
                data: dataSource.map((el: any) => el.countWins),
                backgroundColor: dataSource.map((el: any) => randomColor())
            }
        ]
    }
    return (
        <>
            <Bar options={options} data={data} />
        </>
    );
}
