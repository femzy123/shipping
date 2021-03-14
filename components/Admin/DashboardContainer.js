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

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function Dashboard({ user }) {
  const router = useRouter();
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    db.collection('shippingOrders').orderBy('timestamp', 'desc'). onSnapshot(snapshot => {
      setOrders(snapshot.docs.map((doc) => ({id: doc.id, order: doc.data()})))
    })
    console.log(orders);
  }, []);

  if(orders === null) {
    return <Center className="text-3xl text-center"><img src="https://res.cloudinary.com/femzy123/image/upload/v1615497491/Spinner-1.1s-200px_twy64j.gif" width="32px" height="32px" /></Center>;
  } else if(orders.length < 1) {
    return (
      <Center>
        <h2 className="text-3xl text-center">No records available</h2>
      </Center>
    );
  }

  

  return (
    <div>
      <Header>
        <h1 className="text-4xl">Dashboard</h1>
      </Header>
      <Container>
        <Table orders={orders} />
      </Container>
    </div>
  );
}

export default Dashboard;
