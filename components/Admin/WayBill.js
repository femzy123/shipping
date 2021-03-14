import React, { useState, useRef } from "react";
import { TextField, MenuItem, Button, Select } from "@material-ui/core";
import styled from "styled-components";
import Barcode from "react-barcode";
import { SpaceBarTwoTone } from "@material-ui/icons";
import { useAuth } from "../../contexts/AuthContext";
import ReactToPrint from "react-to-print";

const Form = styled.div`
  overflow: auto;
`;

const Container = styled.div`
  width: 100%;
  max-height: 90vh;
  padding: 10px;
  margin-top: 20px;

  @media screen and (min-width: 480px) {
    width: 800px;
  }
`;

const Content = styled.div`
  margin-bottom: 15px;
  border: 2px solid #000;
  /* padding: 10px; */
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled("img")`
  width: 150px;
  height: 60px;
`;

function WayBill({ close, order }) {
  const { currentUser } = useAuth();
  console.log(order);
  const componentRef = useRef();

  const wayBillType = ["Accounts", "Consignee", "Shippers"];

  return (
    <div>
      <div className="text-right">
        <ReactToPrint
          trigger={() => (
            <Button size="small" variant="contained" color="primary">
              Print WayBill
            </Button>
          )}
          content={() => componentRef.current}
        />
      </div>

      <Container ref={componentRef}>
        {wayBillType.map((item) => (
          <Content>
            <Row className="border-bottom border-gray-800 p-4">
              <Logo src="https://splendidpackaging.com/wp-content/uploads/2020/02/WhatsApp-Image-2017-11-20-at-23.56.32-300x112.jpeg" />
              <div className="border border-gray-800">
                <Barcode
                  value={order.order.trackingNumber}
                  width="2"
                  height="50"
                  fontSize={14}
                />
                <p className="text-center">{item} Copy</p>
              </div>
              <div>
                <p>
                  Origin: <strong>{order.order.shippingFrom}</strong>
                </p>
                <p>
                  Destination: <strong>Nigeria</strong>
                </p>
              </div>
            </Row>
            <hr className="bg-gray-800" />
            <Row className="p-2">
              <div>
                <p>Shipper:</p>
              </div>
              <div>
                <p>
                  Consignee: <strong>{order.order.name}</strong>
                </p>
              </div>
              <div>
                <p>
                  Status: <strong>{order.order.status}</strong>
                </p>
              </div>
            </Row>
            <hr className="bg-gray-800" />
            <Row className="p-2">
              <div>
                <p>Address: </p>
                <p>
                  {order.order.deliveryAddress +
                    ", " +
                    order.order.deliveryState +
                    ", " +
                    "Nigeria."}
                </p>
              </div>
            </Row>
            <hr className="bg-gray-800" />
            <Row className="p-2">
              <div>
                <p>Type of Shipment: </p>
                <p>International Shipping</p>
              </div>
              <div>
                <p>
                  Packages: <strong>{order.order.items.length}</strong>
                </p>
              </div>
              <div>
                <p className="mr-20">Weight:</p>
              </div>
              <div>
                <p className="mr-20">Mode:</p>
              </div>
            </Row>
          </Content>
        ))}
      </Container>
    </div>
  );
}

export default WayBill;
