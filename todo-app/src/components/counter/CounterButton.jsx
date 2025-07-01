
export default function CounterButton({ by ,incrementCounterParent,decrementCounterParent}) {

    return (
        <div className="App">
            <div className="counter">
                <button className="counterButton" onClick={()=>incrementCounterParent(by)}>+{by}</button>
                <button className="counterButton" onClick={()=>decrementCounterParent(by)}>-{by}</button>
            </div>
        </div>
    );
}
