import * as React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { chartDataModel, feedbackModel } from '../model/feedbackModel';


export default function Chart(_props:any) {
    let chartData: chartDataModel[] =[]
    _props.feedbackList.sort((x:feedbackModel, y:feedbackModel) => +new Date(x.created) - +new Date(y.created));
    console.log(_props.feedbackList)

    const data = [
        {
            name: 'Jan 1',
            negative: 2,
            positive: 10,
            neutral:8,
        },
        {
            name: 'Jan 2',
            negative: 5,
            positive: 13,
            neutral:7,
        },
        {
            name: 'Jan 3',
            negative: 8,
            positive: 10,
            neutral:8,
        },
        {
            name: 'Jan 4',
            negative: 15,
            positive: 28,
            neutral:9,
        },
        {
            name: 'Jan 5',
            negative: 4,
            positive: 7,
            neutral:3,
        },
        {
            name: 'Jan 6',
            negative: 3,
            positive: 6,
            neutral:2,
        },
        {
            name: 'Jan 7',
            negative: 3,
            positive: 8,
            neutral:2,
        },
    ];


    return (
        <BarChart width={600} height={300} data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis  hide/>
            <CartesianGrid strokeDasharray="1 1" />
            <Tooltip />
            <Tooltip />
            <Bar dataKey="positive" fill="#1A1D7D" radius={[10, 10, 0, 0]}  />
            <Bar dataKey="negative" fill="#FF220C" radius={[10, 10, 0, 0]} />
            <Bar dataKey="neutral" fill="#38B2F9" radius={[10, 10, 0, 0]} />
        </BarChart>
    );
}