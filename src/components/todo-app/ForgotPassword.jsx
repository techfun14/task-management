import { useState } from 'react';
import './ForgotPassword.css';

export default function ForgotPasswordPage() {
  const [contact, setContact] = useState('');
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSendOtp(e) {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setStep(2);
      setIsLoading(false);
    }, 900);
  }

  async function handleVerifyOtp(e) {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setStep(3);
      setIsLoading(false);
    }, 900);
  }

  async function handleResetPassword(e) {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setStep(4);
      setIsLoading(false);
    }, 900);
  }

  return (
    <div className="ForgotPassword">
      <div className="ForgotPasswordContainer">
        <h2>Forgot Password</h2>

        {step === 1 && (
          <form className="fp-form" onSubmit={handleSendOtp}>
            <label htmlFor="contact" className="fp-label">Email or Phone Number</label>
            <input
              id="contact"
              className="fp-input"
              type="text"
              placeholder="Enter registered email or phone"
              value={contact}
              onChange={e => setContact(e.target.value)}
              required
            />
            <button className="fp-btn" type="submit" disabled={isLoading}>
              {isLoading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        )}

        {step === 2 && (
          <form className="fp-form" onSubmit={handleVerifyOtp}>
            <label htmlFor="otp" className="fp-label">Enter OTP</label>
            <input
              id="otp"
              className="fp-input"
              type="text"
              placeholder="Enter OTP sent to your email/phone"
              value={otp}
              onChange={e => setOtp(e.target.value)}
              required
            />
            <button className="fp-btn" type="submit" disabled={isLoading}>
              {isLoading ? "Verifying..." : "Verify"}
            </button>
          </form>
        )}

        {step === 3 && (
          <form className="fp-form" onSubmit={handleResetPassword}>
            <label htmlFor="newPassword" className="fp-label">New Password</label>
            <input
              id="newPassword"
              className="fp-input"
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              required
            />
            <label htmlFor="confirmPassword" className="fp-label">Confirm Password</label>
            <input
              id="confirmPassword"
              className="fp-input"
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
            {error && <div className="fp-error-msg">{error}</div>}
            <button className="fp-btn" type="submit" disabled={isLoading}>
              {isLoading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}

        {step === 4 && (
          <div className="fp-form">
            <h3>Password has been reset!</h3>
            <p style={{ textAlign: 'center' }}>
              You may now <a href="/login" className="fp-link">sign in</a> with your new password.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
