//Modules
import { useState } from "react"

// Components
import NoteUpdateModal from "../components/NoteUpdateForm"

function Home(){
    const [show, setShow] = useState(false)
    return (
        <div className="flex">
            <img src="./images/home_illustration.svg"/>
            <div>
                <h1 className="text-4xl font-bold">MinimaListically productive.</h1>
                <button onClick={()=>setShow(prevState => !prevState)}> BIG BUTTON HUGE</button>
                <NoteUpdateModal show={show}/>
            </div>
        </div>
    )
}

export default Home