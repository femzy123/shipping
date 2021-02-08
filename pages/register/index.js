import React from 'react';
import Head from "next/head";
import Layout from "../../components/Layout";
import SignUp from "../../components/SignUp";

function register() {
  return (
    <div>
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <SignUp />
      </Layout>
    </div>
  );
}

export default register;
