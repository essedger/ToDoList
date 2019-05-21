import React from 'react'
import TextField from "@material-ui/core/TextField";

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
const SearchBlock = (props) => {

    let onFilterChanged = (e) => {
        props.setFilter(e.currentTarget.value);
    };

    return  <TextField
            type="search"
            id="add-task-name"
            label="Start typing to search"
            className={styles.textField}
            onChange={onFilterChanged}
            margin="normal"
            variant="outlined"/>;
};

export default SearchBlock;
