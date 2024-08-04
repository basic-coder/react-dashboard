import React from 'react'
import { FaDollarSign, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { LineChart, Line,  Tooltip, ResponsiveContainer } from 'recharts';
import './chartbox.css'
import { IoMdGift } from "react-icons/io";
import { chartbox } from '../../data';
import { GoGraph } from 'react-icons/go';

const ChartBox = () => {
    return (
        <div className='chartboxes'>
            {
                chartbox.map((data)=>(
                    <div className="chartbox">
                    <div className="box-info">
                        <div className="title">
                           {data.title === 'Total Products' && <IoMdGift /> }
                            {data.title === 'Total Users' && <FaUsers /> }
                            {data.title === 'Total Revenue' && <FaDollarSign /> }
                            {data.title === 'Total Sales' && <GoGraph  /> }
                            <span>{data.title}</span>
                        </div>
                        <h1>{data.value}</h1>
                        <Link to="/" style={{color : data.color}}>View All</Link>
                    </div>
                    <div className="chart-info">
                        <div className="chart">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={data.chartData}>
                                    <Tooltip contentStyle={{background: "transparent", border:"none"}} labelStyle={{display:"none"}}
                                    position={{x: 10}}
                                    />
                                    <Line type="monotone" dataKey={data.dataKey} dot={false} stroke={data.color} strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="chart-texts">
                            <div className="chart-percent" style={{color : data.percent > 0 ? 'green' : 'red'}}>
                               {data.percent > 0 ? "+"+data.percent : data.percent }%
                            </div>
                            <div className="chart-duration">this month</div>
                        </div>
                    </div>
                </div>
                ))
            }

        </div>
    )
}

export default ChartBox