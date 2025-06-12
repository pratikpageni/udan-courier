import Footer from "@/components/Footer";
import { SocialMedia } from "@/components/MediaIcon";
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
        <div className="fixed  right-0 top-1/2 -translate-y-1/2 z-50 bg-brand-color shadow-lg rounded-l-xl p-3">
        <SocialMedia />
      </div>
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Mainlayout;
