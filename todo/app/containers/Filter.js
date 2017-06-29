import React from 'react';
import { connect } from 'react-redux';

import { setFilter } from 'actions/index';

const FilterComponent = ({filter, onFilter}) => {

    const filters = ['All', 'Done', 'Active'];
    const radios = filters.map(name => {
        return (
            <label key={name}>
                <input
                    type="radio"
                    name="filter"
                    value={name}
                    onChange={onFilter.bind(this, name)}
                    checked={name === filter}
                />
                {name}
            </label>
        );
    });

    return (<div>{radios}</div>);

};

const mapStateToProps = state => {
    return {
        filter: state.filter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFilter: filter => dispatch(setFilter(filter))
    }
};

const Filter = connect(mapStateToProps, mapDispatchToProps) (FilterComponent);

export {Filter};
