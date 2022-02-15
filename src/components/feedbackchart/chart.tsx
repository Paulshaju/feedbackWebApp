import * as React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

export default function Chart() {
    const data = [
        {
            name: 'Jan 1',
            negative: 2,
            positive: 10,
        },
        {
            name: 'Jan 2',
            negative: 5,
            positive: 13,
        },
        {
            name: 'Jan 3',
            negative: 8,
            positive: 10,
        },
        {
            name: 'Jan 4',
            negative: 15,
            positive: 28,
        },
        {
            name: 'Jan 5',
            negative: 4,
            positive: 7,
        },
        {
            name: 'Jan 6',
            negative: 3,
            positive: 6,
        },
        {
            name: 'Jan 7',
            negative: 3,
            positive: 8,
        },
    ];
    return (
        <BarChart width={600} height={300} data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis  hide/>
            <CartesianGrid strokeDasharray="1 1" />
            <Tooltip />
            {/* <Bar dataKey="uv"  fill="#8884d8" radius={[10, 0, 0, 10]} />
            <Bar dataKey="pv"stackId="a" fill="black" radius={[0, 10, 10, 0]} /> */}
            <Tooltip />
            <Bar dataKey="positive" fill="#0d88e6" radius={[10, 10, 0, 0]}  />
            <Bar dataKey="negative" fill="#a4a2a8" radius={[10, 10, 0, 0]} />
        </BarChart>
    );
}