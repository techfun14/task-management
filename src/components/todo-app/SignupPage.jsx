import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from './security/Authcontext';
import { AddUserApi } from './api/UserApiService';
import './SignUpPage.css';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    emailAddress: "",
    contactNumber: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const navigate = useNavigate();
  const authContext = useAuth();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full Name must be at least 2 characters";
    }

    // Username validation
    if (!formData.userName.trim()) {
      newErrors.userName = "Username is required";
    } else if (formData.userName.trim().length < 3) {
      newErrors.userName = "Username must be at least 3 characters";
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.userName)) {
      newErrors.userName = "Username can only contain letters, numbers, and underscores";
    }

    // Email validation
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
      newErrors.emailAddress = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Phone number is required";
    } else if (!/^\+?[\d\s-()]+$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Please enter a valid phone number";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically make an API call to register the user
      // For now, we'll simulate a successful registration
      const user = {
        fullName: formData.fullName,
        userName: formData.userName,
        emailAddress: formData.emailAddress,
        contactNumber: formData.contactNumber,
        password: formData.password
      };
      console.log('User registration data:', user);

      // Call the API to register the user
      await AddUserApi(user);

      // Navigate to login page after successful registration
      navigate('/login');
      
    } catch (error) {
      console.error('Registration failed:', error);
      setErrors({ submit: "Registration failed. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Google signup
  const handleGoogleSignup = () => {
    // Implement Google OAuth integration here
    console.log('Google signup clicked');
    // This would typically redirect to Google OAuth
  };

  // Navigate back to login
  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="SignUp">
      <div className="SignUpContainer">
        <h2>Create Account</h2>
        <p className="login-link">
          Already have an account?
          <button type="button" className="signin-btn-link" onClick={handleBackToLogin}>
            Sign In
          </button>
        </p>

        {errors.submit && <div className="error-msg">{errors.submit}</div>}

        <form className="form" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? 'error' : ''}
              required
            />
            {errors.fullName && <span className="field-error">{errors.fullName}</span>}
          </div>

          {/* Username Field */}
          <div className="form-group">
            <label htmlFor="userName">Username</label>
            <input
              id="userName"
              name="userName"
              type="text"
              placeholder="Choose a username"
              value={formData.userName}
              onChange={handleChange}
              className={errors.userName ? 'error' : ''}
              required
            />
            {errors.userName && <span className="field-error">{errors.userName}</span>}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="emailAddress">Email Address</label>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              placeholder="Enter your email"
              value={formData.emailAddress}
              onChange={handleChange}
              className={errors.emailAddress ? 'error' : ''}
              required
            />
            {errors.emailAddress && <span className="field-error">{errors.emailAddress}</span>}
          </div>

          {/* Phone Field */}
          <div className="form-group">
            <label htmlFor="contactNumber">Phone Number</label>
            <input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.contactNumber}
              onChange={handleChange}
              className={errors.contactNumber ? 'error' : ''}
              required
            />
            {errors.contactNumber && <span className="field-error">{errors.contactNumber}</span>}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'error' : ''}
                required
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? "Hide Password" : "Show Password"}
              >
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
            {errors.password && <span className="field-error">{errors.password}</span>}
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="password-input">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? 'error' : ''}
                required
              />
              <span
                className="eye-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                title={showConfirmPassword ? "Hide Password" : "Show Password"}
              >
                {showConfirmPassword ? '🙈' : '👁️'}
              </span>
            </div>
            {errors.confirmPassword && <span className="field-error">{errors.confirmPassword}</span>}
          </div>

          {/* Terms and Conditions */}
          <div className="terms-conditions">
            <label>
              <input type="checkbox" required />
              I agree to the <a href="#" className="terms-link">Terms of Service</a> and <a href="#" className="terms-link">Privacy Policy</a>
            </label>
          </div>

          <button 
            className="signup-btn" 
            type="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </button>

          <div className="divider"><span>or</span></div>

          <button 
            className="google-btn" 
            type="button" 
            onClick={handleGoogleSignup}
          >
            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" />
            Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );
}