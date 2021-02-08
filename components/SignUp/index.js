import React, { useState } from "react";
import { TextField, MenuItem, Button, FormControl } from "@material-ui/core";
import styled from "styled-components";
import { db, auth } from "../../firebase";
import { useRouter } from "next/router";

const Container = styled.div`
  display: grid;
  place-items: center;
  max-height: 100%;
`;

const Form = styled.div`
  border: 1px solid gray;
  padding: 20px;
  border-radius: 4px;
  max-width: 80%;
`;

function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmed, setConfirmed] = useState("");


  const Register = (e) => {
    e.preventDefault();
    if (password === confirmed) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          return userCredential.user.updateProfile({
            displayName: name,
            phoneNumber: phone,
          });
        })
        .then(router.push("/"))
        .catch((error) => alert(error.message));
    } else {
      alert("Password do not match!")
    }

    
  }

  return (
    <Container>
      <Form>
        <div>
          <h2 className="text-2xl text-center text-blue-500 font-bold">
            Register
          </h2>
          <p className="text-xs text-center text-blue-400">
            please fill the form below to be able to ship items
          </p>
        </div>

        <form onSubmit={Register}>
          <div className="mt-4">
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              size="small"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <TextField
              fullWidth
              type="number"
              label="Phone"
              variant="outlined"
              size="small"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <TextField
              fullWidth
              type="password"
              label="Password"
              variant="outlined"
              size="small"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <TextField
              fullWidth
              type="password"
              label="Confirm Password"
              variant="outlined"
              size="small"
              value={confirmed}
              onChange={(e) => setConfirmed(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
            >
              Register
            </Button>
          </div>
        </form>
      </Form>

      <p>
        Already registered{" "}
        <a className="text-sm text-red-500 font-semibold" href="/login">
          Sign in
        </a>
      </p>
    </Container>
  );
}

export default SignUp;
