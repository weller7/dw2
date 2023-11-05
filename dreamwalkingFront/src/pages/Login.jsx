import React from "react";

const Login = () => {

    return (
        <>
            <section className="login" >
            <input type="text" placeholder="Username" className="input input-bordered input-primary w-full max-w-xs" />
            <input type="text" placeholder="Password" className="input input-bordered input-primary w-full max-w-xs" />
            <button className="btn btn-secondary">Login</button>
            </section>
        </>
    )

}

export default Login