import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";
import { db, auth } from "../../firebase";
import { useRouter } from "next/router";

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

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    if (email === "admin@splendidpackaging.com") {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          router.push("/admin");
        })
        .catch((error) => alert(error.message));
    } else {
      alert("You are not authorized to be here.");
      router.push("/login");
    }
  };

  return (
    <div>
      <Container>
        <Form>
          <div>
            <h2 className="text-2xl text-center text-blue-500 font-bold">
              Login
            </h2>
            <p className="text-xs text-center text-blue-400">
              please fill the form below to login
            </p>
          </div>

          <form onSubmit={onLogin}>
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
                type="password"
                label="Password"
                variant="outlined"
                size="small"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </div>
          </form>
        </Form>

        <p>
          Don't have an account yet?{" "}
          <a className="text-sm text-red-500 font-semibold" href="/register">
            Register
          </a>
        </p>
        <p className="text-xs text-blue-300 mt-1">
          <a href="#">Forgot password?</a>
        </p>
      </Container>
    </div>
  );
}

export default Login;
