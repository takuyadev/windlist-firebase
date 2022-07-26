import { database } from "../firebase.config";
import { addDoc, collection } from "firebase/firestore";

export async function uploadNote(id, note){
    let dataToUpdate = collection(database, "users", id, "notes")
    addDoc(dataToUpdate, {note: note})
}