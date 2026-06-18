import { motion, type Variants } from "motion/react";
import { Link } from "react-router";
import OnlineIndicator from "@/components/custom/OnlineIndicator";
import Profile from "@/components/custom/assets/profile";

export default function HomeHero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  return (
    <div className="flex p-2 w-full">
      <motion.div
        className="flex w-full h-full min-h-[70dvh] justify-center items-center gap-x-4 md:p-10 p-5 border-x border-gray-100 dark:border-zinc-900 "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex md:flex-row flex-col w-full  md:h-1/2 gap-y-10 ">

          {/* First col */}
          <div className="flex flex-col h-full md:w-1/3 w-full justify-between gap-y-5">
            <motion.h1 variants={itemVariants} className="md:text-5xl text-3xl font-bold">
              Hey!
            </motion.h1>

            <motion.div variants={itemVariants} className="flex md:w-[70%] w-full">
              <p className="leading-7 font-light">I’m  <span className="font-semibold "> Joseph Kwaku Ampah</span>, I’m Joseph, a Software Developer based in Accra, Ghana, currently building scalable fintech products at Brij Fintech.</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gray-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-gray-700 dark:hover:bg-zinc-300 transition-colors"
              >
                Get in touch
              </Link>
            </motion.div>
          </div>

          {/* Second col */}
          <div className="flex md:flex-row flex-col flex-1 gap-x-8 items-end gap-y-10">
            <motion.div variants={itemVariants} className="flex md:w-1/2 w-full">
              <Profile />
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-y-4 md:w-1/2 w-full">
              <div className="flex items-center h-fit gap-x-2">
                <OnlineIndicator />
                <p className="text-sm font-mono font-light">OPEN TO WORK</p>
              </div>
              <p className="leading-7 font-light">I’m a Frontend Developer specializing in <span className="font-semibold"> Vue.js, React, Nuxt js and Next Js</span> with a strong focus on building scalable, high-performance web experiences for the fintech space.</p>
              <p className="leading-7 font-light">Over the past 2+ years, I’ve shipped payment platforms used across 3+ African markets, helping merchants process transactions faster and more reliably.</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
