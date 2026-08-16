import React from "react";
// Styles
import { ThemeProvider } from "styled-components";
// State
import { useDispatch, useSelector } from "react-redux";
import { selectMode, setMode } from "./app/appSlice";
import { useGetUsersQuery } from "./app/apiSlice";
// Router
import { HashRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
// Components
import { ErrorBoundary } from "react-error-boundary";
import AppFallback from "./components/AppFallback";
import GlobalStyles from "./components/GlobalStyles";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";
import { Element } from "react-scroll";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// Config
import { footerTheme } from "./config";
// Util
import {
  getStoredTheme,
  getPreferredTheme,
  setTheme,
  updateFavicon,
} from "./utils";

// #region component
const App = () => {
  const theme = useSelector(selectMode);
  const dispatch = useDispatch();
  const { data: userData, isLoading, isSuccess, isError, error } =
    useGetUsersQuery();
  let content;

  // Theme
  const setThemes = React.useCallback(
    (theme) => {
      if (theme) {
        dispatch(setMode(theme));
        setTheme(theme);
      } else {
        dispatch(setMode(getPreferredTheme()));
        setTheme(getPreferredTheme());
      }
    },
    [dispatch]
  );

  React.useEffect(() => {
    setThemes();
  }, [setThemes]);

  // Favicon - use the GitHub avatar fetched from the API
  React.useEffect(() => {
    updateFavicon(userData?.avatar_url);
  }, [userData]);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      const storedTheme = getStoredTheme();
      if (storedTheme !== "light" && storedTheme !== "dark") {
        setThemes();
      }
    });

  if (isLoading) {
    content = (
      <Container className="d-flex vh-100 align-items-center">
        <Loading />
      </Container>
    );
  } else if (isSuccess) {
    content = (
      <>
        <Element name={"Home"} id="home">
          <NavBar callBack={(theme) => setThemes(theme)} />
        </Element>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer mode={footerTheme} />
      </>
    );
  } else if (isError) {
    content = (
      <Container className="d-flex vh-100 align-items-center justify-content-center">
        <h2>
          {error.status !== "FETCH_ERROR"
            ? `${error.status}: ${error.data.message} - check githubUsername in src/config.js`
            : `${error.status} - check URLs in  src/app/apiSlice.js`}
        </h2>
      </Container>
    );
  }

  return (
    <ErrorBoundary FallbackComponent={AppFallback}>
      {/* https://reactrouter.com/6.28.0/upgrading/future#v7_starttransition */}
      {/* https://reactrouter.com/6.28.0/upgrading/future#v7_relativesplatpath */}
      <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true, }}>
        <ThemeProvider theme={{ name: theme }}>
          <ScrollToTop />
          <GlobalStyles />
          {content}
        </ThemeProvider>
      </HashRouter>
    </ErrorBoundary>
  );
};

// #endregion

export default App;
