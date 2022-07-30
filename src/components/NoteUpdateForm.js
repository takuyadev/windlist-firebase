// Node Modules
import { useState } from "react";
import { motion } from "framer-motion";

// Components
import TextField from "./TextField";
import { PrimaryButton } from "./Buttons";

//Utility
import { pageTransition } from "../modules/utils/animationData";

function NoteUpdateModal({ id, setShowEdit, handleEdit }) {
  const [text, setText] = useState("");

  return (
    <motion.form
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="absolute flex flex-col gap-2 top-16 right-0 bg-white shadow-lg rounded-md p-8"
      onSubmit={e => {
        e.preventDefault();
        handleEdit(text, id);
        setShowEdit(false);
      }}
    >
      <TextField
        handleOnChange={e => setText(e.target.value)}
        placeholder="Enter your edit..."
      />
      <PrimaryButton type="submit"> Update Note</PrimaryButton>
    </motion.form>
  );
}

export default NoteUpdateModal;
