import Head from "next/head";
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard | Logistics App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div>
          <Dashboard />
        </div>
      </Layout>
    </div>
  );
}
