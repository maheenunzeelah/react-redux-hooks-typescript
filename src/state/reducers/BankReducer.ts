import { ActionTypes } from "../actions/types";
import { Action } from "../actions/typeDeclaration";
const intitialState=0;

const reducer=(state:number=intitialState,action:Action)=>{
   switch (action.type){
       case ActionTypes.DEPOSIT:
        return state+action.payload;
       case ActionTypes.WITHDRAW:
         return state-action.payload; 
       case ActionTypes.BANKRUPT:
        return 0;
       default:
        return state;   
   }
}
export default reducer;