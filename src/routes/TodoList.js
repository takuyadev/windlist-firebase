import { useEffect, useState } from 'react'
import ListItem from "../components/ListItem";
import TextField from "../components/TextField";
import { PrimaryButton } from "../components/Buttons";
import { uploadNote } from '../modules/HandleUserPost';
import { database } from '../firebase.config';
import { deleteNote } from '../modules/HandleUserPost';
import { onSnapshot, collection, deleteDoc, doc } from "firebase/firestore";


export default function TodoList(uid) {
  const [note, setNote] = useState()
  const [allNotes, setAllNotes] = useState([])

  useEffect(()=>{
    if(uid.uid){
      onSnapshot(collection(database, "users", uid.uid, "notes"), (data) => {
        const notesData = data.docs.map(item => item.data()).sort((a,b)=> a.created.seconds < b.created.seconds)
        setAllNotes(notesData)
      })
    }
  }, [])
  
  // Delete collection
  return (
    <div className="flex flex-col gap-8">
      <form onSubmit={(e)=>e.preventDefault()}className="flex w-full p-0 gap-4">
        <TextField handleOnChange={(e)=>setNote(e.target.value)} placeholder="Add note here..." />
        <PrimaryButton handleOnClick={ () => uploadNote(uid.uid, note) }>Add</PrimaryButton>
      </form>
      <hr />
      <ul className="flex flex-col gap-4">
        {allNotes.map(note=>
          <ListItem handleDelete={()=>deleteNote(uid.uid, note.id)} data={note}/>
        )}
      </ul>
    </div>
  );
}
