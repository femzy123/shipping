import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import ForgotPassword from "../../components/ForgotPassword"

function index() {
  return (
    <div>
      <Head>
        <title>Forgot Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <ForgotPassword />
      </Layout>
    </div>
  );
}

export default index;
