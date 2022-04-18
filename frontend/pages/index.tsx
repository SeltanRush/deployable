import type { NextPage } from "next";

import SEO from "../src/components/utils/SEO";

const HomePage: NextPage = () => {
  return (
    <div>
      <SEO title="Home" description="Deployable app home page" />

      <h1>Home page</h1>
    </div>
  );
};

export default HomePage;
