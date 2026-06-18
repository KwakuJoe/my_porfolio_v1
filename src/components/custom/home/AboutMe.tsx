import { motion, type Variants } from "motion/react";

export default function AboutMe() {
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
                className="flex w-full h-full min-h-[40dvh] justify-center items-center gap-x-4 md:p-10 p-5 border-x border-gray-100 dark:border-zinc-900 "
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="flex md:flex-row flex-col w-full  md:h-1/2 gap-y-10 ">

                    {/* First col */}
                    <div className="flex flex-col h-full md:w-1/3 w-full justify-between gap-y-5">
                        <motion.h1 variants={itemVariants} className="md:text-5xl text-3xl font-bold">
                            About me
                        </motion.h1>

                    </div>

                    {/* Second col */}
                    <div className="flex md:flex-row flex-col flex-1 gap-x-8 items-end gap-y-10">


                        <motion.div variants={itemVariants} className="flex flex-col gap-y-4 w-full">

                            <p className="text-base leading-8  mb-6 font-light">
                                I am a <strong className="font-semibold ">Frontend Developer</strong>
                                with a strong focus on building
                                <strong className="font-semibold ">{" "} scalable</strong>,
                                <strong className="font-semibold ">{" "} performant</strong>, and
                                <strong className="font-semibold "> {" "}user-focused web applications</strong>.
                                Leveraging technologies such as
                                <strong className="font-semibold">{" "} Vue.js</strong>,
                                <strong className="font-semibold">{" "} Nuxt.js</strong>,
                                <strong className="font-semibold">{" "} React</strong>, and
                                <strong className="font-semibold">{" "} Next.js</strong>,
                                I craft intuitive digital experiences that bridge the gap between
                                business objectives and user expectations.
                            </p>
                            <p className="text-base leading-8  font-light">
                                Over the years, I have collaborated with
                                <strong className="font-semibold"> cross-functional teams</strong>
                                to design, develop, and deliver solutions that solve real-world challenges.
                                In addition to my frontend expertise, I have working knowledge of backend
                                development using
                                <strong className="font-semibold ">{" "} Node.js</strong> and
                                <strong className="font-semibold">{" "} AdonisJS</strong>, as well as
                                familiarity with
                                <strong className="font-semibold ">{" "} Laravel</strong>-based applications.
                                I am passionate about
                                <strong className="font-semibold ">{" "} clean architecture</strong>,
                                <strong className="font-semibold ">{" "} maintainable code</strong>, and
                                creating products that are both technically robust and enjoyable to use.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
