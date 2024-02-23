import "@/styles/globals.css";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import { useEffect } from "react";
import NavComponent from "@/components/NavComponent";

function App({ Component, pageProps }) {
  const { state } = useTheme();

  useEffect(() => {
    if (state.darkTheme === true) {
      document.documentElement.classList.add("dark");
    } else if (state.darkTheme === false) {
      document.documentElement.classList.remove("dark");
    }
  }, [state.darkTheme]);

  return <Component {...pageProps} />;
}

export default ({ Component, pageProps }) => (
  <>
    <ThemeProvider>
      <NavComponent></NavComponent>
      <App Component={Component} pageProps={pageProps}></App>
    </ThemeProvider>
  </>
);
