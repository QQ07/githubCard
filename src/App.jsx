
import { RecoilRoot } from "recoil";
import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import GithubCard from "./components/Card";
import {Buttons} from "./components/Buttons"
function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/:id" Component={GithubCard} />
          </Routes>
        </BrowserRouter>
        <Buttons/>
      </RecoilRoot>

    </>
  );
}

export default App;
