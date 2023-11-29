import React, { useState } from 'react';
import { auth, googleProvider, githubProvider } from '../../firebase.js';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
    const [input, setInput] = useState({
        email: '',
        password: '',
        name: '',
        lastName: '',
    });
    console.log(input)
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, input.email, input.password);
            const user = userCredential.user;
            const userData = {
                userId: user.uid,
                email: user.email,
                name: input.name,
                lastname: input.lastName
            };
            localStorage.setItem('user', JSON.stringify(userData));
            console.log('User Created!', userData);
        } catch (error) {
            console.error('Error al registrarse:', error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.name || !input.lastName || !input.email || !input.password) {
            alert('Complete all the inputs');
            return;
        } else {
            alert('User Created!');
            setInput({
                name: '',
                lastName: '',
                email: '',
                password: '',
            });
            navigate('/')
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="form-floating mb-3">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Name..."
                        onChange={(e) => setInput({ ...input, name: e.target.value })}
                        value={input.name}
                        name='name'
                    />
                    <label for="floatingName">Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Lastname..."
                        onChange={(e) => setInput({ ...input, lastName: e.target.value })}
                        value={input.lastName}
                        name='lastName'
                    />
                    <label for="floatingLastname">Lastname</label>
                </div>
                <div class="form-floating mb-3">
                    <input
                        type="email"
                        class="form-control"
                        placeholder="name@example.com"
                        onChange={(e) => setInput({ ...input, email: e.target.value })}
                        value={input.email}
                        name='email'
                    />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        onChange={(e) => setInput({ ...input, password: e.target.value })}
                        value={input.password}
                        name='password'
                    />
                    <label for="floatingPassword">Password</label>
                </div>
                <button type="submit" onClick={handleSignUp}>
                    Sign In
                </button>
            </form>
        </div>
    )
}
