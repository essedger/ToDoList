import React from 'react'
import Button from "@material-ui/core/Button";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    }
});



const SortButtonComponent = (props) => {

    let onSortDirectionChanged = (e) => {
        props.toggleSortDirection();
    };

    return <div onClick={onSortDirectionChanged}> {props.sortDirection === 'asc'
        ?
        <Button variant="contained" className={styles.button}>Sort {String.fromCharCode(11015)}</Button>
        : <Button variant="contained" className={styles.button}>Sort {String.fromCharCode(11014)}</Button>}
    </div>;
};

export default SortButtonComponent;
