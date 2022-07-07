import {useState} from "react";
function UseState() {
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const minus = () => {
        setCounter2(counter2 - 1)
     }

    const plus = () => {
       setCounter2(counter2 + 1)
    }

    return(
        <>
            <h1>Use State</h1>
            <h2>Counter</h2>
            <h3>{counter}</h3>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <button onClick={() => setCounter(counter + 1)}>+</button>

            <h2>Counter 2</h2>
            <h3>{counter2}</h3>
            <button onClick={minus}>-</button>
            <button onClick={plus}>+</button>
        </>
    )
    }

export default UseState