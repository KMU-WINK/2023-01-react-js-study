import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Week1 from './pages/Week1';
import Week2 from './pages/Week2';

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background: lightgray;
  box-sizing: border-box;
  justify-content: start;
  padding: 12px 20px;
  gap: 20px;
`;

const Link = styled.a`
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
`;

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Link href="/week-1">1주차</Link>
        <Link href="/week-2">2주차</Link>
        <Link>3주차</Link>
      </Header>
      <Routes>
        <Route path="/week-1" element={<Week1 />} />
        <Route path="/week-2" element={<Week2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
