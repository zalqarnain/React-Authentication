import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { Button, TextField } from "@mui/material";


function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000/", {
                email,
                password,
            });

            if (res.data === "exist") {
                history("/home", { state: { id: email } });
            } else if (res.data === "notexist") {
                alert("User has not signed up");
            }
        } catch (error) {
            alert("Wrong details");
            console.error(error);
        }

    }


    return (
        <div className="login">

            <h1>Login</h1>

            {/* <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input type="submit" onClick={submit} />

            </form> */}

            <form onSubmit={submit}>
                <TextField
                    type="email"
                    label="Email"
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    type="password"
                    label="Password"
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signup">Signup Page</Link>

        </div>
    )
}

export default Login