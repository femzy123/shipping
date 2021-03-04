import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Form from "./NewShipment";
import ShipmentView from "./ShipmentView";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Modal from "../../ui/Modal";

const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: theme.spacing(2, 2, 3),
  },
}));

function Table({ orders, fetchData }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState("");

  const close = () => setOpen(false);
  const closeView = () => setOpenView(false);

  console.log(orders);

  const view = (order) => {
    setSelectedOrder(order);
    setOpenView(true);
  };

  return (
    <>
      <div>
        <TopMenu className="mb-4">
          <h2 className="text-2xl">Your Orders</h2>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
            New Shipment
          </Button>
        </TopMenu>
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Track Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      From
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Destination
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div
                              className="text-sm font-medium text-gray-900"
                            >
                              {order.order.trackingNumber}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.order.shippingFrom}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {order.order.deliveryAddress +
                          ", " +
                          order.order.deliveryState}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {order.order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <VisibilityIcon
                          color="primary"
                          className="cursor-pointer"
                          onClick={() => view(order)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal
        showModal={open}
        setShowModal={setOpen}
        // onClose={(e) => setOpen(false)}
        // className={classes.modal}
      >
        <div>
          <Form close={close} fetchData={fetchData} />
        </div>
      </Modal>

      <Modal showModal={openView} setShowModal={setOpenView}>
        <div>
          <ShipmentView
            close={() => setOpenView(false)}
            order={selectedOrder}
          />
        </div>
      </Modal>
    </>
  );
}

export default Table;
