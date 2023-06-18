// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { registerThunk } from 'redux/auth/auth-thunk';

import { Link } from 'react-router-dom';

// import {
//     RegForm,
//     FormLabel,
//     FormInput,
//     FormBtn,
//     // BtnBox,
//     AlreadyRegisteredLink,
// } from './RegisterForm.styled';

const RegisterForm = () => {
  // const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChange = ({ target: { name, value } }) => {
  //     switch (name) {
  //         case 'name':
  //             return setName(value);
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
  //     dispatch(registerThunk({ name, email, password }));

  //     resetForm();
  // };

  // const resetForm = () => {
  //     setName('');
  //     setEmail('');
  //     setPassword('');
  // };

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

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
        {/* <BtnBox> */}
        <button type="submit">Sing up</button>
        <Link to="/login">Already registered?</Link>
        {/* </BtnBox> */}
      </form>
    </div>
  );
};

export default RegisterForm;
