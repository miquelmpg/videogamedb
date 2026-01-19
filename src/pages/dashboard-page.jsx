import { useEffect, useState } from 'react';
import { BarChart } from '../components/charts';
import * as RawgService from '../services/rawg-service';

function DashboardPage() {
    const [data, setData] = useState();

    useEffect(() => {
        async function getDashboardData() {
            const data = await RawgService.getDashboardData('action', 40);
            setData(data);
        }
        getDashboardData();
    }, []);
    return (
        <>
            <BarChart data={data} parameter={'rating'}/>
        </>
    );
}

export default DashboardPage;