import {SET_ADMIN_ID} from '../costants'
const initial_state={
    adminID:false
}
const AdminSET=(state=initial_state,action)=>{
    switch(action.type){
        case SET_ADMIN_ID:
        return {...state,adminID:action.payload}
        default:
        return state;
    }
}
export default AdminSET;