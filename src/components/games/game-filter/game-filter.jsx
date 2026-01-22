import Select from "react-select";

function GameFilter({ value, onChange, filterOptions }) {
    return (
        <>
            <Select
                className='form-control'
                options={filterOptions}
                value={filterOptions.find(option => option.value === value)}
                onChange={(option) => {
                    onChange((option.value))
                }}
                isSearchable={false}
                styles={{
                    container: (base) => ({
                        ...base,
                        padding: 0,
                        border: 0,
                        width: '100%'
                    }),
                    control: (base) => ({
                        ...base,
                        borderRadius: '50px'
                    })
            }}/>
        </>
    );
}

export default GameFilter;