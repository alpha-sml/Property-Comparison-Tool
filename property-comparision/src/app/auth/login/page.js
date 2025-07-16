'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword, signInWithPopup, signInAnonymously, GoogleAuthProvider, } from 'firebase/auth';
import { auth } from '../../../firebase/config';
import '../auth.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const redirectAfterLogin = () => router.push('/listings');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      redirectAfterLogin();
    } catch {
      setError('Invalid email or password.');
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      redirectAfterLogin();
    } catch {
      setError('Google login failed. Try again.');
    }
  };

  const handleGuestLogin = async () => {
    setError('');
    try {
      await signInAnonymously(auth);
      redirectAfterLogin();
    } catch {
      setError('Guest login failed. Try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="auth-button">Login</button>

        <div className="auth-divider">OR</div>

        <button
          type="button"
          className="auth-button google-button"
          onClick={handleGoogleLogin}
        >
          Login with Google
        </button>


        <button
          type="button"
          className="auth-button guest-button"
          onClick={handleGuestLogin}
        >
          Continue as Guest
        </button>

        {error && <p className="auth-message">{error}</p>}

        <p className="auth-switch">
          Don't have an account? <Link href="/auth/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}
