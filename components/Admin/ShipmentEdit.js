import React, { useState } from "react";
import { TextField, Button, MenuItem } from "@material-ui/core";
import styled from "styled-components";
import { db } from "../../firebase";
import firebase from "firebase";

const Form = styled.div`
  overflow: auto;
`;

function ShipmentView({ close, order }) {
  const [name, setName] = useState(order.order.name);
  const [address, setAddress] = useState(order.order.deliveryAddress);
  const [state, setState] = useState(order.order.deliveryState);
  const [status, setStatus] = useState(order.order.status);

  const updateOrder = () => {
    db.collection("shippingOrders").doc(order.id).set(
      {
        name: name,
        deliveryAddress: address,
        deliveryState: state,
        status: status,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    close();
  };

  const statuses = [
    {
      value: "Processing",
      label: "Processing",
    },
    {
      value: "Shipped",
      label: "Shipped",
    },
    {
      value: "In Transit",
      label: "In Transit",
    },
    {
      value: "Delivered",
      label: "Delivered",
    },
  ];

  return (
    <div>
      <Form>
        <h2 className="text-center lg:text-3xl text-xl mb-5 text-blue-800">
          Edit shipping order
        </h2>
        <form onSubmit={updateOrder}>
          <TextField
            fullWidth
            label="Shipping from"
            select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {statuses.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <br />
          <TextField
            label="Name"
            fullWidth
            type="text"
            className="hover:border-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />

          <TextField
            label="Delivery Address"
            fullWidth
            type="text"
            className="hover:border-none"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <br />
          <br />
          <TextField
            label="Delivery State"
            fullWidth
            type="text"
            className="hover:border-none"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <br />
          <br />
          <div className="flex items-center justify-around mt-5">
            <Button variant="contained" color="secondary" onClick={close}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Update Order
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default ShipmentView;
