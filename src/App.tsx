import React, { useState } from "react";
import Router from "./Router";
import { createGlobalStyle } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Theme";
import { isDarkAtom } from "./atom";
import { useRecoilValue } from "recoil";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
  font-family: "Source Sans 3", sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor}
}
li{
  list-style:none;
}
a{
  text-decoration:none;
  color:inherit;
}
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  // const [isDark, setIsDark] = useState(false);
  // const toggleDark = () => {
  //   setIsDark((current) => !current);
  // };
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {/* <button onClick={toggleDark}>Toggle Mode</button> */}
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
