import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Router from "./Router";
import { lightTheme, darkTheme } from "./theme";

const Header = styled.header`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const ModeToggleBtn = styled.button`
  background-color: inherit;
  border: 0;
  font-size: 30px;
  cursor: pointer;
`;
function App() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <div className="App">
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle></GlobalStyle>
        <Header>
          <ModeToggleBtn onClick={toggleTheme}>
            🔁{isDark ? "☀️" : "🌙"}
          </ModeToggleBtn>
        </Header>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
