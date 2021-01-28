import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Dashboard from '../components/Dashboard'

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
