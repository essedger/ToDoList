import React from 'react'
import {statuses} from "../BLL/todolist-reducer";
import style from './todolist.module.css'
import SearchBlock from "./SearchBlock";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";
import InputTaskComponent from "./InputTaskComponent";
import SortButtonComponent from "./SortButtonComponent";
import NewTaskInputModalDialog from "./NewTaskInputModalDialog";
let todolist = (props) => {
    let {tasks = [], newTaskText, status} = props;
    let {addTask, changeTaskText, changeTaskDoneValue, deleteTask} = props;

    let onClick = () => {
        newTaskText
            ? addTask(newTaskText)
            : alert('Please input you task')
    };
    let deleteTaskOnClick = (id) => {
        deleteTask(id)
    };

    let onCheckboxChange = (id, title, isDone) => {
        changeTaskDoneValue(id, title, isDone)
    };
    const styles = theme => ({
        container: {
            display: 'flex',
        },
        textField: {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit
        },
        dense: {
            marginTop: 16,
        },
        menu: {
            width: 200,
        },
        button: {
            size: 'medium'
        },
        input: {
            display: 'none',
        },
        root: {
            ...theme.mixins.gutters(),
            paddingTop: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2,
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit
        },
        linear: {
            flexGrow: 1
        },
    });
    return (
        <div>
            <h2>ToDO List</h2>
            <div className={style.todolist}>
                <div className={style.add_container}>
                    <div>
                       <InputTaskComponent {...props}/>
                    </div>

                    <div>
                        {/*<NewTaskInputModalDialog {...props}/>*/}
                        <Button variant="contained" color="primary" className={style.add_button} onClick={onClick}
                                disabled={status === statuses.IN_PROGRESS}>Add task</Button>
                    </div>
                </div>
                <div className={style.tasks}>
                    <div className={style.additional}>
                        <div>
                            <SearchBlock setFilter={props.setFilter}/>
                        </div>

                        <div>
                            <SortButtonComponent {...props}/>
                        </div>
                    </div>

                    {status === statuses.IN_PROGRESS
                        ? <div className={styles.linear}>
                            <LinearProgress/>
                        </div>
                        : <></>
                    }
                    {!tasks.length
                        ? <div className={style.title}>No tasks</div>
                        : (tasks.map(t => {
                            return <Paper key={t.id}
                                          container
                                          direction="row"
                                          justify="center"
                                          alignItems="center">
                                <div className={style.container} id={t.id}>
                                    {<Checkbox key={t.id} id={t.id} defaultChecked color="default" checked={t.done}
                                               onClick={() => onCheckboxChange(t.id, t.title, t.done)}/>}
                                    <div>
                                        <Typography variant="h5" component="h3"
                                                    container
                                                    direction="row"
                                                    justify="center"
                                                    alignItems="center">
                                            {t.title}
                                        </Typography>
                                    </div>
                                    <IconButton aria-label="Delete" className={styles.margin} onClick={() => deleteTaskOnClick(t.id)}
                                                disabled={status === statuses.IN_PROGRESS}>
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                            </Paper>
                        }))}

                </div>
            </div>
        </div>
    )
};

export default todolist;
