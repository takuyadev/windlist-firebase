//Modules
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Components
import { PrimaryButton } from "../components/Buttons";
import Card from "../components/Card";

// Utility
import { pageTransition } from "../modules/utils/animationData";

function Home() {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <section className="relative mb-16 flex flex-col-reverse md:flex-row justify-between gap-4 w-full">
        <div className="flex flex-col items-start md:self-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold z-1 mb-4">
            Minimalism <br /> <span className="text-red-500">focused.</span>
          </h1>
          <p className="mb-8">Get started on your minimal lifestyle.</p>
          <div className="flex flex-row gap-4">
            <Link to="/Signup">
              <PrimaryButton>Get Started</PrimaryButton>
            </Link>
          </div>
        </div>
        <img
          className="w-full lg:w-1/2"
          src="./images/home_illustration.svg"
          alt="Vector Art of person snapshotting a huge phone"
        />
      </section>
      <section className="bg-gray-200 flex flex-col md:flex-row gap-16 p-8 rounded-2xl">
        <Card>
          <h2 className="text-xl font-bold mb-2">Delete Distractions</h2>
          <p className="text-gray-500">
            Keep to things that matter; what are you going to be doing for the
            day?
          </p>
        </Card>
        <Card>
          <h2 className="text-xl font-bold mb-2">
            Save everything to the cloud.
          </h2>
          <p className="text-gray-500">
            Don't waste your time backing up your list; just bring it on the go.
          </p>
        </Card>
        <Card>
          <h2 className="text-xl font-bold mb-2">Delete Distractions</h2>
          <p className="text-gray-500">
            Keep to things that matter; what are you going to be doing for the
            day?
          </p>
        </Card>
      </section>
    </motion.div>
  );
}

export default Home;
