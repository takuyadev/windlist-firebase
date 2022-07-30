import { motion } from "framer-motion";

function ToastNotfication({ message }) {
    
  const slideUpAnimation = {
    hidden: {
      y: -200,
      opacity: 0,
      transition: {
        duration: 0.5
      }
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={slideUpAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed left-0 right-0 rounded-lg top-5 w-3/4 z-50 p-2 mx-auto bg-red-700 text-white font-bold text-center"
    >
      {message}
    </motion.div>
  );
}

ToastNotfication.defaultProps = {
  message: "default"
};

export default ToastNotfication;
