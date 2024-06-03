// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useForm } from 'react-hook-form';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    alert('Registration successful!');
    console.log(data);
  };

  const password = watch('password');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          {...register('name', {
            required: 'Please enter your name!',
            minLength: {
              value: 3,
              message: 'Name must be at least 3 characters long'
            },
            maxLength: {
              value: 30,
              message: 'Name must be less than 30 characters long'
            }
          })}
        />
        {errors.name && <span className="error">{errors.name.message}</span>}
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          {...register('email', {
            required: 'Please enter your email!',
            pattern: {
              value: /^[^@]+@[^@]+\.[^@]+$/,
              message: 'Invalid email'
            }
          })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          {...register('password', {
            required: 'Please enter your password!',
            minLength: {
              value: 10,
              message: 'Password must be at least 10 characters long'
            },
            pattern: {
              value: /[!@#$%^&*(),.?":{}|<>]/,
              message: 'Password must include at least one special character'
            }
          })}
        />
        {errors.password && <span className="error">{errors.password.message}</span>}
      </div>
      <div>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Repeat your password"
          {...register('confirmPassword', {
            required: 'Please repeat your password!',
            validate: value =>
              value === password || 'Passwords do not match'
          })}
        />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword.message}</span>}
      </div>
      <div>
        <input type="checkbox" name="terms" {...register('terms', { required: 'You must agree to the terms' })} />
        <label>I agree all statements in <a href="#">Terms of service</a></label>
        {errors.terms && <span className="error">{errors.terms.message}</span>}
      </div>
      <button type="submit" disabled={Object.keys(errors).length > 0}>Sign Up</button>
      <p>Already have an account? <a href="#">Login Here</a></p>
    </form>
  );
};

export default RegistrationForm;
