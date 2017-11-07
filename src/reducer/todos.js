export default (state = [], action) => {
    let newState = [];

    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];

        case 'COMPLETE_TASK':
            state.forEach(task => {
                let newTask = Object.assign({}, task);
                if(newTask.id == action.payload) newTask.completed = !newTask.completed;
                newState.push(newTask);
            });
            return newState;

        case 'RENAME_TASK':
            state.forEach(task => {
                let newTask = Object.assign({}, task);
                if(newTask.id == action.payload.id) newTask.name = action.payload.name;
                newState.push(newTask);
            });
            console.log(newState)
            return newState;

        case 'DELETE_TASK':
            state.forEach(task => {
                if(task.id != action.payload) newState.push(task);
            });
            return newState;

        default:
            return state;
    }
}