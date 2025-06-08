import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SocialGroup from "@/components/SocialGroup";
import { socialData } from "@/data/social.data";
import Head from "next/head";
import React from "react";
import { FaInstagram } from "react-icons/fa";

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

const Mainlayout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Navbar />
        {children}
        <Footer />
        <SocialGroup />
      </main>
    </>
  );
};

export default Mainlayout;
