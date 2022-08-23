import { ActionTypes } from "./types";
import { Dispatch } from "redux";

// export interface transactMoney{
//     type:
// }
export const depositMoney=(amount:number)=>{
    return (dispatch:Dispatch)=>{
           dispatch({
            type:ActionTypes.DEPOSIT,
            payload:amount
           })
    }
}
export const withdrawMoney=(amount:number)=>{
    return (dispatch:Dispatch)=>{
        dispatch({
            type:ActionTypes.WITHDRAW,
            payload:amount
        })
    }
}
export const bankruptMoney=()=>{
    return (dispatch:Dispatch)=>{
        dispatch({
            type:ActionTypes.BANKRUPT,
        })
    }
}