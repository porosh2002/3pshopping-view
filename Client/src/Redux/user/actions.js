import {SET_USER_ID} from '../constants'
export const setUser=(text)=>({
    type:SET_USER_ID,
    payload:text
})