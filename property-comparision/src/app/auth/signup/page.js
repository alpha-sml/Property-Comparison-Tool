'use client';
import Link from 'next/link';
import '../auth.css';

export default function SignupPage() {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form className="auth-form">
        <label>Full Name</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password</label>
        <input type="password" placeholder="Create a password" required />

        <button type="submit" className="auth-button">Create Account</button>

        <p className="auth-switch">
          Already have an account? <Link href="/auth/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
