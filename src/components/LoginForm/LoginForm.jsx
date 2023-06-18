// import { useState } from 'react';
// import { LogInForm, FormLabel, FormInput, FormBtn } from './LoginForm.styled';
// import { loginThunk } from '../../redux/auth/auth-thunk';
// import { useDispatch } from 'react-redux';

const LoginForm = () => {
  // const dispatch = useDispatch();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChange = ({ target: { name, value } }) => {
  //     switch (name) {
  //         case 'email':
  //             return setEmail(value);
  //         case 'password':
  //             return setPassword(value);
  //         default:
  //             return;
  //     }
  // };

  // const handleSubmit = e => {
  //     e.preventDefault();
  //     dispatch(loginThunk({ email, password }));

  //     resetForm();
  // };

  // const resetForm = () => {
  //     setEmail('');
  //     setPassword('');
  // };

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;
