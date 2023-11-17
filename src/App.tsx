import "./App.scss";
import { Header } from "./components/layout";
import { BrowserRouter as Router } from "react-router-dom";
import Page  from "./page/private";

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Page/>
      </Router>
    </>
  );
}

export default App;
