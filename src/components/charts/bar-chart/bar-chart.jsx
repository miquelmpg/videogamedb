import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function RatingBarChart({ data, parameter }) {
    return (
        <ResponsiveContainer width="100%" height={300}>
        <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Legend />
            <Bar dataKey={parameter} fill="#8884d8" />
        </BarChart>
        </ResponsiveContainer>
    );
}

export default RatingBarChart;