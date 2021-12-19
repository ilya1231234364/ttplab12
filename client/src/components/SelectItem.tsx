import React from 'react';
import Select from 'react-select'
export default function SelectComponent({ data, selectHandler }: any) {
    const options = data.map(({ name, id }: { name: string, id: number, }) => {
        return {
            value: id,
            label: name
        }
    })

    return (
        <>
            <Select options={options} onChange={selectHandler} isClearable />
        </>
    );
}
