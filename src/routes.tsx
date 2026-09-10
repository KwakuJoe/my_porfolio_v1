import { createBrowserRouter } from "react-router";
import RootLayout from "@/layouts/root_layout";
import NotFound from "@/pages/not_found";
import Home from "@/pages/home";
import Contact from "@/pages/contact";
import Projects from "@/pages/projects";
import CaseStudy from "@/pages/case_study";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Home /> },
            { path: "projects", element: <Projects /> },
            { path: "projects/:slug", element: <CaseStudy /> },
            { path: "contact", element: <Contact /> },
        ]
    }
]);

export default router;
