import React from "react";
// todo
export default function Login() {
    return (
        <div className="container">
            <form className="px-4 py-3">
                <div className="form-group">
                    <label htmlFor="exampleDropdownFormEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleDropdownFormEmail1"
                           placeholder="email@example.com"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleDropdownFormPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleDropdownFormPassword1"
                           placeholder="Password"/>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
                        <label className="form-check-label" htmlFor="dropdownCheck">
                            Remember me
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
            <div className="border-top my-3"></div>
            <a href="#">New around here? Register</a>
        </div>
    );
}