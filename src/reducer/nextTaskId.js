export default (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT_TASK':
            return state + 1;
    }

    return state;
}