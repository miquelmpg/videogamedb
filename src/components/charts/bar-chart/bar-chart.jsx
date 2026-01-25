import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
import * as RecentActivityStorage from '../../../services/recent-activity-storage';
import { useContext } from 'react';
import { FooterContext } from '../../../contexts/footer-context';

function RatingBarChart({ data, parameter }) {
    const navigate = useNavigate();
    const { toggleFooter } = useContext(FooterContext);

    function storeGameRecentActivity(id) {
            !RecentActivityStorage.recentActivityGames.includes(id) ? RecentActivityStorage.recentActivityGames.push(id) : "";
            RecentActivityStorage.store();
            toggleFooter();
        }

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
                        storeGameRecentActivity(data.payload.id);}}}/>
            </BarChart>
        </ResponsiveContainer>
    );
}

export default RatingBarChart;