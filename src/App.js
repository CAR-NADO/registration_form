import React, { useState } from 'react';
import './App.css';

function App() {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    setUserRegistration({...userRegistration, [name]: value });
    
  }
  const [record, setRecord] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {...userRegistration, id: new Date() .getTime() .toString()};
    // console.log(record);
    setRecord([...record, newRecord]);
    setUserRegistration({username:"", email:"", phone:"", password:""});
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="registration_form">
          <div className="form_header">
            <h3>Registration Form:</h3>
          </div>

          <div className="form_name">
            <h5>Full Name:</h5>
            <input type="text"
              autoComplete='off'
              placeholder='Enter Your Name'
              name='username'
              value={userRegistration.username}
              onChange={handleInput} 
              id='a' />
          </div>

          <div className="email">
            <h5>Email:</h5>
            <input type="text"
              autoComplete='off'
              placeholder='Enter Your Email'
              name='email'
              value={userRegistration.email}
              onChange={handleInput} />
          </div>

          <div className="mobile_number">
            <h5>Mobile Number:</h5>
            <input type="text"
              autoComplete='off'
              placeholder='Mobile Number'
              name='phone'
              value={userRegistration.phone}
              onChange={handleInput} />
          </div>

          <div className="password">
            <h5>Password:</h5>
            <input type="password"
              autoComplete='off'
              placeholder='Password'
              name='password'
              value={userRegistration.password}
              onChange={handleInput} />
          </div>

          <div className="button">
            <button type='submit' onClick={handleSubmit} >Registration</button>
          </div>
        </div>
        <div className="result">
          {
            record.map((curElem) => {
              return (
              <div className='base'>
                <p>User_Name:-  {curElem.username}, </p>
                <p>Phone_No:-  {curElem.phone}, </p>
                <p>Email:-  {curElem.email}, </p>
                <p>Password:-  {curElem.password} </p>
              </div>
              )
            })
          }
        </div>
      </header>
    </div>
  );
}

export default App;
