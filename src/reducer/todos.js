export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];

        case 'COMPLETE_TASK':
            let newState = [];
            state.forEach(task => {
                let newTask = Object.assign({}, task);
                if(newTask.id == action.payload) newTask.completed = !newTask.completed;
                newState.push(newTask);
            });
            return newState;

        case 'DELETE_TASK':
            let newStates = [];
            state.forEach(task => {
                if(task.id != action.payload) newStates.push(task);
            });
            return newStates;

        default:
            return state;
    }
}