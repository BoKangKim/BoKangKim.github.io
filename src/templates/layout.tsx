import { useState, useEffect } from "react";

import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Main } from "../components/main";
import "../assets/sass/index.scss";
import { ThemeSwitch } from "../components/theme-switch";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ThemeContext } from "../components/global-data";
import favicon from "../assets/img/favicon.ico";
const TemplateWrapper = ({ children, location }: any) => {
  const [theme, setTheme] = useState("");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Helmet
        title="BK`s Blog"
        meta={[
          { name: `description`, content: `programming & tech blog` },
          { name: `generator`, content: `gatsby` },
          { name: `author`, content: `bokangkim` },
          {
            name: `google-site-verification`,
            content: "6KHb8V0fAsVjI-k0fZfovmdLDrfikkgwpVMCsfSmvrw",
          },
        ]}
        bodyAttributes={{ class: theme }}
      >
        <link rel="icon" href={favicon} />
      </Helmet>
      <ThemeSwitch />
      <Header />
      <Main location={location}>{children}</Main>
      <Footer />
    </ThemeContext.Provider>
  );
};

export default TemplateWrapper;
