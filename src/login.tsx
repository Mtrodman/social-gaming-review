import React from "react";

export default async function Login(){
return(
                <div className="col">
                    <h2 className='loginHeader'>Enter in your Login information</h2>
                    <form action='logincheck' method="POST"> 
                        <div className="row">
                        <label className="form-label" htmlFor='username' id='username'>Username</label>
                        <input className="form-constrol-sm" type="text" name='username' id="password"/>
                        </div>
                        <div className="row">
                        <label className="form-label" htmlFor='password' id='password'>Password</label>
                        <input className="form-constrol-sm" type="password" name='password' id="password"/>
                        </div>
                        <div className="row">
                        <input className="btn btn-primary" type='submit' value="Log in"></input>
                        </div>
                    </form>
                </div>
)
}


