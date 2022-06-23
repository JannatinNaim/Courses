// ! Won't work for now.
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
