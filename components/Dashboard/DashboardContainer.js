import React, { useState, useEffect } from "react";
import Table from "./DashboardTable";
import styled from "styled-components";
// import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/router";
import { db } from "../../firebase";

const Header = styled.div`
  width: 100vw;
  display: grid;
  place-items: center;
  background-color: #7a3868;
  height: 150px;
  color: #fff;
`;

const Container = styled.div`
  padding: 20px;

  @media screen and (min-width: 480px) {
    padding: 40px;
  }
`;

function Dashboard({ user }) {
  // const { currentUser } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState([]);

  const fetchData = async () => {
    const ordersRef = db.collection("shippingOrders");
    if (user?.uid) {
      const snapshot = await ordersRef.where("userId", "==", user.uid).get();

      if (snapshot.empty) {
        console.log("No matching documents.");
        return;
      }

      setOrders(
        snapshot.docs.map((doc) => ({ order: doc.data(), id: doc.id }))
      );
    } else {
      console.log("loading");
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  

  return (
    <div>
      <Header>
        <h1 className="text-4xl">Dashboard</h1>
      </Header>
      <Container>
        {user ? (
          <Table orders={orders} fetchData={fetchData} />
        ) : (
          <h2 className="text-3xl text-center">
            Please{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Sign In
            </span>{" "}
            to access your shipping records.
          </h2>
        )}
      </Container>
    </div>
  );
}

export default Dashboard;
