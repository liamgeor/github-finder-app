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
        case 'GET_USER_AND_REPOS':
            return{
                ...state,
                loading: false,
                user: action.payload.user,
                repos: action.payload.repos
            }
        default:
            return state
    }
}

export default githubReducer