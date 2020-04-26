import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    orderHistory: [],   
    error: null    
}

const userReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case UserActionTypes.USER_SIGN_IN:
            return {
                ...state,
                currentUser: action.payload
            }

        case UserActionTypes.USER_SIGN_OUT:
            return {
                ...state,
                currentUser: null,
                orderHistory: [],					
                error: null
            }        
        case UserActionTypes.FETCH_ORDERS_SUCCESS: 
            return {
                ...state,
                orderHistory: action.payload		
            }
        case UserActionTypes.FETCH_ORDERS_FAILURE:
            return {
                ...state,
                orderHistory: [],					
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;