import React from 'react';
import Table from './Table'
import styled from 'styled-components'

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
  return (
    <div>
      <Header>
        <h1 className="text-4xl">Dashboard</h1>
      </Header>
      <Container>
        <Table />
      </Container>
    </div>
  );
}

export default Dashboard;
