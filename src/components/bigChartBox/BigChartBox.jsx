import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './bigChartBox.css'

const data = [
    {
        name: '2001',
        TV: 4000,
        AC: 2400,
        Mobile: 2400,
    },
    {
        name: '2002',
        TV: 3000,
        AC: 1398,
        Mobile: 2210,
    },
    {
        name: '2003',
        TV: 2000,
        AC: 9800,
        Mobile: 2290,
    },
    {
        name: '2004',
        TV: 2780,
        AC: 3908,
        Mobile: 2000,
    },
    {
        name: '2005',
        TV: 1890,
        AC: 4800,
        Mobile: 2181,
    },
    {
        name: '2006',
        TV: 2390,
        AC: 3800,
        Mobile: 2500,
    },
    {
        name: '2007',
        TV: 3490,
        AC: 4300,
        Mobile: 2100,
    },
];

const BigChartBox = () => {
    return (
        <div className='bigChartBox'>
            <h1>Yearly Sales</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height={250}>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="TV" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="AC" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="Mobile" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BigChartBox