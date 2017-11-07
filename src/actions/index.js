export function todoList() {
    return {
        type: 'LIST'
    }
}

export function todoTable() {
    return {
        type: 'TABLE'
    }
}

export function incrementTask() {
    return {
        type: 'INCREMENT_TASK'
    }
}

export function addTask(task) {
    return {
        type: 'ADD_TASK',
        payload: task
    }
}

export function completeTask(id) {
    return {
        type: 'COMPLETE_TASK',
        payload: id
    }
}

export function renameTask(obj) {
    return {
        type: 'RENAME_TASK',
        payload: obj
    }
}

export function deleteTask(id) {
    return {
        type: 'DELETE_TASK',
        payload: id
    }
}