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
  padding: 20px;
  margin-top: 20px;

  @media screen and (min-width: 480px) {
    width: 800px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const Logo = styled("img")`
  width: 150px;
  height: 60px;
`;

function ShipmentView({ close, order }) {
  const { currentUser } = useAuth();
  console.log(order);
  const componentRef = useRef();

  return (
    <div>
      <div className="text-right">
        <ReactToPrint
          trigger={() => (
            <Button size="small" variant="contained" color="primary">
              Print Invoice
            </Button>
          )}
          content={() => componentRef.current}
        />
      </div>

      <Container ref={componentRef}>
        <div className="flex justify-between">
          <Logo src="https://splendidpackaging.com/wp-content/uploads/2020/02/WhatsApp-Image-2017-11-20-at-23.56.32-300x112.jpeg" />
          <div>
            <Barcode
              value={order.order.trackingNumber}
              width="1"
              height="50"
              fontSize={14}
            />
          </div>
        </div>

        <hr className="bg-gray-600 h-0.5" />

        <div>
          <h2 className="text-xl font-semibold mt-4">Shipping Details</h2>
          <ul className="text-xs">
            <li>
              Tracking Number:{" "}
              <span className="font-semibold">
                {order.order.trackingNumber}
              </span>
            </li>
            <li>
              Name:{" "}
              <span className="font-semibold">{currentUser.displayName}</span>
            </li>
            <li>
              Email: <span className="font-semibold">{currentUser.email}</span>
            </li>
            <li>
              Delivery Address:{" "}
              <span className="font-semibold">
                {order.order.deliveryAddress +
                  ", " +
                  order.order.deliveryState +
                  ", " +
                  "Nigeria."}
              </span>
            </li>
          </ul>
        </div>

        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mt-10 mb-8">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-900 text-white text-center">
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Items
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
              >
                Weight
              </th>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {order.order.items.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {item.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {item.weight}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold">Total: ${order.order.total} </h3>
      </Container>

      <div className="flex items-center justify-around mt-5">
        <Button variant="contained" color="secondary" onClick={close}>
          Close
        </Button>
      </div>
    </div>
  );
}

export default ShipmentView;
