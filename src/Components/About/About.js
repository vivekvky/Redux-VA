import React, { useState } from 'react';
import * as CryptoJS from 'crypto-js';

export default function About() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

  const encryptAES = (text, key) => {
    return CryptoJS.AES.encrypt(text, key).toString();
  };

  const submit = () => {
    console.log(encryptAES(fname, '123'));
    console.log(encryptAES(lname, '123'));
    fetch('/', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: encryptAES(fname, '123'),
        last_name: encryptAES(lname, '123')
      })
    });
    reset();
  };

  const reset = () => {
    alert('data encryption succesfull, check the log');
    setFname('');
    setLname('');
  };

  return (
    <div className="main-div">
      <div className="container-width">
        First Name:
        <input
          className="input-control marg"
          type="text"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
      </div>
      <div className="container-width">
        Last Name:
        <input
          className="input-control marg"
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
      </div>
      <div className="container-width">
        <button className="button-prm" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
}
