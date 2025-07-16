'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, signInWithPopup, signInAnonymously, GoogleAuthProvider, } from 'firebase/auth';
import { auth } from '../../../firebase/config';
import '../auth.css';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const redirectAfterSignup = () => router.push('/listings');

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      redirectAfterSignup();
    } catch {
      setError('Failed to create account. Try again.');
    }
  };

  const handleGoogleSignup = async () => {
    setError('');
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      redirectAfterSignup();
    } catch {
      setError('Google sign-up failed. Try again.');
    }
  };

  const handleGuestSignup = async () => {
    setError('');
    try {
      await signInAnonymously(auth);
      redirectAfterSignup();
    } catch {
      setError('Guest sign-up failed. Try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form className="auth-form" onSubmit={handleSignup}>
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

        <button type="submit" className="auth-button">Create Account</button>

        <div className="auth-divider">OR</div>
        
        <button
          type="button"
          className="auth-button google-button"
          onClick={handleGoogleSignup}
        >
          Sign up with Google
        </button>



        <button
          type="button"
          className="auth-button guest-button"
          onClick={handleGuestSignup}
        >
          Continue as Guest
        </button>

        {error && <p className="auth-message">{error}</p>}

        <p className="auth-switch">
          Already have an account? <Link href="/auth/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
