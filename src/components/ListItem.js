// Node Modules
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { UilTrashAlt } from "@iconscout/react-unicons";
import { UilEdit } from "@iconscout/react-unicons";

//Components'
import NoteUpdateModal from "./NoteUpdateForm";

function ListItem({ data, handleDelete, handleEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const listAnimation = {
    hidden: {
      x: 200,
      opacity: 0,
      transition: {
        duration: 0.5
      }
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.li
      variants={listAnimation}
      initial="hidden"
      animate="visible"
      show="visible"
      exit="hidden"
      className="relative flex justify-between py-6 px-4 font-bold rounded-lg border-2 border-gray-200"
    >
      <p className="overflow-y-auto">{data.note}</p>
      <div className="flex gap-4">
        <UilEdit
          className="text-gray-500 hover:text-gray-900 duration-300 cursor-pointer"
          onClick={() => {
            setShowEdit(prevValue => !prevValue);
          }}
        ></UilEdit>
        <UilTrashAlt
          className="text-gray-500 hover:text-gray-900 duration-300 cursor-pointer"
          onClick={handleDelete}
        ></UilTrashAlt>
        <AnimatePresence>
          {showEdit && (
            <NoteUpdateModal
              id={data.id}
              handleEdit={handleEdit}
              setShowEdit={setShowEdit}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
}

ListItem.defaultProps = {
  text: "default",
  handleDelete: () => {}
};

export default ListItem;
