import styled from "styled-components";
import './App.css'
import DropdownMenu from './components/DropdownMenu.jsx';

// POINT スタイルの継承。styled()でラップする
const StyledApp = styled.div`
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  background-color: "coral";
  position: fixed;
  width: 100%;
  max-width: 160px;
  top: 50px;
  right: 16px;
  display: inline-block;
  background: #41464cdd;
  color: white;
  padding: 0.5em;
  font-size: 14px;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  z-index: 1111;
`;

function App() {
  return (
    <StyledApp>
      <div>GPT App links</div>
      <DropdownMenu />
    </StyledApp>
  );
}

export default App
