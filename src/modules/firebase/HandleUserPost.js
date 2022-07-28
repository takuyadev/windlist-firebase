import { database } from "../../firebase.config";
import { nanoid } from "nanoid";
import { deleteDoc, doc, setDoc, serverTimestamp } from "firebase/firestore";

// Upload Note to server
export async function uploadNote(id, note) {
  const nid = nanoid();
  const notesRef = doc(database, "users", id, "notes", nid);
  await setDoc(notesRef, { note: note, id: nid, created: serverTimestamp() });
}

// Delete Note to Server
export async function deleteNote(uid, id) {
  let notesRef = doc(database, "users", uid, "notes", id);
  await deleteDoc(notesRef);
}

// Update Note from grabbed Note ID
