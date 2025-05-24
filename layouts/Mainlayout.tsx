import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";

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
      </main>
    </>
  );
};

export default Mainlayout;
