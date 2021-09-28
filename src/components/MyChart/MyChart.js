import React from 'react';
import { XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
    {
        name: 'Lithium',
        ionization_energy: 520,
    },
    {
        name: 'Berilium',
        ionization_energy: 899,
    },
    {
        name: 'Boron',
        ionization_energy: 800,
    },
    {
        name: 'Carbon',
        ionization_energy: 1086,
    },
    {
        name: 'Nitrogen',
        ionization_energy: 1402,
    },
    {
        name: 'Oxygen',
        ionization_energy: 1314,
    },
    {
        name: 'Fluorine',
        ionization_energy: 1681,
    },
    {
        name: 'Neon',
        ionization_energy: 2080,
    },
    {
        name: 'Sodium',
        ionization_energy: 496,
    },
    {
        name: 'Magnetium',
        ionization_energy: 728,
    },
    {
        name: 'Aluminium',
        ionization_energy: 578,
    },
    {
        name: 'Silicon',
        ionization_energy: 786,
    },
    {
        name: 'Phosphorus',
        ionization_energy: 1062,
    },
    {
        name: 'Sulphur',
        ionization_energy: 1007,
    },
    {
        name: 'Chlorine',
        ionization_energy: 1260,
    },
    {
        name: 'Argon',
        ionization_energy: 0,
    },
];


const MyChart = () => {
    return (
        <ResponsiveContainer width="100%" height={600}>
            <AreaChart
                data={data}
                margin={{
                    top: 50,
                    right: 60,
                    left: 50,
                    bottom: 5,
                }}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="ionization_energy" stroke="crimson" fill="orangered" activeDot={{ r: 10 }} />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default MyChart;