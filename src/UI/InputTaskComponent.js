import React from 'react'
import TextField from "@material-ui/core/TextField";
import {statuses} from "../BLL/todolist-reducer";

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
const InputTaskComponent = (props) => {
    let {newTaskText, status} = props;
    let {changeTaskText} = props;

    let changeText = (e) => {
        changeTaskText(e.currentTarget.value)
    };

    return <TextField
        direction="row"
        justify="center"
        alignItems="center"
        id="add-task-name"
        label="Add new task"
        className={styles.textField}
        value={newTaskText}
        onChange={changeText}
        margin="normal"
        variant="outlined"
        fullWidth
        disabled={status === statuses.IN_PROGRESS}/>;

};

export default InputTaskComponent;
