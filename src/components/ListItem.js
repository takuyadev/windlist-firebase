import { motion } from 'framer-motion'

function ListItem({ data, handleDelete }) {

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
  }

  return (
      <motion.li 
        variants={listAnimation}
        initial="hidden"
        animate="visible"
        show="visible"
        exit="hidden"
        className="flex justify-between p-4 font-bold rounded-lg border-2 border-gray-200 cursor-pointer">
        <p>{data.note}</p>
        <p onClick={handleDelete}>delete</p>
      </motion.li>
  );
}

ListItem.defaultProps = {
  text: "default",
  handleDelete: () => {}
};

export default ListItem;
