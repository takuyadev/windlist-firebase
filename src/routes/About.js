//Modules
import { motion } from "framer-motion";

// Utility
import { pageTransition } from "../modules/utils/animationData";

function About() {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <section className="relative mb-16 flex flex-col-reverse gap-8 md:flex-row justify-between gap-4 w-full">
        <div className="flex flex-col w-full md:w-1/2 gap-8 items-start md:self-center z-10">
          <h1 className="text-3xl font-bold">Who are we?</h1>
          <p>
            We've all had that one producitivty app with endless possibilities
            of features. However, once you start to cross the ravage path of
            optimizing your productivity, that's when you realize that sometimes{" "}
            <b> less is more. </b>
          </p>
          <p>
            With MinimalList, we strive to remove all possible features that
            strip you away from coming up with your perfect plan for the day;
            just a simple, to-do list that accompanies your day.
          </p>
        </div>
        <img
          className="w-full lg:w-1/2"
          src="./images/about_illustration.svg"
          alt="Vector art of person standing behind fireworks"
        />
      </section>

    </motion.div>
  );
}

export default About;
