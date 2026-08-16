import React from "react";
// State
import { useGetUsersQuery } from "../app/apiSlice";
// Components
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Videos from "../components/Videos";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";
// Config
import { moreInfo, name } from "../config";
// Utils
import { updateTitle } from "../utils";

// #region component
const Home = () => {
  const { data: userData } = useGetUsersQuery();

  React.useEffect(() => {
    updateTitle(`${name} | Portfolio`);
  }, []);

  return (
    <>
      <Hero name={name} />
      <main>
        <AboutMe
          avatar_url={userData.avatar_url}
          bio={userData.bio}
          moreInfo={moreInfo}
        />
        <Videos />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
};
// #endregion

export default Home;
