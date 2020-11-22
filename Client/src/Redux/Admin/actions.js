import {SET_ADMIN_ID} from '../costants'
export const adminID=(text)=>({
    type:SET_ADMIN_ID,
    payload:text
})