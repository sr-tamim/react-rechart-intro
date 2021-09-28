import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'Hydrogen',
        electronegativity: 2.1,
    },
    {
        name: 'Lithium',
        electronegativity: 1,
    },
    {
        name: 'Berilium',
        electronegativity: 1.5,
    },
    {
        name: 'Boron',
        electronegativity: 2,
    },
    {
        name: 'Carbon',
        electronegativity: 2.5,
    },
    {
        name: 'Nitrogen',
        electronegativity: 3,
    },
    {
        name: 'Oxygen',
        electronegativity: 3.5,
    },
    {
        name: 'Fluorine',
        electronegativity: 4,
    },
    {
        name: 'Sodium',
        electronegativity: 0.9,
    },
    {
        name: 'Magnetium',
        electronegativity: 1.2,
    },
    {
        name: 'Aluminium',
        electronegativity: 1.5,
    },
    {
        name: 'Silicon',
        electronegativity: 1.8,
    },
    {
        name: 'Phosphorus',
        electronegativity: 2.1,
    },
    {
        name: 'Sulphur',
        electronegativity: 2.5,
    },
    {
        name: 'Chlorine',
        electronegativity: 3,
    },
];


const My2ndChart = () => {
    return (
        <div style={{ margin: '0 0 150px' }}>
            <ResponsiveContainer width="100%" height={600}>

                <LineChart
                    data={data}
                    margin={{
                        top: 50,
                        right: 60,
                        left: 50,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" padding={{ left: 60 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="electronegativity" stroke="blue" activeDot={{ r: 12 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default My2ndChart;