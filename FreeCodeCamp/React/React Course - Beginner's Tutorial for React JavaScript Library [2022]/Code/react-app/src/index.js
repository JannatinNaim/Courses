import ReactDOM from "react-dom/client";
import App from "./pages";
import "./styles/index.scss";

const HTMLRoot = document.getElementById("root");
const ReactRoot = ReactDOM.createRoot(HTMLRoot);

ReactRoot.render(<App />);
