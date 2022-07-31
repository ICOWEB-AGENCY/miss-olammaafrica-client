import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  CompanySection,
  ComplainsSection,
  GallerySection,
  Footer,
  Header,
} from "../components";

// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Olammaafrica</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <CompanySection />
        <GallerySection />
        <ComplainsSection />
      </main>

      <Footer />
      {/* <div style={{ height: 300 }}></div> */}
    </div>
  );
}
