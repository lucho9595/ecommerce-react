import React from 'react'

export const SignIn = () => {
    return (
        <div>
            <form>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingName" placeholder="Name..." />
                    <label for="floatingName">Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingLastname" placeholder="Lastname..." />
                    <label for="floatingLastname">Lastname</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
                <button>
                    Sign In
                </button>
            </form>
        </div>
    )
}
