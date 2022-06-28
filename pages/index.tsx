import type { NextPage } from "next";
import Image from "next/image";
import { Fragment } from "react";
import Header from "../components/header";
import Hero from "../components/hero";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
    </Fragment>
  );
};

export default Home;
