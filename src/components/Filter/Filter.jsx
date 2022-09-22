import css from './Filter.module.css';
import PropTypes from 'prop-types';

export function Filter({filter, onChange}) {
    return (
        <>
            <p className={css.filterTitle}>Find contacts by name</p>
            <input className={css.filterInput} type="text" name="filter" value={filter} onChange={onChange} />        
        </>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}