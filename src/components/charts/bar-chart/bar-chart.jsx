import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
import useRecentActivity from '../../../hooks/use-recent-activity';

function RatingBarChart({ data, parameter, setDataPie }) {
    const navigate = useNavigate();
    const { storeGameRecentActivity } = useRecentActivity();

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
                <Bar dataKey={parameter} 
                    fill="#8884d8" 
                    onClick={(data) => {{
                        navigate(`/games/${data.payload.id}`);
                        storeGameRecentActivity(data.payload.id);}}}
                    onMouseEnter={(data) => setDataPie(data.payload.id)}/>
            </BarChart>
        </ResponsiveContainer>
    );
}

export default RatingBarChart;