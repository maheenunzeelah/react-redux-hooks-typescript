import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from './state';
import {RootState} from './state/reducers';
function App() {
  const dispatch=useDispatch();
  const {depositMoney,withdrawMoney,bankruptMoney}=bindActionCreators(ActionCreators,dispatch);
  const state=useSelector((state:RootState)=>state.bank);
  return (
    <div className="App">
        <h1>{state}</h1>
        <button onClick={()=>{depositMoney(1000)}}>Deposit</button>
        <button onClick={()=>{withdrawMoney(300)}}>Withdraw</button>
        <button onClick={()=>{bankruptMoney()}}>Bankrupt </button>
    </div>
  );
}

export default App;
