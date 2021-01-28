import Head from "next/head";
import Layout from "../../components/Layout";
import ShippingCalculator from '../../components/Calculator'

export default function Calculator() {
  return (
    <div>
      <Head>
        <title>Shipping Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <ShippingCalculator />
      </Layout>
    </div>
  );
}
