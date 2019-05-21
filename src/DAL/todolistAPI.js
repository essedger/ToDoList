import * as axios from "axios";

let page = '&page=1';
let count = '&count=10';
const widgetsId = "?widgetId=11112";
const taskId = '&taskId=';
const titleName = '&title=';
const taskIsDone = '&done=';

const todolistAPI = axios.create({
    baseURL: "https://repetitora.net/api/JS/Tasks",
});

const apiService = {
    getTask() {
        return todolistAPI.get(widgetsId + page + count).then(response => {
            return response.data
        })
    },
    deleteTask(id) {
        return todolistAPI.delete(widgetsId + taskId + id).then(response => {
            return response.data
        })
    },

    setTask(title) {
        return todolistAPI.post(widgetsId, {title}).then(response => {
            return response.data.task
        })

    },
    setTaskDoneValue(id, title, isDone) {
        return todolistAPI.put(widgetsId + taskId + id + titleName + title + taskIsDone + !isDone).then(response => {
            debugger;
            return response.data
        })

    }
};

export default apiService;
