import Head from "next/head";
import MainLayout from "@/components/MainLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>NSS0X Portfolio System</title>
        <meta name="description" content="Interactive retro-futuristic portfolio experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout />
    </>
  );
}
