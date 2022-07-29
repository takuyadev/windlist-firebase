// Node Modules
import { useEffect, useState, useContext } from "react";
import { IsLoggedInContext } from "../modules/context/IsLoggedInContext";
import { database } from "../firebase.config";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { AnimatePresence } from "framer-motion";

// Components
import ListItem from "../components/ListItem";
import TextField from "../components/TextField";
import { PrimaryButton } from "../components/Buttons";
import { LoginError } from "../components/LoginError";
// Utility
import { uploadNote } from "../modules/firebase/HandleUserPost";
import { deleteNote } from "../modules/firebase/HandleUserPost";

export default function Notes(uid) {
  const [note, setNote] = useState();
  const [allNotes, setAllNotes] = useState([]);
  const { isLoggedIn } = useContext(IsLoggedInContext);

  async function getNotes() {
    let notes = [];

    // Get notes and push data into initialized empty array
    const notesSnap = await getDocs(
      collection(database, "users", uid.uid, "notes")
    );
    notesSnap.forEach(doc => notes.push(doc.data()));

    // Return empty array
    return notes;
  }

  async function updateNotes() {
    const notes = await getNotes();

    // When setting all notes, sort them by creation time
    setAllNotes(notes.sort((a, b) => a.created.seconds > b.created.seconds));
  }

  // Upload note, then await for new notes to display
  async function submitUploadNote() {
    await uploadNote(uid.uid, note);
    await updateNotes();
  }

  // Delete note, then await for new notes to display
  async function submitDeleteNote(id) {
    await deleteNote(uid.uid, id);
    await updateNotes();
  }

  // Set notes on load
  useEffect(() => {
    async function onLoad() {
      await getNotes();
      await updateNotes();
    }
    if (uid.uid) onLoad();
  }, [uid]);

  // Delete collection
  return (
    <>
      {!isLoggedIn ? 
        <LoginError /> : 
        <div className="flex flex-col gap-8">
          <form
            onSubmit={e => e.preventDefault()}
            className="flex w-full p-0 gap-4"
          >
            <TextField
              handleOnChange={e => setNote(e.target.value)}
              placeholder="Add note here..."
            />
            <PrimaryButton handleOnClick={() => submitUploadNote()}>
              Add
            </PrimaryButton>
          </form>
          <hr />
          <ul className="flex flex-col-reverse gap-4">
            <AnimatePresence>
              {allNotes.map((note, i) => (
                <ListItem
                  key={i}
                  handleDelete={() => submitDeleteNote(note.id)}
                  data={note}
                />
              ))}
            </AnimatePresence>
          </ul>
        </div>
        }
    </>
  );
}
