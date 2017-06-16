import React from 'react';

const Filter = ({filterName, onChange}) => {

    const filters = ['All', 'Done', 'Active'];
    const radios = filters.map(name => {
        return (
            <label key={name}>
                <input
                    type="radio"
                    name="filter"
                    value={name}
                    onChange={onChange.bind(this, name)}
                    checked={name === filterName}
                />
                {name}
            </label>
        );
    });

    return (<div>{radios}</div>);

};

export {Filter};
