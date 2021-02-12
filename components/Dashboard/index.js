import React from "react";
import Table from "./Table";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/router";

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

function Dashboard() {
  const { currentUser } = useAuth();
  const router = useRouter();

  return (
    <div>
      <Header>
        <h1 className="text-4xl">Dashboard</h1>
      </Header>
      <Container>
        {currentUser ? (
          <Table />
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
