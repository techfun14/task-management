import { useState } from 'react';
import './Countr.css';
import CounterButton from './CounterButton';
// import PropTypes from 'prop-types';

export default function Counter(){
    const [count, setCount] = useState(0);

    function incrementCounterParent(by){
        setCount(count+by)
    }
    function decrementCounterParent(by){
        setCount(count-by)
    }
    function resetButton(){
        setCount(0)
    }
    
    return(
    <>
      <div className="Result"><span className="totalCount">{count}</span></div>       
    <CounterButton by={1} incrementCounterParent={incrementCounterParent} decrementCounterParent={decrementCounterParent}/>
    <CounterButton by={2} incrementCounterParent={incrementCounterParent}  decrementCounterParent={decrementCounterParent}/>
    <CounterButton by={5} incrementCounterParent={incrementCounterParent}  decrementCounterParent={decrementCounterParent}/>
    <button className="reset-button" onClick={resetButton}> Reset </button>
    </>
    );
}

