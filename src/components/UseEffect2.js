import {useState,useEffect} from 'react'

function UseEffect() {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCounter(counter + 1);
        }, 1000);

    return () => {
        clearInterval(interval);
    };
    });

    return(
        <>
        <h1>Use Effect 2</h1>
        <h3>{counter}</h3>
        </>
    )
}
export default UseEffect