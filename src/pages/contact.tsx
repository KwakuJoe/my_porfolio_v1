import { useRef, useState } from "react";
import { motion, type Variants, useInView } from "motion/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import Divider from "@/components/custom/Divider";

const EMAILJS_SERVICE_ID = "service_lfvger9";
const EMAILJS_TEMPLATE_ID = "template_g08npse";
const EMAILJS_PUBLIC_KEY = "WrRjLsXZA3WBAMbcY";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const validationSchema = Yup.object({
  from_name: Yup.string().min(2, "Name must be at least 2 characters").required("Name is required"),
  from_email: Yup.string().email("Enter a valid email address").required("Email is required"),
  subject: Yup.string().min(3, "Subject must be at least 3 characters").required("Subject is required"),
  message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [status, setStatus] = useState<Status>("idle");

  const formik = useFormik({
    initialValues: {
      from_name: "",
      from_email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setStatus("loading");
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: values.from_name,
            from_email: values.from_email,
            subject: values.subject,
            message: values.message,
            to_email: "josephampah18@gmail.com",
          },
          EMAILJS_PUBLIC_KEY
        );
        setStatus("success");
        resetForm();
      } catch {
        setStatus("error");
      }
    },
  });

  const field = (id: keyof typeof formik.values) =>
    formik.touched[id] && formik.errors[id] ? formik.errors[id] : undefined;

  return (
    <div className="flex flex-col w-full h-full min-h-screen">
      <div className="md:h-20 h-28" />
      <Divider />
    <div className="flex p-2 w-full">
      <motion.div
        ref={ref}
        className="flex w-full justify-center items-start gap-x-4 md:p-10 p-5 border-x border-gray-100 dark:border-zinc-900"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex md:flex-row flex-col w-full gap-y-10">
          {/* Left col */}
          <div className="flex flex-col md:w-1/3 w-full gap-y-4">
            <motion.h1 variants={itemVariants} className="md:text-5xl text-3xl font-bold">
              Contact
            </motion.h1>
            <motion.p variants={itemVariants} className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed max-w-[220px]">
              Have a project in mind or just want to say hi? Drop me a message and I'll get back to you.
            </motion.p>
            <motion.a
              variants={itemVariants}
              href="mailto:josephampah18@gmail.com"
              className="text-sm text-gray-700 dark:text-zinc-300 underline underline-offset-2 hover:text-black dark:hover:text-white transition-colors"
            >
              josephampah18@gmail.com
            </motion.a>
          </div>

          {/* Right col — form */}
          <motion.form
            variants={itemVariants}
            onSubmit={formik.handleSubmit}
            className="flex flex-col flex-1 gap-y-4"
          >
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-y-1">
                <label htmlFor="from_name" className="text-xs font-medium text-gray-500 dark:text-zinc-400 uppercase tracking-wide">
                  Name
                </label>
                <input
                  id="from_name"
                  type="text"
                  placeholder="John Doe"
                  {...formik.getFieldProps("from_name")}
                  className={`w-full rounded-xl border px-4 py-3 text-sm bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100 placeholder:text-gray-400 dark:placeholder:text-zinc-600 outline-none transition-colors focus:border-gray-400 dark:focus:border-zinc-500 ${
                    field("from_name")
                      ? "border-red-400 dark:border-red-500"
                      : "border-gray-200 dark:border-zinc-800"
                  }`}
                />
                {field("from_name") && (
                  <p className="text-xs text-red-500">{field("from_name")}</p>
                )}
              </div>

              <div className="flex flex-col gap-y-1">
                <label htmlFor="from_email" className="text-xs font-medium text-gray-500 dark:text-zinc-400 uppercase tracking-wide">
                  Email
                </label>
                <input
                  id="from_email"
                  type="email"
                  placeholder="john@example.com"
                  {...formik.getFieldProps("from_email")}
                  className={`w-full rounded-xl border px-4 py-3 text-sm bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100 placeholder:text-gray-400 dark:placeholder:text-zinc-600 outline-none transition-colors focus:border-gray-400 dark:focus:border-zinc-500 ${
                    field("from_email")
                      ? "border-red-400 dark:border-red-500"
                      : "border-gray-200 dark:border-zinc-800"
                  }`}
                />
                {field("from_email") && (
                  <p className="text-xs text-red-500">{field("from_email")}</p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-y-1">
              <label htmlFor="subject" className="text-xs font-medium text-gray-500 dark:text-zinc-400 uppercase tracking-wide">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Project inquiry"
                {...formik.getFieldProps("subject")}
                className={`w-full rounded-xl border px-4 py-3 text-sm bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100 placeholder:text-gray-400 dark:placeholder:text-zinc-600 outline-none transition-colors focus:border-gray-400 dark:focus:border-zinc-500 ${
                  field("subject")
                    ? "border-red-400 dark:border-red-500"
                    : "border-gray-200 dark:border-zinc-800"
                }`}
              />
              {field("subject") && (
                <p className="text-xs text-red-500">{field("subject")}</p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-y-1">
              <label htmlFor="message" className="text-xs font-medium text-gray-500 dark:text-zinc-400 uppercase tracking-wide">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your project..."
                {...formik.getFieldProps("message")}
                className={`w-full rounded-xl border px-4 py-3 text-sm bg-white dark:bg-zinc-900 text-gray-900 dark:text-zinc-100 placeholder:text-gray-400 dark:placeholder:text-zinc-600 outline-none transition-colors resize-none focus:border-gray-400 dark:focus:border-zinc-500 ${
                  field("message")
                    ? "border-red-400 dark:border-red-500"
                    : "border-gray-200 dark:border-zinc-800"
                }`}
              />
              {field("message") && (
                <p className="text-xs text-red-500">{field("message")}</p>
              )}
            </div>

            {/* Submit */}
            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={formik.isSubmitting || status === "loading"}
                className="px-6 py-3 rounded-xl text-sm font-semibold bg-gray-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-gray-700 dark:hover:bg-zinc-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {status === "loading" ? "Sending…" : "Send message"}
              </button>

              {status === "success" && (
                <p className="text-sm text-green-600 dark:text-green-400">Message sent! I'll be in touch soon.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-500">Something went wrong. Try emailing me directly.</p>
              )}
            </div>
          </motion.form>
        </div>
      </motion.div>
    </div>
      <Divider />
    </div>
  );
}
