import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import './pieChartBox.css'

const data = [
  { name: 'ACs', value: 400, color: '#0088FE' },
  { name: 'Mobiles', value: 300, color: '#00C49F' },
  { name: 'TVs', value: 300, color: '#FFBB28' },
  { name: 'DVDs', value: 200, color: '#FF8042' },
];

const PieChartBox = () => {
    return (
        <div className='pie-chart'>
            <h1>Max Sales</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height={200} >
                <PieChart >
                <Tooltip contentStyle={{ background: "white", borderRadius: "5px" }} />
                    <Pie
                        data={data}
                        innerRadius={"70%"}
                        outerRadius={"90%"}
                        paddingAngle={4}
                        dataKey="value"
                    >
                        {data.map((pieData, index) => (
                            <Cell key={`cell-${index}`} fill={pieData.color} />
                        ))}
                    </Pie>
                </PieChart>
                </ResponsiveContainer>
                <div className="options">
                    {data.map((item) =>(
                        <div className="option" key={item.name}>
                            <div className="title">
                                <div className="dot" style={{backgroundColor : item.color}}> 
                                </div>
                                <span>{item.name}</span>
                            </div>
                            <span>{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PieChartBox