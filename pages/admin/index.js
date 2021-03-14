import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Dashboard from "../../components/Admin/DashboardContainer";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";
import { db, auth } from "../../firebase";
import { useRouter } from "next/router";

export default function Home() {
  const { currentUser } = useAuth();
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
      } else {
        router.push("/admin/login");
      }
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Admin | Logistics App</title>
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
