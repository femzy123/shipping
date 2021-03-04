import Head from "next/head";
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard/DashboardContainer";
import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";

export default function Home() {
  const { currentUser } = useAuth();
  return (
    <div>
      <Head>
        <title>Dashboard | Logistics App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div>
          <Dashboard user={currentUser} />
        </div>
      </Layout>
    </div>
  );
}
