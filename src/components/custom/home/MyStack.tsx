import { motion, type Variants, useInView } from "motion/react";
import { Icon } from "@iconify/react";
import { useRef } from "react";

const stacks = [
    { icon: "vscode-icons:file-type-vue", name: "Vue" },
    { icon: "devicon:react", name: "React" },
    { icon: 'skill-icons:nuxtjs-dark', name: 'Nuxt JS' },
    { icon: 'skill-icons:nextjs-light', name: 'Next JS' },
    { icon: 'vscode-icons:file-type-js-official', name: 'Javascript' },
    { icon: "vscode-icons:file-type-typescript-official", name: "TypeScript" },
    { icon: "vscode-icons:file-type-tailwind", name: "Tailwind" },
    { icon: "material-icon-theme:laravel", name: "Laravel (basic)" },
    { icon: "skill-icons:adonis", name: "Adonis JS" },
    {icon: "devicon:figma", name:'Figma'},
    {icon: "skill-icons:github-light", name:'Github'},
    {icon: "skill-icons:vercel-light", name:'Vercel'},
    {icon: "devicon:netlify", name:'Netlify'},
    {icon: "logos:neon-icon", name:'Neon'},
    {icon: "devicon:supabase", name:'Supabase'},
    {icon: "devicon:postgresql", name:'Postgres'},
    {icon: "logos:mysql", name:'MySQL'},
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const headingVariants: Variants = {
    hidden: { opacity: 0, x: -24 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function MyStack() {
    const ref = useRef(null);
    // Triggers animation once when 30% of the section enters the viewport
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <div className="flex p-2 w-full">
            <motion.div
                ref={ref}
                className="flex w-full h-full min-h-[40dvh] justify-center items-center gap-x-4 md:p-10 p-5 border-x border-gray-100 dark:border-zinc-900"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <div className="flex flex-col w-full md:h-1/2 gap-y-10">
                    {/* Heading */}
                    <div className="flex flex-col h-full md:w-1/3 w-full justify-between gap-y-5">
                        <motion.h1
                            variants={headingVariants}
                            className="md:text-5xl text-3xl font-bold"
                        >
                            Stacks
                        </motion.h1>
                    </div>

                    {/* Icons grid */}
                    <div className="flex md:flex-row flex-col flex-1 gap-x-8 items-end gap-y-10">
                        <div className="flex flex-row flex-wrap gap-4 w-full">
                            {stacks.map((stack) => (
                                <motion.div
                                    key={stack.name}
                                    variants={itemVariants}
                                    whileHover={{
                                        scale: 1.12,
                                        transition: { type: "spring", stiffness: 300, damping: 18 },
                                    }}
                                    className="
                    group flex flex-col justify-center items-center gap-y-2 w-20 p-3 rounded-xl cursor-default
                    transition-colors duration-200
                  "
                                >
                                    <Icon
                                        icon={stack.icon}           // ✅ variable, not string literal
                                        className="text-5xl w-12 h-12"
                                    />
                                    <p className="text-xs font-medium text-gray-500 dark:text-zinc-400 group-hover:text-gray-800 dark:group-hover:text-zinc-100 transition-colors duration-200">
                                        {stack.name}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}