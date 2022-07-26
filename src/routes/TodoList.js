import { useState } from 'react'
import ListItem from "../components/ListItem";
import TextField from "../components/TextField";
import { PrimaryButton } from "../components/Buttons";
import { uploadNote } from '../modules/HandleUserPost';

export default function TodoList(uid) {
  const [note, setNote] = useState()
  return (
    <div className="flex flex-col gap-8">
      <form className="flex w-full p-0 gap-4">
        <TextField handleOnChange={(e)=>setNote(e.target.value)} placeholder="Add note here..." />
        <PrimaryButton handleOnClick={ () => uploadNote(uid.uid, note) }>Add</PrimaryButton>
      </form>
      <hr />
      <ul className="flex flex-col gap-4">
        <ListItem />
      </ul>
    </div>
  );
}
