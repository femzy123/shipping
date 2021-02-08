import React, {useState} from 'react';
import { TextField, MenuItem, Button, Select } from "@material-ui/core";
import styled from 'styled-components';
import update from "immutability-helper";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";


const ItemContainer = styled.div`
  padding: 0.5rem;
  border-radius: 4px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
  width: 100%;
`;


const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const Countries = [
  {
    value: "US",
    label: "United States of America",
  },
  {
    value: "UK",
    label: "United Kingdom",
  },
];

function Form({ close }) {
  const [country, setCountry] = useState("US");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("")
  const [items, setItems] = useState([
    {
      name: "",
      weight: 0
    }
  ])

   const handleChangeName = (index, e) => {
     const newItems = update(items, {
       [index]: {
         name: {
           $set: e,
         },
       },
     });

     setItems(newItems);
   };

   const handleChangeWeight = (index, e) => {
     const newItems = update(items, {
       [index]: {
         weight: {
           $set: e,
         },
       },
     });

     setItems(newItems);
   };

   const addForm = () => {
     const data = {
       name: "",
       weight: 0,
     };
     setItems([...items, data]);
   };

   const removeForm = (index) => {
     const newItems = [...items];
     if (items.length > 1) {
       newItems.splice(index, 1);
       setItems(newItems);
     }
   };

  return (
    <div>
      <h2 className="text-center lg:text-3xl text-xl mb-5 text-blue-800">
        Create a new shipping order
      </h2>
      <TextField
        fullWidth
        label="Shipping from"
        select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        {Countries.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
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

      <TextField
        disabled
        fullWidth
        label="Delivery Country"
        type="text"
        className="hover:border-none"
        value="Nigeria"
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      <br />

      <h4 className="text-sm">Add Items to be Shipped</h4>
      <ItemContainer className="mt-3">
        {items.map((item, i) => (
          <Content>
            <TextField
              label="Name"
              type="text"
              variant="outlined"
              value={item.name}
              onChange={(e) => handleChangeName(i, e.target.value)}
            />
            <TextField
              label="Weight"
              type="number"
              variant="outlined"
              value={item.weight}
              onChange={(e) => handleChangeWeight(i, e.target.value)}
            />
            <DeleteForeverIcon color="secondary" onClick={removeForm} />
          </Content>
        ))}
      </ItemContainer>
      <div className="mt-4 text-center text-sm pointer">
        <AddCircleOutlineIcon color="disabled" onClick={addForm} />{" "}
        <span className="text-gray-400">Add Item</span>
      </div>

      <div className="flex items-center justify-around mt-5">
        <Button variant="contained" color="secondary" onClick={close}>
          Close
        </Button>
        <Button variant="contained" color="primary">
          Create Shipping Order
        </Button>
      </div>
    </div>
  );
}

export default Form;
