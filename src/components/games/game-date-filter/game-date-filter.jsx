function GameDateFilter({ date, setDate, initial, final }) {
    return (
        <>
            {initial && <div>
                            <label htmlFor="date">Selecciona una fecha:</label>
                            <input
                                type="text"
                                name="date"
                                placeholder='YYYY-MM-DD'
                                pattern="\d{4}-\d{2}-\d{2}"
                                required
                                onChange={(e) => e.target.value ? setDate(`&dates=${e.target.value}`) : setDate('')}/>
                            <p>Fecha seleccionada: {date}</p>
                        </div>}
            {final && <div>
                            <label htmlFor="date">Selecciona una fecha:</label>
                            <input
                                type="text"
                                name="date"
                                placeholder='YYYY-MM-DD'
                                pattern="\d{4}-\d{2}-\d{2}"
                                required
                                onChange={(e) => e.target.value ? setDate(`&dates=${e.target.value}`) : setDate('')}/>
                            <p>Fecha seleccionada: {date}</p>
                        </div>}
            {/* {final && <div>
                            <label htmlFor="date">Selecciona una fecha:</label>
                            <input
                                type="date"
                                id="date"
                                value={date}
                                onChange={(e) => e.target.value === '' ? setDate('') : setDate(`,${e.target.value}`)}/>
                            <p>Fecha seleccionada: {date}</p>
                        </div>} */}
        </>
        
    );
    
}

export default GameDateFilter;