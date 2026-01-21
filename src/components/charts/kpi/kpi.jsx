function KPI({ data, parameter }) {
    return (
        <div className="d-flex flex-column fs-1 border border-dark rounded-pill align-items-center" style={{width: '400px'}}>
            <div style={{color: '#8884d8'}}>Average {parameter}</div>
            <div style={{color: '#8884d8'}}>{data.reduce((meanAccumulated, actualValue, index, array) => meanAccumulated += (actualValue[parameter] / array.length), 0).toPrecision(3)}</div>
        </div>
    );
}

export default KPI;