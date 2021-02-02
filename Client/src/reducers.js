import {SET_USER_ID} from './costants'
const initial_state={
    userID:undefined
}
export const userSET=(state=initial_state,action={})=>{
    switch(action.type){
        case SET_USER_ID:
        return Object.assign({},state,{userID:action.payload})
        default:
        return state;
    }
}