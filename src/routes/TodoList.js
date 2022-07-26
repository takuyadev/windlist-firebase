import { useState } from 'react'
import ListItem from "../components/ListItem";
import TextField from "../components/TextField";
import { PrimaryButton } from "../components/Buttons";

export default function TodoList() {
  const [note, setNote] = useState()
  return (
    <div className="flex flex-col gap-8">
      <form className="flex w-full p-0 gap-4">
        <TextField placeholder="Add note here..." />
        <PrimaryButton>Add</PrimaryButton>
      </form>
      <hr />
      <ul className="flex flex-col gap-4">
        <ListItem />
      </ul>
    </div>
  );
}
