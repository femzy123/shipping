import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Login from "../../components/Login";

function login() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Login />
      </Layout>
    </div>
  );
}

export default login;
