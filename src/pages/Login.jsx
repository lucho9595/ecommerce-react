import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <form>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
            <button>
                Login
            </button>
            <Link to='/signin'>
                <p>New user? Create account!</p>
            </Link>
        </form>
    )
}
