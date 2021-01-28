import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TextField, MenuItem, Button } from "@material-ui/core";
import update from "immutability-helper";

const Container = styled.div`
  display: grid;
  place-items: center;
  padding: 4px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 250px;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;

  @media screen and (min-width: 480px) {
    width: 60vw;
    flex-direction: row;
    height: inherit;
  }
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

function Calculator() {
  const [country, setCountry] = useState("UK");
  const [total, setTotal] = useState(0);
  const [forms, setForms] = useState([
    {
      name: "",
      weight: 0,
    },
  ]);

  const ShippingFee = country === "UK" ? 10 : 8

  const addForm = () => {
    const data = {
      name: "",
      weight: 0,
    };
    setForms([...forms, data]);
  };

  const removeForm = (index) => {
    const newForms = [...forms];
    if (forms.length > 1) {
      newForms.splice(index, 1);
      setForms(newForms);
    }
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleChangeName = (index, e) => {
    const newForms = update(forms, {
      [index]: {
        name: {
          $set: e,
        },
      },
    });

    setForms(newForms);
  };

  const handleChangeWeight = (index, e) => {
    const newForms = update(forms, {
      [index]: {
        weight: {
          $set: e,
        },
      },
    });

    setForms(newForms);
  };

  const ShippingTotal = () =>
    setTotal(
      forms.reduce(
        (accum, item) => accum + parseInt(item.weight * 10),
        0
      )
    );

  return (
    <Container>
      <div className="text-center mb-4">
        <h2 className="text-2xl">Shipping Calculator</h2>
        <p className="text-xs">Enter your items to get a quote.</p>
      </div>
      <Content>
        <p>Please choose country you want to ship from -></p>
        <TextField
          id="standard-select-currency"
          select
          value={country}
          onChange={handleCountryChange}
        >
          {Countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Content>
      {forms.map((form, i) => (
        <Content key={form}>
          <TextField
            label="Item"
            type="text"
            variant="outlined"
            className="hover:border-none"
            value={form.name}
            onChange={(e) => handleChangeName(i, e.target.value)}
          />
          <TextField
            label="Weight"
            type="number"
            variant="outlined"
            value={form.weight}
            onChange={(e) => handleChangeWeight(i, e.target.value)}
          />
          <TextField
            disabled
            value={form.weight * ShippingFee}
            label="Price"
            type="number"
            variant="outlined"
          />
        </Content>
      ))}
      <Content className="text-red-600 text-3xl">
        <h2>
          Total: {country === "US" ? "$ " : "£ "}
          {total}
        </h2>
        <Button variant="contained" color="primary" onClick={ShippingTotal}>
          Get Total
        </Button>
      </Content>
      <Button variant="contained" color="primary" onClick={addForm}>
        Add New Item
      </Button>
    </Container>
  );
}

export default Calculator;
