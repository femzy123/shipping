import React, { useState } from "react";
// import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase";
import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
`;

const Form = styled.div`
  border: 1px solid gray;
  padding: 20px;
  border-radius: 4px;
  max-width: 80%;
`;

function forgotPassword() {
  const [email, setEmail] = useState("");

  const reset = (e) => {
    e.preventDefault();

    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Check your email for a link to reset your password")
      })
      .catch((error) => {
        alert(error.message);
      });

    setEmail("");
  }

  return (
    <div>
      <Container>
        <Form>
          <div>
            <h2 className="text-2xl text-center text-blue-500 font-bold">
              Forgot Password
            </h2>
            <p className="text-xs text-center text-blue-400">
              please fill the form below to reset password
            </p>
          </div>

          <form onSubmit={reset}>
            <div className="mt-4">
              <TextField
                type="email"
                fullWidth
                label="Email"
                variant="outlined"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >Reset passwword</Button>
            </div>
          </form>
        </Form>
        <p className="text-xs text-center text-blue-300 mt-2">
          <a href="/login">Back</a>
        </p>
      </Container>
    </div>
  );
}

export default forgotPassword;
