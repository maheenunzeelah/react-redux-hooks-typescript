import {combineReducers} from 'redux';
import BankReducer from '../reducers/BankReducer';
const reducers= combineReducers({
bank:BankReducer
});

export default reducers;
export type RootState=ReturnType<typeof reducers>
