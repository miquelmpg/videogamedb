import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
import * as RecentActivityStorage from '../../../services/recent-activity-storage';

function LineTimeChart({ data, parameter }) {
    const navigate = useNavigate();

    const dataSorted = data.toSorted((a, b) => new Date(a.released) - new Date(b.released));

    return (
        <ResponsiveContainer width="100%" height={300}>
        <LineChart
        style={{ aspectRatio: 1.618 }}
        responsive
        data={dataSorted}
        margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="released" />
        <YAxis width="auto" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={parameter} stroke="#8884d8" 
            activeDot={{ r: 8, onClick: (e, dataSorted) => {
                navigate(`/games/${dataSorted.payload.id}`);
                RecentActivityStorage.recentActivityGames.push(dataSorted.payload.id);
                RecentActivityStorage.store();
                }}} />
        <Line type="monotone" dataKey='name' stroke="#82ca9d" />
        </LineChart>
        </ResponsiveContainer>
    );
}

export default LineTimeChart;