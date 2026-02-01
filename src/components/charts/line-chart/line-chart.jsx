import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
import useRecentActivity from '../../../hooks/use-recent-activity';
import * as CheapSharkService from '../../../services/cheap-shark-service';

function LineTimeChart({ data, dataPrice, parameter, time, price }) {
    const navigate = useNavigate();
    const dataSorted = Array.isArray(data) ? data.toSorted((a, b) => new Date(a.released) - new Date(b.released)) : [];
    const { storeGameRecentActivity } = useRecentActivity();

    return (
        <>
            {time &&    <div style={{width: '100%'}}>
                        <div className='text-center fw-bold' style={{color: '#8884d8'}}>Games by release date</div>
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
                                storeGameRecentActivity(dataSorted.payload.id);
                                }}}/>
                        <Line type="monotone" dataKey='name' stroke="#82ca9d" />
                        </LineChart>
                        </ResponsiveContainer>
                        </div>}

            {price && dataPrice &&  <div style={{width: '100%'}}>
                                    <div className='text-center fw-bold' style={{color: '#8884d8'}}>Games prices by title</div>
                                    <ResponsiveContainer width="100%" height={300}>
                                    <LineChart
                                    style={{ aspectRatio: 1.618 }}
                                    responsive
                                    data={dataPrice}
                                    margin={{
                                        top: 5,
                                        right: 0,
                                        left: 0,
                                        bottom: 5,
                                    }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="external" />
                                    <YAxis width="cheapest" />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey='cheapest' stroke="#8884d8" 
                                        activeDot={{ r: 8, onClick: (e, dataPrice) => {
                                                CheapSharkService.getVideoGamesStore(dataPrice.payload.cheapestDealID);
                                                }}}/>
                                    </LineChart>
                                    </ResponsiveContainer>
                                    </div>}
        </>
    );
}

export default LineTimeChart;