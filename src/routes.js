// Components
import Home from "./views/Home.svelte";
import About from "./views/About.svelte";
import NotFound from "./views/NotFound.svelte";

// Vars
let routes = {
    paths: [
        // Paths
        {
            path: "/",
            name: "home",
            component: Home,
            title: "Home",
        },
        {
            path: "/about",
            name: "about",
            component: About,
            title: "About",
        },
        {
            path: "*",
            component: NotFound,
            title: "T1 | 404",
        },
    ],
    fns: {
        init: () => {
            window.scrollTo(0, 0);
        },
        before: (next) => {
            next();
        },
        after: () => {},
    },
};
export default routes;
