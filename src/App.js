import './App.css';
import {createGlobalStyle} from "styled-components";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import EditResume from "./pages/EditResume";
import MyPage from "./pages/MyPage";
import EditDesign from "./pages/EditDesign";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  //body {
  //  background: #e9ecef;
  //}
`;

function App() {
  return (
      <>
          <GlobalStyle/>
          <div className="App box-border">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/my-page" element={<MyPage />} />
                  <Route path="/edit/design" element={<EditDesign />} />
                  <Route path="/edit/resume" element={<EditResume />} />
              </Routes>
          </div>
      </>
  );
}

export default App;
