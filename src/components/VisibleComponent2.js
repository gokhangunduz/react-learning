import {useState} from 'react'

function VisibleComponent() {

    const [isVisible,setIsVisible] = useState(true)
    
    return(
        <>
        {isVisible && <h1>VisibleComponent2 | Visible Now!</h1>}
        <button onClick={() => setIsVisible(!isVisible)}>Visible/Not Visible</button>
        </>
    )
}
export default VisibleComponent