import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const navigate = useNavigate();

    const handleValidation = (event) => {
        let formIsValid = true;
        if (!username.match(/^admin$/)) {
            formIsValid = false;
            setUsernameError("Username Not Valid");
            return false;
        } else {
            setUsernameError("");
            formIsValid = true;
        }

        if (!password.match(/^admin$/)) {
            formIsValid = false;
            setPasswordError(
                "Wrong Password"
            );
            return false;
        } else {
            setPasswordError("");
            formIsValid = true;
        }

        return formIsValid;
    };

    const redirectToHome = () => {
        sessionStorage.setItem('isLoggedIn', true);
        navigate('/alltabs');
    }
    const loginSubmit = (e) => {
        e.preventDefault();
        if (handleValidation() == true) {
            redirectToHome();
        }
    };

    return (
        <>
            <div className="row d-flex row justify-content-center">
                <div className="form-outline m-4 col-3 align-item-center">
                <h2 className="display-4">Login</h2>
                    <form id="loginform" onSubmit={loginSubmit}>
                        <hr></hr>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="usernameInput"
                                name="usernameInput"
                                aria-describedby="usernameHelp"
                                placeholder="Enter Username"
                                onChange={(event) => setUsername(event.target.value)}
                            />
                            <label className="form-label">Username</label><br />
                            <small id="usernameHelp" className="text-danger form-text">
                                {usernameError}
                            </small>
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <label className="form-label">Password</label><br />
                            <small id="passworderror" className="text-danger form-text">
                                {passwordError}
                            </small>
                        </div>
                        <button type="submit" className="form-control btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}
