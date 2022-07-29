// Components
import TextField from "./TextField"
import { PrimaryButton } from "./Buttons"

function NoteUpdateModal({show}){
    return( 
        show &&         
            <div className="absolute flex flex-col gap-2 bg-white shadow-lg rounded-md p-8">
                <h1>Update Note</h1>
                <TextField/>
                <PrimaryButton text={"Update"}/>
            </div>
    )
}

export default NoteUpdateModal