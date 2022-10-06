import DarkModeToggle from "react-dark-mode-toggle";
import styled, { ThemeProvider } from "styled-components";
import { Box } from "./Box";
import { useDarkMode } from "./theme";
import { GlobalStyle } from "./GlobalStyle";

const AppStyle = styled.div`
  font-family: sans-serif;
  height: 100%;
  /* text-align: center; */
`;

export default function App() {
  const { darkMode, setDarkMode, theme } = useDarkMode();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppStyle>
        <Box>
          <DarkModeToggle onChange={setDarkMode} checked={darkMode} size={80} />
        </Box>
      </AppStyle>
    </ThemeProvider>
  );
}
