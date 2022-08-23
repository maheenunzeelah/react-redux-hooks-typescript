import { ActionTypes } from "./types"
export interface DepositAction{
    type:ActionTypes.DEPOSIT,
    payload:number
}
export interface WithdrawAction{
    type:ActionTypes.WITHDRAW,
    payload:number
}
export interface BankruptAction{
    type:ActionTypes.BANKRUPT
}
export type Action= DepositAction | WithdrawAction | BankruptAction