import React, { useState } from 'react';
import { auth, googleProvider, githubProvider } from '../../firebase.js';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../style/Signin.module.css';
import { SiGmail } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

export const SignIn = () => {
    const [input, setInput] = useState({
        email: '',
        password: '',
        name: '',
        lastName: '',
    });
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
            if (input.password.length < 6) {
                alert('The password must be at least 6 characters.');
            } else {
                const userCredential = await createUserWithEmailAndPassword(auth, input.email, input.password);
                const user = userCredential.user;
                const userData = {
                    userId: user.uid,
                    email: user.email,
                    name: input.name,
                    lastname: input.lastName
                };
                alert('Registered user successfully!');
                localStorage.setItem('user', JSON.stringify(userData));
                localStorage.setItem('isLoggedIn', 'true');
                navigate('/');
            }
        } catch (error) {
            if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                alert('That email already exists')
            } else {
                alert(error.message);
            }
        }
    }

    const handleSignInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            localStorage.setItem('user', JSON.stringify({ userId: user.uid, email: user.email }));
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/')
        } catch (error) {
            console.error('Error logging in with Google:', error.message);
        }
    };

    const handleSignInWithGithub = async () => {
        try {
            const result = await signInWithPopup(auth, githubProvider);
            const user = result.user;
            localStorage.setItem('user', JSON.stringify({ userId: user.uid, email: user.email }));
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/')
        } catch (error) {
            console.error('Error logging in with GitHub:', error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignUp();
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.containerForm}>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name..."
                        onChange={(e) => setInput({ ...input, name: e.target.value })}
                        value={input.name}
                        name='name'
                    />
                    <label for="floatingName">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Lastname..."
                        onChange={(e) => setInput({ ...input, lastName: e.target.value })}
                        value={input.lastName}
                        name='lastName'
                    />
                    <label for="floatingLastname">Lastname</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="name@example.com"
                        onChange={(e) => setInput({ ...input, email: e.target.value })}
                        value={input.email}
                        name='email'
                    />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={(e) => setInput({ ...input, password: e.target.value })}
                        value={input.password}
                        name='password'
                    />
                    <label for="floatingPassword">Password</label>
                </div>
                <button type="submit" className={styles.btn1}>
                    Sign In
                </button>
            </form>
            <button onClick={handleSignInWithGoogle} className={styles.btn2}><SiGmail /> Sign In with Google</button>
            <button onClick={handleSignInWithGithub} className={styles.btn3}><BsGithub /> Sign In with GitHub</button>
            <p>Allready have an acount? <Link to="/login" className={styles.login}>Login now!</Link></p>
        </div>
    )
}
