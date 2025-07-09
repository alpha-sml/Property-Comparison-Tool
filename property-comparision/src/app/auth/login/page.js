'use client';
import Link from 'next/link';
import '../auth.css';

export default function LoginPage() {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" required />

        <button type="submit" className="auth-button">Login</button>

        <p className="auth-switch">
          Don't have an account? <Link href="/auth/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}
