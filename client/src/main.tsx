import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

/* The crawler-facing copy in index.html (#prerender) is removed once the app
   takes over, so the live DOM keeps exactly one <h1> and one set of landmarks. */
document.getElementById("prerender")?.remove();

createRoot(document.getElementById("root")!).render(<App />);
