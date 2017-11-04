export default (state = true, action) => {
    switch (action.type) {
        case 'LIST':
            return true;
        case 'TABLE':
            return false;
    }
    return state
}