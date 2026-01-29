import { Pie, PieChart, Tooltip } from 'recharts';

function RatingsPieChart({ isAnimationActive = true, defaultIndex, data }) {
    return (
        <>
            {data && <PieChart
            style={{ width: '750px', height: '300px', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
            responsive
            >
            <Pie
                data={data.ratings}
                dataKey="percent"
                nameKey='title'
                cx="50%"
                cy="50%"
                fill="#8884d8"
                isAnimationActive={isAnimationActive}
            />
            <Tooltip defaultIndex={defaultIndex} />
            </PieChart>}
        </>
    );
}

export default RatingsPieChart;