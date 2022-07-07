import {useState,useEffect} from 'react'
function UseEffect() {
    const [text, setText] = useState(1)
    const [text2, setText2] = useState(2)

    const changeNumber = () => {
        setText(text +1)
    }

    const changeNumber2 = () => {
        setText2(text2 +1)
    }

    useEffect(() => {
        console.log("Up Changed")
    }, [text])

    return(
        <>
        <h1>Use Effect</h1>
        <h3>{text}</h3>
        <h3>{text2}</h3>
        <button onClick={changeNumber} >Change Number Up</button>
        <button onClick={changeNumber2} >Change Number Down</button>
        </>
    )
}
export default UseEffect