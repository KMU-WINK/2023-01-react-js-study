import styled from "styled-components";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Week1 from "./pages/Week1";
import Week2 from "./pages/Week2";
import WinkMainLoadingPage from "./pages/WinkMainLoadingPage";
import WinkMembers from "./pages/WinkMembers";


const Header = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background: lightgray;
  box-sizing: border-box;
  justify-content: start;
  padding: 12px 20px;
  gap: 20px;
  a {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: white;
    box-sizing: border-box;
    padding: 8px 12px;
    border-radius: 8px;
    border: 2px solid black;
    font-weight: 700;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <Header style={{position: "relative", zIndex: "1"}}>
        <Link to="/">홈</Link>
        <Link to="/week-1">1주차</Link>
        <Link to="/week-2">2주차</Link>
        <Link to="/WinkMembers">과제</Link>
      </Header>
      <Routes>
        <Route path="/" exact={true} element={<WinkMainLoadingPage />} />
        <Route path="/week-1" element={<Week1 />} />
        <Route path="/week-2" element={<Week2 />} />
        <Route path="/WinkMembers" element={<WinkMembers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
