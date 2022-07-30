// Node Modules
import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
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
import ToastNotfication from "../components/ToastNotification";


// Utility
import { uploadNote } from "../modules/firebase/HandleUserPost";
import { deleteNote } from "../modules/firebase/HandleUserPost";
import { editNote } from "../modules/firebase/HandleUserPost";
import { pageTransition } from "../modules/utils/animationData";


export default function Notes(uid) {
  const [note, setNote] = useState();
  const [allNotes, setAllNotes] = useState([]);
  const [error, setError] = useState("")
  const [showError, setShowError] = useState(false)
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
    await uploadNote(uid.uid, note, setError);
    await updateNotes();
  }

  // Delete note, then await for new notes to display
  async function submitDeleteNote(id) {
    await deleteNote(uid.uid, id);
    await updateNotes();
  }

  async function submitEditNote(note, id){
    console.log(uid.uid)
    await editNote(note, uid.uid, id);
    await updateNotes()
  }

  // Set notes on load
  useEffect(() => {
    async function onLoad() {
      await getNotes();
      await updateNotes();
    }
    if (uid.uid) onLoad();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid]);


  // Set Error Form   
  useEffect(()=>{
    if(error) {
      setShowError(true)
    }
  },[error])

  useEffect(()=>{
    if(showError){
      setTimeout(()=>{
        setShowError(false)
        setError("")
      },5000)
    }
  },[showError])

  // Delete collection
  return (
    <motion.div
    variants={pageTransition}
    initial="hidden"
    animate="visible"
    exit="hidden">
      {!isLoggedIn ? 
        <LoginError /> : 
        <div className="flex flex-col gap-8">
          <AnimatePresence>
            { showError && <ToastNotfication message={error}/>}
          </AnimatePresence>
          <form
            onSubmit={e => {
              e.preventDefault()
              submitUploadNote()
            }}
            className="flex flex-col sm:flex-row w-full p-0 gap-4"
          >
            <TextField
              handleOnChange={e => setNote(e.target.value)}
              placeholder="Add note here..."
            />
            <PrimaryButton type="submit">
              Add
            </PrimaryButton>
          </form>
          <hr />
          <ul className="flex flex-col-reverse gap-4">
            <AnimatePresence>
              {allNotes.map((note, i) => (
                <ListItem
                  key={i}
                  handleEdit={submitEditNote}
                  handleDelete={() => submitDeleteNote(note.id)}
                  data={note}
                />
              ))}
            </AnimatePresence>
          </ul>
        </div>
        }
    </motion.div>
  );
}
