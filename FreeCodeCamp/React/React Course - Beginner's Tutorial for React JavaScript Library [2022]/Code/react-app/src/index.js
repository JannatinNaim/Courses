import "./styles/index.scss";

import App from "./pages";
import ReactDOM from "react-dom/client";

const HTMLRoot = document.getElementById("root");
const ReactRoot = ReactDOM.createRoot(HTMLRoot);

ReactRoot.render(<App />);
