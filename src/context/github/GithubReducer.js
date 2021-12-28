const githubReducer = (state, action) =>{
    switch(action.type){
        case 'GET_USERS':
            return{
                ...state,
                users: action.payload,
                loading: false, 
            }
        case 'CLEAR_USERS':
            return{
                ...state,
                users:[]
            }
        case 'SET_LOADING':
            return{
                ...state,
                loading: action.payload,
            }
        default:
            return state
    }
}

export default githubReducer