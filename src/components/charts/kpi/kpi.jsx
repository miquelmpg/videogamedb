function KPI({ data, parameter }) {
    function transformName(name) {
        return name === 'suggestions_count' ? 'suggestions' : name;
    }
    return (
        <div className="d-flex flex-column fs-1 border border-dark rounded-pill align-items-center justify-content-center text-center fw-semibold" style={{width: '420px'}}>
            <div style={{color: '#8884d8'}}>Average {transformName(parameter)}</div>
            <div style={{color: '#8884d8'}}>{data.reduce((meanAccumulated, actualValue, index, array) => meanAccumulated += (actualValue[parameter] / array.length), 0).toPrecision(3)}</div>
        </div>
    );
}

export default KPI;