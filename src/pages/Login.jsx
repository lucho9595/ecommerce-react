import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, githubProvider } from '../../firebase.js';
import { useNavigate } from 'react-router-dom';
import styles from '../style/Login.module.css';
import { SiGmail } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

export const Login = () => {
    const [input, setInput] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            if (input.password < 6) {
                alert('The password must be at least 6 characters.');
            } else {
                const userCredential = await signInWithEmailAndPassword(auth, input.email, input.password);
                const user = userCredential.user;
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('isLoggedIn', 'true');
                alert('Login user successfully!');
                navigate('/');
            }
        } catch (error) {
            if (error.message === 'Firebase: Error (auth/invalid-credential).') {
                alert('The password or email does not exist, try again')
            } else {
                console.error(error.message);
            }
        }
    }


    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            localStorage.setItem('user', JSON.stringify({ userId: user.uid, email: user.email }));
            localStorage.setItem('isLoggedIn', 'true');
            console.log('Usuario autenticado con Google:', user);
            alert('Login user successfully!');
            navigate('/');
        } catch (error) {
            console.error('Error al iniciar sesión con Google:', error.message);
        }
    };

    const handleGitHubLogin = async () => {
        try {
            const result = await signInWithPopup(auth, githubProvider);
            const user = result.user;
            localStorage.setItem('user', JSON.stringify({ userId: user.uid, email: user.email }));
            localStorage.setItem('isLoggedIn', 'true');
            console.log('Usuario autenticado con GitHub:', user);
            alert('Login user successfully!');
            navigate('/');
        } catch (error) {
            console.error('Error al iniciar sesión con GitHub:', error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin()
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.containerForm}>
                <h3 className="mb-3">Login</h3>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={(e) => setInput({ ...input, email: e.target.value })}
                        value={input.email}
                        name='email'
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={(e) => setInput({ ...input, password: e.target.value })}
                        value={input.password}
                        name='password'
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div>
                    <button type='submit' className={styles.btn1}>    Login   </button>
                </div>
            </form>
            <button onClick={handleGoogleLogin} className={styles.btn2}><SiGmail /> Login with Google</button>
            <button onClick={handleGitHubLogin} className={styles.btn3}><BsGithub /> Login with GitHub</button>
            <p>New user? <Link to="/signin" className={styles.login}>Create account!</Link></p>
        </div>
    );
};