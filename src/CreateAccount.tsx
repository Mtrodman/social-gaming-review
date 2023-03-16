import React from 'react'


export default function CreateAccount(){
    return(
            <div>
                <h2>Enter in your Login information</h2>
                    <form action="createaccount" method="POST">
                        <div>
                            <label htmlFor='username' id='username'>Username</label>
                            <input type="text" name='username' id="username"/>
                        </div>

                        <div>
                            <label htmlFor='password' id='password'>Password</label>
                            <input type="password" name='password' id="password"/>
                        </div>

                        <input type='submit' value="Submit"></input>
                    </form>
            </div>
    )
}

